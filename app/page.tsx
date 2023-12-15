"use client";
import { ChangeEvent, useEffect, useState } from "react";
import ParticipantCard from "./components/Card";
import styles from "./page.module.css";
import Loading from "./components/Loading";
import { Participant } from "./api/participants/route";

export default function Home() {
  const [participant, setParticipant] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const throttle = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ) => {
    let lastCall = 0;
    return function (...args: Parameters<T>) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      func(...args);
    };
  };

  const throttledFetchData = throttle(async () => {
    try {
      setIsLoading(true);

      const id = participant || "";
      const response = await fetch(`/api/participants/${id}`, {
        headers: {
          method: "GET",
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setResults(data);
    } catch (error) {
      console.error(error);
      setError("Error retrieving data");
    } finally {
      setIsLoading(false);
    }
  }, 400);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const participant_id = event.target.value;
    setParticipant(participant_id);
  };

  useEffect(() => {
    throttledFetchData();
  }, [participant]);

  return (
    <main>
      <div style={{ minWidth: "1200px" }}>
        <h1>Participant Search</h1>
        <div
          style={{
            alignItems: "center",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <input
            style={{
              padding: "4px",
              borderRadius: "24",
              width: "60%",
              alignItems: "center",
            }}
            type="text"
            value={participant}
            onChange={handleInputChange}
            placeholder="Enter attribute or participant ID"
          />

          <button
            style={{ marginLeft: "20px", padding: "4px", borderRadius: "24" }}
            onClick={throttledFetchData}
          >
            Search
          </button>
        </div>

        {error != null && (
          <div className={styles.container}>
            <p className={styles.h2}>{error}</p>
          </div>
        )}

        {isLoading && <Loading />}

        {Array.isArray(results) && results.length > 0 ? (
          <div className={styles.grid}>
            {results.map((participant) => (
              <ParticipantCard
                key={participant.id}
                participantId={participant.id}
                participantNumber={participant.participant_id}
                firstName={participant.first_name}
                lastName={participant.last_name}
                state={participant.state}
                zip={participant.zip}
                address={participant.address}
                city={participant.city}
                email={participant.email}
              />
            ))}
          </div>
        ) : (
          <div>
            <p className={styles.h2}>No results</p>
          </div>
        )}
      </div>
    </main>
  );
}

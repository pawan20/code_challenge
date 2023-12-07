## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
# NEXT/REACT - TS Challenge

An array of sample data can be reached on the server with a GET to /data

A business user wants to see a very simple front-end display for all participants that have a specific attribute, or all attributes for one specific participant. If the user gives a single attribute, the front-end should display a list of all participants and their details for any participant that has that attribute. The user should also be able to search through that list by typing specific details into a search box. If the user gives a single participant identifier, all information for just that participant should be displayed.

Using the NextJS API routes, create routes to return the 2 types of queries above. Then, use them to serve your implementation of the front-end.

Requirements:

- Create the routes to serve the details according to specs:
	- Get by participant_id
	- Get by an attribute (e.g. First Name = Mike)
- Create a front end to visualize the data

A search box (fuzzy) to give me a list of participants based on either the participant id, first name, last name, city as I type it in (search-ahead)
The returned list should show the participant number, state, last name and first name with a “detail” collapsible that shows the full record in an easy-to-read format

Instructions:

- Fork this repository
- Push your code to your new forked repo
- Let us know the name of your new repo

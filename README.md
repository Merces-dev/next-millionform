Here's an improved version of your instructions with more clarity and formatting:

## Project Setup and Execution

### Install Dependencies

Before running the project, ensure you have all necessary dependencies installed. You can do this by running:

```bash
pnpm install
```

### Start the Development Server

To start the development server, use the following command:

```bash
pnpm run dev
```

### Generate Mock Data

To generate mock user data, run the following Python script:

```bash
python .\users-mock-create.py
```

### Start the API

Once the mock data is generated, you can start the API server using:

```bash
npx json-server mock/users.json
```

This will serve the mock data on a local server.

---

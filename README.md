# Wassenburg Assignment Frontend
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

The frontend is based on React.js
So before you want to start using the small project you need to install node js on your pc/laptop
You can install Node.js from [this link](https://nodejs.org/en/download/)

## Running the project
To run this project please follow these commands in terminal
```sh
cd root_folder_of_project
npm i
npm start
```

The above commands will start the frontend server.

you can access the server on
```sh
127.0.0.1:3000
```

Before you start the frontend server please confirm that what backend you are using. See the code snipped below
```js
const getList = async () => {
   // const response = await Axios.get("http://157.245.253.70:3000/test");
   const response = await Axios.get("http://localhost:3001/getData");

    if (response) {
      console.log(response.data)

      setResponseData(response.data)
      machineDataApiResponse = response.data.map((m) => {

        return (
          <button
            onClick={() => displyIndividualData(m)}
            style={{ margin: "20px" }}
          >
            {m.Process}
          </button>
        );
      });
      setApiResponse(machineDataApiResponse);
    }
  };
```
> Note: Must run `npm i` command to install dependencies.

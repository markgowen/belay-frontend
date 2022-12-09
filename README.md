# Belay

Belay is a single application focused on helping climbers discover new and exciting routes around the world.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install belay.

```jsk
npm install 
```

## GET

```jsx
http://localhost:3000/climbs
```

Request a list of all of the climbs in the database

## POST

```jsx
http://localhost:3000/climbs
```

Posts a new route to the database

```jsx
http://localhost:3000/climbs/${climb.id}
```

Posts a new review associated with a certain route

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

NONE
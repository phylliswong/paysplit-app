# Paysplit Web Client
Split payments!

## Install this thing

You'll want to clone this repo. Once you've done that, give it one of these bad boys:

---

**Note**: If you do not have Yarn installed on your computer you'll need it. Install it here:

https://yarnpkg.com/en/docs/install#mac-stable

```
yarn
```

This will install all of the dependencies you'll need.

---

yarn is a package manager that a lot of frontend devs like because of it's speed.

---

## Not done yet

Let's get our npm packages too.

```
npm install && npm install -d
```  

---

Now we need to install the client dependencies:

## Client setup

Get into the client directory:

```
cd client
```

Now do this:

```
yarn
```

then this:

```
npm install
```

---

Almost done, now let's add the .env file to our client:

```
touch .env
```

Put this line of code into that file:

```
SKIP_PREFLIGHT_CHECK=true
```

---

Awesome. Now let's navigate out of our folder.

```
cd ..
```

Once you've installed all the dependencies, you can launch the app to your local server with:

```
yarn dev
```

And away you go!

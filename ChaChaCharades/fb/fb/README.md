# Cha-Cha-Charades on Firebase

Menu: type a room code to play a friend, press "Random player" to be matched with whoever is waiting,
or fight the bot. Rooms hold 2 players for now.

## 1. Firebase console setup (console.firebase.google.com)
Menu names move around a lot. If a label below differs, use the console's search or look for the product name.
1. Create a project (Analytics not needed). Stay on the free Spark plan. Do NOT link a billing account (that upgrades you to Blaze).
2. Open **Realtime Database** (under "Databases & Storage" in the left menu) > **Create database**. Pick a location. Choose **Locked mode**.
3. In the database's **Rules** tab, replace everything with the contents of `database.rules.json` and press **Publish**.
4. Open **Authentication** > Get started > **Sign-in method** > turn on **Anonymous** > Save.
5. Project settings (gear icon) > Your apps > add a **Web** app (</>) and copy its config into `public/firebase-config.js`.
   Create the database BEFORE this step so the config includes `databaseURL`. If you did it the other way round, open the
   web app's settings and copy the config again.

## 2. Put it online (pick ONE, no npm needed for the first)
**A. GitHub Pages (no npm, no command line)**
1. New GitHub repository. Upload `public/index.html` and `public/firebase-config.js` to the top level.
2. Repository Settings > Pages > deploy from branch `main`, folder `/ (root)`.
3. Firebase console > Authentication > Settings > **Authorized domains** > add `yourname.github.io`.

**B. Firebase Hosting (needs npm once)**
    npm install -g firebase-tools
    firebase login
    firebase use YOUR_PROJECT_ID
    firebase deploy --only hosting
(`firebase deploy --only hosting,database` also pushes the rules file.)

## Good to know
- Free Spark plan: 100 simultaneous Realtime Database connections (one per open tab). If you exceed a no-cost quota for a month,
  that product is shut off for the rest of the month rather than billed.
- The apiKey in the config is not a secret. The rules are what protect the data.
- Random matching: waiting players are listed under `queue/`; the first person to press "Random player" after them joins their room.

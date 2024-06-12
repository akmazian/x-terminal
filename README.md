# AZ's Reinvention of the X-Terminal

boilerplated from [this template](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter), though pretty much everything is refactored.

Next.js (which was probably a mistake but it's gonna take a lot of energy to revert that right now. future plan is to move to Vite) is used for the frontend framework with UI from Ionic to handle cross platform structures. Styling is primarily done with tailwind as much as Ionic will allow. State is managed by RTK and RTK query is used to handle all queries to the BaaS, supabase. Last but not least, Capacitor is the overarching tool that handles native iOS and Android bundling.


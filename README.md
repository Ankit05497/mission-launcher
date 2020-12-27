# Mission Launcher

An application to list and browse all launches by SpaceX

# How to start

1. yarn install
2. yarn dev
3. Check locally on http://localhost:3000/

# Tech used

1) next.js
2) Typescript

# Approach

Application uses Isomorphic rendering i.e initially a server side rendering will be performed and then subsequent updates will be handled Client Side. For this, getServerSideProps static method of nextjs is used which populates all missions of SpaceX to the application.

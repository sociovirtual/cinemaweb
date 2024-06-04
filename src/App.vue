<template>
  <h1>Hello App!</h1>
  <p>
    <strong class=" text-4xl underline">Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/hello">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
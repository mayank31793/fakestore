<template>
  <div class="loading-container">
    <div class="loader"></div>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.loader {
  position: relative;
  left: calc(50% - 30px);
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #a90229;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-container {
  text-align: center;
  margin-top: 140px;
}

.loading-container p {
  font-size: 24px;
  font-weight: bold;
}
</style>

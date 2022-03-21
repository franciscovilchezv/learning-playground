class CustomError extends Error {
}

class RootError extends Error {
}

try {
  console.log("1");
  throw RootError("Failed after 1");
}
catch (err) {
  throw new CustomError(err)
}
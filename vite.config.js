import path from "path";

export default {
  root: path.resolve(__dirname, "src"),
  server: {
    port: 3000,
    hot: true,
    open: true,
  },
};

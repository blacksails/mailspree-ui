import webpack from "webpack"
import { clientConfig, statOptions } from "../webpack.config"

const compiler = webpack(clientConfig)

compiler.watch({}, (err, stats) => {
  console.log(stats.toString(statOptions))
})

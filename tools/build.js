import webpack from "webpack"
import configs, {statOptions} from "../webpack.config"

const compiler = webpack(configs)

compiler.run((err, stats) => {
  console.log(stats.toString(statOptions))
})

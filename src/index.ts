import * as ANI from "anichart";

const stage = new ANI.Stage();

ANI.recourse.loadCSV("./test.csv", "data");
let bar = new ANI.BarChart({
  dateLabelOptions: {},
});

stage.canvas.width = 800;
stage.canvas.height = 600;
stage.output = true;
const rect = new ANI.Rect({
  shape: { width: 800, height: 600 },
  fillStyle: "#efefef",
});
stage.addChild(rect);
stage.addChild(bar);
const hello = new ANI.Text({ text: "hello, world" });
stage.addChild(hello);
stage.play();

new ANI.MapChart({});

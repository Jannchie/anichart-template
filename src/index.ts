import * as ANI from "anichart";

const stage = new ANI.Stage();
stage.canvas.width = 400;
stage.canvas.height = 300;

const rect = new ANI.Rect({
  shape: { width: 400, height: 300 },
  fillStyle: "#09F"
});
stage.addChild(rect);

const hello = new ANI.Text({ text: "hello, world", fillStyle: "#FFF" });
stage.addChild(hello);

stage.play();

new ANI.MapChart({});

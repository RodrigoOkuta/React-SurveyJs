import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";

Survey.StylesManager.applyTheme("default");

var json = {
  surveyId: "d2e7c196-195c-41bf-a060-2d2e962bd58f"
};

var survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").innerHTML =
    "result: " + JSON.stringify(result.data);
});

ReactDOM.render(
  <Survey.Survey model={survey} />,
  document.getElementById("surveyElement")
);

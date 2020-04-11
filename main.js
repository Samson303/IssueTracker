document.getElementById("issueInputForm").addEventListener("submit", saveIssue);

function saveIssue(e) {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueSeverity = document.getElementById("issueSeverityInput").value;
  var issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  var issueId = chance.guid();
  var issueStatus = "Open";

  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus,
  };

  if (localStorage.getItem("issues") == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify("issues"));
  } else {
    var issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }
}

function fetchIssues() {
  var Issues = JSON.parse(localStorage.getItem("issues"));
  var IssuesList = document.getElementById("issuesList");

  IssuesList.innerHTML = "";

  for (var i = 0; i < Issues.length; i++) {
    var id = Issues[i].id;
    var desc = Issues[i].description;
    var severity = Issues[i].severity;
    var assignedTo = Issues[i].assignedTo;
    var status = Issues[i].status;

    IssuesList.innerHTML +=
      '<div class="well">' +
      "<h6> ID: " +
      id +
      "</h6>" +
      '<p><span class="label label-info">' +
      status +
      "</span></p>" +
      "<h3>" +
      desc +
      "</h3>" +
      '<p><span class="glyphicon glyphicon-time"></span>' +
      severity +
      "</p>" +
      '<p><span class="glyphicon glyphicon-user"></span>' +
      assignedTo +
      "</p>" +
      '<a href="#" onclick="setStatusClosed(\'' +
      id +
      '\')" class="btn btn-warning">Close</a> ' +
      '<a href="#" onclick="deleteIssue ()" class="btn btn-danger ">Delete<a/>';
    '<a href="#" onclick="deleteIssue(\'' +
      id +
      '\')" class="btn btn-danger">Delete</a>' +
      "</div>";
  }
}

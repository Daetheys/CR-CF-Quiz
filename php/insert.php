<?php

include 'connectDB.php';

$prolific_id             = stripslashes(htmlspecialchars($_POST['prolificID']));
$item_idx                = stripslashes(htmlspecialchars($_POST['itemIndex']));
$q_id                    = stripslashes(htmlspecialchars($_POST['questionID']));
$question                = stripslashes(htmlspecialchars($_POST['question']));
$a_id                    = stripslashes(htmlspecialchars($_POST['answerID']));
$answer                  = stripslashes(htmlspecialchars($_POST['answer']));
$title                   = stripslashes(htmlspecialchars($_POST['title']));
$item_id                 = stripslashes(htmlspecialchars($_POST['itemID']));
$rt                      = stripslashes(htmlspecialchars($_POST['rt']));


if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
# '$variable' if string, otherwise $variable
$sql = "INSERT INTO moral_survey (prolific_id, item_idx, q_id, question, a_id, answer, title, item_id ,rt) VALUES ('$prolific_id', $item_idx, $q_id, '$question', $a_id, '$answer', '$title', $item_id, $rt)";

if ($db->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $db->error;
}

$db->close();
 ?>

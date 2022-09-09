<?php

include 'connectDB.php';

$prolific_id             = stripslashes(htmlspecialchars($_POST['prolificID']));
$cond                    = stripslashes(htmlspecialchars($_POST['cond']));
$item_idx                = stripslashes(htmlspecialchars($_POST['itemIndex']));
$q_id                    = stripslashes(htmlspecialchars($_POST['questionID']));
$question                = stripslashes(htmlspecialchars($_POST['question']));
$a_id                    = stripslashes(htmlspecialchars($_POST['answerID']));
$answer                  = stripslashes(htmlspecialchars($_POST['answer']));
$title                   = stripslashes(htmlspecialchars($_POST['title']));
$item_id                 = stripslashes(htmlspecialchars($_POST['itemID']));
$rt                      = stripslashes(htmlspecialchars($_POST['rt']));

try {
  $answer = mysqli_real_escape_string($db, $answer);
  $question = mysqli_real_escape_string($db, $question);
  $title =  mysqli_real_escape_string($db, $title);
} catch (Exception $e) {
;
}

if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
# '$variable' if string, otherwise $variable
$sql = "INSERT INTO moral_survey (prolific_id, item_idx, q_id, question, a_id, answer, title, item_id ,rt, cond) VALUES ('$prolific_id', $item_idx, $q_id, '$question', $a_id, '$answer', '$title', $item_id, $rt, '$cond')";

if ($db->query($sql) === TRUE) {
  echo "New record created successfully";

} else {
  echo "Error: " . $sql . "<br>" . $db->error;
  header('HTTP/1.1 500 Internal Server Booboo');
  header('Content-Type: application/json; charset=UTF-8');
  die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
}

$db->close();
?>
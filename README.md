# JavaScripy-
я сделаю эту змейку)

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Виселица</title>
</head>
<body>
	<h1>Виселица!</h1>
<script>
	// выбираем случайное слово
	var words = [
		"программа",
		"макака",
		"прекрасный",
		"оладушек",
	];
	// Выбираем случайное слово
	var word = words[Math.floor(Math.random () * words.length)];
	
	// Создаем игровой массив
	var answerArray = [];
	for (var i = 0; i <word.length; i++) {
		answerArray[i] = "_";
	}
	var remainingLetters = word.length;

	// Програмируем игровой цикл
	while (remainingLetters> 0) {
		// Показываем состояние игры
		alert(answerArray.join(" "));
		// Запрашиваем вариант ответа
	var quess = prompt ("Угадайте букву или нажмите Отмена для выхода из игры");
	if (quess === null) {
		break;
	} else if (quess.length !== 1) {
		alert ("Пожалуйста, введите только одну букву.");
	}

		else {
			//обновляем состояние игры
			for (var j = 0; j< word.length; j++) {
				if (word[j] === quess) {
					answerArray[j] = quess;
					remainingLetters--;
				}
			}
		}
	}
	// отображаем ответ и поздравляем игрока
	alert (answerArray.join (""));
	alert ("Отлично! было загаданно слово " + word);
</script>
</body>
</html>

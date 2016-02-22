// Minseok Kim. 08/02/2016.
//Late submission due to my illness that needed me to fly back to South Korea for treatment.

#include <iostream>
// Lines with # sign are used as directives for preprocessor(compiler's). In this line, #include <iostream> tells the preprocessor to include the iostream, one of the standard libraries.
// The iostream library includes the declarations of the basic standard input-output functionality that is used throughout the program later.



#include <string>
// '#include <string>' and 'using namespace std' are used in order to declare and use objects of string type in the program.
using namespace std;
// all the elements of the standard C++ libraries are declared within namespace with the name 'std'.
// Therefore, by declaring 'using namespace std', we can access to the functionality of the standard library that is included in the program.
// Declaring 'using namespace std' at the top of the source code will prevent unnecessary repetition of typing.


void OutputPlayerInformation(string name,
	string rank,
	string gender,
	unsigned int score,
	unsigned short health,
	float experience,
	unsigned short level)
{

	// unsigned int: one of the data types. This is 32-bit data type, which can hold integer values in the range from 0 to 4,294,967,295
	// unsigned short: one of the data types, which can hold values in the range of 0 to 65535.
	// float: one of the floating-point types. Float has 4 bytes. It is a fundamental type for values with fractions.
	//        By default, a value may be set as double. So you have to use the f suffix to explicitly express float.
	// string: objects that consist of texts, which are sequences of characters. It is a non-numerical value that is longer than one single character.
	// cout: the standard output stream in c++.
	// endl: it produces a newline character. '\n' behaves in the same way with endl without any difference.
	// return: it causes the function that contains this line to terminate.

	cout << "Name: \t\t" << name << endl;
	cout << "Rank: \t\t" << rank << endl;
	cout << "Gender: \t" << gender << endl;
	cout << "Score: \t\t" << score << endl;
	cout << "Health: \t" << health << endl;
	cout << "Experience: \t" << experience << endl;
	cout << "Level: \t\t" << level << endl << endl;
}

int main()
{
	// 'int main()' is needed in all C++ programs and it is the point where the programs start to execute the lines.
	// It does not matter whether there are functions before and after the main function.
	// This function will be always the first one to be executed.



	// player 1
	string namePlayer1 = "Tony";
	string rankPlayer1 = "Private";
	string genderPlayer1 = "male";

	unsigned int scorePlayer1 = 0;
	unsigned short healthPlayer1 = 100;
	unsigned short levelPlayer1 = 1;

	float experiencePlayer1 = 0.1f;

	// output player information

	OutputPlayerInformation(namePlayer1,
		rankPlayer1,
		genderPlayer1,
		scorePlayer1,
		healthPlayer1,
		experiencePlayer1,
		levelPlayer1);



	// now  add more 5 more players with various data values and output their information(1 example provided)

	// player 2
	string namePlayer2 = "Mary";
	string rankPlayer2 = "Private";
	string genderPlayer2 = "female";

	unsigned int scorePlayer2 = 120;
	unsigned short healthPlayer2 = 94;
	unsigned short levelPlayer2 = 1;

	float experiencePlayer2 = 0.7f;

	OutputPlayerInformation(namePlayer2,
		rankPlayer2,
		genderPlayer2,
		scorePlayer2,
		healthPlayer2,
		experiencePlayer2,
		levelPlayer2);

	//player 3
	string namePlayer3 = "Min";
	string rankPlayer3 = "Private";
	string genderPlayer3 = "male";

	unsigned int scorePlayer3 = 100;
	unsigned short healthPlayer3 = 5;
	unsigned short levelPlayer3 = 1;

	float experiencePlayer3 = 0.3f;

	OutputPlayerInformation(namePlayer3,
		rankPlayer3,
		genderPlayer3,
		scorePlayer3,
		healthPlayer3,
		experiencePlayer3,
		levelPlayer3);


	//player 4
	string namePlayer4 = "Dasha";
	string rankPlayer4 = "Private";
	string genderPlayer4 = "female";

	unsigned int scorePlayer4 = 97;
	unsigned short healthPlayer4 = 100;
	unsigned short levelPlayer4 = 1;

	float experiencePlayer4 = 0.2f;

	OutputPlayerInformation(namePlayer4,
		rankPlayer4,
		genderPlayer4,
		scorePlayer4,
		healthPlayer4,
		experiencePlayer4,
		levelPlayer4);


	//player 5
	string namePlayer5 = "Anton";
	string rankPlayer5 = "Private";
	string genderPlayer5 = "male";

	unsigned int scorePlayer5 = 110;
	unsigned short healthPlayer5 = 100;
	unsigned short levelPlayer5 = 1;

	float experiencePlayer5 = 0.3f;

	OutputPlayerInformation(namePlayer5,
		rankPlayer5,
		genderPlayer5,
		scorePlayer5,
		healthPlayer5,
		experiencePlayer5,
		levelPlayer5);


	//player 6
	string namePlayer6 = "Shannon";
	string rankPlayer6 = "Private";
	string genderPlayer6 = "female";

	unsigned int scorePlayer6 = 80;
	unsigned short healthPlayer6 = 80;
	unsigned short levelPlayer6 = 2;

	float experiencePlayer6 = 0.5f;

	OutputPlayerInformation(namePlayer6,
		rankPlayer6,
		genderPlayer6,
		scorePlayer6,
		healthPlayer6,
		experiencePlayer6,
		levelPlayer6);


	//player 7
	string namePlayer7 = "Frances";
	string rankPlayer7 = "Private";
	string genderPlayer7 = "female";

	unsigned int scorePlayer7 = 130;
	unsigned short healthPlayer7 = 110;
	unsigned short levelPlayer7 = 2;

	float experiencePlayer7 = 0.6f;

	OutputPlayerInformation(namePlayer7,
		rankPlayer7,
		genderPlayer7,
		scorePlayer7,
		healthPlayer7,
		experiencePlayer7,
		levelPlayer7);


	system("pause");

	return 0;
}

// Brief Description of how I feel about the code I created.


//write a brief description of how you feel about the code you created:

// To be honest, I like Javascript much more because of its accessibility; I can write codes in any operation system and execute the code in any browser.
// However, I maybe do so because I am still not familiar with c++.

// The fact that C++ is a very strong language(that is restricted with data type) also makes me prefer Javascript to C++.
// I guess that I will need to spend more time learning C++ in order to get more used to it.


//Is it well organized?

// Yes, it is well organized I think.

//Is it easy to expand (add more players)?

// It was easy to add more players but repetitive. I am sure that there will be better ways to do so with some more functions..?

//Can mistakes in your code happen easily?  If so how?

//the whole thing about execution and compiler of C++ is little confusing to the way I used to do with Javascript. I think it will take some time to understand and debug it better.

//How would you deal with adding a large number of game players, such as in World of Warcraft?

// I would create functions that generates numbers and unique identifier that are attached to the Character variables(like player7 but more unique way).
// These functions will automatically create features of characters and hold values for it that can be updated on its own, so I won't have to retype code for every new character.

//Any other thoughts or comments?

// If Java, C, and C# are similar to C++, it may take some time to grasp better understanding of the languages that are different from Javascript. In addition to that, I still need to work on learning about Visual Studio.

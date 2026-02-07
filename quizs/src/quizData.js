// quizData.js - Keyboard shortcut questions organized by application and difficulty level

const QUIZ_DATA = {
  // Microsoft Word
  "Microsoft Word": {
    easy: [
      {
        question: "What is the shortcut for copying text in Microsoft Word?",
        options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
        correctAnswer: "Ctrl+C"
      },
      {
        question: "Which shortcut is used to paste copied content?",
        options: ["Ctrl+P", "Ctrl+X", "Ctrl+V", "Ctrl+Z"],
        correctAnswer: "Ctrl+V"
      },
      {
        question: "How do you save a document quickly?",
        options: ["Ctrl+S", "Ctrl+P", "Ctrl+N", "Ctrl+R"],
        correctAnswer: "Ctrl+S"
      },
      {
        question: "What is the shortcut to undo the last action?",
        options: ["Ctrl+Y", "Ctrl+U", "Ctrl+Z", "Ctrl+Shift+Z"],
        correctAnswer: "Ctrl+Z"
      },
      {
        question: "Which shortcut is used to open a new document?",
        options: ["Ctrl+O", "Ctrl+N", "Ctrl+W", "Ctrl+Shift+N"],
        correctAnswer: "Ctrl+N"
      },
      {
        question: "What is the shortcut to bold selected text?",
        options: ["Ctrl+I", "Ctrl+U", "Ctrl+B", "Ctrl+Shift+B"],
        correctAnswer: "Ctrl+B"
      },
      {
        question: "Which shortcut is used to italicize text?",
        options: ["Ctrl+U", "Ctrl+I", "Ctrl+Shift+I", "Ctrl+Alt+I"],
        correctAnswer: "Ctrl+I"
      },
      {
        question: "How do you underline selected text?",
        options: ["Ctrl+U", "Ctrl+Shift+U", "Ctrl+Alt+U", "Ctrl+W"],
        correctAnswer: "Ctrl+U"
      },
      {
        question: "What is the shortcut to print a document?",
        options: ["Ctrl+P", "Ctrl+Shift+P", "Ctrl+Alt+P", "Ctrl+D"],
        correctAnswer: "Ctrl+P"
      },
      {
        question: "How do you select all content in a document?",
        options: ["Ctrl+X", "Ctrl+Shift+A", "Ctrl+A", "Ctrl+Alt+A"],
        correctAnswer: "Ctrl+A"
      },
      {
        question: "What shortcut opens the Find dialog box?",
        options: ["Ctrl+F", "Ctrl+H", "Ctrl+G", "Ctrl+Shift+F"],
        correctAnswer: "Ctrl+F"
      },
      {
        question: "Which shortcut is used to replace text in a document?",
        options: ["Ctrl+R", "Ctrl+F", "Ctrl+H", "Ctrl+Shift+H"],
        correctAnswer: "Ctrl+H"
      },
      {
        question: "How do you center-align text in Microsoft Word?",
        options: ["Ctrl+C", "Ctrl+E", "Ctrl+L", "Ctrl+Shift+E"],
        correctAnswer: "Ctrl+E"
      },
      {
        question: "Which shortcut aligns text to the left?",
        options: ["Ctrl+L", "Ctrl+R", "Ctrl+Shift+L", "Ctrl+Alt+L"],
        correctAnswer: "Ctrl+L"
      },
      {
        question: "How do you right-align text?",
        options: ["Ctrl+R", "Ctrl+Shift+R", "Ctrl+L", "Ctrl+E"],
        correctAnswer: "Ctrl+R"
      },
      {
        question: "What is the shortcut for opening a document?",
        options: ["Ctrl+O", "Ctrl+Shift+O", "Ctrl+Alt+O", "Ctrl+N"],
        correctAnswer: "Ctrl+O"
      },
      {
        question: "Which shortcut inserts a page break?",
        options: ["Ctrl+P", "Ctrl+Enter", "Shift+Enter", "Alt+Enter"],
        correctAnswer: "Ctrl+Enter"
      },
      {
        question: "How do you redo an action?",
        options: ["Ctrl+Y", "Ctrl+Shift+Z", "Ctrl+Alt+Y", "Ctrl+R"],
        correctAnswer: "Ctrl+Y"
      },
      {
        question: "Which shortcut creates a bullet list?",
        options: ["Ctrl+Shift+B", "Ctrl+Shift+L", "Ctrl+Alt+B", "Alt+Shift+L"],
        correctAnswer: "Ctrl+Shift+L"
      },
      {
        question: "What shortcut inserts a hyperlink?",
        options: ["Ctrl+H", "Ctrl+K", "Ctrl+L", "Ctrl+Shift+H"],
        correctAnswer: "Ctrl+K"
      },
      {
        question: "What is the shortcut to decrease font size?",
        options: ["Ctrl+Shift+<", "Ctrl+[", "Ctrl+Shift+[", "Ctrl+Alt+["],
        correctAnswer: "Ctrl+["
      },
      {
        question: "Which shortcut increases the font size?",
        options: ["Ctrl+Shift+>", "Ctrl+]", "Ctrl+Shift+]", "Ctrl+Alt+]"],
        correctAnswer: "Ctrl+]"
      },
      {
        question: "How do you apply subscript formatting?",
        options: ["Ctrl+=", "Ctrl+Shift+=", "Ctrl+Alt+=", "Ctrl+S"],
        correctAnswer: "Ctrl+="
      },
      {
        question: "Which shortcut applies superscript formatting?",
        options: ["Ctrl++", "Ctrl+Shift++", "Ctrl+Alt++", "Ctrl+Shift+P"],
        correctAnswer: "Ctrl+Shift++"
      },
      {
        question: "What is the shortcut for double underlining text?",
        options: ["Ctrl+Shift+U", "Ctrl+Shift+D", "Ctrl+Alt+U", "Ctrl+D"],
        correctAnswer: "Ctrl+Shift+D"
      },
      {
        question: "How do you select a word quickly?",
        options: ["Ctrl+W", "Double-click the word", "Ctrl+A", "Shift+Click"],
        correctAnswer: "Double-click the word"
      },
      {
        question: "Which shortcut selects an entire paragraph?",
        options: ["Triple-click inside the paragraph", "Ctrl+P", "Shift+Click", "Ctrl+Shift+P"],
        correctAnswer: "Triple-click inside the paragraph"
      },
      {
        question: "How do you open the Spelling and Grammar check?",
        options: ["Ctrl+G", "Ctrl+F7", "F7", "Shift+F7"],
        correctAnswer: "F7"
      },
      {
        question: "Which shortcut opens the Thesaurus?",
        options: ["Ctrl+T", "Ctrl+Shift+T", "Shift+F7", "Ctrl+F7"],
        correctAnswer: "Shift+F7"
      },
      {
        question: "What is the shortcut to insert a comment?",
        options: ["Ctrl+Alt+C", "Ctrl+Shift+C", "Ctrl+C", "Alt+Ctrl+M"],
        correctAnswer: "Alt+Ctrl+M"
      },
      {
        question: "How do you move to the beginning of a line?",
        options: ["Home", "Ctrl+Home", "Alt+Home", "Shift+Home"],
        correctAnswer: "Home"
      },
      {
        question: "Which shortcut moves to the end of a line?",
        options: ["Ctrl+End", "Shift+End", "End", "Alt+End"],
        correctAnswer: "End"
      },
      {
        question: "How do you move to the beginning of a document?",
        options: ["Ctrl+Home", "Ctrl+Shift+Home", "Home", "Ctrl+Up Arrow"],
        correctAnswer: "Ctrl+Home"
      },
      {
        question: "Which shortcut moves to the end of a document?",
        options: ["Ctrl+End", "End", "Shift+End", "Ctrl+Down Arrow"],
        correctAnswer: "Ctrl+End"
      },
      {
        question: "What shortcut aligns text to justify?",
        options: ["Ctrl+J", "Ctrl+E", "Ctrl+R", "Ctrl+Shift+J"],
        correctAnswer: "Ctrl+J"
      },
      {
        question: "How do you insert a table?",
        options: ["Ctrl+Shift+T", "Alt+N, T", "Ctrl+Alt+T", "Alt+T"],
        correctAnswer: "Alt+N, T"
      },
      {
        question: "Which shortcut inserts a line break?",
        options: ["Shift+Enter", "Ctrl+Enter", "Alt+Enter", "Ctrl+Shift+Enter"],
        correctAnswer: "Shift+Enter"
      },
      {
        question: "How do you insert a page break?",
        options: ["Ctrl+Shift+P", "Ctrl+Enter", "Shift+Enter", "Ctrl+Shift+Enter"],
        correctAnswer: "Ctrl+Enter"
      },
      {
        question: "Which shortcut is used to select the entire row in a table?",
        options: ["Shift+Click", "Ctrl+Shift+R", "Shift+End", "Click left edge of the row"],
        correctAnswer: "Click left edge of the row"
      },
      {
        question: "How do you insert a new row in a table?",
        options: ["Tab (when in the last cell of a row)", "Ctrl+Shift+Enter", "Ctrl+R", "Shift+Tab"],
        correctAnswer: "Tab (when in the last cell of a row)"
      },
      {
        question: "What shortcut inserts the current date?",
        options: ["Alt+Shift+D", "Ctrl+Shift+D", "Ctrl+Alt+D", "Shift+F5"],
        correctAnswer: "Alt+Shift+D"
      },
      {
        question: "How do you insert a footnote?",
        options: ["Alt+Ctrl+F", "Ctrl+F", "Ctrl+Alt+F", "Ctrl+Shift+F"],
        correctAnswer: "Alt+Ctrl+F"
      },
      {
        question: "Which shortcut toggles between open Word documents?",
        options: ["Ctrl+Tab", "Alt+Tab", "Ctrl+Shift+Tab", "Ctrl+F6"],
        correctAnswer: "Ctrl+F6"
      },
      {
        question: "How do you close a document?",
        options: ["Ctrl+W", "Ctrl+F4", "Alt+F4", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "What shortcut displays Word Help?",
        options: ["F1", "Shift+F1", "Ctrl+H", "Ctrl+Shift+H"],
        correctAnswer: "F1"
      },
      {
        question: "How do you select a single sentence?",
        options: ["Ctrl+Click anywhere in the sentence", "Triple-click anywhere in the sentence", "Double-click anywhere in the sentence", "Click the left margin"],
        correctAnswer: "Ctrl+Click anywhere in the sentence"
      },
      {
        question: "What is the shortcut for toggling between insert and overtype mode?",
        options: ["Insert key", "Ctrl+Shift+I", "Ctrl+Insert", "Alt+Insert"],
        correctAnswer: "Insert key"
      },
      {
        question: "How do you open the \"Find and Replace\" dialog box?",
        options: ["Ctrl+F", "Ctrl+H", "Ctrl+R", "Both A & B"],
        correctAnswer: "Both A & B"
      },
      {
        question: "Which shortcut is used to open the Print Preview window?",
        options: ["Ctrl+P", "Ctrl+Shift+P", "Alt+P", "Shift+P"],
        correctAnswer: "Ctrl+P"
      },
      {
        question: "What is the shortcut for changing text to uppercase or lowercase?",
        options: ["Shift+F3", "Ctrl+Shift+U", "Ctrl+Alt+U", "Ctrl+F3"],
        correctAnswer: "Shift+F3"
      },
      {
        question: "How do you insert a hyperlink?",
        options: ["Ctrl+L", "Ctrl+H", "Ctrl+K", "Alt+K"],
        correctAnswer: "Ctrl+K"
      },
      {
        question: "Which shortcut repeats the last action?",
        options: ["F4", "Ctrl+Y", "Ctrl+Shift+Y", "Both A & B"],
        correctAnswer: "Both A & B"
      },
      {
        question: "What is the shortcut to open a new document?",
        options: ["Ctrl+O", "Ctrl+N", "Ctrl+Shift+N", "Alt+N"],
        correctAnswer: "Ctrl+N"
      },
      {
        question: "How do you select all text in a document?",
        options: ["Ctrl+A", "Ctrl+Shift+A", "Alt+A", "Shift+A"],
        correctAnswer: "Ctrl+A"
      },
      {
        question: "What is the shortcut for opening the Format Painter tool?",
        options: ["Ctrl+Shift+C", "Ctrl+Shift+V", "Ctrl+Alt+C", "Alt+Shift+C"],
        correctAnswer: "Ctrl+Shift+C"
      },
      {
        question: "Which shortcut applies a bullet list?",
        options: ["Ctrl+Shift+L", "Ctrl+Alt+L", "Shift+L", "Alt+B"],
        correctAnswer: "Ctrl+Shift+L"
      },
      {
        question: "How do you apply a numbered list?",
        options: ["Ctrl+Shift+N", "Ctrl+Alt+N", "Alt+N", "None of the above"],
        correctAnswer: "None of the above"
      },
      {
        question: "Which shortcut allows you to insert an equation?",
        options: ["Alt+=", "Ctrl+Shift+=", "Ctrl+E", "Shift+Alt+E"],
        correctAnswer: "Alt+="
      },
      {
        question: "How do you insert a text box?",
        options: ["Alt+N, X", "Ctrl+X", "Ctrl+Shift+X", "Shift+X"],
        correctAnswer: "Alt+N, X"
      },
      {
        question: "What shortcut removes formatting from selected text?",
        options: ["Ctrl+Spacebar", "Ctrl+Shift+Spacebar", "Ctrl+Alt+Spacebar", "Ctrl+Shift+R"],
        correctAnswer: "Ctrl+Spacebar"
      }
    ],
    medium: [
      {
         question: "Which shortcut is used to open the \"Styles\" pane in Microsoft Word?",
        options: ["Alt+Ctrl+Shift+S", "Ctrl+Alt+S", "Ctrl+Shift+S", "Alt+S"],
        correctAnswer: "Alt+Ctrl+Shift+S"
      },
      {
        question: "How do you open the \"Paragraph\" dialog box quickly?",
        options: ["Ctrl+Shift+P", "Alt+P", "Ctrl+Shift+M", "Alt+H, P, G"],
        correctAnswer: "Alt+H, P, G"
      },
      {
        question: "What is the shortcut to insert a comment?",
        options: ["Ctrl+Alt+M", "Ctrl+Shift+C", "Alt+C", "Shift+M"],
        correctAnswer: "Ctrl+Alt+M"
      },
      {
        question: "Which shortcut is used to insert a page break?",
        options: ["Ctrl+P", "Ctrl+Enter", "Shift+Enter", "Alt+B"],
        correctAnswer: "Ctrl+Enter"
      },
      {
        question: "What is the shortcut to open the \"Font\" dialog box?",
        options: ["Ctrl+Shift+F", "Ctrl+D", "Ctrl+Alt+F", "Alt+D"],
        correctAnswer: "Ctrl+D"
      },
      {
        question: "How do you toggle between open Word documents?",
        options: ["Ctrl+Tab", "Ctrl+F6", "Ctrl+Shift+Tab", "Alt+Shift+Tab"],
        correctAnswer: "Ctrl+F6"
      },
      {
        question: "Which shortcut is used to display the \"Thesaurus\" in Word?",
        options: ["Shift+F7", "Ctrl+T", "Ctrl+Shift+T", "Alt+T"],
        correctAnswer: "Shift+F7"
      },
      {
        question: "What is the shortcut to create a hanging indent?",
        options: ["Ctrl+T", "Ctrl+M", "Alt+H, I", "Shift+T"],
        correctAnswer: "Ctrl+T"
      },
      {
        question: "How do you decrease indent in Word?",
        options: ["Ctrl+Shift+T", "Ctrl+M", "Ctrl+Shift+M", "Shift+M"],
        correctAnswer: "Ctrl+Shift+M"
      },
      {
        question: "What shortcut moves the cursor to the end of a document?",
        options: ["Ctrl+End", "Ctrl+Down Arrow", "Alt+End", "Shift+End"],
        correctAnswer: "Ctrl+End"
      },
      {
        question: "Which shortcut is used to move a selected paragraph up?",
        options: ["Alt+Shift+Up Arrow", "Ctrl+Shift+Up Arrow", "Alt+Up Arrow", "Shift+Up Arrow"],
        correctAnswer: "Alt+Shift+Up Arrow"
      },
      {
        question: "What is the shortcut for inserting a table?",
        options: ["Ctrl+T", "Alt+N, T", "Ctrl+Shift+T", "Shift+T"],
        correctAnswer: "Alt+N, T"
      },
      {
        question: "Which shortcut enables full-screen mode (reading mode)?",
        options: ["Alt+V, F", "Alt+R, F", "Ctrl+F11", "Shift+V"],
        correctAnswer: "Alt+V, F"
      },
      {
        question: "What is the shortcut for switching between different headers and footers?",
        options: ["Alt+Shift+P", "Ctrl+Shift+P", "Alt+Shift+C", "Ctrl+Tab"],
        correctAnswer: "Alt+Shift+C"
      },
      {
        question: "How do you apply double spacing to selected text?",
        options: ["Ctrl+2", "Ctrl+D", "Ctrl+Shift+2", "Alt+2"],
        correctAnswer: "Ctrl+2"
      },
      {
        question: "Which shortcut applies 1.5-line spacing?",
        options: ["Ctrl+5", "Ctrl+Shift+5", "Alt+5", "Ctrl+1.5"],
        correctAnswer: "Ctrl+5"
      },
      {
        question: "What is the shortcut to select the entire document?",
        options: ["Ctrl+A", "Ctrl+Shift+A", "Shift+A", "Ctrl+Alt+A"],
        correctAnswer: "Ctrl+A"
      },
      {
        question: "How do you insert a footnote?",
        options: ["Alt+Ctrl+F", "Ctrl+Shift+F", "Ctrl+Alt+F", "Shift+F"],
        correctAnswer: "Alt+Ctrl+F"
      },
      {
        question: "Which shortcut enables the \"Track Changes\" feature?",
        options: ["Ctrl+Shift+E", "Alt+T", "Ctrl+Alt+T", "Shift+E"],
        correctAnswer: "Ctrl+Shift+E"
      },
      {
        question: "How do you open the \"Word Count\" window?",
        options: ["Ctrl+Shift+G", "Ctrl+Alt+W", "Alt+G", "Shift+W"],
        correctAnswer: "Ctrl+Shift+G"
      },
      {
        question: "What is the shortcut to open the \"Find and Replace\" dialog box?",
        options: ["Ctrl+H", "Ctrl+R", "Alt+F", "Shift+H"],
        correctAnswer: "Ctrl+H"
      },
      {
        question: "How do you insert an endnote?",
        options: ["Alt+Ctrl+D", "Ctrl+Shift+E", "Alt+E", "Ctrl+D"],
        correctAnswer: "Alt+Ctrl+D"
      },
      {
        question: "Which shortcut is used to insert a hyperlink?",
        options: ["Ctrl+K", "Ctrl+H", "Ctrl+L", "Shift+K"],
        correctAnswer: "Ctrl+K"
      },
      {
        question: "What is the shortcut to open the \"Navigation Pane\"?",
        options: ["Ctrl+F", "Ctrl+Shift+N", "Alt+V, N", "Shift+F"],
        correctAnswer: "Ctrl+F"
      },
      {
        question: "How do you remove paragraph formatting?",
        options: ["Ctrl+Q", "Ctrl+Shift+P", "Alt+Q", "Shift+M"],
        correctAnswer: "Ctrl+Q"
      },
      {
        question: "Which shortcut increases font size?",
        options: ["Ctrl+Shift+>", "Ctrl+Alt+>", "Ctrl+>", "Alt+Shift+>"],
        correctAnswer: "Ctrl+Shift+>"
      },
      {
        question: "What is the shortcut to decrease font size?",
        options: ["Ctrl+Shift+<", "Ctrl+Alt+<", "Ctrl+<", "Alt+Shift+<"],
        correctAnswer: "Ctrl+Shift+<"
      },
      {
        question: "How do you apply subscript formatting?",
        options: ["Ctrl+=", "Ctrl+Shift+=", "Ctrl+Alt+=", "Alt+Shift+="],
        correctAnswer: "Ctrl+="
      },
      {
        question: "What is the shortcut for superscript formatting?",
        options: ["Ctrl+Shift+=", "Ctrl+Alt+=", "Ctrl+^", "Alt+Shift+^"],
        correctAnswer: "Ctrl+Shift+="
      },
      {
        question: "How do you insert a non-breaking space?",
        options: ["Ctrl+Shift+Space", "Ctrl+Space", "Alt+Space", "Shift+Space"],
        correctAnswer: "Ctrl+Shift+Space"
      },
      {
        question: "Which shortcut enables \"Clear Formatting\"?",
        options: ["Ctrl+Space", "Ctrl+Shift+Space", "Alt+Space", "Shift+Ctrl+F"],
        correctAnswer: "Ctrl+Space"
      },
      {
        question: "How do you insert a new row in a table?",
        options: ["Tab (at the last column)", "Ctrl+Shift+Enter", "Ctrl+Tab", "Alt+Enter"],
        correctAnswer: "Tab (at the last column)"
      },
      {
        question: "What is the shortcut to select the current paragraph?",
        options: ["Triple-click anywhere in the paragraph", "Ctrl+Shift+P", "Alt+P", "Shift+P"],
        correctAnswer: "Triple-click anywhere in the paragraph"
      },
      {
        question: "How do you move a selected paragraph down?",
        options: ["Alt+Shift+Down Arrow", "Ctrl+Down Arrow", "Shift+Down Arrow", "Ctrl+Alt+Down Arrow"],
        correctAnswer: "Alt+Shift+Down Arrow"
      },
      {
        question: "What shortcut moves the cursor to the beginning of a document?",
        options: ["Ctrl+Home", "Ctrl+Up Arrow", "Alt+Home", "Shift+Home"],
        correctAnswer: "Ctrl+Home"
      },
      {
        question: "How do you open the \"Insert Symbol\" dialog box?",
        options: ["Alt+N, U", "Ctrl+Alt+S", "Alt+I, S", "Shift+S"],
        correctAnswer: "Alt+N, U"
      },
      {
        question: "Which shortcut toggles between field codes and field results?",
        options: ["Alt+F9", "Ctrl+F9", "Shift+F9", "Ctrl+Shift+F9"],
        correctAnswer: "Alt+F9"
      },
      {
        question: "How do you insert a soft return (line break without starting a new paragraph)?",
        options: ["Shift+Enter", "Ctrl+Enter", "Alt+Enter", "Ctrl+Shift+Enter"],
        correctAnswer: "Shift+Enter"
      },
      {
        question: "What is the shortcut to update fields in a document?",
        options: ["F9", "Ctrl+Shift+U", "Alt+F9", "Ctrl+Alt+U"],
        correctAnswer: "F9"
      },
      {
        question: "Which shortcut toggles hidden characters (paragraph marks, spaces, etc.)?",
        options: ["Ctrl+Shift+8", "Ctrl+8", "Alt+Shift+8", "Shift+8"],
        correctAnswer: "Ctrl+Shift+8"
      },
      {
        question: "How do you quickly duplicate text?",
        options: ["Ctrl+D (after selecting text)", "Ctrl+Shift+D", "Ctrl+Drag with Mouse", "Alt+D"],
        correctAnswer: "Ctrl+Drag with Mouse"
      },
      {
        question: "What is the shortcut to apply small caps formatting?",
        options: ["Ctrl+Shift+K", "Ctrl+Alt+K", "Alt+K", "Shift+K"],
        correctAnswer: "Ctrl+Shift+K"
      },
      {
        question: "How do you quickly insert the current date?",
        options: ["Alt+Shift+D", "Ctrl+Shift+D", "Ctrl+D", "Shift+D"],
        correctAnswer: "Alt+Shift+D"
      },
      {
        question: "How do you insert the current time?",
        options: ["Alt+Shift+T", "Ctrl+Shift+T", "Ctrl+T", "Shift+T"],
        correctAnswer: "Alt+Shift+T"
      },
      {
        question: "What shortcut enables \"AutoCorrect\" options?",
        options: ["Alt+T, A", "Ctrl+Shift+A", "Alt+Shift+A", "Ctrl+A"],
        correctAnswer: "Alt+T, A"
      },
      {
        question: "Which shortcut is used to create a hanging indent?",
        options: ["Ctrl+T", "Ctrl+H", "Ctrl+M", "Ctrl+Shift+T"],
        correctAnswer: "Ctrl+T"
      },
      {
        question: "How do you remove a hanging indent?",
        options: ["Ctrl+Shift+T", "Ctrl+T", "Alt+Shift+T", "Ctrl+H"],
        correctAnswer: "Ctrl+Shift+T"
      },
      {
        question: "What is the shortcut to insert a comment in a document?",
        options: ["Ctrl+Alt+M", "Ctrl+Shift+M", "Alt+M", "Shift+M"],
        correctAnswer: "Ctrl+Alt+M"
      },
      {
        question: "Which shortcut moves the cursor to the end of the document?",
        options: ["Ctrl+End", "Ctrl+Shift+End", "Alt+End", "Shift+End"],
        correctAnswer: "Ctrl+End"
      },
      {
        question: "How do you quickly delete a whole word?",
        options: ["Ctrl+Backspace", "Ctrl+Delete", "Alt+Backspace", "Shift+Delete"],
        correctAnswer: "Ctrl+Backspace"
      },
      {
        question: "What is the shortcut to open the \"Font\" dialog box?",
        options: ["Ctrl+D", "Ctrl+Shift+F", "Alt+F", "Shift+F"],
        correctAnswer: "Ctrl+D"
      },
      {
        question: "How do you insert a section break?",
        options: ["Ctrl+Enter", "Ctrl+Shift+Enter", "Ctrl+Shift+S", "Alt+S"],
        correctAnswer: "Ctrl+Shift+Enter"
      },
      {
        question: "What is the shortcut for \"Save As\" in Microsoft Word?",
        options: ["F12", "Ctrl+Shift+S", "Ctrl+F12", "Alt+S"],
        correctAnswer: "F12"
      },
      {
        question: "Which shortcut is used to enable \"Track Changes\"?",
        options: ["Ctrl+Shift+E", "Ctrl+E", "Alt+Shift+E", "Ctrl+Alt+E"],
        correctAnswer: "Ctrl+Shift+E"
      },
      {
        question: "What is the shortcut to select the entire table in Microsoft Word?",
        options: ["Alt+5 (on numeric keypad)", "Ctrl+Shift+5", "Alt+Shift+5", "Ctrl+Alt+5"],
        correctAnswer: "Alt+5 (on numeric keypad)"
      },
      {
        question: "How do you split a table in Microsoft Word?",
        options: ["Ctrl+Shift+Enter", "Ctrl+Enter", "Alt+Enter", "Shift+Enter"],
        correctAnswer: "Ctrl+Shift+Enter"
      },
      {
        question: "Which shortcut is used to update automatic numbering?",
        options: ["F9", "Ctrl+Shift+U", "Ctrl+N", "Alt+U"],
        correctAnswer: "F9"
      },
      {
        question: "How do you move to the previous spelling or grammar error?",
        options: ["Ctrl+Shift+F7", "Shift+F7", "Alt+F7", "Ctrl+F7"],
        correctAnswer: "Alt+F7"
      },
      {
        question: "What shortcut opens the thesaurus?",
        options: ["Shift+F7", "Ctrl+Shift+F7", "Alt+F7", "Ctrl+Alt+F7"],
        correctAnswer: "Shift+F7"
      },
      {
        question: "How do you toggle the case of selected text (uppercase/lowercase)?",
        options: ["Shift+F3", "Ctrl+Shift+F3", "Alt+F3", "Ctrl+Alt+F3"],
        correctAnswer: "Shift+F3"
      }
    ],
    hard: [
      {
        question: "Which shortcut applies subscript formatting?",
        options: ["Ctrl+Shift+=", "Ctrl+=", "Alt+=", "Shift+="],
        correctAnswer: "Ctrl+="
      },
      {
        question: "Which shortcut applies superscript formatting?",
        options: ["Ctrl+Shift+=", "Ctrl+=", "Alt+=", "Shift+="],
        correctAnswer: "Ctrl+Shift+="
      },
      {
        question: "What is the shortcut to apply the \"Heading 1\" style?",
        options: ["Ctrl+Alt+1", "Ctrl+Shift+1", "Alt+1", "Ctrl+1"],
        correctAnswer: "Ctrl+Alt+1"
      },
      {
        question: "Which shortcut removes all formatting from selected text?",
        options: ["Ctrl+Spacebar", "Ctrl+Shift+N", "Ctrl+Alt+Spacebar", "Ctrl+R"],
        correctAnswer: "Ctrl+Spacebar"
      },
      {
        question: "Which shortcut repeats the last action performed?",
        options: ["F4", "Ctrl+Y", "Ctrl+R", "Ctrl+Shift+R"],
        correctAnswer: "F4"
      },
      {
        question: "How do you insert a non-breaking space?",
        options: ["Ctrl+Shift+Spacebar", "Ctrl+Spacebar", "Alt+Spacebar", "Shift+Spacebar"],
        correctAnswer: "Ctrl+Shift+Spacebar"
      },
      {
        question: "What shortcut allows you to insert a page break?",
        options: ["Ctrl+Enter", "Shift+Enter", "Ctrl+Shift+Enter", "Alt+Enter"],
        correctAnswer: "Ctrl+Enter"
      },
      {
        question: "How do you apply the \"Normal\" style?",
        options: ["Ctrl+Shift+N", "Ctrl+N", "Alt+Shift+N", "Ctrl+Alt+N"],
        correctAnswer: "Ctrl+Shift+N"
      },
      {
        question: "Which shortcut aligns the paragraph to the center?",
        options: ["Ctrl+E", "Ctrl+C", "Ctrl+L", "Ctrl+Shift+E"],
        correctAnswer: "Ctrl+E"
      },
      {
        question: "How do you quickly apply bold formatting to text?",
        options: ["Ctrl+B", "Ctrl+Shift+B", "Ctrl+Alt+B", "Shift+B"],
        correctAnswer: "Ctrl+B"
      },
      {
        question: "What shortcut applies a border to selected text or paragraph?",
        options: ["Ctrl+Shift+L", "Alt+Shift+L", "Ctrl+Alt+L", "Shift+L"],
        correctAnswer: "Ctrl+Shift+L"
      },
      {
        question: "Which shortcut is used to insert a line break (without starting a new paragraph)?",
        options: ["Shift+Enter", "Ctrl+Enter", "Alt+Enter", "Ctrl+Shift+Enter"],
        correctAnswer: "Shift+Enter"
      },
      {
        question: "What is the shortcut for inserting an automatic date field?",
        options: ["Alt+Shift+D", "Ctrl+Shift+D", "Alt+D", "Ctrl+D"],
        correctAnswer: "Alt+Shift+D"
      },
      {
        question: "Which shortcut applies small caps formatting?",
        options: ["Ctrl+Shift+K", "Ctrl+K", "Alt+K", "Ctrl+Shift+C"],
        correctAnswer: "Ctrl+Shift+K"
      },
      {
        question: "How do you remove hyperlinks from selected text?",
        options: ["Ctrl+Shift+F9", "Ctrl+Alt+F9", "Shift+F9", "Ctrl+F9"],
        correctAnswer: "Ctrl+Shift+F9"
      },
      {
        question: "What shortcut is used to open the \"Find and Replace\" dialog?",
        options: ["Ctrl+H", "Ctrl+F", "Ctrl+Shift+H", "Ctrl+R"],
        correctAnswer: "Ctrl+H"
      },
      {
        question: "What is the shortcut for inserting a footnote?",
        options: ["Ctrl+Alt+F", "Ctrl+Shift+F", "Ctrl+Alt+Shift+F", "Ctrl+F"],
        correctAnswer: "Ctrl+Alt+F"
      },
      {
        question: "Which shortcut moves to the previous revision in \"Track Changes\"?",
        options: ["Shift+F5", "Ctrl+Shift+E", "Ctrl+F5", "Alt+F5"],
        correctAnswer: "Shift+F5"
      },
      {
        question: "Which shortcut moves to the next spelling or grammar error?",
        options: ["F7", "Alt+F7", "Ctrl+F7", "Shift+F7"],
        correctAnswer: "Alt+F7"
      },
      {
        question: "How do you insert a symbol in Word?",
        options: ["Alt+N+U", "Ctrl+N+U", "Ctrl+Shift+U", "Ctrl+Alt+U"],
        correctAnswer: "Alt+N+U"
      },
      {
        question: "Which shortcut applies the currency format to selected cells?",
        options: ["Ctrl+Shift+$", "Ctrl+Shift+C", "Ctrl+Alt+$", "Ctrl+$"],
        correctAnswer: "Ctrl+Shift+$"
      },
      {
        question: "What is the shortcut to apply the percentage format?",
        options: ["Ctrl+Shift+%", "Ctrl+Shift+P", "Ctrl+Alt+%", "Ctrl+%"],
        correctAnswer: "Ctrl+Shift+%"
      },
      {
        question: "Which shortcut inserts a new worksheet?",
        options: ["Shift+F11", "Ctrl+Shift+N", "Ctrl+F11", "Alt+N+W"],
        correctAnswer: "Shift+F11"
      },
      {
        question: "What is the shortcut to insert a new row in Excel?",
        options: ["Ctrl+Shift+\"+\"", "Ctrl+\"+\"", "Shift+\"+\"", "Ctrl+Alt+\"+\""],
        correctAnswer: "Ctrl+Shift+\"+"
      },
      {
        question: "How do you switch between absolute and relative cell references?",
        options: ["F4", "Ctrl+Shift+4", "Ctrl+$", "Shift+4"],
        correctAnswer: "F4"
      },
      {
        question: "Which shortcut opens the Format Cells dialog?",
        options: ["Ctrl+1", "Ctrl+Shift+1", "Alt+1", "Ctrl+Shift+F1"],
        correctAnswer: "Ctrl+1"
      },
      {
        question: "How do you display the Go To dialog box?",
        options: ["Ctrl+G", "Ctrl+Shift+G", "Alt+G", "Shift+G"],
        correctAnswer: "Ctrl+G"
      },
      {
        question: "What is the shortcut to create a table?",
        options: ["Ctrl+T", "Ctrl+Shift+T", "Alt+T", "Shift+T"],
        correctAnswer: "Ctrl+T"
      },
      {
        question: "Which shortcut toggles the display of formulas in a worksheet?",
        options: ["Ctrl+`", "Ctrl+F2", "Ctrl+Shift+`", "Ctrl+Alt+`"],
        correctAnswer: "Ctrl+`"
      },
      {
        question: "How do you insert a new comment in a cell?",
        options: ["Shift+F2", "Ctrl+F2", "Alt+Shift+F2", "Ctrl+Alt+F2"],
        correctAnswer: "Shift+F2"
      },
      {
        question: "Which shortcut removes the content of selected cells but keeps formatting?",
        options: ["Delete", "Ctrl+Delete", "Alt+Delete", "Shift+Delete"],
        correctAnswer: "Delete"
      },
      {
        question: "How do you group selected rows or columns?",
        options: ["Shift+Alt+→", "Ctrl+Shift+G", "Alt+G", "Ctrl+Alt+→"],
        correctAnswer: "Shift+Alt+→"
      },
      {
        question: "Which shortcut removes all borders from selected cells?",
        options: ["Ctrl+Shift+_", "Ctrl+Shift+-", "Ctrl+_", "Ctrl+-"],
        correctAnswer: "Ctrl+Shift+_"
      },
      {
        question: "How do you insert a hyperlink?",
        options: ["Ctrl+K", "Ctrl+H", "Ctrl+Shift+K", "Ctrl+Alt+K"],
        correctAnswer: "Ctrl+K"
      },
      {
        question: "Which shortcut auto-fits the column width based on content?",
        options: ["Alt+H+O+I", "Ctrl+Shift+I", "Ctrl+Shift+W", "Alt+W"],
        correctAnswer: "Alt+H+O+I"
      },
      {
        question: "What is the shortcut to select the entire row?",
        options: ["Shift+Spacebar", "Ctrl+Spacebar", "Alt+Spacebar", "Ctrl+Shift+Spacebar"],
        correctAnswer: "Shift+Spacebar"
      },
      {
        question: "What shortcut selects the entire column?",
        options: ["Ctrl+Spacebar", "Shift+Spacebar", "Alt+Spacebar", "Ctrl+Shift+Spacebar"],
        correctAnswer: "Ctrl+Spacebar"
      },
      {
        question: "Which shortcut applies a filter to a dataset?",
        options: ["Ctrl+Shift+L", "Ctrl+L", "Alt+Shift+L", "Ctrl+Alt+L"],
        correctAnswer: "Ctrl+Shift+L"
      },
      {
        question: "How do you open the PivotTable Field List?",
        options: ["Alt+D+P", "Ctrl+P", "Alt+P", "Ctrl+Shift+P"],
        correctAnswer: "Alt+D+P"
      },
      {
        question: "Which shortcut refreshes all PivotTables in a workbook?",
        options: ["Alt+F5", "Ctrl+Shift+F5", "Ctrl+R", "Shift+F5"],
        correctAnswer: "Alt+F5"
      },
      {
        question: "Which shortcut opens the Clipboard pane in Microsoft Office?",
        options: ["Ctrl+C twice", "Alt+H+F+O", "Ctrl+Shift+C", "Alt+Ctrl+C"],
        correctAnswer: "Ctrl+C twice"
      },
      {
        question: "What shortcut inserts a comment in Microsoft Word (modern versions)?",
        options: ["Ctrl+Alt+M", "Alt+R+C", "Shift+F2", "Ctrl+M"],
        correctAnswer: "Ctrl+Alt+M"
      },
      {
        question: "Which Excel shortcut allows you to enter the current time in a cell?",
        options: ["Ctrl+Shift+;", "Ctrl+;", "Alt+Shift+T", "Ctrl+Alt+;"],
        correctAnswer: "Ctrl+Shift+;"
      },
      {
        question: "How do you repeat a table header row on every printed page in Word?",
        options: ["Ctrl+Shift+H", "Right-click table > Repeat Header Rows", "Alt+T+R", "Ctrl+Alt+H"],
        correctAnswer: "Right-click table > Repeat Header Rows"
      },
      {
        question: "Which shortcut switches between open documents in Microsoft Word?",
        options: ["Ctrl+F6", "Alt+Tab", "Ctrl+Tab", "Shift+Ctrl+F6"],
        correctAnswer: "Ctrl+F6"
      },
      {
        question: "What is the shortcut to toggle Track Changes in Word?",
        options: ["Ctrl+Shift+E", "Alt+Shift+E", "Ctrl+E", "Ctrl+Alt+E"],
        correctAnswer: "Ctrl+Shift+E"
      },
      {
        question: "Which shortcut is used to enter edit mode in a selected Excel cell?",
        options: ["F2", "Ctrl+E", "Alt+E", "Ctrl+F2"],
        correctAnswer: "F2"
      },
      {
        question: "What is the shortcut to launch the Thesaurus in Word?",
        options: ["Shift+F7", "Alt+F7", "Ctrl+T", "Ctrl+Shift+T"],
        correctAnswer: "Shift+F7"
      },
      {
        question: "Which shortcut pastes values only in Excel (after copying)?",
        options: ["Ctrl+Alt+V, then V", "Ctrl+V", "Ctrl+Shift+V", "Alt+V"],
        correctAnswer: "Ctrl+Alt+V, then V"
      },
      {
        question: "How do you insert a screenshot into a Word document?",
        options: ["Alt+N+S+C", "Ctrl+Shift+PrintScreen", "Alt+PrintScreen", "Ctrl+N+S"],
        correctAnswer: "Alt+N+S+C"
      },
      {
        question: "Which shortcut enables Print Layout View in Word?",
        options: ["Alt+Ctrl+P", "Ctrl+P", "Alt+P", "Ctrl+Shift+P"],
        correctAnswer: "Alt+Ctrl+P"
      },
      {
        question: "Which shortcut opens the Name Manager in Excel?",
        options: ["Ctrl+F3", "Alt+M+N", "Ctrl+Shift+F3", "Ctrl+N"],
        correctAnswer: "Ctrl+F3"
      },
      {
        question: "What is the shortcut to collapse the ribbon in Microsoft Office apps?",
        options: ["Ctrl+F1", "Alt+F1", "Ctrl+Shift+F1", "F1"],
        correctAnswer: "Ctrl+F1"
      },
      {
        question: "Which shortcut inserts a new slide in PowerPoint?",
        options: ["Ctrl+M", "Ctrl+N", "Alt+N", "Ctrl+Shift+M"],
        correctAnswer: "Ctrl+M"
      },
      {
        question: "Which shortcut switches to slide show view from the beginning in PowerPoint?",
        options: ["F5", "Ctrl+Shift+F5", "Alt+F5", "Shift+F5"],
        correctAnswer: "F5"
      },
      {
        question: "Which shortcut displays the Save As dialog box in Office apps?",
        options: ["F12", "Ctrl+S", "Ctrl+Shift+S", "Alt+F12"],
        correctAnswer: "F12"
      },
      {
        question: "Which Excel shortcut inserts the current date?",
        options: ["Ctrl+;", "Ctrl+Shift+;", "Alt+D", "Shift+D"],
        correctAnswer: "Ctrl+;"
      },
      {
        question: "Which shortcut applies strikethrough formatting?",
        options: ["Ctrl+5", "Alt+Shift+5", "Ctrl+Shift+X", "Ctrl+Alt+5"],
        correctAnswer: "Ctrl+5"
      },
      {
        question: "Which shortcut locks the cell reference in Excel?",
        options: ["F4", "Ctrl+F4", "Shift+F4", "Alt+F4"],
        correctAnswer: "F4"
      },
      {
        question: "What is the shortcut for inserting a section break (Next Page) in Word?",
        options: ["Ctrl+Enter", "Ctrl+Shift+Enter", "Alt+Ctrl+Enter", "Alt+N+B"],
        correctAnswer: "Alt+N+B"
      }
    ]
  },
  
  // Microsoft Excel
  "Microsoft Excel": {
    easy: [
      {
        question: "How do you create a new workbook in Excel?",
        options: ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
        correctAnswer: "Ctrl + N"
      },
      {
        question: "What shortcut is used to save the current workbook?",
        options: ["Ctrl + P", "Ctrl + S", "Ctrl + C", "Ctrl + V"],
        correctAnswer: "Ctrl + S"
      },
      {
        question: "How do you copy selected cells in Excel?",
        options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"],
        correctAnswer: "Ctrl + C"
      },
      {
        question: "Which shortcut opens the Find dialog box?",
        options: ["Ctrl + H", "Ctrl + F", "Ctrl + G", "F2"],
        correctAnswer: "Ctrl + F"
      },
      {
        question: "How do you paste copied cells?",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        correctAnswer: "Ctrl + V"
      },
      {
        question: "How do you undo the last action?",
        options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
        correctAnswer: "Ctrl + Z"
      },
      {
        question: "Which shortcut selects the entire column?",
        options: ["Ctrl + Space", "Shift + Space", "Ctrl + A", "Ctrl + Shift + Space"],
        correctAnswer: "Ctrl + Space"
      },
      {
        question: "How do you open the Format Cells dialog?",
        options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + F1"],
        correctAnswer: "Ctrl + 1"
      },
      {
        question: "How do you insert the current date in a cell?",
        options: ["Ctrl + ; (semicolon)", "Ctrl + : (colon)", "Ctrl + Shift + ; (semicolon)", "Ctrl + Shift + : (colon)"],
        correctAnswer: "Ctrl + ; (semicolon)"
      },
      {
        question: "Which shortcut allows you to edit the active cell?",
        options: ["F4", "F2", "F3", "F1"],
        correctAnswer: "F2"
      },
      {
        question: "How do you select the entire worksheet?",
        options: ["Ctrl + A", "Ctrl + S", "Ctrl + E", "Ctrl + Q"],
        correctAnswer: "Ctrl + A"
      },
      {
        question: "What shortcut repeats the last action?",
        options: ["Ctrl + R", "Ctrl + Y", "Ctrl + U", "Ctrl + Z"],
        correctAnswer: "Ctrl + Y"
      },
      {
        question: "How do you open the Save As dialog box?",
        options: ["Ctrl + Shift + S", "Ctrl + Shift + A", "Ctrl + Alt + S", "Ctrl + Alt + A"],
        correctAnswer: "Ctrl + Shift + S"
      },
      {
        question: "Which shortcut cuts the selected cells?",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        correctAnswer: "Ctrl + X"
      },
      {
        question: "How do you select the entire row?",
        options: ["Ctrl + Space", "Shift + Space", "Ctrl + R", "Ctrl + Shift + R"],
        correctAnswer: "Shift + Space"
      },
      {
        question: "Which shortcut opens the Print dialog?",
        options: ["Ctrl + P", "Ctrl + O", "Ctrl + S", "Ctrl + N"],
        correctAnswer: "Ctrl + P"
      },
      {
        question: "How do you insert a new worksheet?",
        options: ["Shift + F11", "Ctrl + F11", "Alt + F11", "Ctrl + Shift + N"],
        correctAnswer: "Shift + F11"
      },
      {
        question: "How do you display formulas in cells?",
        options: ["Ctrl + ` (grave accent)", "Ctrl + F3", "Ctrl + Shift + F", "Ctrl + Alt + F"],
        correctAnswer: "Ctrl + ` (grave accent)"
      },
      {
        question: "How do you move to the next worksheet?",
        options: ["Ctrl + Page Down", "Ctrl + Page Up", "Alt + Page Down", "Alt + Page Up"],
        correctAnswer: "Ctrl + Page Down"
      },
      {
        question: "How do you move to the previous worksheet?",
        options: ["Ctrl + Page Up", "Ctrl + Page Down", "Alt + Page Up", "Alt + Page Down"],
        correctAnswer: "Ctrl + Page Up"
      },
      {
        question: "How do you open the Go To dialog box?",
        options: ["Ctrl + G", "Ctrl + F", "Ctrl + H", "Ctrl + T"],
        correctAnswer: "Ctrl + G"
      },
      {
        question: "How do you insert a hyperlink?",
        options: ["Ctrl + K", "Ctrl + H", "Ctrl + U", "Ctrl + L"],
        correctAnswer: "Ctrl + K"
      },
      {
        question: "How do you bold selected text?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + T"],
        correctAnswer: "Ctrl + B"
      },
      {
        question: "How do you italicize selected text?",
        options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + T"],
        correctAnswer: "Ctrl + I"
      },
      {
        question: "How do you underline selected text?",
        options: ["Ctrl + U", "Ctrl + I", "Ctrl + B", "Ctrl + T"],
        correctAnswer: "Ctrl + U"
      },
      {
        question: "How do you open the Insert Function dialog?",
        options: ["Shift + F3", "Ctrl + F3", "Alt + F3", "Ctrl + Shift + F3"],
        correctAnswer: "Shift + F3"
      },
      {
        question: "How do you zoom in the worksheet?",
        options: ["Ctrl + Mouse wheel up", "Ctrl + Mouse wheel down", "Ctrl + +", "Ctrl + -"],
        correctAnswer: "Ctrl + Mouse wheel up"
      },
      {
        question: "How do you zoom out the worksheet?",
        options: ["Ctrl + Mouse wheel down", "Ctrl + Mouse wheel up", "Ctrl + +", "Ctrl + -"],
        correctAnswer: "Ctrl + Mouse wheel down"
      },
      {
        question: "How do you open the spell check dialog?",
        options: ["F7", "F8", "F9", "F6"],
        correctAnswer: "F7"
      },
      {
        question: "How do you toggle filters on/off?",
        options: ["Ctrl + Shift + L", "Ctrl + L", "Ctrl + F", "Ctrl + Alt + L"],
        correctAnswer: "Ctrl + Shift + L"
      },
      {
        question: "How do you insert the current time?",
        options: ["Ctrl + Shift + ; (semicolon)", "Ctrl + ; (semicolon)", "Ctrl + Shift + : (colon)", "Ctrl + : (colon)"],
        correctAnswer: "Ctrl + Shift + ; (semicolon)"
      },
      {
        question: "How do you open the Name Manager?",
        options: ["Ctrl + F3", "Ctrl + Shift + F3", "Alt + F3", "Shift + F3"],
        correctAnswer: "Ctrl + F3"
      },
      {
        question: "How do you repeat the last command or action?",
        options: ["F4", "F3", "F2", "F5"],
        correctAnswer: "F4"
      },
      {
        question: "How do you open the Insert dialog box?",
        options: ["Ctrl + Shift + \"+\"", "Ctrl + \"+\"", "Shift + \"+\"", "Alt + \"+\""],
        correctAnswer: "Ctrl + \"+\""
      },
      {
        question: "How do you delete the selected cells?",
        options: ["Ctrl + \"-\"", "Ctrl + Shift + \"-\"", "Shift + \"-\"", "Alt + \"-\""],
        correctAnswer: "Ctrl + \"-\""
      },
      {
        question: "How do you insert a comment?",
        options: ["Shift + F2", "Ctrl + F2", "Alt + F2", "Ctrl + Shift + F2"],
        correctAnswer: "Shift + F2"
      },
      {
        question: "How do you select visible cells only?",
        options: ["Alt + ; (semicolon)", "Ctrl + ; (semicolon)", "Shift + ; (semicolon)", "Ctrl + Shift + ; (semicolon)"],
        correctAnswer: "Alt + ; (semicolon)"
      },
      {
        question: "How do you fill selected cells down?",
        options: ["Ctrl + D", "Ctrl + R", "Ctrl + F", "Ctrl + B"],
        correctAnswer: "Ctrl + D"
      },
      {
        question: "How do you fill selected cells right?",
        options: ["Ctrl + R", "Ctrl + D", "Ctrl + F", "Ctrl + B"],
        correctAnswer: "Ctrl + R"
      },
      {
        question: "How do you display the AutoSum formula?",
        options: ["Alt + =", "Ctrl + =", "Shift + =", "Ctrl + Shift + ="],
        correctAnswer: "Alt + ="
      },
      {
        question: "How do you switch between absolute, relative, and mixed references when editing a formula?",
        options: ["F4", "F3", "F2", "F1"],
        correctAnswer: "F4"
      },
      {
        question: "How do you group selected rows or columns?",
        options: ["Alt + Shift + Right Arrow", "Ctrl + Shift + Right Arrow", "Alt + Shift + Left Arrow", "Ctrl + Shift + Left Arrow"],
        correctAnswer: "Alt + Shift + Right Arrow"
      },
      {
        question: "How do you ungroup selected rows or columns?",
        options: ["Alt + Shift + Left Arrow", "Ctrl + Shift + Left Arrow", "Alt + Shift + Right Arrow", "Ctrl + Shift + Right Arrow"],
        correctAnswer: "Alt + Shift + Left Arrow"
      },
      {
        question: "How do you display the Insert Function dialog box?",
        options: ["Shift + F3", "Ctrl + F3", "Alt + F3", "Ctrl + Shift + F3"],
        correctAnswer: "Shift + F3"
      },
      {
        question: "How do you insert the current workbook properties?",
        options: ["Alt + Shift + F1", "Ctrl + Shift + F1", "Shift + F1", "Ctrl + Alt + F1"],
        correctAnswer: "Alt + Shift + F1"
      },
      {
        question: "How do you switch between open workbooks?",
        options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Alt + Tab", "Ctrl + F6"],
        correctAnswer: "Ctrl + F6"
      },
      {
        question: "How do you freeze panes in Excel?",
        options: ["Alt + W, F, F", "Ctrl + F", "Alt + F, W, F", "Ctrl + Shift + F"],
        correctAnswer: "Alt + W, F, F"
      },
      {
        question: "How do you insert a table?",
        options: ["Ctrl + T", "Ctrl + L", "Ctrl + Shift + T", "Ctrl + Alt + T"],
        correctAnswer: "Ctrl + T"
      },
      {
        question: "How do you open the Define Name dialog box?",
        options: ["Ctrl + Alt + N", "Ctrl + F3", "Shift + F3", "Alt + F3"],
        correctAnswer: "Ctrl + F3"
      },
      {
        question: "How do you toggle between hiding and unhiding rows?",
        options: ["Ctrl + 9", "Ctrl + 0", "Ctrl + Shift + 9", "Ctrl + Shift + 0"],
        correctAnswer: "Ctrl + 9"
      },
      {
        question: "How do you toggle between hiding and unhiding columns?",
        options: ["Ctrl + 0", "Ctrl + 9", "Ctrl + Shift + 0", "Ctrl + Shift + 9"],
        correctAnswer: "Ctrl + 0"
      },
      {
        question: "How do you select an entire data region?",
        options: ["Ctrl + A", "Ctrl + Shift + A", "Ctrl + E", "Ctrl + Shift + E"],
        correctAnswer: "Ctrl + A"
      },
      {
        question: "How do you open the Paste Special dialog?",
        options: ["Ctrl + Alt + V", "Ctrl + Shift + V", "Ctrl + V", "Shift + Ctrl + V"],
        correctAnswer: "Ctrl + Alt + V"
      },
      {
        question: "How do you recalculate all worksheets?",
        options: ["F9", "Shift + F9", "Ctrl + F9", "Alt + F9"],
        correctAnswer: "F9"
      },
      {
        question: "How do you display the Quick Analysis tool?",
        options: ["Ctrl + Q", "Ctrl + A", "Ctrl + Shift + Q", "Ctrl + Alt + Q"],
        correctAnswer: "Ctrl + Q"
      },
      {
        question: "How do you insert a new comment?",
        options: ["Shift + F2", "Ctrl + F2", "Alt + F2", "Ctrl + Shift + F2"],
        correctAnswer: "Shift + F2"
      },
      {
        question: "How do you switch between displaying formulas and results?",
        options: ["Ctrl + ` (grave accent)", "Ctrl + F", "Ctrl + Shift + F", "Ctrl + Alt + F"],
        correctAnswer: "Ctrl + ` (grave accent)"
      },
      {
        question: "How do you clear all cell content?",
        options: ["Delete", "Backspace", "Ctrl + Delete", "Ctrl + Backspace"],
        correctAnswer: "Delete"
      },
      {
        question: "How do you open the cell format dialog?",
        options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
        correctAnswer: "Ctrl + 1"
      },
      {
        question: "How do you select cells from the current position to the last non-empty cell in a row?",
        options: ["Ctrl + Shift + Right Arrow", "Ctrl + Shift + Left Arrow", "Ctrl + Shift + Up Arrow", "Ctrl + Shift + Down Arrow"],
        correctAnswer: "Ctrl + Shift + Right Arrow"
      }
    ],
    medium: [
      {
    "question": "How do you enter array formulas in Excel?",
    "options": ["Ctrl + Shift + Enter", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
    "correctAnswer": "Ctrl + Shift + Enter"
  },
  {
    "question": "Which shortcut opens the Name Box dropdown?",
    "options": ["Ctrl + Shift + F3", "Ctrl + F3", "Alt + F3", "Ctrl + Shift + N"],
    "correctAnswer": "Ctrl + Shift + F3"
  },
  {
    "question": "How do you quickly insert the TODAY() function in a cell?",
    "options": ["=TODAY() + Enter", "Alt + Shift + T", "Ctrl + Shift + T", "No shortcut, type manually"],
    "correctAnswer": "No shortcut, type manually"
  },
  {
    "question": "How do you create a chart from selected data?",
    "options": ["F11", "Alt + F1", "Ctrl + F11", "Shift + F11"],
    "correctAnswer": "F11"
  },
  {
    "question": "How do you insert a chart as an embedded object in the current sheet?",
    "options": ["Alt + F1", "F11", "Ctrl + F1", "Ctrl + Alt + F1"],
    "correctAnswer": "Alt + F1"
  },
  {
    "question": "How do you open the Data Validation dialog box?",
    "options": ["Alt + D, L", "Ctrl + D", "Ctrl + Shift + V", "Alt + V, D"],
    "correctAnswer": "Alt + D, L"
  },
  {
    "question": "How do you toggle absolute and relative references inside a formula?",
    "options": ["F4", "F2", "F3", "F1"],
    "correctAnswer": "F4"
  },
  {
    "question": "How do you insert the SUM function quickly?",
    "options": ["Alt + =", "Ctrl + Shift + S", "Ctrl + Shift + =", "Ctrl + Alt + S"],
    "correctAnswer": "Alt + ="
  },
  {
    "question": "How do you autofill a series down a column?",
    "options": ["Select cell and drag fill handle down", "Ctrl + D", "Ctrl + R", "Alt + D"],
    "correctAnswer": "Select cell and drag fill handle down"
  },
  {
    "question": "How do you toggle the display of gridlines?",
    "options": ["Alt + W, V, G", "Ctrl + G", "Alt + V, G", "Ctrl + Shift + G"],
    "correctAnswer": "Alt + W, V, G"
  },
  {
    "question": "How do you open the Go To Special dialog box?",
    "options": ["F5, then Alt + S", "Ctrl + G, then Alt + S", "Ctrl + Shift + G", "Alt + G"],
    "correctAnswer": "F5, then Alt + S"
  },
  {
    "question": "How do you insert a comment and start editing it immediately?",
    "options": ["Shift + F2", "Ctrl + Shift + C", "Alt + F2", "Ctrl + F2"],
    "correctAnswer": "Shift + F2"
  },
  {
    "question": "How do you toggle between different chart types for a selected chart?",
    "options": ["No direct shortcut, use Ribbon", "Ctrl + Shift + C", "Alt + N, C", "Alt + J, C"],
    "correctAnswer": "No direct shortcut, use Ribbon"
  },
  {
    "question": "How do you open the Conditional Formatting Rules Manager?",
    "options": ["Alt + O, D", "Ctrl + Shift + F", "Alt + H, L, R", "Ctrl + F3"],
    "correctAnswer": "Alt + H, L, R"
  },
  {
    "question": "How do you open the Freeze Panes menu?",
    "options": ["Alt + W, F", "Ctrl + Shift + F", "Alt + F, W, F", "Ctrl + Alt + F"],
    "correctAnswer": "Alt + W, F"
  },
  {
    "question": "How do you select the entire visible cells in a filtered list?",
    "options": ["Alt + ; (semicolon)", "Ctrl + A", "Ctrl + Shift + Space", "Shift + Space"],
    "correctAnswer": "Alt + ; (semicolon)"
  },
  {
    "question": "How do you insert a new worksheet to the right of the current sheet?",
    "options": ["Shift + F11", "Ctrl + Shift + N", "Alt + I, W", "Ctrl + N"],
    "correctAnswer": "Shift + F11"
  },
  {
    "question": "How do you group selected rows or columns?",
    "options": ["Alt + Shift + Right Arrow", "Ctrl + G", "Alt + G", "Ctrl + Shift + G"],
    "correctAnswer": "Alt + Shift + Right Arrow"
  },
  {
    "question": "How do you ungroup selected rows or columns?",
    "options": ["Alt + Shift + Left Arrow", "Ctrl + U", "Alt + U", "Ctrl + Shift + U"],
    "correctAnswer": "Alt + Shift + Left Arrow"
  },
  {
    "question": "How do you insert a pivot table?",
    "options": ["Alt + N, V", "Ctrl + P", "Alt + P, T", "Ctrl + Shift + P"],
    "correctAnswer": "Alt + N, V"
  },
  {
    "question": "How do you refresh all pivot tables in a workbook?",
    "options": ["Alt + F5", "Ctrl + Alt + F5", "F5", "Ctrl + F5"],
    "correctAnswer": "Ctrl + Alt + F5"
  },
  {
    "question": "How do you clear all cell contents and formatting?",
    "options": ["Alt + H, E, A", "Ctrl + Shift + Delete", "Ctrl + Delete", "Alt + E, A"],
    "correctAnswer": "Alt + H, E, A"
  },
  {
    "question": "How do you repeat the last Find action?",
    "options": ["Shift + F4", "Ctrl + F4", "F4", "Alt + F4"],
    "correctAnswer": "Shift + F4"
  },
  {
    "question": "How do you insert a new comment in Excel 365 (modern comments)?",
    "options": ["Ctrl + Shift + M", "Shift + F2", "Ctrl + Alt + M", "Alt + M"],
    "correctAnswer": "Ctrl + Shift + M"
  },
  {
    "question": "How do you quickly add borders to a selected range?",
    "options": ["Ctrl + Shift + &", "Ctrl + B", "Ctrl + Shift + _", "Alt + B"],
    "correctAnswer": "Ctrl + Shift + &"
  },
  {
    "question": "How do you quickly remove borders from a selected range?",
    "options": ["Ctrl + Shift + _", "Ctrl + Shift + &", "Ctrl + U", "Alt + U"],
    "correctAnswer": "Ctrl + Shift + _"
  },
  {
    "question": "How do you activate the Ribbon's \"Tell Me\" search box?",
    "options": ["Alt + Q", "Ctrl + Q", "Shift + Q", "Alt + T"],
    "correctAnswer": "Alt + Q"
  },
  {
    "question": "How do you insert a line break inside a cell?",
    "options": ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Ctrl + Shift + Enter"],
    "correctAnswer": "Alt + Enter"
  },
  {
    "question": "How do you select non-adjacent cells or ranges?",
    "options": ["Hold Ctrl and click", "Hold Shift and click", "Hold Alt and click", "Hold Tab and click"],
    "correctAnswer": "Hold Ctrl and click"
  },
  {
    "question": "How do you hide the selected rows?",
    "options": ["Ctrl + 9", "Ctrl + 0", "Ctrl + H", "Ctrl + Shift + 9"],
    "correctAnswer": "Ctrl + 9"
  },
  {
    "question": "How do you hide the selected columns?",
    "options": ["Ctrl + 0", "Ctrl + 9", "Ctrl + H", "Ctrl + Shift + 0"],
    "correctAnswer": "Ctrl + 0"
  },
  {
    "question": "How do you unhide hidden rows?",
    "options": ["Select rows above and below, then Ctrl + Shift + 9", "Ctrl + 9", "Ctrl + Shift + 0", "Ctrl + 0"],
    "correctAnswer": "Select rows above and below, then Ctrl + Shift + 9"
  },
  {
    "question": "How do you unhide hidden columns?",
    "options": ["Select columns left and right, then Ctrl + Shift + 0", "Ctrl + 0", "Ctrl + Shift + 9", "Ctrl + 9"],
    "correctAnswer": "Select columns left and right, then Ctrl + Shift + 0"
  },
  {
    "question": "How do you insert a hyperlink using keyboard shortcuts?",
    "options": ["Ctrl + K", "Ctrl + L", "Ctrl + H", "Ctrl + Shift + K"],
    "correctAnswer": "Ctrl + K"
  },
  {
    "question": "How do you quickly select the entire column of the active cell?",
    "options": ["Ctrl + Space", "Shift + Space", "Alt + Space", "Ctrl + Shift + Space"],
    "correctAnswer": "Ctrl + Space"
  },
  {
    "question": "How do you quickly select the entire row of the active cell?",
    "options": ["Shift + Space", "Ctrl + Space", "Alt + Space", "Ctrl + Shift + Space"],
    "correctAnswer": "Shift + Space"
  },
  {
    "question": "How do you open the Format Cells dialog box?",
    "options": ["Ctrl + 1", "Ctrl + 2", "Ctrl + F1", "Alt + Enter"],
    "correctAnswer": "Ctrl + 1"
  },
  {
    "question": "How do you quickly apply or remove bold formatting to selected cells?",
    "options": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + Shift + B"],
    "correctAnswer": "Ctrl + B"
  },
  {
    "question": "How do you quickly apply or remove italic formatting?",
    "options": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + Shift + I"],
    "correctAnswer": "Ctrl + I"
  },
  {
    "question": "How do you quickly apply or remove underline formatting?",
    "options": ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + Shift + U"],
    "correctAnswer": "Ctrl + U"
  },
  {
    "question": "How do you open the Paste Special dialog box?",
    "options": ["Ctrl + Alt + V", "Ctrl + V", "Ctrl + Shift + V", "Alt + V"],
    "correctAnswer": "Ctrl + Alt + V"
  },
  {
    "question": "How do you insert the current date in a cell?",
    "options": ["Ctrl + ; (semicolon)", "Ctrl + Shift + ;", "Alt + D", "Ctrl + D"],
    "correctAnswer": "Ctrl + ; (semicolon)"
  },
  {
    "question": "How do you insert the current time in a cell?",
    "options": ["Ctrl + Shift + ;", "Ctrl + ;", "Alt + T", "Ctrl + T"],
    "correctAnswer": "Ctrl + Shift + ;"
  },
  {
    "question": "How do you switch between open Excel workbooks?",
    "options": ["Ctrl + Tab", "Alt + Tab", "Ctrl + F6", "Both A and C"],
    "correctAnswer": "Both A and C"
  },
  {
    "question": "How do you toggle the formula view on/off?",
    "options": ["Ctrl + (backtick)", "Ctrl + F3", "Alt + F3", "Ctrl + F1"],
    "correctAnswer": "Ctrl + (backtick)"
  },
  {
    "question": "How do you quickly insert a new row?",
    "options": ["Ctrl + Shift + \"+\"", "Ctrl + \"+\"", "Alt + I, R", "Shift + Alt + R"],
    "correctAnswer": "Ctrl + Shift + \"+\""
  },
  {
    "question": "How do you quickly insert a new column?",
    "options": ["Ctrl + Shift + \"+\"", "Ctrl + \"+\"", "Alt + I, C", "Shift + Alt + C"],
    "correctAnswer": "Ctrl + Shift + \"+\""
  },
  {
    "question": "How do you delete the selected row?",
    "options": ["Ctrl + \"-\" (minus)", "Ctrl + Shift + \"-\"", "Alt + E, D", "Ctrl + D"],
    "correctAnswer": "Ctrl + \"-\" (minus)"
  },
  {
    "question": "How do you delete the selected column?",
    "options": ["Ctrl + \"-\" (minus)", "Ctrl + Shift + \"-\"", "Alt + E, D", "Ctrl + D"],
    "correctAnswer": "Ctrl + \"-\" (minus)"
  },
  {
    "question": "How do you zoom in or out quickly?",
    "options": ["Ctrl + Mouse Wheel", "Ctrl + + / - keys", "Alt + Z", "Ctrl + Z"],
    "correctAnswer": "Ctrl + Mouse Wheel"
  },
  {
    "question": "How do you display the AutoFilter drop-down arrows?",
    "options": ["Ctrl + Shift + L", "Alt + D, F, F", "Both A and B", "Ctrl + F"],
    "correctAnswer": "Both A and B"
  },
  {
    "question": "How do you open the Spell Check dialog box?",
    "options": ["F7", "Ctrl + S", "Alt + S", "Ctrl + F7"],
    "correctAnswer": "F7"
  },
  {
    "question": "How do you select the current region around the active cell?",
    "options": ["Ctrl + Shift + *", "Ctrl + *", "Shift + *", "Ctrl + Shift + #"],
    "correctAnswer": "Ctrl + Shift + *"
  },
  {
    "question": "How do you open the Macro dialog box?",
    "options": ["Alt + F8", "Ctrl + M", "Ctrl + Shift + M", "Alt + M"],
    "correctAnswer": "Alt + F8"
  },
  {
    "question": "How do you insert the TODAY() function in a formula?",
    "options": ["=TODAY() then Enter", "Ctrl + Shift + T", "Alt + T", "Ctrl + Alt + T"],
    "correctAnswer": "=TODAY() then Enter"
  },
  {
    "question": "How do you open the Format Painter tool?",
    "options": ["Ctrl + Shift + C", "Ctrl + Alt + C", "Alt + H, F, P", "Ctrl + C then Ctrl + V"],
    "correctAnswer": "Alt + H, F, P"
  },
  {
    "question": "How do you select the last cell with data in a row?",
    "options": ["Ctrl + Right Arrow", "Ctrl + Left Arrow", "Shift + Right Arrow", "Ctrl + End"],
    "correctAnswer": "Ctrl + Right Arrow"
  },
  {
    "question": "How do you select the last cell with data in a column?",
    "options": ["Ctrl + Down Arrow", "Ctrl + Up Arrow", "Shift + Down Arrow", "Ctrl + End"],
    "correctAnswer": "Ctrl + Down Arrow"
  }
    ],
    hard: [
      {
    question: "How do you toggle absolute and relative references in a formula?",
    options: ["F4", "Ctrl + F4", "Shift + F4", "Alt + F4"],
    correctAnswer: "F4"
  },
  {
    question: "How do you enter the formula bar for editing?",
    options: ["F2", "F3", "Ctrl + F2", "Alt + F2"],
    correctAnswer: "F2"
  },
  {
    question: "How do you open the Name Manager dialog box?",
    options: ["Ctrl + F3", "Alt + F3", "Ctrl + Shift + F3", "F3"],
    correctAnswer: "Ctrl + F3"
  },
  {
    question: "How do you insert a comment in a cell?",
    options: ["Shift + F2", "Ctrl + F2", "Alt + F2", "F2"],
    correctAnswer: "Shift + F2"
  },
  {
    question: "How do you open the Go To dialog box?",
    options: ["Ctrl + G", "Ctrl + T", "Alt + G", "Ctrl + Shift + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you repeat the last action?",
    options: ["F4", "Ctrl + Y", "Ctrl + Z", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you insert the SUM function quickly?",
    options: ["Alt + =", "Ctrl + Shift + S", "Ctrl + =", "Alt + S"],
    correctAnswer: "Alt + ="
  },
  {
    question: "How do you open the Insert Function dialog box?",
    options: ["Shift + F3", "F3", "Ctrl + F3", "Alt + F3"],
    correctAnswer: "Shift + F3"
  },
  {
    question: "How do you cycle through absolute and mixed references in a formula?",
    options: ["F4", "F3", "Ctrl + F4", "Alt + F4"],
    correctAnswer: "F4"
  },
  {
    question: "How do you select visible cells only?",
    options: ["Alt + ;", "Ctrl + ;", "Shift + ;", "Ctrl + Shift + ;"],
    correctAnswer: "Alt + ;"
  },
  {
    question: "How do you open the Macro Recorder?",
    options: ["Alt + T, M, R", "Ctrl + R", "Ctrl + Shift + M", "Alt + R"],
    correctAnswer: "Alt + T, M, R"
  },
  {
    question: "How do you insert the current date and time as a static value?",
    options: ["Ctrl + ; then Space then Ctrl + Shift + ;", "Ctrl + Shift + ; then Ctrl + ;", "Alt + D", "Ctrl + T"],
    correctAnswer: "Ctrl + ; then Space then Ctrl + Shift + ;"
  },
  {
    question: "How do you open the Data Validation dialog box?",
    options: ["Alt + D, L", "Ctrl + D", "Alt + D, V", "Ctrl + L"],
    correctAnswer: "Alt + D, L"
  },
  {
    question: "How do you open the Consolidate dialog box?",
    options: ["Alt + D, N", "Ctrl + N", "Alt + D, C", "Ctrl + C"],
    correctAnswer: "Alt + D, N"
  },
  {
    question: "How do you select all cells that contain formulas?",
    options: ["Ctrl + G > Special > Formulas", "Ctrl + Shift + F", "Alt + F > S", "Ctrl + F3"],
    correctAnswer: "Ctrl + G > Special > Formulas"
  },
  {
    question: "How do you cycle through open workbooks?",
    options: ["Ctrl + F6", "Ctrl + Tab", "Alt + Tab", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you create a chart from selected data?",
    options: ["F11", "Ctrl + C then Ctrl + V", "Alt + C", "Ctrl + Alt + C"],
    correctAnswer: "F11"
  },
  {
    question: "How do you insert the TODAY() function without typing?",
    options: ["Ctrl + ; then backspace, then type TODAY()", "Use the Insert Function dialog (Shift + F3)", "Alt + T", "No shortcut exists"],
    correctAnswer: "Use the Insert Function dialog (Shift + F3)"
  },
  {
    question: "How do you open the Define Name dialog box?",
    options: ["Ctrl + F3", "Alt + F3", "Ctrl + Shift + F3", "F3"],
    correctAnswer: "Ctrl + F3"
  },
  {
    question: "How do you display the AutoSum menu?",
    options: ["Alt + =", "Ctrl + Shift + S", "Ctrl + =", "Alt + S"],
    correctAnswer: "Alt + ="
  },
  {
    question: "How do you fill selected cells with the contents of the cell above?",
    options: ["Ctrl + D", "Ctrl + R", "Alt + D", "Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you fill selected cells with the contents of the cell to the left?",
    options: ["Ctrl + R", "Ctrl + D", "Alt + R", "Shift + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you open the Remove Duplicates dialog?",
    options: ["Alt + A, M", "Ctrl + D", "Alt + A, R", "Ctrl + R"],
    correctAnswer: "Alt + A, M"
  },
  {
    question: "How do you open the Format as Table dialog?",
    options: ["Ctrl + T", "Ctrl + L", "Alt + T", "Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you open the Filter drop-down for a selected column?",
    options: ["Alt + Down Arrow", "Ctrl + Down Arrow", "Shift + Down Arrow", "Ctrl + Shift + Down Arrow"],
    correctAnswer: "Alt + Down Arrow"
  },
  {
    question: "How do you clear all filters on a worksheet?",
    options: ["Alt + A, C", "Ctrl + Shift + C", "Alt + A, F", "Ctrl + C"],
    correctAnswer: "Alt + A, C"
  },
  {
    question: "How do you open the Insert dialog box?",
    options: ["Ctrl + Shift + \"+\"", "Ctrl + \"+\"", "Alt + I", "Ctrl + I"],
    correctAnswer: "Ctrl + Shift + \"+\""
  },
  {
    question: "How do you open the Delete dialog box?",
    options: ["Ctrl + \"-\"", "Ctrl + Shift + \"-\"", "Alt + E, D", "Ctrl + D"],
    correctAnswer: "Ctrl + \"-\""
  },
  {
    question: "How do you toggle the display of formulas on the worksheet?",
    options: ["Ctrl + (backtick)", "Ctrl + F3", "Alt + F3", "Ctrl + F1"],
    correctAnswer: "Ctrl + (backtick)"
  },
  {
    question: "How do you open the Go To Special dialog?",
    options: ["Ctrl + G > Special", "Ctrl + Shift + G", "Alt + G", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + G > Special"
  },
  {
    question: "How do you open the Watch Window?",
    options: ["Alt + M, W", "Ctrl + W", "Alt + W", "Ctrl + Shift + W"],
    correctAnswer: "Alt + M, W"
  },
  {
    question: "How do you insert a hyperlink?",
    options: ["Ctrl + K", "Ctrl + H", "Alt + K", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you open the Spelling dialog?",
    options: ["F7", "Ctrl + S", "Alt + S", "Ctrl + F7"],
    correctAnswer: "F7"
  },
  {
    question: "How do you open the Create Table dialog box?",
    options: ["Ctrl + T", "Ctrl + L", "Alt + T", "Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you open the Insert Name dialog box?",
    options: ["Ctrl + Shift + F3", "Ctrl + F3", "Alt + F3", "F3"],
    correctAnswer: "Ctrl + Shift + F3"
  },
  {
    question: "How do you insert a new worksheet?",
    options: ["Shift + F11", "Ctrl + N", "Alt + N", "Ctrl + Shift + N"],
    correctAnswer: "Shift + F11"
  },
  {
    question: "How do you switch to the next worksheet?",
    options: ["Ctrl + Page Down", "Ctrl + Tab", "Alt + Page Down", "Shift + Page Down"],
    correctAnswer: "Ctrl + Page Down"
  },
  {
    question: "How do you switch to the previous worksheet?",
    options: ["Ctrl + Page Up", "Ctrl + Shift + Tab", "Alt + Page Up", "Shift + Page Up"],
    correctAnswer: "Ctrl + Page Up"
  },
  {
    question: "How do you open the Cell Format dialog box directly from the Home tab?",
    options: ["Ctrl + 1", "Alt + H, F, M", "Ctrl + F", "Alt + H, F, C"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "How do you start a new line within a cell?",
    options: ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Enter"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How do you select non-adjacent cells or ranges?",
    options: ["Ctrl + Click", "Shift + Click", "Alt + Click", "Ctrl + Shift + Click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "How do you open the Format Cells dialog box focused on the Alignment tab?",
    options: ["Ctrl + 1, then Alt + A", "Alt + H, A, L", "Ctrl + 1, then Alt + L", "Alt + H, F, A"],
    correctAnswer: "Ctrl + 1, then Alt + A"
  },
  {
    question: "How do you trace precedents in formulas?",
    options: ["Ctrl + [", "Ctrl + Shift + {", "Alt + M, P", "Ctrl + Alt + P"],
    correctAnswer: "Alt + M, P"
  },
  {
    question: "How do you trace dependents in formulas?",
    options: ["Alt + M, D", "Ctrl + ]", "Ctrl + Shift + }", "Alt + D"],
    correctAnswer: "Alt + M, D"
  },
  {
    question: "How do you remove arrows from traced formulas?",
    options: ["Alt + M, A, A", "Ctrl + Shift + A", "Alt + R, A", "Ctrl + Alt + R"],
    correctAnswer: "Alt + M, A, A"
  },
  {
    question: "How do you zoom in on a worksheet using the keyboard?",
    options: ["Ctrl + Alt + +", "Ctrl + Mouse Wheel Up", "Ctrl + Shift + =", "Alt + Z"],
    correctAnswer: "Ctrl + Mouse Wheel Up"
  },
  {
    question: "How do you zoom out using the keyboard?",
    options: ["Ctrl + Mouse Wheel Down", "Ctrl + -", "Ctrl + Alt + -", "Ctrl + Shift + -"],
    correctAnswer: "Ctrl + Mouse Wheel Down"
  },
  {
    question: "How do you evaluate a formula step by step?",
    options: ["Alt + M, V", "Alt + T, U, F", "F9", "Ctrl + Alt + F"],
    correctAnswer: "Alt + M, V"
  },
  {
    question: "How do you insert a new chart sheet?",
    options: ["F11", "Alt + F1", "Ctrl + N", "Shift + F11"],
    correctAnswer: "F11"
  },
  {
    question: "How do you insert a chart in the current worksheet?",
    options: ["Alt + F1", "F11", "Ctrl + F1", "Shift + F1"],
    correctAnswer: "Alt + F1"
  },
  {
    question: "How do you display the Insert dialog box for rows, columns, or cells?",
    options: ["Ctrl + Shift + +", "Ctrl + +", "Shift + F10, then I", "Alt + I"],
    correctAnswer: "Ctrl + Shift + +"
  },
  {
    question: "How do you create a table with headers automatically from selected data?",
    options: ["Ctrl + T", "Ctrl + L", "Alt + H, T", "Ctrl + Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you toggle filters on and off?",
    options: ["Ctrl + Shift + L", "Alt + A, T", "Ctrl + L", "Ctrl + F"],
    correctAnswer: "Ctrl + Shift + L"
  },
  {
    question: "How do you enter array formulas?",
    options: ["Ctrl + Shift + Enter", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
    correctAnswer: "Ctrl + Shift + Enter"
  },
  {
    question: "How do you insert the current time only (not date)?",
    options: ["Ctrl + Shift + ;", "Ctrl + ;", "Alt + Shift + ;", "Ctrl + T"],
    correctAnswer: "Ctrl + Shift + ;"
  },
  {
    question: "How do you collapse or expand the ribbon?",
    options: ["Ctrl + F1", "Alt + F1", "Ctrl + Shift + F1", "Alt + F"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "How do you calculate active worksheet formulas manually?",
    options: ["Shift + F9", "F9", "Ctrl + Alt + F9", "Alt + ="],
    correctAnswer: "Shift + F9"
  },
  {
    question: "How do you recalculate all worksheets manually?",
    options: ["F9", "Ctrl + Alt + F9", "Shift + F9", "Alt + F9"],
    correctAnswer: "F9"
  },
  {
    question: "How do you force a full calculation of all formulas in all worksheets?",
    options: ["Ctrl + Alt + F9", "Ctrl + Shift + F9", "Alt + F9", "Ctrl + F9"],
    correctAnswer: "Ctrl + Alt + F9"
  }
    ]
  },
  
  // Microsoft PowerPoint
  "Microsoft PowerPoint": {
    easy: [
      {
    question: "Which shortcut opens a new PowerPoint presentation?",
    options: ["Ctrl + N", "Ctrl + O", "Ctrl + P", "Alt + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "What is the shortcut to save a PowerPoint file?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "Alt + S", "Ctrl + P"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "Which shortcut opens an existing presentation?",
    options: ["Ctrl + O", "Ctrl + N", "Ctrl + P", "Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you close the current presentation?",
    options: ["Ctrl + W", "Ctrl + Q", "Alt + F4", "Shift + W"],
    correctAnswer: "Ctrl + W"
  },
  {
    question: "Which shortcut prints the presentation?",
    options: ["Ctrl + P", "Alt + P", "Shift + P", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the shortcut to undo an action?",
    options: ["Ctrl + Z", "Ctrl + Y", "Alt + Z", "Shift + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "Which shortcut redoes an undone action?",
    options: ["Ctrl + Y", "Ctrl + Shift + Y", "Alt + Y", "Ctrl + Z"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "How do you duplicate a selected slide?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Which shortcut selects all objects on a slide?",
    options: ["Ctrl + A", "Alt + A", "Shift + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you bold selected text?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Alt + B", "Ctrl + Alt + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "Which shortcut italicizes text?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Alt + I", "Ctrl + Alt + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What is the shortcut to underline text?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "Ctrl + Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Which shortcut aligns text to the left?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Ctrl + Alt + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "What is the shortcut for center-aligning text?",
    options: ["Ctrl + E", "Ctrl + Shift + E", "Alt + E", "Ctrl + Alt + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "Which shortcut aligns text to the right?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Ctrl + Alt + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you start a slideshow from the beginning?",
    options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
    correctAnswer: "F5"
  },
  {
    question: "Which shortcut starts a slideshow from the current slide?",
    options: ["Shift + F5", "Ctrl + F5", "Alt + F5", "F5"],
    correctAnswer: "Shift + F5"
  },
  {
    question: "What shortcut inserts a new slide?",
    options: ["Ctrl + M", "Ctrl + N", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "Which shortcut opens the slide sorter view?",
    options: ["Alt + V + D", "Ctrl + S", "Shift + D", "Alt + S"],
    correctAnswer: "Alt + V + D"
  },
  {
    question: "How do you switch to the next slide during a slideshow?",
    options: ["→ (Right Arrow)", "Shift + →", "Ctrl + →", "Alt + →"],
    correctAnswer: "→ (Right Arrow)"
  },
  {
    question: "How do you insert a text box in PowerPoint?",
    options: ["Alt + N, X", "Ctrl + T", "Alt + X", "Ctrl + Shift + X"],
    correctAnswer: "Alt + N, X"
  },
  {
    question: "Which shortcut inserts a new comment in PowerPoint?",
    options: ["Ctrl + Alt + M", "Ctrl + Shift + C", "Alt + N + M", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Alt + M"
  },
  {
    question: "How do you delete a selected slide?",
    options: ["Delete", "Ctrl + D", "Shift + Delete", "Ctrl + Shift + D"],
    correctAnswer: "Delete"
  },
  {
    question: "Which shortcut selects the next object on a slide?",
    options: ["Tab", "Ctrl + Tab", "Shift + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you group selected objects together?",
    options: ["Ctrl + G", "Alt + G", "Ctrl + Shift + G", "Shift + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you ungroup objects?",
    options: ["Ctrl + Shift + G", "Ctrl + U", "Alt + U", "Shift + G"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "What is the shortcut for inserting a hyperlink?",
    options: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Shift + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you insert a new shape?",
    options: ["Alt + N, S", "Ctrl + S", "Shift + S", "Ctrl + Shift + S"],
    correctAnswer: "Alt + N, S"
  },
  {
    question: "What shortcut aligns objects to the left?",
    options: ["Alt + H, G, L", "Ctrl + Shift + L", "Alt + L", "Ctrl + L"],
    correctAnswer: "Alt + H, G, L"
  },
  {
    question: "Which shortcut distributes selected objects evenly?",
    options: ["Alt + H, G, D", "Ctrl + Shift + D", "Ctrl + Alt + D", "Alt + D"],
    correctAnswer: "Alt + H, G, D"
  },
  {
    question: "Which shortcut hides the pointer during a presentation?",
    options: ["Ctrl + H", "Alt + H", "Shift + H", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How do you reveal a black screen during a slideshow?",
    options: ["B", "Ctrl + B", "Shift + B", "Alt + B"],
    correctAnswer: "B"
  },
  {
    question: "Which key pauses or resumes a presentation?",
    options: ["S", "P", "Ctrl + P", "Alt + S"],
    correctAnswer: "S"
  },
  {
    question: "Which shortcut opens the Notes pane?",
    options: ["Alt + W, P", "Ctrl + Shift + P", "Ctrl + Alt + N", "Shift + P"],
    correctAnswer: "Alt + W, P"
  },
  {
    question: "Which key advances to the next slide in Slideshow mode?",
    options: ["Right Arrow (→)", "Left Arrow (←)", "Up Arrow (↑)", "Shift + →"],
    correctAnswer: "Right Arrow (→)"
  },
  {
    question: "Which key returns to the previous slide in Slideshow mode?",
    options: ["Left Arrow (←)", "Right Arrow (→)", "Down Arrow (↓)", "Shift + ←"],
    correctAnswer: "Left Arrow (←)"
  },
  {
    question: "How do you exit Slideshow mode?",
    options: ["Esc", "Ctrl + Q", "Shift + Esc", "Alt + X"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you display the Pen tool during a presentation?",
    options: ["Ctrl + P", "Shift + P", "Ctrl + Alt + P", "Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What shortcut changes the Pen to the Eraser in a presentation?",
    options: ["E", "Shift + E", "Ctrl + E", "Alt + E"],
    correctAnswer: "E"
  },
  {
    question: "How do you quickly jump to a specific slide number in a presentation?",
    options: ["Type slide number + Enter", "Alt + Number", "Ctrl + Shift + Number", "Shift + Enter"],
    correctAnswer: "Type slide number + Enter"
  },
  {
    question: "How do you insert an image into a slide?",
    options: ["Alt + N, P", "Ctrl + I", "Ctrl + Shift + P", "Alt + P"],
    correctAnswer: "Alt + N, P"
  },
  {
    question: "Which shortcut moves an object forward in layering?",
    options: ["Ctrl + Shift + ]", "Ctrl + ]", "Ctrl + Shift + [", "Ctrl + Alt + ]"],
    correctAnswer: "Ctrl + Shift + ]"
  },
  {
    question: "How do you send an object backward in layering?",
    options: ["Ctrl + Shift + [", "Ctrl + [", "Ctrl + Shift + ]", "Shift + ["],
    correctAnswer: "Ctrl + Shift + ["
  },
  {
    question: "What is the shortcut to rotate an object?",
    options: ["Alt + Right/Left Arrow", "Ctrl + R", "Shift + R", "Ctrl + Shift + R"],
    correctAnswer: "Alt + Right/Left Arrow"
  },
  {
    question: "How do you insert a table in PowerPoint?",
    options: ["Alt + N, T", "Ctrl + T", "Shift + T", "Ctrl + Alt + T"],
    correctAnswer: "Alt + N, T"
  },
  {
    question: "What is the shortcut to open the Font dialog box?",
    options: ["Ctrl + Shift + F", "Ctrl + T", "Ctrl + Shift + T", "Alt + F"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "How do you open the Format Shape pane?",
    options: ["Ctrl + 1", "Ctrl + F", "Alt + F10", "Shift + F10"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "Which shortcut increases the font size of selected text?",
    options: ["Ctrl + Shift + >", "Ctrl + >", "Alt + >", "Ctrl + Alt + >"],
    correctAnswer: "Ctrl + Shift + >"
  },
  {
    question: "Which shortcut decreases the font size of selected text?",
    options: ["Ctrl + Shift + <", "Ctrl + <", "Alt + <", "Ctrl + Alt + <"],
    correctAnswer: "Ctrl + Shift + <"
  },
  {
    question: "What is the shortcut to insert a chart?",
    options: ["Alt + N, R", "Ctrl + R", "Alt + C", "Ctrl + Shift + R"],
    correctAnswer: "Alt + N, R"
  },
  {
    question: "Which shortcut opens the Help pane?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you open the Replace dialog box?",
    options: ["Ctrl + H", "Ctrl + R", "Ctrl + Shift + H", "Ctrl + F"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "Which shortcut opens the Find dialog box?",
    options: ["Ctrl + F", "Ctrl + Shift + F", "Alt + F", "Ctrl + H"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you insert a SmartArt graphic?",
    options: ["Alt + N, M", "Ctrl + M", "Alt + M", "Ctrl + Shift + M"],
    correctAnswer: "Alt + N, M"
  },
  {
    question: "What is the shortcut to insert a video?",
    options: ["Alt + N, V", "Ctrl + V", "Ctrl + Shift + V", "Alt + V"],
    correctAnswer: "Alt + N, V"
  },
  {
    question: "What is the shortcut to open the Animation Pane?",
    options: ["Alt + A, P", "Ctrl + A", "Ctrl + Shift + A", "Alt + Shift + A"],
    correctAnswer: "Alt + A, P"
  },
  {
    question: "How do you duplicate selected objects (not slides)?",
    options: ["Ctrl + Drag", "Alt + Drag", "Shift + Drag", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + Drag"
  },
  {
    question: "Which shortcut quickly switches between open presentations?",
    options: ["Ctrl + F6", "Alt + Tab", "Ctrl + Tab", "Ctrl + Shift + F6"],
    correctAnswer: "Ctrl + F6"
  },
  {
    question: "How do you check spelling in the presentation?",
    options: ["F7", "Ctrl + Shift + S", "Alt + F7", "Ctrl + F7"],
    correctAnswer: "F7"
  }
    ],
    medium: [
      {
    question: "Which shortcut applies a duplicate formatting style to another object?",
    options: ["Ctrl + Shift + C", "Ctrl + D", "Ctrl + Alt + C", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "Which key combination pastes only the formatting to another object?",
    options: ["Ctrl + Shift + V", "Ctrl + Alt + V", "Ctrl + D", "Ctrl + Alt + C"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "What shortcut moves an entire slide up in order?",
    options: ["Alt + Shift + Up Arrow", "Ctrl + Shift + Up Arrow", "Ctrl + Shift + L", "Shift + Up Arrow"],
    correctAnswer: "Alt + Shift + Up Arrow"
  },
  {
    question: "How do you move an entire slide down in order?",
    options: ["Alt + Shift + Down Arrow", "Ctrl + Down Arrow", "Shift + Down Arrow", "Ctrl + Shift + Down Arrow"],
    correctAnswer: "Alt + Shift + Down Arrow"
  },
  {
    question: "Which shortcut aligns text to the center inside a text box?",
    options: ["Ctrl + E", "Ctrl + C", "Ctrl + M", "Alt + Shift + C"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What shortcut applies a strikethrough effect to text?",
    options: ["Ctrl + T", "Ctrl + Shift + X", "Ctrl + 5", "Alt + T"],
    correctAnswer: "Ctrl + 5"
  },
  {
    question: "How do you create a new section in PowerPoint?",
    options: ["Ctrl + Shift + G", "Alt + S, G", "Ctrl + Shift + S", "Alt + H, S, G"],
    correctAnswer: "Alt + H, S, G"
  },
  {
    question: "Which shortcut quickly renames a section in PowerPoint?",
    options: ["Alt + H, S, R", "Ctrl + Shift + R", "Shift + R", "Alt + R"],
    correctAnswer: "Alt + H, S, R"
  },
  {
    question: "How do you insert a new SmartArt graphic?",
    options: ["Alt + N, M", "Ctrl + Shift + S", "Alt + G, M", "Ctrl + Shift + M"],
    correctAnswer: "Alt + N, M"
  },
  {
    question: "What shortcut inserts a new WordArt text box?",
    options: ["Alt + N, W", "Ctrl + W", "Shift + W", "Alt + Shift + W"],
    correctAnswer: "Alt + N, W"
  },
  {
    question: "How do you convert a shape into a freeform shape?",
    options: ["Edit Points", "Ctrl + Shift + E", "Ctrl + Shift + P", "Alt + E"],
    correctAnswer: "Edit Points"
  },
  {
    question: "Which shortcut groups multiple objects?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Shift + G", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you insert a text box inside a shape?",
    options: ["Click Shape → Right-click → Edit Text", "Ctrl + T", "Alt + Shift + T", "Ctrl + Shift + X"],
    correctAnswer: "Click Shape → Right-click → Edit Text"
  },
  {
    question: "Which shortcut aligns objects to the center of a slide?",
    options: ["Alt + H, G, C", "Ctrl + Shift + C", "Alt + C", "Ctrl + M"],
    correctAnswer: "Alt + H, G, C"
  },
  {
    question: "How do you distribute selected objects horizontally?",
    options: ["Alt + H, G, H", "Ctrl + Shift + H", "Shift + H", "Alt + Shift + H"],
    correctAnswer: "Alt + H, G, H"
  },
  {
    question: "What shortcut enables the Format Painter?",
    options: ["Ctrl + Shift + C", "Alt + H, F, P", "Ctrl + C", "Ctrl + Alt + P"],
    correctAnswer: "Alt + H, F, P"
  },
  {
    question: "How do you open the Selection Pane?",
    options: ["Alt + H, S, P", "Ctrl + Shift + P", "Shift + P", "Ctrl + Alt + P"],
    correctAnswer: "Alt + H, S, P"
  },
  {
    question: "How do you bring an object to the front?",
    options: ["Ctrl + Shift + ]", "Ctrl + ]", "Shift + F", "Ctrl + F"],
    correctAnswer: "Ctrl + Shift + ]"
  },
  {
    question: "Which shortcut sends an object to the back?",
    options: ["Ctrl + Shift + [", "Ctrl + [", "Shift + B", "Ctrl + B"],
    correctAnswer: "Ctrl + Shift + ["
  },
  {
    question: "How do you quickly lock an object in place?",
    options: ["Right-click → Lock", "Ctrl + L", "Ctrl + Shift + L", "Alt + Shift + L"],
    correctAnswer: "Right-click → Lock"
  },
  {
    question: "What shortcut applies a new theme to your slides?",
    options: ["Alt + G, T", "Ctrl + Shift + T", "Alt + Shift + T", "Ctrl + Alt + T"],
    correctAnswer: "Alt + G, T"
  },
  {
    question: "How do you reset a slide to its default layout?",
    options: ["Alt + H, R", "Ctrl + Shift + R", "Alt + Shift + L", "Ctrl + R"],
    correctAnswer: "Alt + H, R"
  },
  {
    question: "Which shortcut opens the Format Background pane?",
    options: ["Alt + G, F", "Ctrl + Shift + B", "Alt + H, B", "Ctrl + B"],
    correctAnswer: "Alt + G, F"
  },
  {
    question: "How do you apply a slide master to all slides?",
    options: ["Alt + G, M, A", "Ctrl + Shift + M", "Ctrl + Alt + M", "Shift + M"],
    correctAnswer: "Alt + G, M, A"
  },
  {
    question: "Which shortcut applies a specific color theme?",
    options: ["Alt + G, C", "Ctrl + Shift + C", "Alt + Shift + C", "Ctrl + C"],
    correctAnswer: "Alt + G, C"
  },
  {
    question: "How do you insert a footer on all slides?",
    options: ["Alt + N, H", "Ctrl + Shift + H", "Alt + Shift + H", "Ctrl + H"],
    correctAnswer: "Alt + N, H"
  },
  {
    question: "Which shortcut removes all slide transitions?",
    options: ["Alt + K, N", "Ctrl + Shift + X", "Alt + T, X", "Ctrl + T"],
    correctAnswer: "Alt + K, N"
  },
  {
    question: "How do you apply a pre-made transition to all slides?",
    options: ["Alt + K, A", "Ctrl + Shift + A", "Ctrl + Alt + T", "Shift + T"],
    correctAnswer: "Alt + K, A"
  },
  {
    question: "Which shortcut enables Slide Show View from the beginning?",
    options: ["F5", "Shift + F5", "Alt + S", "Ctrl + S"],
    correctAnswer: "F5"
  },
  {
    question: "What shortcut starts Slide Show View from the current slide?",
    options: ["Shift + F5", "F5", "Ctrl + Shift + S", "Alt + Shift + S"],
    correctAnswer: "Shift + F5"
  },
  {
    question: "Which shortcut opens the Animation Pane?",
    options: ["Alt + A, P", "Ctrl + Shift + A", "Shift + A", "Alt + Shift + A"],
    correctAnswer: "Alt + A, P"
  },
  {
    question: "How do you quickly apply an animation to an object?",
    options: ["Alt + A, A", "Ctrl + Shift + A", "Alt + Shift + A", "Ctrl + A"],
    correctAnswer: "Alt + A, A"
  },
  {
    question: "What shortcut inserts an audio file?",
    options: ["Alt + N, A", "Ctrl + Shift + A", "Ctrl + Alt + A", "Alt + Shift + A"],
    correctAnswer: "Alt + N, A"
  },
  {
    question: "How do you insert a video file into PowerPoint?",
    options: ["Alt + N, V", "Ctrl + Shift + V", "Alt + Shift + V", "Ctrl + V"],
    correctAnswer: "Alt + N, V"
  },
  {
    question: "What shortcut reorders animations on a slide?",
    options: ["Alt + A, R", "Ctrl + Shift + R", "Shift + A", "Alt + Shift + R"],
    correctAnswer: "Alt + A, R"
  },
  {
    question: "Which shortcut removes all animations from an object?",
    options: ["Alt + A, C", "Ctrl + Shift + X", "Ctrl + Shift + C", "Alt + X"],
    correctAnswer: "Alt + A, C"
  },
  {
    question: "How do you enable a motion path animation?",
    options: ["Alt + A, M", "Ctrl + Shift + M", "Alt + Shift + M", "Ctrl + M"],
    correctAnswer: "Alt + A, M"
  },
  {
    question: "Which shortcut changes animation duration?",
    options: ["Alt + A, D", "Ctrl + Shift + D", "Alt + Shift + D", "Ctrl + D"],
    correctAnswer: "Alt + A, D"
  },
  {
    question: "How do you add a trigger to an animation?",
    options: ["Alt + A, T", "Ctrl + Shift + T", "Alt + Shift + T", "Ctrl + T"],
    correctAnswer: "Alt + A, T"
  },
  {
    question: "Which shortcut previews an animation?",
    options: ["Alt + A, P", "Ctrl + Shift + P", "Alt + Shift + P", "Ctrl + P"],
    correctAnswer: "Alt + A, P"
  },
  {
    question: "Which shortcut opens the Comments pane?",
    options: ["Alt + R, C", "Ctrl + Shift + C", "Shift + C", "Alt + C"],
    correctAnswer: "Alt + R, C"
  },
  {
    question: "How do you share a PowerPoint presentation online?",
    options: ["Alt + F, H", "Ctrl + Shift + H", "Alt + Shift + H", "Ctrl + H"],
    correctAnswer: "Alt + F, H"
  },
  {
    question: "What shortcut saves the presentation as a PDF?",
    options: ["Alt + F, E, P", "Ctrl + Shift + P", "Alt + Shift + P", "Ctrl + P"],
    correctAnswer: "Alt + F, E, P"
  },
  {
    question: "Which shortcut opens the Notes pane?",
    options: ["Ctrl + Shift + N", "Alt + V, N", "Ctrl + N", "Alt + Shift + N"],
    correctAnswer: "Alt + V, N"
  },
  {
    question: "How do you insert a hyperlink in PowerPoint?",
    options: ["Ctrl + K", "Alt + K", "Shift + K", "Alt + H, K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What shortcut groups selected objects?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Alt + G", "Shift + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you ungroup objects?",
    options: ["Ctrl + Shift + G", "Alt + G", "Ctrl + G", "Shift + G"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "Which shortcut aligns selected objects?",
    options: ["Alt + H, G, A", "Ctrl + Shift + A", "Alt + A", "Shift + A"],
    correctAnswer: "Alt + H, G, A"
  },
  {
    question: "How do you distribute objects evenly on a slide?",
    options: ["Alt + H, G, D", "Ctrl + Shift + D", "Alt + D", "Ctrl + D"],
    correctAnswer: "Alt + H, G, D"
  },
  {
    question: "What shortcut toggles the Grid and Guides?",
    options: ["Shift + F9", "Ctrl + F9", "Alt + G, G", "Ctrl + Shift + G"],
    correctAnswer: "Shift + F9"
  },
  {
    question: "How do you open the Slide Master View?",
    options: ["Alt + W, M", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "Alt + W, M"
  },
  {
    question: "Which shortcut closes the Slide Master View?",
    options: ["Alt + W, C", "Ctrl + Shift + C", "Shift + C", "Alt + C"],
    correctAnswer: "Alt + W, C"
  },
  {
    question: "How do you duplicate a slide?",
    options: ["Ctrl + D", "Alt + D", "Shift + D", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Which shortcut opens Presenter View?",
    options: ["Alt + F5", "Shift + F5", "Ctrl + F5", "Alt + Shift + P"],
    correctAnswer: "Alt + F5"
  },
  {
    question: "How do you switch between slides in Presenter View?",
    options: ["Arrow Keys", "Ctrl + Tab", "Shift + Tab", "Ctrl + Shift + Arrow Keys"],
    correctAnswer: "Arrow Keys"
  },
  {
    question: "Which shortcut blacks out the screen during a presentation?",
    options: ["B", "Ctrl + B", "Shift + B", "Alt + B"],
    correctAnswer: "B"
  },
  {
    question: "How do you switch to the next slide in Slideshow mode?",
    options: ["Right Arrow / Spacebar", "Left Arrow", "Ctrl + Right Arrow", "Shift + Right Arrow"],
    correctAnswer: "Right Arrow / Spacebar"
  },
  {
    question: "What shortcut exits Slideshow mode?",
    options: ["Esc", "Ctrl + Esc", "Shift + Esc", "Alt + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you display a white screen during a presentation?",
    options: ["W", "Ctrl + W", "Shift + W", "Alt + W"],
    correctAnswer: "W"
  },
  {
    question: "Which shortcut opens the Print dialog?",
    options: ["Ctrl + P", "Alt + P", "Shift + P", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + P"
  }
    ],
    hard: [
      {
    question: "Which shortcut opens the Morph Transition pane?",
    options: ["Alt + G, M", "Ctrl + M", "Alt + H, M", "Shift + M"],
    correctAnswer: "Alt + G, M"
  },
  {
    question: "What shortcut inserts a new slide with the same layout as the selected slide?",
    options: ["Ctrl + Shift + M", "Alt + N, S", "Ctrl + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "Which shortcut jumps to the next placeholder or text box in a slide?",
    options: ["Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you open the Zoom dialog box?",
    options: ["Alt + W, Q", "Ctrl + W", "Alt + V, Z", "Shift + Q"],
    correctAnswer: "Alt + W, Q"
  },
  {
    question: "Which shortcut adds or removes a section break in Slide Sorter view?",
    options: ["Ctrl + Alt + S", "Alt + S, B", "Ctrl + Shift + S", "Alt + Shift + S"],
    correctAnswer: "Ctrl + Alt + S"
  },
  {
    question: "How do you open the Thesaurus pane?",
    options: ["Shift + F7", "Ctrl + F7", "Alt + R, T", "Ctrl + Shift + T"],
    correctAnswer: "Shift + F7"
  },
  {
    question: "Which shortcut opens the Master Slide view?",
    options: ["Alt + W, M", "Ctrl + M", "Alt + H, M", "Shift + M"],
    correctAnswer: "Alt + W, M"
  },
  {
    question: "How do you open the Notes Master view?",
    options: ["Alt + W, N", "Ctrl + N", "Alt + H, N", "Shift + N"],
    correctAnswer: "Alt + W, N"
  },
  {
    question: "Which shortcut opens the Handout Master view?",
    options: ["Alt + W, H", "Ctrl + H", "Alt + H, H", "Shift + H"],
    correctAnswer: "Alt + W, H"
  },
  {
    question: "How do you jump to Slide Sorter view?",
    options: ["Alt + W, I", "Ctrl + I", "Alt + H, I", "Shift + I"],
    correctAnswer: "Alt + W, I"
  },
  {
    question: "What shortcut opens the Comments pane?",
    options: ["Alt + R, C", "Ctrl + Shift + C", "Alt + C", "Shift + C"],
    correctAnswer: "Alt + R, C"
  },
  {
    question: "How do you add a new comment?",
    options: ["Ctrl + Alt + M", "Alt + N, M", "Ctrl + Shift + M", "Shift + M"],
    correctAnswer: "Ctrl + Alt + M"
  },
  {
    question: "Which shortcut replies to a selected comment?",
    options: ["Ctrl + Enter", "Alt + Enter", "Ctrl + R", "Shift + Enter"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "How do you open the Research task pane?",
    options: ["Alt + Shift + F7", "Ctrl + Shift + F7", "Alt + R, F", "Shift + F7"],
    correctAnswer: "Alt + Shift + F7"
  },
  {
    question: "What shortcut opens the Slide Show toolbar during a presentation?",
    options: ["Ctrl + Shift + F10", "Alt + S, T", "Ctrl + F10", "Shift + F10"],
    correctAnswer: "Ctrl + Shift + F10"
  },
  {
    question: "How do you rehearse timings for the slide show?",
    options: ["Alt + S, W", "Ctrl + R", "Alt + R, W", "Shift + W"],
    correctAnswer: "Alt + S, W"
  },
  {
    question: "What shortcut goes to the first slide during a slide show?",
    options: ["Home", "Ctrl + Home", "Alt + Home", "Shift + Home"],
    correctAnswer: "Home"
  },
  {
    question: "Which shortcut goes to the last slide during a slide show?",
    options: ["End", "Ctrl + End", "Alt + End", "Shift + End"],
    correctAnswer: "End"
  },
  {
    question: "How do you hide or unhide the current slide during a presentation?",
    options: ["Ctrl + H", "Alt + H", "Ctrl + Shift + H", "Shift + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "What shortcut blacks or unblacks the screen during a slide show?",
    options: ["B or . (period key)", "Ctrl + B", "Alt + B", "Shift + B"],
    correctAnswer: "B or . (period key)"
  },
  {
    question: "How do you white or unwhite the screen during a slide show?",
    options: ["W or , (comma key)", "Ctrl + W", "Alt + W", "Shift + W"],
    correctAnswer: "W or , (comma key)"
  },
  {
    question: "Which shortcut resets a slide to its default layout?",
    options: ["Ctrl + Shift + R", "Alt + H, L", "Ctrl + R", "Shift + R"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "How do you open the Slide Master Fonts dialog?",
    options: ["Alt + G, F, F", "Ctrl + Shift + F", "Alt + H, F", "Shift + F"],
    correctAnswer: "Alt + G, F, F"
  },
  {
    question: "What shortcut opens the Slide Master Colors dialog?",
    options: ["Alt + G, F, C", "Ctrl + Shift + C", "Alt + H, C", "Shift + C"],
    correctAnswer: "Alt + G, F, C"
  },
  {
    question: "How do you open the Slide Master Effects dialog?",
    options: ["Alt + G, F, E", "Ctrl + Shift + E", "Alt + H, E", "Shift + E"],
    correctAnswer: "Alt + G, F, E"
  },
  {
    question: "Which shortcut opens the Slide Master Background Styles?",
    options: ["Alt + G, B, S", "Ctrl + B", "Alt + H, B", "Shift + B"],
    correctAnswer: "Alt + G, B, S"
  },
  {
    question: "How do you toggle between the Outline and Slides tabs in Normal view?",
    options: ["Ctrl + Shift + Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "Which shortcut aligns selected objects to the center horizontally?",
    options: ["Alt + H, G, A, C", "Ctrl + E", "Alt + G, A, C", "Shift + C"],
    correctAnswer: "Alt + H, G, A, C"
  },
  {
    question: "How do you group selected objects?",
    options: ["Ctrl + G", "Alt + G", "Ctrl + Shift + G", "Shift + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you ungroup selected grouped objects?",
    options: ["Ctrl + Shift + G", "Ctrl + U", "Alt + Shift + G", "Shift + U"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "What shortcut locks the aspect ratio while resizing a shape?",
    options: ["Shift + drag the corner handle", "Ctrl + drag", "Alt + drag", "Shift + Ctrl + drag"],
    correctAnswer: "Shift + drag the corner handle"
  },
  {
    question: "How do you open the Format Shape pane for a selected object?",
    options: ["Alt + J, D, F", "Ctrl + Shift + F", "Alt + H, F, P", "Shift + F"],
    correctAnswer: "Alt + J, D, F"
  },
  {
    question: "Which shortcut opens the Align menu for selected objects?",
    options: ["Alt + H, G, A", "Ctrl + A", "Alt + A", "Shift + A"],
    correctAnswer: "Alt + H, G, A"
  },
  {
    question: "How do you move a selected object by small increments (nudge)?",
    options: ["Arrow keys", "Ctrl + Arrow keys", "Alt + Arrow keys", "Shift + Arrow keys"],
    correctAnswer: "Arrow keys"
  },
  {
    question: "How do you move a selected object by larger increments?",
    options: ["Shift + Arrow keys", "Ctrl + Arrow keys", "Alt + Arrow keys", "Shift + Ctrl + Arrow keys"],
    correctAnswer: "Shift + Arrow keys"
  },
  {
    question: "Which shortcut applies the Reuse Slides feature to import slides from another presentation?",
    options: ["Alt + H, I, R", "Ctrl + Shift + R", "Alt + R, S", "Shift + R"],
    correctAnswer: "Alt + H, I, R"
  },
  {
    question: "What shortcut opens the Format Background pane?",
    options: ["Alt + G, B", "Ctrl + Shift + B", "Alt + H, B", "Ctrl + B"],
    correctAnswer: "Alt + G, B"
  },
  {
    question: "Which shortcut applies a custom animation effect to an object?",
    options: ["Alt + A, A", "Ctrl + Shift + A", "Alt + H, A", "Ctrl + A"],
    correctAnswer: "Alt + A, A"
  },
  {
    question: "How do you navigate to a specific slide during a presentation using the keyboard?",
    options: ["Type the slide number and press Enter", "Ctrl + Slide Number", "Shift + Slide Number", "Alt + Slide Number"],
    correctAnswer: "Type the slide number and press Enter"
  },
  {
    question: "Which shortcut selects all text in a placeholder?",
    options: ["Ctrl + A (twice)", "Alt + A", "Shift + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A (twice)"
  },
  {
    question: "What shortcut opens the Selection Pane?",
    options: ["Alt + H, S, P", "Ctrl + Shift + S", "Alt + V, S", "Shift + S"],
    correctAnswer: "Alt + H, S, P"
  },
  {
    question: "How do you show or hide gridlines in PowerPoint?",
    options: ["Shift + F9", "Ctrl + G", "Alt + G", "Ctrl + Shift + G"],
    correctAnswer: "Shift + F9"
  },
  {
    question: "What shortcut opens the Slide Show Set Up dialog?",
    options: ["Alt + S, S", "Ctrl + Shift + S", "Alt + H, S", "Shift + S"],
    correctAnswer: "Alt + S, S"
  },
  {
    question: "How do you apply SmartArt graphics using a shortcut?",
    options: ["Alt + N, M", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "Alt + N, M"
  },
  {
    question: "Which shortcut collapses all sections in PowerPoint?",
    options: ["Alt + H, S, C", "Ctrl + Shift + C", "Alt + C", "Shift + C"],
    correctAnswer: "Alt + H, S, C"
  },
  {
    question: "What shortcut starts recording the Slide Show from the current slide?",
    options: ["Alt + S, R, C", "Ctrl + Shift + R", "Alt + H, R", "Shift + R"],
    correctAnswer: "Alt + S, R, C"
  },
  {
    question: "Which shortcut toggles subtitles on or off during a slideshow?",
    options: ["J", "Ctrl + J", "Alt + J", "Shift + J"],
    correctAnswer: "J"
  },
  {
    question: "How do you insert an online video using a shortcut?",
    options: ["Alt + N, V", "Ctrl + Shift + V", "Alt + V", "Ctrl + V"],
    correctAnswer: "Alt + N, V"
  },
  {
    question: "Which shortcut duplicates an animation effect?",
    options: ["Alt + A, D", "Ctrl + D", "Shift + D", "Alt + D"],
    correctAnswer: "Alt + A, D"
  },
  {
    question: "How do you display the Animation Pane?",
    options: ["Alt + A, P", "Ctrl + Shift + P", "Alt + P", "Ctrl + P"],
    correctAnswer: "Alt + A, P"
  },
  {
    question: "What shortcut opens the Spelling and Grammar check?",
    options: ["F7", "Ctrl + Shift + S", "Alt + S", "Shift + S"],
    correctAnswer: "F7"
  },
  {
    question: "How do you quickly create a summary zoom slide?",
    options: ["Alt + N, Z, S", "Ctrl + Shift + Z", "Alt + S, Z", "Shift + Z"],
    correctAnswer: "Alt + N, Z, S"
  },
  {
    question: "Which shortcut converts a slide into a Section Header?",
    options: ["Alt + H, S, H", "Ctrl + Shift + H", "Alt + H, H", "Shift + H"],
    correctAnswer: "Alt + H, S, H"
  },
  {
    question: "What shortcut moves a slide up in the slide order?",
    options: ["Alt + Shift + Up Arrow", "Ctrl + Shift + Up Arrow", "Alt + Up Arrow", "Shift + Up Arrow"],
    correctAnswer: "Alt + Shift + Up Arrow"
  },
  {
    question: "What is the keyboard shortcut to start a slideshow from the current slide?",
    options: ["Shift+F5", "Ctrl+F5", "Alt+F5", "F5"],
    correctAnswer: "Shift+F5"
  },
  {
    question: "What is the keyboard shortcut to duplicate the selected slide?",
    options: ["Ctrl+D", "Ctrl+Shift+D", "Alt+D", "Shift+D"],
    correctAnswer: "Ctrl+D"
  },
  {
    question: "What is the keyboard shortcut to open the Find dialog?",
    options: ["Ctrl+F", "Alt+F", "Shift+F", "F3"],
    correctAnswer: "Ctrl+F"
  },
  {
    question: "What is the keyboard shortcut to open the Replace dialog?",
    options: ["Ctrl+H", "Alt+H", "Shift+H", "F3"],
    correctAnswer: "Ctrl+H"
  },
  {
    question: "What is the keyboard shortcut to hide the cursor and navigation button during a slideshow?",
    options: ["Ctrl+H", "H", "Alt+H", "Shift+H"],
    correctAnswer: "H"
  },
  {
    question: "What is the keyboard shortcut to advance to the next animation or slide?",
    options: ["Space or Right Arrow", "Enter", "Tab", "N"],
    correctAnswer: "Space or Right Arrow"
  },
  {
    question: "What is the keyboard shortcut to go back to the previous animation or slide?",
    options: ["Backspace or Left Arrow", "Page Up", "B", "P"],
    correctAnswer: "Backspace or Left Arrow"
  }
    ]
  },
  
  "Microsoft Outlook": {
    easy: [
      {
    question: "Which shortcut opens a new email message in Microsoft Outlook?",
    options: ["Ctrl + N", "Ctrl + M", "Ctrl + E", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "What is the shortcut to reply to an email?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Ctrl + F", "Alt + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you forward an email using a shortcut?",
    options: ["Ctrl + F", "Ctrl + Shift + F", "Alt + F", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Which shortcut sends an email?",
    options: ["Ctrl + S", "Ctrl + Enter", "Alt + S", "Shift + Enter"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How can you open the address book in Outlook?",
    options: ["Ctrl + A", "Ctrl + Shift + B", "Alt + B", "Shift + A"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "What shortcut moves to the next email in the inbox?",
    options: ["Ctrl + N", "Ctrl + Shift + →", "Ctrl + →", "Down Arrow"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "How do you check for new emails?",
    options: ["Ctrl + R", "F9", "Shift + N", "Alt + E"],
    correctAnswer: "F9"
  },
  {
    question: "How do you delete an email?",
    options: ["Delete", "Ctrl + D", "Shift + D", "Backspace"],
    correctAnswer: "Delete"
  },
  {
    question: "What is the shortcut to print an email?",
    options: ["Ctrl + P", "Alt + P", "Ctrl + Shift + P", "Shift + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you mark an email as read?",
    options: ["Ctrl + Q", "Alt + R", "Ctrl + M", "Shift + Q"],
    correctAnswer: "Ctrl + Q"
  },
  {
    question: "What is the shortcut to mark an email as unread?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + Shift + R", "Shift + U"],
    correctAnswer: "Ctrl + Shift + U"
  },
  {
    question: "How do you move an email to a folder?",
    options: ["Ctrl + Shift + M", "Ctrl + Shift + V", "Alt + M", "Shift + F"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "What is the shortcut to open the calendar in Outlook?",
    options: ["Ctrl + C", "Ctrl + 2", "Ctrl + Shift + C", "Alt + 2"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "How do you create a new appointment in the calendar?",
    options: ["Ctrl + A", "Ctrl + N", "Ctrl + Shift + A", "Alt + N"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "How do you switch to the Mail view?",
    options: ["Ctrl + 1", "Ctrl + M", "Ctrl + Shift + M", "Alt + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "What shortcut allows you to open contacts in Outlook?",
    options: ["Ctrl + 3", "Alt + 3", "Ctrl + Shift + 3", "Shift + C"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "How do you send an email with high importance?",
    options: ["Ctrl + H", "Alt + H", "Ctrl + Shift + I", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "How do you quickly search for an email in Outlook?",
    options: ["Ctrl + F", "Ctrl + E", "Alt + S", "Shift + S"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What is the shortcut to move an email to junk?",
    options: ["Shift + J", "Ctrl + Shift + J", "Ctrl + J", "Ctrl + Alt + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "How do you open the To-Do list in Outlook?",
    options: ["Ctrl + 4", "Alt + T", "Ctrl + Shift + T", "Ctrl + 5"],
    correctAnswer: "Ctrl + 4"
  },
  {
    question: "What is the shortcut to create a new meeting request?",
    options: ["Ctrl + Shift + M", "Ctrl + Shift + Q", "Alt + Q", "Ctrl + Q"],
    correctAnswer: "Ctrl + Shift + Q"
  },
  {
    question: "How do you expand the ribbon in Outlook?",
    options: ["Ctrl + Shift + R", "Ctrl + F1", "Alt + Shift + R", "Shift + F1"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "What shortcut flags an email for follow-up?",
    options: ["Ctrl + Shift + G", "Ctrl + G", "Alt + F", "Shift + G"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "How do you open the Outbox?",
    options: ["Ctrl + O", "Alt + O", "Ctrl + Shift + O", "Shift + O"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "How do you add a BCC field in an email?",
    options: ["Ctrl + Shift + B", "Ctrl + Shift + C", "Alt + B", "Shift + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "What shortcut allows you to open the Sent Items folder?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + 5", "Alt + S"],
    correctAnswer: "Ctrl + 5"
  },
  {
    question: "How do you create a new folder in Outlook?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Alt + F", "Shift + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you move between email panes?",
    options: ["F6", "Shift + Tab", "Ctrl + →", "Alt + →"],
    correctAnswer: "F6"
  },
  {
    question: "What shortcut allows you to check spelling in an email?",
    options: ["F7", "Ctrl + S", "Alt + S", "Shift + F7"],
    correctAnswer: "F7"
  },
  {
    question: "How do you open the Drafts folder?",
    options: ["Ctrl + Shift + D", "Ctrl + 6", "Alt + D", "Shift + D"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "What is the shortcut to create a new task in Outlook?",
    options: ["Ctrl + N", "Ctrl + Shift + K", "Alt + T", "Ctrl + T"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "How do you mark an email as completed?",
    options: ["Ctrl + Enter", "Ctrl + Shift + C", "Shift + F12", "Ctrl + Shift + G"],
    correctAnswer: "Shift + F12"
  },
  {
    question: "What is the shortcut to select all emails in a folder?",
    options: ["Ctrl + A", "Shift + A", "Ctrl + Shift + A", "Alt + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you switch to the Notes view in Outlook?",
    options: ["Ctrl + 6", "Ctrl + 7", "Alt + N", "Shift + N"],
    correctAnswer: "Ctrl + 7"
  },
  {
    question: "What shortcut allows you to move to the previous email?",
    options: ["Up Arrow", "Shift + Tab", "Ctrl + ↑", "Alt + P"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you reply to all recipients of an email?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Ctrl + Alt + R", "Shift + R"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "What is the shortcut to close Outlook?",
    options: ["Alt + F4", "Ctrl + W", "Shift + F4", "Alt + Q"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "What is the shortcut to minimize Outlook?",
    options: ["Ctrl + M", "Alt + Space, N", "Shift + M", "Ctrl + Space, M"],
    correctAnswer: "Alt + Space, N"
  },
  {
    question: "How do you insert a hyperlink in an email?",
    options: ["Ctrl + H", "Ctrl + K", "Ctrl + Shift + H", "Alt + H"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What is the shortcut to send an email immediately?",
    options: ["Ctrl + Shift + S", "Alt + S", "Ctrl + Enter", "Shift + Enter"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How do you open the Help menu in Outlook?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you toggle the navigation pane in Outlook?",
    options: ["Ctrl + Shift + N", "Alt + F1", "Ctrl + Shift + P", "Shift + N"],
    correctAnswer: "Alt + F1"
  },
  {
    question: "What is the shortcut to open the Options menu in Outlook?",
    options: ["Ctrl + O", "Alt + T, O", "Ctrl + Shift + O", "Alt + F4"],
    correctAnswer: "Alt + T, O"
  },
  {
    question: "How do you go to the Inbox quickly?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Shift + I", "Alt + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What shortcut allows you to expand all groups in an email list?",
    options: ["Alt + →", "Ctrl + Shift + →", "Shift + →", "Alt + Shift + →"],
    correctAnswer: "Ctrl + Shift + →"
  },
  {
    question: "How do you collapse all groups in an email list?",
    options: ["Alt + ←", "Ctrl + Shift + ←", "Shift + ←", "Ctrl + ←"],
    correctAnswer: "Ctrl + Shift + ←"
  },
  {
    question: "How do you attach a file to an email?",
    options: ["Ctrl + Shift + A", "Alt + I", "Ctrl + Shift + F", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "How do you create a new journal entry in Outlook?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Alt + J", "Shift + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "What is the shortcut to insert a new contact in Outlook?",
    options: ["Ctrl + Shift + C", "Ctrl + N", "Alt + C", "Shift + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you refresh the Outlook window?",
    options: ["Ctrl + R", "F5", "Alt + R", "Shift + R"],
    correctAnswer: "F5"
  },
  {
    question: "What shortcut opens the Reminders window?",
    options: ["Ctrl + Shift + R", "Ctrl + Shift + O", "Ctrl + Shift + W", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Shift + W"
  },
  {
    question: "What is the shortcut to find a contact?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + F", "Ctrl + Shift + D", "Alt + F"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "How do you toggle the Reading Pane?",
    options: ["Alt + V, P", "Ctrl + Shift + R", "Ctrl + P", "Shift + P"],
    correctAnswer: "Alt + V, P"
  },
  {
    question: "How do you move to the next unread email?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + Shift + ]", "Shift + ]"],
    correctAnswer: "Ctrl + Shift + ]"
  },
  {
    question: "What is the shortcut to mark an email with a follow-up flag?",
    options: ["Ctrl + Shift + G", "Ctrl + Shift + F", "Ctrl + Shift + U", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "How do you access the Junk Email settings?",
    options: ["Ctrl + Shift + J", "Alt + J", "Ctrl + Alt + J", "Shift + J"],
    correctAnswer: "Ctrl + Alt + J"
  },
  {
    question: "How do you quickly open the Drafts folder?",
    options: ["Ctrl + Shift + D", "Ctrl + 6", "Alt + D", "Shift + D"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "How do you open the Outbox folder?",
    options: ["Ctrl + Shift + O", "Ctrl + 7", "Alt + O", "Shift + O"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "How do you navigate between the main sections (Mail, Calendar, People, etc.) in Outlook?",
    options: ["Ctrl + Tab", "Ctrl + 1, 2, 3, etc.", "Alt + →", "Ctrl + →"],
    correctAnswer: "Ctrl + 1, 2, 3, etc."
  },
  {
    question: "How do you switch to the Tasks view in Outlook?",
    options: ["Ctrl + 5", "Alt + T", "Ctrl + Shift + T", "Ctrl + 6"],
    correctAnswer: "Ctrl + 5"
  }
    ],
    medium: [
     {
  question: "Which keyboard shortcut is used to compose a new email in Outlook?",
  options: ["Ctrl + N", "Ctrl + Shift + M", "Alt + M", "Shift + E"],
  correctAnswer: "Ctrl + Shift + M"
},
{
  question: "What is the shortcut to reply to an email in Microsoft Outlook?",
  options: ["Ctrl + R", "Alt + H, R, P", "Ctrl + Shift + R", "Alt + P"],
  correctAnswer: "Alt + H, R, P"
},
{
  question: "Which shortcut lets you reply to all recipients of an email?",
  options: ["Ctrl + Shift + R", "Ctrl + R", "Alt + H, R, A", "Alt + A"],
  correctAnswer: "Alt + H, R, A"
},
{
  question: "How do you forward an email using a shortcut?",
  options: ["Alt + H, F, W", "Ctrl + F", "Ctrl + Shift + F", "Shift + Alt + F"],
  correctAnswer: "Alt + H, F, W"
},
{
  question: "Which command moves the selected email to another folder?",
  options: ["Alt + H, V", "Alt + M", "Alt + H, M, V", "Ctrl + Shift + M"],
  correctAnswer: "Alt + H, M, V"
},
{
  question: "What does Ctrl + Shift + Y do in Outlook?",
  options: ["Move email to Junk", "Create a rule", "Copy email to a folder", "Create new calendar"],
  correctAnswer: "Copy email to a folder"
},
{
  question: "Which shortcut marks a message with high importance?",
  options: ["Ctrl + Shift + H", "Alt + H, I", "Ctrl + Shift + I", "Ctrl + Alt + I"],
  correctAnswer: "Ctrl + Shift + I"
},
{
  question: "What is the function of Ctrl + Shift + L?",
  options: ["Create a contact", "Create a distribution list", "Send to multiple people", "View all contacts"],
  correctAnswer: "Create a distribution list"
},
{
  question: "Which shortcut opens the Advanced Find dialog box?",
  options: ["Ctrl + E", "Ctrl + Shift + F", "Ctrl + Alt + F", "Shift + F3"],
  correctAnswer: "Ctrl + Shift + F"
},
{
  question: "What does Ctrl + Shift + G do in Outlook?",
  options: ["Open Groups", "Flag for follow-up", "Mark as unread", "Send later"],
  correctAnswer: "Flag for follow-up"
},
{
  question: "Which shortcut opens the address book?",
  options: ["Ctrl + Shift + B", "Alt + B", "Ctrl + B", "Alt + Shift + B"],
  correctAnswer: "Ctrl + Shift + B"
},
{
  question: "What does the shortcut Ctrl + 1 do in Outlook?",
  options: ["Opens Calendar", "Opens Mail", "Opens Tasks", "Opens Notes"],
  correctAnswer: "Opens Mail"
},
{
  question: "Which shortcut is used to open the Calendar view?",
  options: ["Ctrl + 2", "Ctrl + Alt + 2", "Alt + C", "Shift + 2"],
  correctAnswer: "Ctrl + 2"
},
{
  question: "What is the shortcut to open Contacts in Outlook?",
  options: ["Ctrl + 5", "Ctrl + 3", "Ctrl + Alt + C", "Alt + 3"],
  correctAnswer: "Ctrl + 3"
},
{
  question: "Which shortcut switches to the Tasks view?",
  options: ["Ctrl + 5", "Ctrl + 4", "Ctrl + 6", "Ctrl + T"],
  correctAnswer: "Ctrl + 4"
},
{
  question: "What does Ctrl + Shift + K do in Outlook?",
  options: ["Create a new contact", "Create a new task", "Create a new calendar event", "Create a new rule"],
  correctAnswer: "Create a new task"
},
{
  question: "Which shortcut allows you to check names when composing a message?",
  options: ["Ctrl + K", "Alt + K", "Shift + K", "Ctrl + Shift + K"],
  correctAnswer: "Ctrl + K"
},
{
  question: "What does Alt + S do while composing an email?",
  options: ["Save the email", "Send the email", "Schedule the email", "Spell check"],
  correctAnswer: "Send the email"
},
{
  question: "What is the shortcut for opening the Send/Receive All Folders command?",
  options: ["Ctrl + Shift + S", "F9", "Ctrl + Alt + F9", "Alt + F5"],
  correctAnswer: "F9"
},
{
  question: "Which shortcut lets you open a new appointment window?",
  options: ["Ctrl + Shift + A", "Alt + A", "Shift + F2", "Ctrl + A"],
  correctAnswer: "Ctrl + Shift + A"
},
{
  question: "How do you open the Journal folder using a shortcut?",
  options: ["Ctrl + 8", "Ctrl + J", "Alt + 8", "Shift + J"],
  correctAnswer: "Ctrl + 8"
},
{
  question: "What does Ctrl + Q do in Outlook?",
  options: ["Close window", "Mark email as read", "Send quick message", "Quarantine email"],
  correctAnswer: "Mark email as read"
},
{
  question: "What is the shortcut for printing the current item?",
  options: ["Ctrl + P", "Alt + P", "Ctrl + Shift + P", "Ctrl + Alt + P"],
  correctAnswer: "Ctrl + P"
},
{
  question: "Which shortcut creates a meeting request from an email?",
  options: ["Ctrl + Alt + M", "Ctrl + Shift + Q", "Ctrl + M", "Alt + Shift + Q"],
  correctAnswer: "Ctrl + Shift + Q"
},
{
  question: "What does Ctrl + Shift + C do in Outlook?",
  options: ["Create a contact", "Copy email content", "Create category", "Mark as confidential"],
  correctAnswer: "Create a contact"
},
{
  question: "Which shortcut is used to open Notes?",
  options: ["Ctrl + 5", "Ctrl + 6", "Ctrl + 8", "Ctrl + 7"],
  correctAnswer: "Ctrl + 7"
},
{
  question: "What is the shortcut to delete an item permanently (bypassing Deleted Items)?",
  options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Ctrl + Shift + Delete"],
  correctAnswer: "Shift + Delete"
},
{
  question: "What is the shortcut for saving a draft?",
  options: ["Ctrl + S", "Alt + S", "Shift + S", "Ctrl + D"],
  correctAnswer: "Ctrl + S"
},
{
  question: "Which shortcut allows you to expand or collapse the Navigation Pane?",
  options: ["Alt + F1", "Ctrl + F1", "Shift + F1", "F11"],
  correctAnswer: "Alt + F1"
},
{
  question: "What does Ctrl + U do in Outlook?",
  options: ["Mark as unread", "Underline text", "Undo", "Upload attachment"],
  correctAnswer: "Mark as unread"
},
{
  question: "Which shortcut applies underline formatting to selected text?",
  options: ["Ctrl + Shift + U", "Ctrl + U", "Alt + U", "Shift + U"],
  correctAnswer: "Ctrl + U"
},
{
  question: "What does Ctrl + F do when an email is open?",
  options: ["Forward the email", "Find text", "Forward as attachment", "Find sender"],
  correctAnswer: "Forward the email"
},
{
  question: "What is the shortcut to open the To-Do Bar?",
  options: ["Alt + F2", "Alt + 2", "Alt + V, B", "Ctrl + 2"],
  correctAnswer: "Alt + V, B"
},
{
  question: "What does Ctrl + E do in Outlook?",
  options: ["Search current folder", "Edit message", "End appointment", "Exit Outlook"],
  correctAnswer: "Search current folder"
},
{
  question: "Which shortcut switches to Folder List view?",
  options: ["Ctrl + 6", "Ctrl + 5", "Ctrl + F", "Ctrl + Shift + 6"],
  correctAnswer: "Ctrl + 6"
},
{
  question: "Which shortcut switches to Shortcuts view?",
  options: ["Ctrl + 7", "Ctrl + Shift + 7", "Alt + 7", "Ctrl + Alt + 7"],
  correctAnswer: "Ctrl + 7"
},
{
  question: "What does Ctrl + D do in Outlook?",
  options: ["Delete selected message", "Draft a reply", "Download attachments", "Display contacts"],
  correctAnswer: "Delete selected message"
},
{
  question: "How can you mark a message as not junk using a shortcut?",
  options: ["Ctrl + Alt + J", "Ctrl + Shift + J", "Ctrl + J", "There is no default shortcut"],
  correctAnswer: "There is no default shortcut"
},
{
  question: "What does Ctrl + N do in Outlook?",
  options: ["Compose a new message", "Create new calendar event", "New item in current folder", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Which shortcut opens the Rules and Alerts dialog?",
  options: ["Ctrl + Shift + R", "Alt + F, I, R", "Alt + F, T, R", "There is no default shortcut"],
  correctAnswer: "There is no default shortcut"
},
{
  question: "Which shortcut allows replying with a meeting?",
  options: ["Ctrl + Alt + R", "Ctrl + Shift + M", "Ctrl + Alt + R", "No default shortcut"],
  correctAnswer: "No default shortcut"
},
{
  question: "What does pressing Esc do in most Outlook windows?",
  options: ["Cancel current operation", "Exit Outlook", "Delete item", "Save and close"],
  correctAnswer: "Cancel current operation"
},
{
  question: "What is the shortcut to mark a message for follow-up with Today's date?",
  options: ["Ctrl + Shift + G", "Insert + T", "Alt + H, G", "There is no shortcut"],
  correctAnswer: "Ctrl + Shift + G"
},
{
  question: "Which shortcut lets you open the Outbox?",
  options: ["Ctrl + O", "Ctrl + Alt + O", "There is no default shortcut", "Ctrl + Shift + O"],
  correctAnswer: "There is no default shortcut"
},
{
  question: "How can you insert a hyperlink using a shortcut?",
  options: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + Shift + K"],
  correctAnswer: "Ctrl + K"
},
{
  question: "Which shortcut opens the File tab (Backstage View)?",
  options: ["Alt + F", "Ctrl + F", "Alt + B", "Ctrl + Alt + F"],
  correctAnswer: "Alt + F"
},
{
  question: "What does Ctrl + Shift + J do?",
  options: ["Create Journal Entry", "Join Meeting", "Jump to Calendar", "No function assigned"],
  correctAnswer: "Create Journal Entry"
},
{
  question: "Which shortcut minimizes the Ribbon?",
  options: ["Ctrl + F1", "Alt + F1", "Ctrl + R", "Shift + F1"],
  correctAnswer: "Ctrl + F1"
},
{
  question: "How do you open the Options menu in Outlook?",
  options: ["Alt + F, T", "Ctrl + Shift + O", "Ctrl + Alt + T", "Ctrl + O"],
  correctAnswer: "Alt + F, T"
},
{
  question: "What does Ctrl + Shift + E do in Outlook?",
  options: ["Create new folder", "Edit contact", "Export emails", "Empty trash"],
  correctAnswer: "Create new folder"
},
{
  question: "What does Ctrl + Shift + S do?",
  options: ["Open Send/Receive Groups", "Save all", "Schedule message", "Start new session"],
  correctAnswer: "Open Send/Receive Groups"
},
{
  question: "What shortcut is used to open Calendar in a new window?",
  options: ["Right-click > Open in New Window", "Ctrl + Shift + 2", "There is no default shortcut", "Alt + N"],
  correctAnswer: "There is no default shortcut"
},
{
  question: "What is the shortcut to jump to Today in Calendar view?",
  options: ["Alt + H, O, D", "Ctrl + T", "Ctrl + Shift + T", "Alt + H, T"],
  correctAnswer: "Ctrl + T"
},
{
  question: "How to open Help in Outlook?",
  options: ["F1", "Alt + H", "Ctrl + H", "Shift + F1"],
  correctAnswer: "F1"
},
{
  question: "What shortcut opens the Reading Pane options?",
  options: ["Alt + V, P", "Alt + V, A", "Alt + V, R", "There is no default shortcut"],
  correctAnswer: "Alt + V, P"
},
{
  question: "What does Ctrl + Shift + N do?",
  options: ["Create a new note", "Create new folder", "Start new rule", "New notebook"],
  correctAnswer: "Create a new note"
},
{
  question: "What shortcut jumps to the next unread message?",
  options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + >", "Ctrl + Alt + U"],
  correctAnswer: "Ctrl + >"
},
{
  question: "What does Alt + H, M, R do?",
  options: ["Move email to folder", "Mark as read", "Create a rule", "Reply with meeting"],
  correctAnswer: "Reply with meeting"
},
{
  question: "Which shortcut sends an Outlook item via email?",
  options: ["Ctrl + Shift + E", "Ctrl + F", "Ctrl + Alt + M", "There is no default shortcut"],
  correctAnswer: "There is no default shortcut"
},
{
  question: "What is the shortcut to expand a collapsed conversation?",
  options: ["Right arrow", "Ctrl + Shift + +", "Alt + Right arrow", "Shift + >"],
  correctAnswer: "Right arrow"
}
    ],
    hard: [
      {
    question: "Which Outlook feature allows you to set up automatic responses when you're out of the office?",
    options: ["AutoArchive", "Quick Steps", "Rules", "Automatic Replies"],
    correctAnswer: "Automatic Replies"
  },
  {
    question: "What is the purpose of the 'Clean Up' feature in Outlook?",
    options: ["To delete duplicate emails in a conversation", "To permanently delete all emails", "To archive old emails", "To compress email attachments"],
    correctAnswer: "To delete duplicate emails in a conversation"
  },
  {
    question: "Which Outlook feature allows you to send an email at a later time?",
    options: ["Delay Delivery", "Send Later", "Postpone Email", "Email Scheduler"],
    correctAnswer: "Delay Delivery"
  },
  {
    question: "What does the 'Recall This Message' feature do in Outlook?",
    options: ["Deletes the email from the recipient's inbox", "Sends a follow-up email", "Marks the email as important", "Flags the email for follow-up"],
    correctAnswer: "Deletes the email from the recipient's inbox"
  },
  {
    question: "Which Outlook feature allows you to create a reusable email template?",
    options: ["Quick Parts", "Quick Steps", "AutoText", "Mail Merge"],
    correctAnswer: "Quick Parts"
  },
  {
    question: "In Outlook, what is the purpose of the 'Journal' feature?",
    options: ["To record meetings", "To track actions associated with contacts", "To schedule tasks", "To create notes"],
    correctAnswer: "To track actions associated with contacts"
  },
  {
    question: "Which feature allows you to view multiple calendars side by side in Outlook?",
    options: ["Overlay Mode", "Side-by-Side View", "Split View", "Calendar Groups"],
    correctAnswer: "Side-by-Side View"
  },
  {
    question: "What is the function of the 'Clutter' folder in Outlook?",
    options: ["Stores spam emails", "Stores emails marked as low priority", "Stores deleted items", "Stores archived emails"],
    correctAnswer: "Stores emails marked as low priority"
  },
  {
    question: "Which Outlook feature helps in managing multiple email accounts in one place?",
    options: ["Unified Inbox", "Account Aggregator", "Mail Merge", "Linked Mailboxes"],
    correctAnswer: "Unified Inbox"
  },
  {
    question: "What does the 'AutoArchive' feature do in Outlook?",
    options: ["Automatically deletes old emails", "Moves old items to an archive folder", "Compresses large attachments", "Sends reminders for old emails"],
    correctAnswer: "Moves old items to an archive folder"
  },
  {
    question: "Which Outlook element is used to assign color categories for better email organization?",
    options: ["Labels", "Tags", "Categories", "Flags"],
    correctAnswer: "Categories"
  },
  {
    question: "What file extension does Outlook use for offline storage of emails, calendar, and contacts?",
    options: [".ost", ".pst", ".mbox", ".olm"],
    correctAnswer: ".pst"
  },
  {
    question: "Which feature in Outlook allows conditional formatting of emails based on custom rules?",
    options: ["Smart Views", "Color Rules", "Conditional Formatting", "Rule Highlighting"],
    correctAnswer: "Conditional Formatting"
  },
  {
    question: "What must be enabled to use the 'Send As' permission in Outlook?",
    options: ["Read Receipts", "Full Mailbox Access", "Delegate Access", "Shared Mailbox Permissions"],
    correctAnswer: "Shared Mailbox Permissions"
  },
  {
    question: "How can you assign tasks to others within Outlook?",
    options: ["Forward as Task", "Create Shared Task", "Assign Task", "Send Task Invite"],
    correctAnswer: "Assign Task"
  },
  {
    question: "What is the purpose of the 'Focused Inbox' in Outlook?",
    options: ["It hides low-priority emails", "It merges multiple inboxes", "It filters important emails into a separate tab", "It deletes junk emails automatically"],
    correctAnswer: "It filters important emails into a separate tab"
  },
  {
    question: "What is the maximum attachment size supported in Outlook desktop without cloud storage?",
    options: ["10 MB", "20 MB", "25 MB", "50 MB"],
    correctAnswer: "25 MB"
  },
  {
    question: "Which Outlook view allows you to see emails grouped by conversation?",
    options: ["Compact View", "Classic View", "Threaded View", "Conversation View"],
    correctAnswer: "Conversation View"
  },
  {
    question: "Where can you find the 'Quick Steps' feature in Outlook?",
    options: ["Folder tab", "File tab", "Home tab", "View tab"],
    correctAnswer: "Home tab"
  },
  {
    question: "What permission must be granted to allow someone to manage your calendar?",
    options: ["Read Only", "Full Access", "Delegate Access", "Editor Access"],
    correctAnswer: "Delegate Access"
  },
  {
    question: "Which protocol does Outlook typically use for Microsoft Exchange accounts?",
    options: ["POP3", "SMTP", "IMAP", "MAPI"],
    correctAnswer: "MAPI"
  },
  {
    question: "Which tab would you use to schedule a recurring meeting in Outlook?",
    options: ["Insert", "Home", "Meeting", "Recurrence"],
    correctAnswer: "Meeting"
  },
  {
    question: "What Outlook function allows viewing of emails from all configured accounts in one folder?",
    options: ["Merged Inbox", "Universal View", "All Mail Folder", "Unified Inbox"],
    correctAnswer: "Unified Inbox"
  },
  {
    question: "Which Outlook feature lets you convert an email into a task?",
    options: ["Drag to Calendar", "Flag for Follow-up", "Quick Step", "Drag to Tasks"],
    correctAnswer: "Drag to Tasks"
  },
  {
    question: "Which view in Calendar displays all appointments for a single day by hour?",
    options: ["Work Week", "Timeline", "Daily View", "Schedule View"],
    correctAnswer: "Daily View"
  },
  {
    question: "How can you delay sending an email until a specific time?",
    options: ["Draft Save", "Message Timer", "Delay Delivery", "Scheduled Send"],
    correctAnswer: "Delay Delivery"
  },
  {
    question: "Which tool is used for managing PST file size in Outlook?",
    options: ["Cleanup Wizard", "Compact Now", "Archive Settings", "PST Manager"],
    correctAnswer: "Compact Now"
  },
  {
    question: "Where can you manage rules for auto-moving emails in Outlook?",
    options: ["View tab → Sorting", "File → Options → Rules", "Home tab → Rules", "Send/Receive tab → Filters"],
    correctAnswer: "Home tab → Rules"
  },
  {
    question: "What function allows you to use keyboard shortcuts for actions like replying or forwarding?",
    options: ["Quick Keys", "Hotkeys", "Quick Steps", "Action Shortcuts"],
    correctAnswer: "Quick Steps"
  },
  {
    question: "Which Outlook pane shows your calendar, people, and tasks without switching tabs?",
    options: ["To-Do Bar", "Navigation Bar", "Peek Pane", "Reading Pane"],
    correctAnswer: "To-Do Bar"
  },
  {
    question: "Which feature lets you assign color-coded flags to differentiate tasks?",
    options: ["Task Highlight", "Color Flag", "Categories", "Follow-up Flags"],
    correctAnswer: "Follow-up Flags"
  },
  {
    question: "What's the purpose of 'Cached Exchange Mode' in Outlook?",
    options: ["Improves online access", "Encrypts emails", "Stores mailbox data offline", "Connects only to POP accounts"],
    correctAnswer: "Stores mailbox data offline"
  },
  {
    question: "Which file format is used to export Outlook data?",
    options: [".csv", ".xml", ".msg", ".pst"],
    correctAnswer: ".pst"
  },
  {
    question: "What is required to recall an email successfully in Outlook?",
    options: ["Sent to multiple recipients", "Read receipt must be disabled", "Recipient must be on the same Exchange server", "Email must be older than one hour"],
    correctAnswer: "Recipient must be on the same Exchange server"
  },
  {
    question: "Where can you create custom email signatures in Outlook?",
    options: ["File → Mail → Customize", "Home → Message Settings", "File → Options → Mail → Signatures", "Insert → Signature"],
    correctAnswer: "File → Options → Mail → Signatures"
  },
  {
    question: "What Outlook component helps manage and organize frequent email replies?",
    options: ["Templates", "Signatures", "Quick Parts", "Snippets"],
    correctAnswer: "Quick Parts"
  },
  {
    question: "Which permission level allows someone to send emails on your behalf?",
    options: ["Editor", "Delegate", "Reviewer", "Author"],
    correctAnswer: "Delegate"
  },
  {
    question: "In Outlook, how do you mark a contact as a favorite?",
    options: ["Click on Star Icon", "Right-click and select 'Set Favorite'", "Drag to Favorites Folder", "Add to Favorites in People View"],
    correctAnswer: "Add to Favorites in People View"
  },
  {
    question: "Which component stores information about meetings, tasks, and reminders?",
    options: ["Calendar", "Taskbar", "Journal", "Activity Log"],
    correctAnswer: "Calendar"
  },
  {
    question: "Which of the following is NOT a valid folder in Outlook by default?",
    options: ["Inbox", "Outbox", "Sent Items", "Downloads"],
    correctAnswer: "Downloads"
  },
  {
    question: "How do you turn off 'Focused Inbox' in Outlook?",
    options: ["File → Options", "View tab → Show Focused Inbox", "Home tab → Preferences", "Tools → Inbox Settings"],
    correctAnswer: "View tab → Show Focused Inbox"
  },
  {
    question: "What is the shortcut to open a new mail message in Outlook?",
    options: ["Ctrl + N", "Ctrl + Shift + M", "Alt + N", "Ctrl + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "Which Outlook folder stores unsent messages?",
    options: ["Drafts", "Outbox", "Sent Items", "Inbox"],
    correctAnswer: "Outbox"
  },
  {
    question: "How can you display the calendar in the navigation pane?",
    options: ["View → Navigation Pane", "File → Navigation Settings", "Home → Display Calendar", "Folder → Show Calendar"],
    correctAnswer: "View → Navigation Pane"
  },
  {
    question: "What happens if you disable Cached Exchange Mode?",
    options: ["You can't send emails", "You can't access offline content", "Your calendar stops syncing", "You lose contact data"],
    correctAnswer: "You can't access offline content"
  },
  {
    question: "Which format is supported when importing contacts into Outlook?",
    options: [".docx", ".xls", ".csv", ".xml"],
    correctAnswer: ".csv"
  },
  {
    question: "Which ribbon tab is used for setting up rules in Outlook?",
    options: ["File", "View", "Home", "Folder"],
    correctAnswer: "Home"
  },
  {
    question: "What is the main purpose of the Reading Pane?",
    options: ["Compose emails", "Preview messages without opening", "Filter spam", "Archive emails"],
    correctAnswer: "Preview messages without opening"
  },
  {
    question: "Which option is used to attach your calendar to an email?",
    options: ["Share → Email Calendar", "Calendar Tools → Email", "File → Share Calendar", "Insert → Calendar"],
    correctAnswer: "Share → Email Calendar"
  },
  {
    question: "What is the maximum number of rules you can create in Outlook (typically)?",
    options: ["25", "50", "100", "256"],
    correctAnswer: "100"
  },
  {
    question: "Where can you view the mailbox size in Outlook?",
    options: ["File → Account Settings", "File → Tools → Mailbox Cleanup", "Folder → Storage", "View → Mailbox Tools"],
    correctAnswer: "File → Tools → Mailbox Cleanup"
  },
  {
    question: "What Outlook feature auto-suggests frequently used email recipients?",
    options: ["Contact Cache", "AutoSuggest", "AutoComplete", "SmartRecipient"],
    correctAnswer: "AutoComplete"
  },
  {
    question: "Which default calendar view displays the full month?",
    options: ["Weekly", "Agenda", "Timeline", "Monthly"],
    correctAnswer: "Monthly"
  },
  {
    question: "In Outlook, how can you automatically add holidays to your calendar?",
    options: ["Calendar Options → Add Holidays", "File → Options → Add Holidays", "Tools → Preferences → Holidays", "Calendar Tab → Holiday Import"],
    correctAnswer: "File → Options → Add Holidays"
  },
  {
    question: "Which folder cannot be manually deleted in Outlook?",
    options: ["Archive", "Inbox", "Sent Items", "Deleted Items"],
    correctAnswer: "Inbox"
  },
  {
    question: "Which method allows backup of all Outlook emails?",
    options: ["Export to CSV", "Export to PDF", "Export to PST", "Sync with Gmail"],
    correctAnswer: "Export to PST"
  },
  {
    question: "Where can you enable the Bcc field when composing a message?",
    options: ["File → Mail → Show Bcc", "Options → Bcc", "View → Display Fields", "Developer → Bcc Options"],
    correctAnswer: "Options → Bcc"
  },
  {
    question: "Which command lets you permanently delete selected emails?",
    options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete twice"],
    correctAnswer: "Shift + Delete"
  },
  {
    question: "In Outlook, how can you mark an email as unread?",
    options: ["Right-click → Mark as New", "Right-click → Mark as Unread", "Double-click email", "Move to Inbox"],
    correctAnswer: "Right-click → Mark as Unread"
  },
  {
    question: "Which Outlook feature helps manage meeting room bookings?",
    options: ["Meeting Organizer", "Room Finder", "Room Manager", "Calendar Sync"],
    correctAnswer: "Room Finder"
  }
    ]
  },


"Microsoft OneNote": {
    easy: [
       {
    question: "How do you create a new page in OneNote?",
    options: ["Ctrl + N", "Ctrl + P", "Ctrl + Shift + N", "Alt + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you bold selected text?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Alt + B", "Ctrl + Alt + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How do you italicize selected text?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Alt + I", "Ctrl + Alt + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "How do you underline selected text?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "Ctrl + Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you create a new notebook?",
    options: ["Ctrl + Shift + M", "Ctrl + Shift + N", "Ctrl + Alt + N", "Ctrl + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you insert a checkbox (to-do tag)?",
    options: ["Ctrl + 1", "Ctrl + Shift + C", "Alt + 1", "Ctrl + Alt + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "How do you undo an action?",
    options: ["Ctrl + Z", "Alt + Z", "Ctrl + U", "Ctrl + Shift + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "How do you redo an undone action?",
    options: ["Ctrl + Y", "Ctrl + Shift + Z", "Alt + Y", "Ctrl + R"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "How do you insert the current date?",
    options: ["Alt + Shift + D", "Ctrl + ;", "Ctrl + Shift + D", "Ctrl + D"],
    correctAnswer: "Alt + Shift + D"
  },
  {
    question: "How do you insert the current time?",
    options: ["Alt + Shift + T", "Ctrl + :", "Ctrl + Shift + T", "Ctrl + T"],
    correctAnswer: "Alt + Shift + T"
  },
  {
    question: "How do you create a bulleted list?",
    options: ["Ctrl + .", "Ctrl + Shift + B", "Ctrl + Alt + L", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + ."
  },
  {
    question: "How do you create a numbered list?",
    options: ["Ctrl + /", "Ctrl + Shift + O", "Ctrl + / or Ctrl + Shift + .", "Ctrl + Shift + /"],
    correctAnswer: "Ctrl + / or Ctrl + Shift + ."
  },
  {
    question: "How do you add a new section?",
    options: ["Ctrl + T", "Ctrl + Shift + A", "Alt + S", "Ctrl + Q"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you go to the next page in a section?",
    options: ["Ctrl + Page Down", "Alt + Page Down", "Shift + Page Down", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + Page Down"
  },
  {
    question: "How do you go to the previous page in a section?",
    options: ["Ctrl + Page Up", "Alt + Page Up", "Shift + Page Up", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + Page Up"
  },
  {
    question: "How do you open a notebook?",
    options: ["Ctrl + O", "Ctrl + N", "Ctrl + Shift + O", "Ctrl + Alt + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you save a OneNote page?",
    options: ["Automatically saved", "Ctrl + S", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "Automatically saved"
  },
  {
    question: "How do you search in all notebooks?",
    options: ["Ctrl + E", "Ctrl + F", "Ctrl + H", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you search on the current page?",
    options: ["Ctrl + F", "Alt + F", "Ctrl + E", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you add a hyperlink?",
    options: ["Ctrl + K", "Alt + K", "Ctrl + H", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you create a subpage?",
    options: ["Ctrl + Shift + Alt + N", "Ctrl + Shift + M", "Right-click the page and select 'Make Subpage'", "Alt + Shift + M"],
    correctAnswer: "Right-click the page and select 'Make Subpage'"
  },
  {
    question: "How do you move a page up?",
    options: ["Alt + Shift + Up Arrow", "Ctrl + Shift + Up Arrow", "Ctrl + Alt + Up Arrow", "Ctrl + Up Arrow"],
    correctAnswer: "Alt + Shift + Up Arrow"
  },
  {
    question: "How do you move a page down?",
    options: ["Alt + Shift + Down Arrow", "Ctrl + Shift + Down Arrow", "Ctrl + Down Arrow", "Alt + Down Arrow"],
    correctAnswer: "Alt + Shift + Down Arrow"
  },
  {
    question: "How do you zoom in?",
    options: ["Ctrl + =", "Ctrl + Mouse Wheel Up", "Ctrl + Shift + =", "Ctrl + Shift + Plus"],
    correctAnswer: "Ctrl + Mouse Wheel Up"
  },
  {
    question: "How do you zoom out?",
    options: ["Ctrl + Mouse Wheel Down", "Ctrl + -", "Ctrl + Shift + -", "Alt + Down"],
    correctAnswer: "Ctrl + Mouse Wheel Down"
  },
  {
    question: "How do you copy selected content?",
    options: ["Ctrl + C", "Alt + C", "Ctrl + Shift + C", "Ctrl + Insert"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you cut selected content?",
    options: ["Ctrl + X", "Alt + X", "Shift + Delete", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "How do you paste content?",
    options: ["Ctrl + V", "Shift + Insert", "Alt + V", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "How do you select all content?",
    options: ["Ctrl + A", "Alt + A", "Ctrl + Shift + A", "Ctrl + Alt + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you delete selected text?",
    options: ["Delete", "Backspace", "Ctrl + D", "Ctrl + Delete"],
    correctAnswer: "Delete"
  },
  {
    question: "How do you open the Tags summary pane?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Alt + T", "Ctrl + Alt + T"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "How do you toggle full page view?",
    options: ["F11", "Ctrl + F11", "Alt + F11", "Ctrl + Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you switch between open notebooks?",
    options: ["Ctrl + Tab", "Ctrl + N", "Ctrl + Shift + Tab", "Alt + Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "How do you insert a table?",
    options: ["Ctrl + T", "Tab (in a blank line)", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "Tab (in a blank line)"
  },
  {
    question: "How do you apply a heading style?",
    options: ["Ctrl + Alt + 1", "Ctrl + 1", "Ctrl + Shift + 1", "Alt + 1"],
    correctAnswer: "Ctrl + Alt + 1"
  },
  {
    question: "How do you navigate between containers on a page?",
    options: ["Tab / Shift + Tab", "Arrow keys", "Alt + Tab", "Ctrl + Tab"],
    correctAnswer: "Tab / Shift + Tab"
  },
  {
    question: "How do you indent a paragraph?",
    options: ["Tab", "Ctrl + M", "Ctrl + Tab", "Alt + M"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you un-indent a paragraph?",
    options: ["Shift + Tab", "Ctrl + Shift + Tab", "Alt + Shift + Tab", "Ctrl + Backspace"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "How do you insert a line break without a new paragraph?",
    options: ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Ctrl + Shift + Enter"],
    correctAnswer: "Shift + Enter"
  },
  {
    question: "How do you open OneNote options/settings?",
    options: ["File > Options", "Ctrl + ,", "Alt + F, T", "Ctrl + Alt + O"],
    correctAnswer: "File > Options"
  },
  {
    question: "How do you insert a screen clipping into a page?",
    options: ["Windows + Shift + S", "Ctrl + Shift + S", "Alt + N + S", "Ctrl + Alt + S"],
    correctAnswer: "Windows + Shift + S"
  },
  {
    question: "How do you apply strikethrough to selected text?",
    options: ["Ctrl + -", "Ctrl + 5", "Alt + Shift + S", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + 5"
  },
  {
    question: "How do you print a OneNote page?",
    options: ["Ctrl + P", "Alt + P", "Ctrl + Shift + P", "Ctrl + Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you center-align text?",
    options: ["Ctrl + E", "Ctrl + C", "Ctrl + M", "Alt + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you left-align text?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Ctrl + J"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How do you right-align text?",
    options: ["Ctrl + R", "Ctrl + Alt + R", "Ctrl + Shift + R", "Alt + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you justify text in OneNote?",
    options: ["Ctrl + J", "Alt + J", "Ctrl + Shift + J", "Ctrl + Alt + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "How do you collapse or expand a page group?",
    options: ["Click the arrow next to the page group", "Ctrl + -", "Alt + Left Arrow", "Ctrl + Shift + -"],
    correctAnswer: "Click the arrow next to the page group"
  },
  {
    question: "How do you create a new line in the same container?",
    options: ["Enter", "Shift + Enter", "Ctrl + Enter", "Alt + Enter"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you switch between tabs in the ribbon?",
    options: ["Alt", "Ctrl + Tab", "Tab", "Shift + Tab"],
    correctAnswer: "Alt"
  },
  {
    question: "How do you insert a file attachment?",
    options: ["Alt + N, F", "Ctrl + Shift + F", "Ctrl + Alt + F", "Alt + F"],
    correctAnswer: "Alt + N, F"
  },
  {
    question: "How do you insert a file printout?",
    options: ["Alt + N, O", "Ctrl + O", "Ctrl + Shift + P", "Alt + P"],
    correctAnswer: "Alt + N, O"
  },
  {
    question: "How do you insert a picture from a file?",
    options: ["Alt + N, P", "Ctrl + P", "Ctrl + Shift + P", "Ctrl + Shift + G"],
    correctAnswer: "Alt + N, P"
  },
  {
    question: "How do you insert a table quickly with keyboard?",
    options: ["Press Tab on a new line", "Ctrl + Shift + T", "Ctrl + T", "Alt + T"],
    correctAnswer: "Press Tab on a new line"
  },
  {
    question: "How do you toggle the ribbon on and off?",
    options: ["Ctrl + F1", "Alt + F1", "Ctrl + Shift + F1", "Ctrl + Alt + R"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "How do you select a word?",
    options: ["Double-click the word", "Ctrl + Click", "Alt + W", "Shift + Arrow keys"],
    correctAnswer: "Double-click the word"
  },
  {
    question: "How do you select a paragraph?",
    options: ["Triple-click the paragraph", "Ctrl + Shift + A", "Alt + P", "Ctrl + A"],
    correctAnswer: "Triple-click the paragraph"
  },
  {
    question: "How do you delete a page?",
    options: ["Right-click the page and select \"Delete\"", "Ctrl + D", "Alt + Delete", "Shift + Delete"],
    correctAnswer: "Right-click the page and select \"Delete\""
  },
  {
    question: "How do you navigate to the previous section?",
    options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Ctrl + Left Arrow", "Alt + Left Arrow"],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "How do you navigate to the next section?",
    options: ["Ctrl + Tab", "Ctrl + Page Down", "Ctrl + Right Arrow", "Alt + Right Arrow"],
    correctAnswer: "Ctrl + Tab"
  }
    ],
    medium: [
      {
    question: "How do you apply a subheading style to selected text in OneNote?",
    options: ["Ctrl + Alt + 2", "Ctrl + Shift + 2", "Ctrl + 2", "Alt + H + 2"],
    correctAnswer: "Ctrl + Alt + 2"
  },
  {
    question: "How do you apply a third-level heading in OneNote?",
    options: ["Ctrl + Alt + 3", "Ctrl + 3", "Alt + 3", "Ctrl + Shift + 3"],
    correctAnswer: "Ctrl + Alt + 3"
  },
  {
    question: "How do you mark a note as important?",
    options: ["Ctrl + 2", "Ctrl + Shift + 2", "Alt + 2", "Ctrl + Alt + I"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "How do you create a bulleted list in OneNote?",
    options: ["Ctrl + .", "Ctrl + Shift + B", "Ctrl + 8", "Ctrl + *"],
    correctAnswer: "Ctrl + ."
  },
  {
    question: "How do you create a numbered list in OneNote?",
    options: ["Ctrl + /", "Ctrl + / (forward slash)", "Ctrl + Shift + 7", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + /"
  },
  {
    question: "How do you convert selected text into a to-do tag?",
    options: ["Ctrl + 1", "Ctrl + T", "Ctrl + Shift + T", "Alt + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "How do you insert the current time into your notes?",
    options: ["Alt + Shift + T", "Alt + Shift + F", "Alt + Shift + :", "Alt + Shift + ;"],
    correctAnswer: "Alt + Shift + ;"
  },
  {
    question: "How do you insert the current date into your notes?",
    options: ["Alt + Shift + D", "Alt + Shift + T", "Alt + Shift + F", "Alt + Shift + ."],
    correctAnswer: "Alt + Shift + D"
  },
  {
    question: "How do you insert both date and time together?",
    options: ["Alt + Shift + F", "Alt + Shift + E", "Ctrl + Shift + D", "Ctrl + Shift + F"],
    correctAnswer: "Alt + Shift + F"
  },
  {
    question: "How do you highlight selected text?",
    options: ["Ctrl + Shift + H", "Ctrl + Alt + H", "Ctrl + Alt + L", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + Shift + H"
  },
  {
    question: "How do you move the current paragraph up?",
    options: ["Alt + Shift + Up Arrow", "Ctrl + Shift + Up", "Ctrl + Alt + Up", "Alt + Ctrl + Up"],
    correctAnswer: "Alt + Shift + Up Arrow"
  },
  {
    question: "How do you move the current paragraph down?",
    options: ["Alt + Shift + Down Arrow", "Ctrl + Alt + Down", "Ctrl + Shift + Down", "Alt + Ctrl + Down"],
    correctAnswer: "Alt + Shift + Down Arrow"
  },
  {
    question: "How do you indent a paragraph to the right?",
    options: ["Tab", "Ctrl + Tab", "Ctrl + M", "Alt + Right"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you outdent a paragraph to the left?",
    options: ["Shift + Tab", "Ctrl + Shift + Tab", "Alt + Left", "Ctrl + Alt + Left"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "How do you apply normal text style?",
    options: ["Ctrl + Shift + N", "Ctrl + Alt + N", "Ctrl + 0", "Ctrl + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you apply heading 4 style?",
    options: ["Ctrl + Alt + 4", "Ctrl + Shift + 4", "Alt + H + 4", "Ctrl + 4"],
    correctAnswer: "Ctrl + Alt + 4"
  },
  {
    question: "How do you switch between open notebooks?",
    options: ["Ctrl + G", "Ctrl + Tab", "Ctrl + F6", "Ctrl + Shift + Tab"],
    correctAnswer: "Ctrl + F6"
  },
  {
    question: "How do you create a new notebook?",
    options: ["Ctrl + Alt + N", "Ctrl + Shift + N", "Ctrl + N", "Alt + F + N"],
    correctAnswer: "Alt + F + N"
  },
  {
    question: "How do you check for updates in OneNote?",
    options: ["File > Account > Update Options", "Alt + F + D", "Ctrl + Shift + U", "Help > Check for Updates"],
    correctAnswer: "File > Account > Update Options"
  },
  {
    question: "How do you sync all notebooks?",
    options: ["Shift + F9", "Ctrl + S", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "Shift + F9"
  },
  {
    question: "How do you open the Research pane?",
    options: ["Alt + Click a word", "Ctrl + Shift + E", "Alt + Shift + E", "Ctrl + Alt + R"],
    correctAnswer: "Alt + Click a word"
  },
  {
    question: "How do you expand or collapse the notebook pane?",
    options: ["Ctrl + F1", "Ctrl + Shift + E", "Alt + Shift + F1", "Alt + N"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "How do you zoom in the note area?",
    options: ["Ctrl + =", "Ctrl + +", "Ctrl + Shift + =", "Ctrl + Alt + ="],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "How do you zoom out the note area?",
    options: ["Ctrl + -", "Ctrl + Shift + -", "Ctrl + _", "Ctrl + Alt + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "How do you reset zoom to default?",
    options: ["Ctrl + 0", "Alt + 0", "Ctrl + Shift + 0", "Ctrl + Alt + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "How do you open OneNote options?",
    options: ["Alt + F, T", "Ctrl + Shift + T", "Ctrl + Alt + O", "Alt + T"],
    correctAnswer: "Alt + F, T"
  },
  {
    question: "How do you move focus to the page tabs?",
    options: ["Ctrl + Alt + G", "F6", "Alt + G", "Ctrl + G"],
    correctAnswer: "F6"
  },
  {
    question: "How do you open the \"Insert\" tab?",
    options: ["Alt + N", "Ctrl + N", "Ctrl + Alt + N", "Shift + Alt + N"],
    correctAnswer: "Alt + N"
  },
  {
    question: "How do you open the \"Draw\" tab?",
    options: ["Alt + D", "Ctrl + D", "Ctrl + Shift + D", "Shift + D"],
    correctAnswer: "Alt + D"
  },
  {
    question: "How do you go to a specific page using the search bar?",
    options: ["Ctrl + E", "Ctrl + F", "Alt + E", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you open the \"View\" tab in OneNote?",
    options: ["Alt + W", "Ctrl + W", "Alt + V", "Ctrl + Shift + W"],
    correctAnswer: "Alt + W"
  },
  {
    question: "How do you open the \"Home\" tab?",
    options: ["Alt + H", "Ctrl + H", "Ctrl + Alt + H", "Shift + H"],
    correctAnswer: "Alt + H"
  },
  {
    question: "How do you open the \"File\" menu (Backstage view)?",
    options: ["Alt + F", "Ctrl + F", "Ctrl + Alt + F", "Shift + F"],
    correctAnswer: "Alt + F"
  },
  {
    question: "How do you go back in navigation history?",
    options: ["Alt + Left Arrow", "Ctrl + Left Arrow", "Shift + Left Arrow", "Ctrl + Alt + Left Arrow"],
    correctAnswer: "Alt + Left Arrow"
  },
  {
    question: "How do you go forward in navigation history?",
    options: ["Alt + Right Arrow", "Ctrl + Right Arrow", "Shift + Right Arrow", "Ctrl + Alt + Right Arrow"],
    correctAnswer: "Alt + Right Arrow"
  },
  {
    question: "How do you create a table in OneNote?",
    options: ["Tab after typing text", "Ctrl + T", "Alt + T", "Ctrl + Shift + T"],
    correctAnswer: "Tab after typing text"
  },
  {
    question: "How do you insert a new row in a table?",
    options: ["Enter at end of last cell", "Ctrl + Enter", "Alt + Enter", "Ctrl + Shift + Enter"],
    correctAnswer: "Enter at end of last cell"
  },
  {
    question: "How do you insert a hyperlink?",
    options: ["Ctrl + K", "Alt + K", "Ctrl + H", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you remove a hyperlink?",
    options: ["Right-click > Remove Link", "Ctrl + Shift + F9", "Alt + Shift + K", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + Shift + F9"
  },
  {
    question: "How do you insert a file attachment?",
    options: ["Alt + N, F, A", "Ctrl + Alt + A", "Ctrl + Shift + A", "Ctrl + F"],
    correctAnswer: "Alt + N, F, A"
  },
  {
    question: "How do you insert a printout of a file?",
    options: ["Alt + N, F, P", "Ctrl + Shift + P", "Ctrl + Alt + P", "Alt + I + P"],
    correctAnswer: "Alt + N, F, P"
  },
  {
    question: "How do you insert a picture from a file?",
    options: ["Alt + N, P, F", "Ctrl + Shift + P", "Ctrl + P", "Ctrl + Alt + I"],
    correctAnswer: "Alt + N, P, F"
  },
  {
    question: "How do you insert an online picture?",
    options: ["Alt + N, P, O", "Ctrl + Shift + O", "Ctrl + Alt + O", "Alt + P + O"],
    correctAnswer: "Alt + N, P, O"
  },
  {
    question: "How do you draw with the pen tool?",
    options: ["Alt + D, P", "Ctrl + P", "Ctrl + Alt + D", "Ctrl + Shift + P"],
    correctAnswer: "Alt + D, P"
  },
  {
    question: "How do you erase with the eraser tool?",
    options: ["Alt + D, E", "Ctrl + Shift + E", "Ctrl + E", "Alt + E"],
    correctAnswer: "Alt + D, E"
  },
  {
    question: "How do you select a lasso in draw mode?",
    options: ["Alt + D, L", "Ctrl + Shift + L", "Ctrl + L", "Alt + Shift + L"],
    correctAnswer: "Alt + D, L"
  },
  {
    question: "How do you search across all notebooks?",
    options: ["Ctrl + E", "Ctrl + F", "Alt + E", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you find text on the current page?",
    options: ["Ctrl + F", "Ctrl + E", "Ctrl + Shift + F", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you collapse all outlines on a page?",
    options: ["Alt + Shift + -", "Ctrl + Shift + 1", "Ctrl + Alt + -", "Alt + Shift + 1"],
    correctAnswer: "Alt + Shift + 1"
  },
  {
    question: "How do you expand all collapsed outlines?",
    options: ["Alt + Shift + 9", "Alt + Shift + +", "Ctrl + Shift + 9", "Ctrl + Alt + 9"],
    correctAnswer: "Alt + Shift + 9"
  },
  {
    question: "How do you copy formatting only?",
    options: ["Ctrl + Shift + C", "Ctrl + Alt + C", "Ctrl + Shift + V", "Ctrl + Alt + V"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you paste formatting only?",
    options: ["Ctrl + Shift + V", "Ctrl + Alt + V", "Ctrl + V", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "How do you clear all formatting from selected text?",
    options: ["Ctrl + Space", "Ctrl + Shift + N", "Alt + Space", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + Space"
  },
  {
    question: "How do you create a page break?",
    options: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Ctrl + Shift + Enter"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "How do you collapse the ribbon?",
    options: ["Ctrl + F1", "Alt + F1", "Ctrl + R", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "How do you open the OneNote Help pane?",
    options: ["F1", "Ctrl + F1", "Alt + F1", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you open the Spelling check pane?",
    options: ["F7", "Shift + F7", "Alt + F7", "Ctrl + F7"],
    correctAnswer: "F7"
  },
  {
    question: "How do you open the thesaurus pane?",
    options: ["Shift + F7", "Alt + F7", "Ctrl + Shift + F7", "Ctrl + T"],
    correctAnswer: "Shift + F7"
  },
  {
    question: "How do you move between notebooks?",
    options: ["Ctrl + G", "Ctrl + Tab", "Ctrl + Shift + G", "Ctrl + Shift + Tab"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you refresh a page to see the latest changes synced from the cloud?",
    options: ["F9", "Shift + F9", "Ctrl + R", "Ctrl + Shift + R"],
    correctAnswer: "F9"
  }
    ],
    hard: [
     {
    "question": "How do you open a hyperlink in OneNote?",
    "options": ["Ctrl + Click", "Alt + Click", "Ctrl + Shift + K", "Ctrl + K"],
    "correctAnswer": "Ctrl + Click"
  },
  {
    "question": "How do you insert the current date and time?",
    "options": ["Alt + Shift + F", "Alt + Shift + D", "Alt + Shift + T", "Alt + Shift + F5"],
    "correctAnswer": "Alt + Shift + F"
  },
  {
    "question": "How do you apply a custom tag to selected text?",
    "options": ["Ctrl + 1–9", "Ctrl + Alt + 1–9", "Ctrl + Shift + 1–9", "Alt + 1–9"],
    "correctAnswer": "Ctrl + 1–9"
  },
  {
    "question": "How do you create a meeting note from Outlook?",
    "options": ["Ctrl + Shift + M", "Ctrl + Shift + O", "Ctrl + Alt + M", "Alt + M"],
    "correctAnswer": "Ctrl + Alt + M"
  },
  {
    "question": "How do you increase the indent level of a paragraph?",
    "options": ["Alt + Shift + Right Arrow", "Tab", "Ctrl + Tab", "Ctrl + M"],
    "correctAnswer": "Alt + Shift + Right Arrow"
  },
  {
    "question": "How do you decrease the indent level of a paragraph?",
    "options": ["Alt + Shift + Left Arrow", "Shift + Tab", "Ctrl + Shift + Tab", "Ctrl + Shift + M"],
    "correctAnswer": "Alt + Shift + Left Arrow"
  },
  {
    "question": "How do you sync a shared notebook manually?",
    "options": ["Shift + F9", "F9", "Ctrl + Shift + S", "Ctrl + F9"],
    "correctAnswer": "Shift + F9"
  },
  {
    "question": "How do you move to the next section tab?",
    "options": ["Ctrl + Tab", "Ctrl + Page Down", "Alt + Tab", "Ctrl + Shift + Tab"],
    "correctAnswer": "Ctrl + Page Down"
  },
  {
    "question": "How do you move to the previous section tab?",
    "options": ["Ctrl + Page Up", "Alt + Page Up", "Ctrl + Shift + Tab", "Ctrl + Up Arrow"],
    "correctAnswer": "Ctrl + Page Up"
  },
  {
    "question": "How do you display context menu?",
    "options": ["Shift + F10", "Ctrl + Shift + F10", "Alt + F10", "Ctrl + M"],
    "correctAnswer": "Shift + F10"
  },
  {
    "question": "How do you collapse or expand a section group?",
    "options": ["Ctrl + Alt + Minus", "Alt + Shift + 1", "Ctrl + Minus", "Ctrl + Shift + Minus"],
    "correctAnswer": "Alt + Shift + 1"
  },
  {
    "question": "How do you insert a horizontal rule?",
    "options": ["Type 3 dashes (---) and press Enter", "Ctrl + Shift + H", "Ctrl + Alt + H", "Ctrl + Enter"],
    "correctAnswer": "Type 3 dashes (---) and press Enter"
  },
  {
    "question": "How do you zoom in the page view?",
    "options": ["Ctrl + =", "Ctrl + Scroll Up", "Ctrl + Shift + =", "Ctrl + +"],
    "correctAnswer": "Ctrl + +"
  },
  {
    "question": "How do you zoom out the page view?",
    "options": ["Ctrl + -", "Ctrl + Scroll Down", "Ctrl + Shift + -", "Ctrl + Shift + _"],
    "correctAnswer": "Ctrl + -"
  },
  {
    "question": "How do you reset the zoom level to 100%?",
    "options": ["Ctrl + 0", "Ctrl + Alt + 0", "Ctrl + Shift + 0", "Alt + 0"],
    "correctAnswer": "Ctrl + 0"
  },
  {
    "question": "How do you insert a screenshot of a specific area?",
    "options": ["Windows + Shift + S", "Ctrl + Alt + S", "Alt + Print Screen", "Windows + Print Screen"],
    "correctAnswer": "Windows + Shift + S"
  },
  {
    "question": "How do you switch between open pages?",
    "options": ["Ctrl + Tab", "Ctrl + F6", "Ctrl + Page Down", "Ctrl + Shift + Tab"],
    "correctAnswer": "Ctrl + Tab"
  },
  {
    "question": "How do you duplicate a page?",
    "options": ["Right-click > Move or Copy > Copy", "Ctrl + D", "Alt + Shift + D", "Ctrl + Alt + D"],
    "correctAnswer": "Right-click > Move or Copy > Copy"
  },
  {
    "question": "How do you change the paper color?",
    "options": ["View Tab > Page Color", "Alt + W, P", "Alt + W, C", "Alt + C"],
    "correctAnswer": "Alt + W, C"
  },
  {
    "question": "How do you change the paper style (e.g., ruled lines)?",
    "options": ["Alt + W, L", "Alt + W, Y", "Ctrl + Shift + L", "Alt + L"],
    "correctAnswer": "Alt + W, L"
  },
  {
    "question": "How do you show or hide the navigation pane?",
    "options": ["Ctrl + F1", "Alt + F1", "Ctrl + Shift + F1", "Ctrl + Tab"],
    "correctAnswer": "Ctrl + F1"
  },
  {
    "question": "How do you show page versions?",
    "options": ["Alt + R, V", "Ctrl + Shift + V", "Alt + H, V", "Alt + E"],
    "correctAnswer": "Alt + R, V"
  },
  {
    "question": "How do you delete a page?",
    "options": ["Ctrl + Shift + D", "Delete key", "Right-click > Delete", "Ctrl + Alt + D"],
    "correctAnswer": "Right-click > Delete"
  },
  {
    "question": "How do you delete a section?",
    "options": ["Right-click > Delete", "Ctrl + Delete", "Alt + Shift + Delete", "Ctrl + Shift + Backspace"],
    "correctAnswer": "Right-click > Delete"
  },
  {
    "question": "How do you dock OneNote to the desktop?",
    "options": ["Ctrl + Alt + D", "Alt + Shift + D", "Windows + D", "Ctrl + Shift + D"],
    "correctAnswer": "Ctrl + Alt + D"
  },
  {
    "question": "How do you send to OneNote from any app?",
    "options": ["Windows + N", "Windows + Shift + N", "Windows + Alt + N", "Ctrl + Alt + N"],
    "correctAnswer": "Windows + N"
  },
  {
    "question": "How do you show full-screen mode?",
    "options": ["F11", "Ctrl + F11", "Alt + F11", "Ctrl + Shift + F"],
    "correctAnswer": "F11"
  },
  {
    "question": "How do you exit full-screen mode?",
    "options": ["Esc", "F11", "Alt + F4", "Ctrl + F"],
    "correctAnswer": "Esc"
  },
  {
    "question": "How do you apply Heading 3 style?",
    "options": ["Ctrl + Alt + 3", "Ctrl + Shift + 3", "Ctrl + 3", "Alt + 3"],
    "correctAnswer": "Ctrl + Alt + 3"
  },
  {
    "question": "How do you create a bullet list with custom symbol?",
    "options": ["Alt + 0149 (on numpad)", "Ctrl + Shift + B", "Alt + B", "Ctrl + Alt + ."],
    "correctAnswer": "Alt + 0149 (on numpad)"
  },
  {
    "question": "How do you create a subpage?",
    "options": ["Ctrl + Alt + Shift + N", "Right-click page tab > Make Subpage", "Alt + Shift + S", "Ctrl + Shift + Alt + M"],
    "correctAnswer": "Right-click page tab > Make Subpage"
  },
  {
    "question": "How do you promote a subpage to a regular page?",
    "options": ["Right-click > Promote Subpage", "Alt + Shift + Left Arrow", "Ctrl + Alt + Left Arrow", "Ctrl + Shift + Left Arrow"],
    "correctAnswer": "Right-click > Promote Subpage"
  },
  {
    "question": "How do you print a page in OneNote?",
    "options": ["Ctrl + P", "Alt + F, P", "Ctrl + Shift + P", "Ctrl + Alt + P"],
    "correctAnswer": "Ctrl + P"
  },
  {
    "question": "How do you view the notebook recycle bin?",
    "options": ["History tab > Notebook Recycle Bin", "Alt + H, N", "Ctrl + H, R", "Shift + Del"],
    "correctAnswer": "History tab > Notebook Recycle Bin"
  },
  {
    "question": "How do you mark a note as read?",
    "options": ["Ctrl + Q", "Alt + R", "Ctrl + Shift + R", "Ctrl + Alt + R"],
    "correctAnswer": "Ctrl + Q"
  },
  {
    "question": "How do you move a page to another section?",
    "options": ["Right-click > Move or Copy", "Drag the page tab", "Ctrl + Shift + M", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "question": "How do you create a to-do tag?",
    "options": ["Ctrl + 1", "Ctrl + Shift + T", "Alt + Shift + 1", "Ctrl + T"],
    "correctAnswer": "Ctrl + 1"
  },
  {
    "question": "How do you remove all tags from selected text?",
    "options": ["Ctrl + 0", "Ctrl + Shift + 0", "Alt + Shift + 0", "Ctrl + Alt + 0"],
    "correctAnswer": "Ctrl + 0"
  },
  {
    "question": "How do you search for tags in a notebook?",
    "options": ["Ctrl + Shift + T", "Ctrl + Alt + T", "Alt + H, T", "Ctrl + F"],
    "correctAnswer": "Ctrl + Shift + T"
  },
  {
    "question": "How do you collapse all outlines on a page?",
    "options": ["Alt + Shift + 1", "Ctrl + Shift + -", "Ctrl + Alt + 1", "Ctrl + Shift + L"],
    "correctAnswer": "Alt + Shift + 1"
  },
  {
    "question": "How do you open the \"Tags Summary\" pane?",
    "options": ["Ctrl + Shift + T", "Ctrl + Alt + T", "Alt + H, T, S", "Ctrl + Shift + F9"],
    "correctAnswer": "Ctrl + Shift + T"
  },
  {
    "question": "How do you insert a space between lines or paragraphs?",
    "options": ["Ctrl + Alt + Shift + S", "Insert tab > Insert Space", "Alt + I, S", "Ctrl + Space"],
    "correctAnswer": "Insert tab > Insert Space"
  },
  {
    "question": "How do you convert handwriting to text?",
    "options": ["Ctrl + Shift + C", "Draw tab > Ink to Text", "Alt + D, T", "Ctrl + Alt + H"],
    "correctAnswer": "Draw tab > Ink to Text"
  },
  {
    "question": "How do you insert a scanned image or file printout?",
    "options": ["Insert tab > File Printout", "Alt + N, P", "Ctrl + Shift + P", "Both A and B"],
    "correctAnswer": "Both A and B"
  },
  {
    "question": "How do you quickly erase drawing ink?",
    "options": ["E key when in Draw mode", "Ctrl + E", "Alt + E", "Ctrl + Shift + E"],
    "correctAnswer": "E key when in Draw mode"
  },
  {
    "question": "How do you activate Lasso Select in Draw tab?",
    "options": ["L key", "Ctrl + L", "Alt + L", "Ctrl + Alt + L"],
    "correctAnswer": "L key"
  },
  {
    "question": "How do you align selected text left?",
    "options": ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Ctrl + Alt + L"],
    "correctAnswer": "Ctrl + L"
  },
  {
    "question": "How do you center align selected text?",
    "options": ["Ctrl + E", "Ctrl + Alt + E", "Ctrl + Shift + E", "Alt + E"],
    "correctAnswer": "Ctrl + E"
  },
  {
    "question": "How do you align selected text right?",
    "options": ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Ctrl + Alt + R"],
    "correctAnswer": "Ctrl + R"
  },
  {
    "question": "How do you make selected text subscript?",
    "options": ["Ctrl + =", "Ctrl + Shift + =", "Alt + =", "Ctrl + Alt + ="],
    "correctAnswer": "Ctrl + ="
  },
  {
    "question": "How do you make selected text superscript?",
    "options": ["Ctrl + Shift + +", "Ctrl + Shift + =", "Alt + Shift + =", "Ctrl + Alt + +"],
    "correctAnswer": "Ctrl + Shift + ="
  },
  {
    "question": "How do you insert a table quickly?",
    "options": ["Tab after typing text", "Insert tab > Table", "Ctrl + T", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "question": "How do you insert a symbol or special character?",
    "options": ["Alt + N, U", "Insert tab > Symbol", "Alt + 0176 (for °)", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "question": "How do you highlight text in yellow?",
    "options": ["Ctrl + Alt + H", "Ctrl + Shift + H", "Alt + H", "Ctrl + H"],
    "correctAnswer": "Ctrl + Shift + H"
  },
  {
    "question": "How do you bold selected text?",
    "options": ["Ctrl + B", "Ctrl + Shift + B", "Alt + B", "Ctrl + Alt + B"],
    "correctAnswer": "Ctrl + B"
  },
  {
    "question": "How do you italicize selected text?",
    "options": ["Ctrl + I", "Ctrl + Shift + I", "Alt + I", "Ctrl + Alt + I"],
    "correctAnswer": "Ctrl + I"
  },
  {
    "question": "How do you underline selected text?",
    "options": ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "Ctrl + Alt + U"],
    "correctAnswer": "Ctrl + U"
  },
  {
    "question": "How do you strike through selected text?",
    "options": ["Ctrl + -", "Ctrl + 5", "Ctrl + Shift + -", "Ctrl + Alt + 5"],
    "correctAnswer": "Ctrl + 5"
  },
  {
    "question": "How do you clear formatting from text?",
    "options": ["Ctrl + Space", "Ctrl + Shift + N", "Ctrl + Shift + Space", "Ctrl + Alt + Space"],
    "correctAnswer": "Ctrl + Space"
  },
  {
    "question": "How do you open the spelling and grammar check pane?",
    "options": ["F7", "Alt + R, S", "Ctrl + F7", "Shift + F7"],
    "correctAnswer": "F7"
  }
    ]
  },


  // Google Chrome
  "Microsoft OneDrive": {
    easy: [
     {
        question: "How do you upload a file to OneDrive via browser?",
        options: ["Drag and drop the file", "Click \"Upload\" > \"Files\"", "Right-click and choose \"Upload\"", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you access OneDrive settings from the system tray?",
        options: ["Right-click OneDrive icon", "Double-click OneDrive icon", "Click Start > Settings > OneDrive", "Ctrl + Alt + O"],
        correctAnswer: "Right-click OneDrive icon"
      },
      {
        question: "How do you pause syncing in OneDrive?",
        options: ["Right-click OneDrive icon > Pause Syncing", "Settings > Pause", "Ctrl + P", "Task Manager > Pause"],
        correctAnswer: "Right-click OneDrive icon > Pause Syncing"
      },
      {
        question: "How do you resume paused syncing?",
        options: ["Right-click OneDrive icon > Resume syncing", "Open OneDrive > Resume", "Ctrl + R", "Alt + S"],
        correctAnswer: "Right-click OneDrive icon > Resume syncing"
      },
      {
        question: "What's the shortcut to refresh a synced OneDrive folder in File Explorer?",
        options: ["F5", "Ctrl + R", "Alt + F5", "Ctrl + Shift + R"],
        correctAnswer: "F5"
      },
      {
        question: "What icon indicates a file is only available online in OneDrive?",
        options: ["Cloud icon", "Checkmark", "Padlock", "Pencil"],
        correctAnswer: "Cloud icon"
      },
      {
        question: "What icon means a file is available offline?",
        options: ["Green checkmark", "Cloud icon", "Red X", "Folder icon"],
        correctAnswer: "Green checkmark"
      },
      {
        question: "What does the blue syncing icon in OneDrive mean?",
        options: ["File is syncing", "File is locked", "File is shared", "File is corrupted"],
        correctAnswer: "File is syncing"
      },
      {
        question: "How do you free up space for a file but keep it in the cloud?",
        options: ["Right-click > Free up space", "Move to cloud", "Archive", "Delete and upload again"],
        correctAnswer: "Right-click > Free up space"
      },
      {
        question: "How do you make a file always available offline?",
        options: ["Right-click > Always keep on this device", "Download it", "Copy to desktop", "Email it to yourself"],
        correctAnswer: "Right-click > Always keep on this device"
      },
      {
        question: "How do you access OneDrive from the browser?",
        options: ["onedrive.live.com", "drive.microsoft.com", "office.com/onedrive", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you share a file from OneDrive browser?",
        options: ["Right-click > Share", "Select file > Click Share", "Use top Share button", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "Which key combination opens properties of a file in OneDrive folder?",
        options: ["Alt + Enter", "Ctrl + Enter", "Shift + P", "Ctrl + Alt + I"],
        correctAnswer: "Alt + Enter"
      },
      {
        question: "How do you create a new folder in OneDrive via browser?",
        options: ["Click \"New\" > \"Folder\"", "Ctrl + Shift + N", "Right-click > New Folder", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you rename a file in OneDrive?",
        options: ["Right-click > Rename", "Select and press F2", "Click three dots > Rename", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you delete a file in OneDrive?",
        options: ["Select and press Delete", "Right-click > Delete", "Click Delete in toolbar", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you restore a file from OneDrive Recycle Bin?",
        options: ["Right-click > Restore", "Click Restore from top bar", "Select file and click Restore", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "Where do deleted OneDrive files go?",
        options: ["Recycle Bin (OneDrive)", "Trash", "Permanent delete", "File History"],
        correctAnswer: "Recycle Bin (OneDrive)"
      },
      {
        question: "What is OneDrive's default cloud storage limit for free accounts?",
        options: ["5 GB", "10 GB", "15 GB", "25 GB"],
        correctAnswer: "5 GB"
      },
      {
        question: "What does a red X on a file in OneDrive mean?",
        options: ["Sync error", "File deleted", "File offline", "File not available"],
        correctAnswer: "Sync error"
      },
      {
        question: "How do you quickly open File Explorer to OneDrive folder?",
        options: ["Click OneDrive icon > Open folder", "Win + E", "Taskbar shortcut", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you install OneDrive on Windows?",
        options: ["Download from Microsoft site", "Preinstalled in Windows 10+", "Via Microsoft Store", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you tell if OneDrive is syncing a file?",
        options: ["Spinning arrows icon", "Blue cloud", "Red triangle", "Padlock"],
        correctAnswer: "Spinning arrows icon"
      },
      {
        question: "Where can you manage OneDrive backup settings?",
        options: ["OneDrive Settings > Backup tab", "Control Panel > Backup", "File Explorer", "Right-click desktop"],
        correctAnswer: "OneDrive Settings > Backup tab"
      },
      {
        question: "How do you access version history of a file?",
        options: ["Right-click > Version history", "Three dots > Version history", "Top menu > Version", "A or B"],
        correctAnswer: "A or B"
      },
      {
        question: "What key opens context menu in File Explorer?",
        options: ["Shift + F10", "Ctrl + M", "Alt + Shift", "F10"],
        correctAnswer: "Shift + F10"
      },
      {
        question: "What file types can you preview directly in OneDrive browser?",
        options: [".docx", ".xlsx", ".jpg", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you sign in to OneDrive on a new PC?",
        options: ["Launch OneDrive and enter Microsoft credentials", "Use Microsoft Authenticator", "Settings > Accounts > OneDrive", "Manually sync folders"],
        correctAnswer: "Launch OneDrive and enter Microsoft credentials"
      },
      {
        question: "How do you check available storage in OneDrive?",
        options: ["OneDrive Settings > Account", "onedrive.live.com > Manage storage", "Right-click icon > View storage", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "How do you sync your OneDrive files manually?",
        options: ["Right-click OneDrive icon > Sync now", "Ctrl + Shift + S", "Alt + S", "F5"],
        correctAnswer: "Right-click OneDrive icon > Sync now"
      },
      {
        question: "What shortcut creates a new file (Word/Excel/etc.) in OneDrive browser?",
        options: ["Click \"New\" > Choose file type", "Ctrl + N", "Right-click > New", "Shift + Alt + N"],
        correctAnswer: "Click \"New\" > Choose file type"
      },
      {
        question: "How do you open OneDrive mobile app settings?",
        options: ["Tap profile > Settings", "Long press app icon", "Swipe right", "Use voice assistant"],
        correctAnswer: "Tap profile > Settings"
      },
      {
        question: "What color is the OneDrive personal icon?",
        options: ["White cloud with blue outline", "Green", "Purple", "Yellow"],
        correctAnswer: "White cloud with blue outline"
      },
      {
        question: "What color is the OneDrive for Business icon?",
        options: ["Blue cloud with white outline", "Red", "Black", "Grey"],
        correctAnswer: "Blue cloud with white outline"
      },
      {
        question: "Which app is required for OneDrive desktop integration?",
        options: ["OneDrive client", "Microsoft Edge", "Outlook", "Skype"],
        correctAnswer: "OneDrive client"
      },
      {
        question: "How do you check OneDrive sync issues?",
        options: ["Right-click icon > View sync problems", "Ctrl + Alt + E", "Task Manager", "File > Check issues"],
        correctAnswer: "Right-click icon > View sync problems"
      },
      {
        question: "What menu option in browser allows renaming a file?",
        options: ["Three dots > Rename", "File > Edit", "File > Rename", "Tools > Rename"],
        correctAnswer: "Three dots > Rename"
      },
      {
        question: "Where are OneDrive files stored by default on Windows?",
        options: ["C:\\Users\\[Username]\\OneDrive", "D:\\Cloud\\OneDrive", "Program Files", "AppData\\Roaming"],
        correctAnswer: "C:\\Users\\[Username]\\OneDrive"
      },
      {
        question: "What does \"Always keep on this device\" do?",
        options: ["Makes file always available offline", "Uploads to cloud only", "Locks file", "Shares file"],
        correctAnswer: "Makes file always available offline"
      },
      {
        question: "What does \"Free up space\" do in OneDrive?",
        options: ["Keeps file in cloud, removes from device", "Deletes file permanently", "Archives file", "Moves file to recycle bin"],
        correctAnswer: "Keeps file in cloud, removes from device"
      },
      {
        question: "Can OneDrive be used without Microsoft 365?",
        options: ["Yes, free plan is available", "No, requires subscription", "Only for enterprise", "Only on Android"],
        correctAnswer: "Yes, free plan is available"
      },
      {
        question: "What is the shortcut to select all files in a folder?",
        options: ["Ctrl + A", "Shift + A", "Alt + A", "Ctrl + Shift + A"],
        correctAnswer: "Ctrl + A"
      },
      {
        question: "What icon indicates a shared file?",
        options: ["People icon", "Green tick", "Lock icon", "Folder icon"],
        correctAnswer: "People icon"
      },
      {
        question: "Can you create shared folders in OneDrive?",
        options: ["Yes", "No", "Only with Business plan", "Only from desktop"],
        correctAnswer: "Yes"
      },
      {
        question: "What happens if you delete a file in a shared folder?",
        options: ["It's deleted for everyone", "Only you lose access", "File is locked", "File moves to backup"],
        correctAnswer: "It's deleted for everyone"
      },
      {
        question: "What key opens the search bar in OneDrive browser?",
        options: ["/", "Ctrl + F", "Alt + S", "Ctrl + Shift + F"],
        correctAnswer: "Ctrl + F"
      },
      {
        question: "How can you pin OneDrive to File Explorer Quick Access?",
        options: ["Right-click > Pin to Quick Access", "Drag to Quick Access", "Both", "Not possible"],
        correctAnswer: "Both"
      },
      {
        question: "What file types can OneDrive preview online?",
        options: ["PDF", "Word", "Excel", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "What plan offers 1 TB of OneDrive storage?",
        options: ["Microsoft 365 Personal", "Free OneDrive", "Office Starter", "Windows Essentials"],
        correctAnswer: "Microsoft 365 Personal"
      },
      {
        question: "What's the default folder OneDrive backs up automatically?",
        options: ["Desktop", "Documents", "Pictures", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "Can you password-protect shared OneDrive links?",
        options: ["Yes, with Microsoft 365", "No", "Only admins", "Only in Business plan"],
        correctAnswer: "Yes, with Microsoft 365"
      },
      {
        question: "What does clicking \"Open in browser\" do?",
        options: ["Opens file in OneDrive web", "Downloads file", "Opens in default app", "Moves file to desktop"],
        correctAnswer: "Opens file in OneDrive web"
      },
      {
        question: "How do you stop syncing a folder from OneDrive?",
        options: ["Right-click > Settings > Choose folders", "Delete folder", "Move folder", "Rename folder"],
        correctAnswer: "Right-click > Settings > Choose folders"
      },
      {
        question: "How do you change the location of OneDrive folder?",
        options: ["Unlink account > Set up again", "Drag folder", "Settings > Move", "Not possible"],
        correctAnswer: "Unlink account > Set up again"
      },
      {
        question: "Can you sync multiple OneDrive accounts?",
        options: ["Yes, one personal + one business", "No", "Only on Android", "Unlimited"],
        correctAnswer: "Yes, one personal + one business"
      },
      {
        question: "Where can you manage sharing permissions?",
        options: ["Right-click > Manage access", "File > Properties", "Start Menu", "File Explorer > Tools"],
        correctAnswer: "Right-click > Manage access"
      },
      {
        question: "Can you upload folders to OneDrive via browser?",
        options: ["Yes", "No", "Only with drag & drop", "Only zipped folders"],
        correctAnswer: "Yes"
      },
      {
        question: "How do you find recently opened files?",
        options: ["OneDrive > Recent", "File > History", "Settings > Recent", "Right-click > Timeline"],
        correctAnswer: "OneDrive > Recent"
      },
      {
        question: "Can you use OneDrive on macOS?",
        options: ["Yes", "No", "Only web", "Only mobile"],
        correctAnswer: "Yes"
      }
    ],
    medium: [
      {
    question: "How do you pause syncing in OneDrive quickly?",
    options: ["Right-click the OneDrive icon > Pause syncing", "Ctrl + P", "Windows + P", "Alt + P"],
    correctAnswer: "Right-click the OneDrive icon > Pause syncing"
  },
  {
    question: "How do you access the OneDrive settings from the taskbar icon?",
    options: ["Right-click > Settings", "Double-click the icon", "Ctrl + ,", "Alt + Enter"],
    correctAnswer: "Right-click > Settings"
  },
  {
    question: "What's the keyboard shortcut to open the context menu for a selected OneDrive file in File Explorer?",
    options: ["Shift + F10", "Ctrl + Shift + C", "Alt + F2", "Windows + M"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How do you open File Explorer with focus on OneDrive?",
    options: ["Windows + E, then select OneDrive", "Windows + Shift + O", "Ctrl + E", "Alt + E"],
    correctAnswer: "Windows + E, then select OneDrive"
  },
  {
    question: "What is the fastest way to check sync issues in OneDrive?",
    options: ["Right-click the OneDrive icon > View sync problems", "Windows + Shift + E", "Ctrl + Shift + I", "Windows + Alt + V"],
    correctAnswer: "Right-click the OneDrive icon > View sync problems"
  },
  {
    question: "How can you access version history of a OneDrive file from File Explorer?",
    options: ["Right-click > Version history", "Ctrl + H", "Alt + V", "Ctrl + Shift + V"],
    correctAnswer: "Right-click > Version history"
  },
  {
    question: "What's the shortcut to rename a file in your OneDrive folder?",
    options: ["F2", "Ctrl + R", "Alt + N", "Shift + F2"],
    correctAnswer: "F2"
  },
  {
    question: "How do you view a OneDrive file online from File Explorer?",
    options: ["Right-click > View online", "Ctrl + O", "Ctrl + Alt + V", "Alt + Shift + W"],
    correctAnswer: "Right-click > View online"
  },
  {
    question: "How do you check if OneDrive is up to date?",
    options: ["Hover over the OneDrive icon in the system tray", "Press Ctrl + U", "Click Settings", "Right-click the desktop"],
    correctAnswer: "Hover over the OneDrive icon in the system tray"
  },
  {
    question: "How do you launch the OneDrive app if it's not running?",
    options: ["Windows key > Type \"OneDrive\" > Enter", "Ctrl + O", "Alt + D", "Windows + Shift + D"],
    correctAnswer: "Windows key > Type \"OneDrive\" > Enter"
  },
  {
    question: "How do you quickly open the OneDrive folder from the taskbar?",
    options: ["Right-click OneDrive icon > Open folder", "Ctrl + Shift + O", "Windows + Shift + F", "Alt + E"],
    correctAnswer: "Right-click OneDrive icon > Open folder"
  },
  {
    question: "How do you stop syncing a specific folder in OneDrive?",
    options: ["OneDrive Settings > Choose folders", "Ctrl + Shift + D", "Right-click > Stop syncing", "Alt + Shift + X"],
    correctAnswer: "OneDrive Settings > Choose folders"
  },
  {
    question: "How do you launch OneDrive settings from the system tray icon?",
    options: ["Right-click OneDrive icon > Settings", "Ctrl + ,", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "Right-click OneDrive icon > Settings"
  },
  {
    question: "How do you share a file from your OneDrive via File Explorer?",
    options: ["Right-click > Share", "Ctrl + S", "Shift + Alt + S", "Alt + Enter"],
    correctAnswer: "Right-click > Share"
  },
  {
    question: "What's the shortcut to open the folder location of a OneDrive file?",
    options: ["Right-click > Open file location", "Ctrl + L", "Windows + L", "Alt + Shift + O"],
    correctAnswer: "Right-click > Open file location"
  },
  {
    question: "How do you choose which OneDrive folders to sync?",
    options: ["Right-click OneDrive icon > Settings > Account > Choose folders", "Ctrl + F", "Shift + S", "File > Sync Options"],
    correctAnswer: "Right-click OneDrive icon > Settings > Account > Choose folders"
  },
  {
    question: "How do you manually start a sync in OneDrive?",
    options: ["Right-click OneDrive icon > Sync now", "Ctrl + Shift + S", "Windows + Shift + R", "Alt + S"],
    correctAnswer: "Right-click OneDrive icon > Sync now"
  },
  {
    question: "How do you unlink a PC from OneDrive?",
    options: ["Settings > Account > Unlink this PC", "Ctrl + U", "Alt + Shift + D", "File > Disconnect"],
    correctAnswer: "Settings > Account > Unlink this PC"
  },
  {
    question: "What option shows you which files are on-demand in OneDrive?",
    options: ["View in File Explorer with cloud icons", "Ctrl + D", "Alt + F", "Shift + V"],
    correctAnswer: "View in File Explorer with cloud icons"
  },
  {
    question: "How do you restore deleted files from OneDrive?",
    options: ["OneDrive online > Recycle Bin", "Ctrl + Z", "Right-click Recycle Bin > Restore", "Alt + R"],
    correctAnswer: "OneDrive online > Recycle Bin"
  },
  {
    question: "How do you find OneDrive logs or errors on your PC?",
    options: ["Right-click icon > View sync problems", "Ctrl + Shift + E", "Alt + Shift + L", "F1"],
    correctAnswer: "Right-click icon > View sync problems"
  },
  {
    question: "How do you move a file into your OneDrive folder using keyboard only?",
    options: ["Ctrl + X (cut), then Windows + E, paste in OneDrive", "Shift + M", "Ctrl + O", "Alt + Enter"],
    correctAnswer: "Ctrl + X (cut), then Windows + E, paste in OneDrive"
  },
  {
    question: "How do you set up personal vault in OneDrive?",
    options: ["OneDrive > Personal Vault > Set up", "Ctrl + V", "Settings > Security", "Alt + P"],
    correctAnswer: "OneDrive > Personal Vault > Set up"
  },
  {
    question: "How do you lock the Personal Vault manually?",
    options: ["Right-click > Lock", "Click vault icon > Lock", "Ctrl + Shift + L", "Alt + V"],
    correctAnswer: "Click vault icon > Lock"
  },
  {
    question: "How do you monitor OneDrive file status (Available/Online-only)?",
    options: ["Via File Explorer status icons", "Ctrl + I", "Right-click > Properties", "Alt + Shift + S"],
    correctAnswer: "Via File Explorer status icons"
  },
  {
    question: "How do you stop OneDrive from starting with Windows?",
    options: ["OneDrive Settings > General > Uncheck \"Start OneDrive…\"", "Ctrl + Alt + D", "Shift + W", "Windows + Shift + S"],
    correctAnswer: "OneDrive Settings > General > Uncheck \"Start OneDrive…\""
  },
  {
    question: "How do you open OneDrive online from your synced folder?",
    options: ["Right-click > View online", "Ctrl + Shift + O", "Alt + Shift + V", "Windows + O"],
    correctAnswer: "Right-click > View online"
  },
  {
    question: "How do you free up space by making a file online-only in OneDrive?",
    options: ["Right-click > Free up space", "Ctrl + Shift + F", "Alt + D", "Delete then recover"],
    correctAnswer: "Right-click > Free up space"
  },
  {
    question: "How do you make a file always available offline in OneDrive?",
    options: ["Right-click > Always keep on this device", "Ctrl + Shift + D", "Alt + O", "Move to local folder"],
    correctAnswer: "Right-click > Always keep on this device"
  },
  {
    question: "What keyboard shortcut shows file properties in File Explorer?",
    options: ["Alt + Enter", "Ctrl + P", "Windows + P", "Shift + P"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How do you pause syncing in OneDrive temporarily?",
    options: ["Right-click icon > Pause syncing", "Ctrl + Alt + P", "Settings > Account > Pause", "Alt + Space"],
    correctAnswer: "Right-click icon > Pause syncing"
  },
  {
    question: "How do you resume paused syncing in OneDrive?",
    options: ["Right-click icon > Resume syncing", "Ctrl + R", "Alt + Shift + R", "Settings > Resume"],
    correctAnswer: "Right-click icon > Resume syncing"
  },
  {
    question: "How do you enable Files On-Demand in OneDrive settings?",
    options: ["Settings > Files On-Demand", "Ctrl + F", "Preferences > Storage", "Alt + D"],
    correctAnswer: "Settings > Files On-Demand"
  },
  {
    question: "What's the quickest way to remove a folder from OneDrive syncing?",
    options: ["Settings > Account > Choose folders", "Delete the folder", "Ctrl + Shift + E", "Alt + Shift + U"],
    correctAnswer: "Settings > Account > Choose folders"
  },
  {
    question: "How can you tell if OneDrive is syncing a file?",
    options: ["Blue circular arrows icon", "File has a green tick", "File is greyed out", "File disappears"],
    correctAnswer: "Blue circular arrows icon"
  },
  {
    question: "How do you force sync OneDrive from File Explorer?",
    options: ["Right-click > Sync", "Ctrl + Alt + S", "No direct shortcut", "Right-click OneDrive tray icon > Sync now"],
    correctAnswer: "Right-click OneDrive tray icon > Sync now"
  },
  {
    question: "What keyboard shortcut helps you cut a file to move into OneDrive?",
    options: ["Ctrl + X", "Ctrl + M", "Alt + X", "Shift + M"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "How do you copy a file to your OneDrive folder using shortcuts?",
    options: ["Ctrl + C > Navigate > Ctrl + V", "Shift + C", "Alt + V", "Ctrl + Alt + V"],
    correctAnswer: "Ctrl + C > Navigate > Ctrl + V"
  },
  {
    question: "How do you open the location of your synced OneDrive folder quickly?",
    options: ["Right-click OneDrive icon > Open folder", "Ctrl + L", "Shift + O", "Alt + Shift + E"],
    correctAnswer: "Right-click OneDrive icon > Open folder"
  },
  {
    question: "How do you check how much space is left in your OneDrive?",
    options: ["OneDrive > Settings > Account tab", "Ctrl + Shift + Space", "Properties > Storage", "Alt + R"],
    correctAnswer: "OneDrive > Settings > Account tab"
  },
  {
    question: "How do you access your OneDrive files on another device online?",
    options: ["Sign in to onedrive.live.com", "Use the same Microsoft account", "Open via Remote Desktop", "Email the file to yourself"],
    correctAnswer: "Sign in to onedrive.live.com"
  },
  {
    question: "How do you disable Personal Vault auto-lock time?",
    options: ["Settings > Personal Vault > Change auto-lock", "Ctrl + L", "Vault > Disable", "Alt + Shift + T"],
    correctAnswer: "Settings > Personal Vault > Change auto-lock"
  },
  {
    question: "How do you mark a file to be removed from device but stay in cloud?",
    options: ["Right-click > Free up space", "Delete > Undo", "Shift + Delete", "Ctrl + Shift + R"],
    correctAnswer: "Right-click > Free up space"
  },
  {
    question: "What status icon indicates a file is always available offline in OneDrive?",
    options: ["Solid green circle with white check", "Cloud icon", "Hollow green check", "Red cross"],
    correctAnswer: "Solid green circle with white check"
  },
  {
    question: "Which icon represents a file that is only available online?",
    options: ["Blue cloud icon", "Green check", "Grey X", "Yellow warning"],
    correctAnswer: "Blue cloud icon"
  },
  {
    question: "How do you restore files using OneDrive version history?",
    options: ["Right-click > Version history", "Ctrl + H", "Alt + V", "Tools > Restore"],
    correctAnswer: "Right-click > Version history"
  },
  {
    question: "How do you avoid syncing specific file types in OneDrive?",
    options: ["Set file type exclusions in admin policy (if supported)", "Ctrl + E", "Delete the files", "Convert to another type"],
    correctAnswer: "Set file type exclusions in admin policy (if supported)"
  },
  {
    question: "How do you reset OneDrive on Windows manually?",
    options: ["Run %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset", "Ctrl + Shift + R", "Alt + D", "File > Reset"],
    correctAnswer: "Run %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset"
  },
  {
    question: "How do you pin OneDrive to Quick Access for faster navigation?",
    options: ["Right-click > Pin to Quick Access", "Ctrl + P", "Shift + F4", "Alt + Q"],
    correctAnswer: "Right-click > Pin to Quick Access"
  },
  {
    question: "What is the shortcut to navigate to address bar in File Explorer?",
    options: ["Alt + D", "Ctrl + L", "F4", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you quickly select multiple non-adjacent files to upload to OneDrive?",
    options: ["Ctrl + Click on each file", "Shift + Select all", "Alt + Select", "Right-click > Select multiple"],
    correctAnswer: "Ctrl + Click on each file"
  },
  {
    question: "How do you show file sync status in File Explorer?",
    options: ["Enable \"Status\" column in View tab", "Ctrl + Alt + S", "Shift + L", "Alt + F"],
    correctAnswer: "Enable \"Status\" column in View tab"
  },
  {
    question: "Which menu lets you switch accounts in OneDrive?",
    options: ["Settings > Account", "Ctrl + Shift + A", "File > Switch", "Vault > Account"],
    correctAnswer: "Settings > Account"
  },
  {
    question: "How do you share a OneDrive file with edit access?",
    options: ["Right-click > Share > Change permissions", "Ctrl + Shift + E", "Alt + S", "File > Allow edits"],
    correctAnswer: "Right-click > Share > Change permissions"
  },
  {
    question: "Which OneDrive feature helps recover from ransomware attacks?",
    options: ["File Restore", "Recycle Bin", "Sync History", "Vault Lock"],
    correctAnswer: "File Restore"
  },
  {
    question: "How do you rename a file in OneDrive from File Explorer?",
    options: ["Select file > F2", "Ctrl + R", "Shift + N", "Alt + R"],
    correctAnswer: "Select file > F2"
  },
  {
    question: "What shortcut lets you move a selected file within File Explorer?",
    options: ["Shift + Drag", "Ctrl + Drag", "Alt + Move", "Ctrl + Shift + M"],
    correctAnswer: "Shift + Drag"
  },
  {
    question: "How do you permanently stop syncing OneDrive on your PC?",
    options: ["Settings > Account > Unlink this PC", "Ctrl + Q", "Alt + Shift + S", "File > Disconnect"],
    correctAnswer: "Settings > Account > Unlink this PC"
  },
  {
    question: "Which file extension OneDrive typically does NOT sync?",
    options: [".tmp", ".txt", ".docx", ".xlsx"],
    correctAnswer: ".tmp"
  },
  {
    question: "What's the system tray icon color if OneDrive has an issue?",
    options: ["Red with X", "Yellow triangle", "Grey", "Green"],
    correctAnswer: "Red with X"
  }
    ],
    hard: [
      {
    question: "Which shortcut opens the context menu for a selected item in OneDrive?",
    options: ["Ctrl + Shift + C", "Shift + F10", "Alt + Enter", "Ctrl + M"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How do you toggle the details pane in OneDrive?",
    options: ["Ctrl + I", "Alt + D", "I", "Ctrl + Shift + D"],
    correctAnswer: "I"
  },
  {
    question: "Which key combination refreshes the OneDrive window?",
    options: ["Ctrl + R", "F5", "Ctrl + F5", "Alt + R"],
    correctAnswer: "F5"
  },
  {
    question: "What shortcut allows you to rename a selected file or folder in OneDrive?",
    options: ["Ctrl + R", "F2", "Alt + N", "Ctrl + Shift + R"],
    correctAnswer: "F2"
  },
  {
    question: "How do you select all items in the OneDrive contents grid?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "Alt + A", "Ctrl + L"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Which shortcut deselects all selected items in OneDrive?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Esc"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you open or download the selected item in OneDrive?",
    options: ["Ctrl + O", "Enter", "Ctrl + Enter", "Alt + O"],
    correctAnswer: "Enter"
  },
  {
    question: "What is the shortcut to delete the selected item(s) in OneDrive?",
    options: ["Ctrl + Delete", "Shift + Delete", "Delete", "Alt + Delete"],
    correctAnswer: "Delete"
  },
  {
    question: "Which key combination shares the selected file or folder in OneDrive?",
    options: ["Ctrl + S", "S", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "S"
  },
  {
    question: "How do you toggle between List and Thumbnails view in OneDrive?",
    options: ["Ctrl + V", "V", "Alt + V", "Shift + V"],
    correctAnswer: "V"
  },
  {
    question: "What shortcut displays keyboard shortcuts in OneDrive?",
    options: ["Ctrl + /", "?", "F1", "Alt + ?"],
    correctAnswer: "?"
  },
  {
    question: "How do you move between OneDrive regions?",
    options: ["Tab or Shift + Tab", "Ctrl + Tab", "Alt + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Tab or Shift + Tab"
  },
  {
    question: "Which keys move through the contents grid file pane in OneDrive?",
    options: ["Left or Right arrow keys", "Up or Down arrow keys", "Ctrl + Up or Down arrow keys", "Alt + Up or Down arrow keys"],
    correctAnswer: "Up or Down arrow keys"
  },
  {
    question: "How do you select or clear an item in the contents grid?",
    options: ["Spacebar", "Enter", "Ctrl + Spacebar", "Alt + Spacebar"],
    correctAnswer: "Spacebar"
  },
  {
    question: "What shortcut opens the OneDrive search box?",
    options: ["Ctrl + E", "/", "Ctrl + F", "Alt + S"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you open the file location of a selected item in OneDrive?",
    options: ["Ctrl + Shift + E", "Ctrl + L", "Alt + L", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "Which shortcut downloads the selected item in OneDrive?",
    options: ["Ctrl + S", "Ctrl + D", "Alt + S", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "How do you create a new folder in OneDrive?",
    options: ["Ctrl + N", "Ctrl + Shift + N", "Alt + N", "Ctrl + Alt + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "What is the shortcut to close the current pop-up or item in OneDrive?",
    options: ["Esc", "Ctrl + W", "Alt + F4", "Ctrl + Q"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you toggle selection for the current item in OneDrive?",
    options: ["Spacebar", "Ctrl + Spacebar", "Shift + Spacebar", "Alt + Spacebar"],
    correctAnswer: "Spacebar"
  },
  {
    question: "How do you move between the browser bar and OneDrive?",
    options: ["F6 or Ctrl + F6", "Alt + Tab", "Ctrl + Tab", "Shift + F6"],
    correctAnswer: "F6 or Ctrl + F6"
  },
  {
    question: "What key deletes the current selection and bypasses the Recycle Bin in OneDrive (only on synced files)?",
    options: ["Delete", "Shift + Delete", "Ctrl + Delete", "Alt + Delete"],
    correctAnswer: "Shift + Delete"
  },
  {
    question: "Shortcut to move the selected item(s) to a different folder in OneDrive?",
    options: ["M", "Shift + M", "Alt + M", "Ctrl + Shift + M"],
    correctAnswer: "M"
  },
  {
    question: "Which shortcut opens the sharing link settings in OneDrive?",
    options: ["L", "Alt + L", "Shift + S", "Ctrl + K"],
    correctAnswer: "L"
  },
  {
    question: "What key selects the next file without deselecting the current file?",
    options: ["Ctrl + Down Arrow", "Shift + Down Arrow", "Alt + Down Arrow", "Ctrl + Spacebar"],
    correctAnswer: "Shift + Down Arrow"
  },
  {
    question: "What key opens the New file/folder menu in OneDrive?",
    options: ["N", "Alt + N", "Ctrl + N", "Shift + N"],
    correctAnswer: "Alt + N"
  },
  {
    question: "How do you open version history for a file?",
    options: ["H", "Alt + H", "Ctrl + Shift + H", "V"],
    correctAnswer: "H"
  },
  {
    question: "What key shows item previews (such as thumbnails)?",
    options: ["Alt + P", "Ctrl + P", "P", "V"],
    correctAnswer: "V"
  },
  {
    question: "How do you return to the previous screen in OneDrive?",
    options: ["Backspace", "Esc", "Alt + Left Arrow", "Ctrl + B"],
    correctAnswer: "Alt + Left Arrow"
  },
  {
    question: "Shortcut to open the Recycle Bin in OneDrive?",
    options: ["R", "Ctrl + R", "Alt + R", "None (must be done manually)"],
    correctAnswer: "None (must be done manually)"
  },
  {
    question: "Which shortcut can you use to upload files from your computer to OneDrive?",
    options: ["U", "Alt + U", "Ctrl + U", "Must be done via UI (no keyboard shortcut)"],
    correctAnswer: "Must be done via UI (no direct keyboard shortcut)"
  }
    ]
  },


  // Google Chrome
  "Microsoft Teams": {
    easy: [
      {
        question: "How do you mute or unmute yourself in a Teams meeting?",
        options: ["Ctrl + M", "Ctrl + U", "Alt + M", "Ctrl + Shift + M"],
        correctAnswer: "Ctrl + Shift + M"
      },
      {
        question: "What is the shortcut to start a new chat?",
        options: ["Ctrl + N", "Ctrl + Shift + C", "Ctrl + Shift + N", "Alt + N"],
        correctAnswer: "Ctrl + N"
      },
      {
        question: "How do you open the Search bar at the top?",
        options: ["Ctrl + F", "Ctrl + E", "Alt + S", "Ctrl + S"],
        correctAnswer: "Ctrl + E"
      },
      {
        question: "Shortcut to open Files in Microsoft Teams?",
        options: ["Ctrl + 6", "Ctrl + Shift + F", "Ctrl + 4", "Ctrl + 5"],
        correctAnswer: "Ctrl + 6"
      },
      {
        question: "What shortcut opens the Calendar in Teams?",
        options: ["Ctrl + 3", "Ctrl + 5", "Ctrl + 4", "Ctrl + 2"],
        correctAnswer: "Ctrl + 4"
      },
      {
        question: "Shortcut to quickly open the Chat tab?",
        options: ["Ctrl + 2", "Ctrl + 3", "Ctrl + 1", "Ctrl + Shift + C"],
        correctAnswer: "Ctrl + 2"
      },
      {
        question: "How do you open the Activity tab?",
        options: ["Ctrl + 1", "Ctrl + 3", "Ctrl + A", "Ctrl + Shift + A"],
        correctAnswer: "Ctrl + 1"
      },
      {
        question: "How do you toggle the video on or off in a meeting?",
        options: ["Ctrl + V", "Ctrl + Shift + V", "Ctrl + Shift + O", "Alt + V"],
        correctAnswer: "Ctrl + Shift + O"
      },
      {
        question: "Shortcut to raise or lower your hand during a meeting?",
        options: ["Ctrl + Shift + H", "Ctrl + Alt + R", "Ctrl + Shift + K", "Ctrl + Shift + K"],
        correctAnswer: "Ctrl + Shift + K"
      },
      {
        question: "How do you blur your background during a video call?",
        options: ["Ctrl + Shift + P", "Alt + P", "Ctrl + B", "Ctrl + Shift + B"],
        correctAnswer: "Ctrl + Shift + P"
      },
      {
        question: "Shortcut to go to the Calls tab?",
        options: ["Ctrl + 5", "Ctrl + 4", "Ctrl + 3", "Ctrl + 6"],
        correctAnswer: "Ctrl + 5"
      },
      {
        question: "What is the shortcut to accept an incoming call?",
        options: ["Ctrl + Shift + A", "Ctrl + Shift + S", "Ctrl + Shift + C", "Ctrl + Shift + F"],
        correctAnswer: "Ctrl + Shift + A"
      },
      {
        question: "How do you decline an incoming call in Teams?",
        options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + Shift + E", "Ctrl + Shift + F"],
        correctAnswer: "Ctrl + Shift + D"
      },
      {
        question: "Shortcut to send a chat message?",
        options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
        correctAnswer: "Enter"
      },
      {
        question: "How do you insert a line break in a message in Teams?",
        options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Tab"],
        correctAnswer: "Shift + Enter"
      },
      {
        question: "Shortcut to open Settings?",
        options: ["Ctrl + ,", "Alt + S", "Ctrl + S", "Ctrl + Shift + ,"],
        correctAnswer: "Ctrl + ,"
      },
      {
        question: "How do you zoom in in Teams?",
        options: ["Ctrl + =", "Ctrl + Plus (+)", "Ctrl + Shift + =", "Ctrl + Alt + Plus"],
        correctAnswer: "Ctrl + Plus (+)"
      },
      {
        question: "Shortcut to zoom out?",
        options: ["Ctrl + -", "Ctrl + Shift + -", "Alt + -", "Ctrl + Shift + Minus"],
        correctAnswer: "Ctrl + -"
      },
      {
        question: "How do you open Help in Microsoft Teams?",
        options: ["F1", "Ctrl + H", "Alt + H", "Ctrl + Shift + H"],
        correctAnswer: "F1"
      },
      {
        question: "How do you go to the Teams tab?",
        options: ["Ctrl + 3", "Ctrl + 2", "Ctrl + 1", "Ctrl + 4"],
        correctAnswer: "Ctrl + 3"
      },
      {
        question: "What shortcut toggles the Teams app between full screen and windowed mode?",
        options: ["F11", "Ctrl + Shift + F", "Ctrl + F", "Alt + F"],
        correctAnswer: "Ctrl + Shift + F"
      },
      {
        question: "How do you go to the previous list item?",
        options: ["Up Arrow", "Ctrl + ↑", "Alt + ↑", "Shift + ↑"],
        correctAnswer: "Up Arrow"
      },
      {
        question: "How do you go to the next list item?",
        options: ["Down Arrow", "Ctrl + ↓", "Alt + ↓", "Shift + ↓"],
        correctAnswer: "Down Arrow"
      },
      {
        question: "What is the shortcut to open Emoji picker in chat?",
        options: ["Ctrl + E", "Windows + .", "Alt + E", "Ctrl + ."],
        correctAnswer: "Windows + ."
      },
      {
        question: "How do you attach a file in chat?",
        options: ["Ctrl + O", "Ctrl + Shift + O", "Ctrl + Shift + A", "Ctrl + Shift + F"],
        correctAnswer: "Ctrl + Shift + A"
      },
      {
        question: "Shortcut to open Org chart for a person in chat?",
        options: ["Ctrl + Shift + O", "Alt + Shift + O", "Ctrl + Alt + O", "Ctrl + O"],
        correctAnswer: "Ctrl + Shift + O"
      },
      {
        question: "Shortcut to end a call?",
        options: ["Ctrl + Shift + E", "Ctrl + Shift + H", "Ctrl + Shift + B", "Ctrl + Shift + H"],
        correctAnswer: "Ctrl + Shift + H"
      },
      {
        question: "How do you go to Saved messages?",
        options: ["Ctrl + S", "Ctrl + Y", "Ctrl + Shift + S", "Ctrl + 7"],
        correctAnswer: "Ctrl + 7"
      },
      {
        question: "Shortcut to open Keyboard Shortcuts help in Teams?",
        options: ["Ctrl + .", "Ctrl + /", "Ctrl + K", "Ctrl + Shift + ."],
        correctAnswer: "Ctrl + ."
      },
      {
        question: "What shortcut shows background effects in a meeting?",
        options: ["Ctrl + Shift + P", "Ctrl + Shift + E", "Alt + B", "Ctrl + B"],
        correctAnswer: "Ctrl + Shift + P"
      },
      {
        question: "Shortcut to toggle background blur in Teams call?",
        options: ["Ctrl + Shift + P", "Ctrl + Shift + O", "Ctrl + Alt + P", "Ctrl + P"],
        correctAnswer: "Ctrl + Shift + P"
      },
      {
        question: "What shortcut opens the \"More Actions\" menu in meetings?",
        options: ["Ctrl + Shift + M", "Ctrl + Shift + Space", "Ctrl + Shift + Period", "Tab"],
        correctAnswer: "Ctrl + Shift + Period"
      },
      {
        question: "How to toggle Captions during a meeting?",
        options: ["Ctrl + Shift + C", "Ctrl + Alt + C", "Ctrl + C", "Ctrl + Shift + L"],
        correctAnswer: "Ctrl + Shift + C"
      },
      {
        question: "Shortcut to open Notifications Feed?",
        options: ["Ctrl + 1", "Ctrl + Alt + N", "Ctrl + Shift + A", "Ctrl + 8"],
        correctAnswer: "Ctrl + 1"
      },
      {
        question: "What is the shortcut to access Help quickly?",
        options: ["Ctrl + /", "Ctrl + Shift + ?", "Ctrl + H", "F1"],
        correctAnswer: "Ctrl + /"
      },
      {
        question: "How do you navigate to the next section of the app?",
        options: ["Ctrl + Tab", "Ctrl + Page Down", "Ctrl + Shift + Tab", "Alt + →"],
        correctAnswer: "Ctrl + Tab"
      },
      {
        question: "Shortcut to go to previous section?",
        options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Ctrl + ←", "Alt + ←"],
        correctAnswer: "Ctrl + Shift + Tab"
      },
      {
        question: "How do you reply to a message in chat?",
        options: ["R", "Ctrl + R", "Enter", "Shift + R"],
        correctAnswer: "Ctrl + R"
      },
      {
        question: "Shortcut to mark a message as unread?",
        options: ["Ctrl + Shift + U", "Ctrl + Shift + M", "Ctrl + U", "Alt + U"],
        correctAnswer: "Ctrl + Shift + U"
      },
      {
        question: "What shortcut opens the navigation menu (hamburger menu)?",
        options: ["Ctrl + Shift + M", "Ctrl + Shift + E", "Ctrl + Shift + F", "Alt"],
        correctAnswer: "Alt"
      },
      {
        question: "How do you open the command box in Teams?",
        options: ["Ctrl + E", "Ctrl + /", "Alt + C", "Ctrl + C"],
        correctAnswer: "Ctrl + E"
      },
      {
        question: "Shortcut to go to Files directly from a chat?",
        options: ["Ctrl + Shift + F", "Ctrl + 6", "Alt + F", "Ctrl + O"],
        correctAnswer: "Ctrl + 6"
      },
      {
        question: "What is the shortcut to go to Teams from any tab?",
        options: ["Ctrl + 3", "Ctrl + Shift + T", "Ctrl + T", "Ctrl + Shift + 3"],
        correctAnswer: "Ctrl + 3"
      },
      {
        question: "How to quickly edit the last message you sent?",
        options: ["Up Arrow", "Ctrl + Shift + E", "Ctrl + Up", "Alt + E"],
        correctAnswer: "Up Arrow"
      },
      {
        question: "Shortcut to open Meeting Chat while in a call?",
        options: ["Ctrl + Shift + C", "Ctrl + Shift + M", "Alt + C", "Ctrl + C"],
        correctAnswer: "Ctrl + Shift + C"
      },
      {
        question: "How do you open the Participants panel during a call?",
        options: ["Ctrl + Shift + P", "Ctrl + Shift + Space", "Ctrl + Shift + U", "Ctrl + Shift + O"],
        correctAnswer: "Ctrl + Shift + P"
      },
      {
        question: "How to toggle Speaker View in a Teams call?",
        options: ["Ctrl + Shift + W", "Ctrl + Shift + S", "Ctrl + Shift + V", "Ctrl + W"],
        correctAnswer: "Ctrl + Shift + V"
      },
      {
        question: "Shortcut to go to next chat/thread in list?",
        options: ["Down Arrow", "Tab", "Ctrl + Down Arrow", "Shift + Down Arrow"],
        correctAnswer: "Down Arrow"
      },
      {
        question: "Shortcut to go to previous chat/thread in list?",
        options: ["Up Arrow", "Shift + Up Arrow", "Ctrl + Up Arrow", "Alt + Up Arrow"],
        correctAnswer: "Up Arrow"
      },
      {
        question: "What is the shortcut to send a reaction during a meeting?",
        options: ["Ctrl + Shift + R", "Ctrl + .", "Ctrl + Shift + Y", "Ctrl + Shift + X"],
        correctAnswer: "Ctrl + Shift + Y"
      },
      {
        question: "How do you open the Share tray to share screen?",
        options: ["Ctrl + Shift + E", "Ctrl + Shift + Space", "Ctrl + Shift + S", "Ctrl + Alt + S"],
        correctAnswer: "Ctrl + Shift + S"
      },
      {
        question: "Shortcut to toggle meeting controls (mute, camera, etc.)?",
        options: ["Ctrl + Shift + Space", "Alt", "Ctrl + Alt + M", "Tab"],
        correctAnswer: "Ctrl + Shift + Space"
      },
      {
        question: "What shortcut makes Teams window always stay on top?",
        options: ["Ctrl + Shift + T", "Alt + Shift + T", "Ctrl + Alt + T", "Ctrl + T"],
        correctAnswer: "Ctrl + Shift + T"
      },
      {
        question: "How to open shortcuts menu for quick navigation?",
        options: ["Ctrl + .", "Ctrl + /", "Ctrl + Shift + ?", "F1"],
        correctAnswer: "Ctrl + ."
      },
      {
        question: "Shortcut to turn off camera in Teams?",
        options: ["Ctrl + Shift + O", "Ctrl + O", "Alt + O", "Ctrl + Alt + O"],
        correctAnswer: "Ctrl + Shift + O"
      },
      {
        question: "Shortcut to open More Options menu (…)?",
        options: ["Alt + M", "Ctrl + Shift + M", "Ctrl + Shift + Period", "Ctrl + M"],
        correctAnswer: "Ctrl + Shift + Period"
      },
      {
        question: "What is the shortcut to delete a message you typed?",
        options: ["Esc", "Ctrl + D", "Alt + Backspace", "Ctrl + Shift + D"],
        correctAnswer: "Esc"
      },
      {
        question: "Shortcut to end screen sharing in a meeting?",
        options: ["Ctrl + Shift + E", "Ctrl + Shift + S", "Ctrl + Shift + D", "Ctrl + S"],
        correctAnswer: "Ctrl + Shift + E"
      },
      {
        question: "What is the shortcut to lower your raised hand in Teams?",
        options: ["Ctrl + Shift + K", "Ctrl + Shift + H", "Ctrl + Shift + J", "Ctrl + Shift + L"],
        correctAnswer: "Ctrl + Shift + K"
      },
      {
        question: "How do you quickly access your profile settings?",
        options: ["Ctrl + ,", "Ctrl + Alt + P", "Ctrl + Shift + P", "Alt + P"],
        correctAnswer: "Ctrl + ,"
      }
    ],
    medium: [
      {
    question: "How do you jump to the Activity feed?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "What is the shortcut to open the Chat pane?",
    options: ["Ctrl + 2", "Ctrl + 3", "Ctrl + 1", "Ctrl + 4"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "How do you jump to the Teams pane?",
    options: ["Ctrl + 3", "Ctrl + 2", "Ctrl + 1", "Ctrl + 4"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "What is the shortcut to jump to the Calendar?",
    options: ["Ctrl + 4", "Ctrl + 5", "Ctrl + 6", "Ctrl + 3"],
    correctAnswer: "Ctrl + 4"
  },
  {
    question: "How do you jump to the Calls tab?",
    options: ["Ctrl + 5", "Ctrl + 6", "Ctrl + 7", "Ctrl + 8"],
    correctAnswer: "Ctrl + 5"
  },
  {
    question: "How do you jump to the Files tab?",
    options: ["Ctrl + 6", "Ctrl + 5", "Ctrl + 7", "Ctrl + 8"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "What is the shortcut to start a new chat?",
    options: ["Ctrl + N", "Ctrl + Shift + N", "Ctrl + M", "Ctrl + C"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "What is the shortcut to expand or collapse the left navigation pane?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Ctrl + E"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "What is the shortcut to open Search and Command box?",
    options: ["Ctrl + E", "Ctrl + F", "Ctrl + K", "Ctrl + L"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What is the shortcut to open the Emoji picker in the compose box?",
    options: ["Windows + .", "Ctrl + Shift + E", "Ctrl + Alt + E", "Alt + ."],
    correctAnswer: "Windows + ."
  },
  {
    question: "How do you start an audio call from a chat?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + A", "Ctrl + Shift + S", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "What is the shortcut to start a video call from a chat?",
    options: ["Ctrl + Shift + V", "Ctrl + Shift + C", "Ctrl + Shift + M", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "What is the shortcut to mute or unmute during a call?",
    options: ["Ctrl + Shift + M", "Ctrl + Shift + U", "Ctrl + M", "Ctrl + U"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the shortcut to turn camera on or off?",
    options: ["Ctrl + Shift + O", "Ctrl + Shift + C", "Ctrl + Shift + P", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "How do you raise or lower your hand during a meeting?",
    options: ["Ctrl + Shift + K", "Ctrl + Shift + H", "Ctrl + Shift + R", "Ctrl + Shift + U"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "What is the shortcut to open meeting chat during a meeting?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + M", "Ctrl + Shift + A", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "What is the shortcut to share your screen in a meeting?",
    options: ["Ctrl + Shift + E", "Ctrl + Shift + S", "Ctrl + Shift + A", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "What is the shortcut to open the participants list during a meeting?",
    options: ["Ctrl + Shift + U", "Ctrl + Shift + P", "Ctrl + Shift + L", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "What is the shortcut to open the background effects panel?",
    options: ["Ctrl + Shift + P", "Ctrl + Shift + B", "Ctrl + Shift + E", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "What is the shortcut to toggle full screen mode during a meeting?",
    options: ["Ctrl + Shift + F", "Ctrl + F", "Ctrl + Shift + M", "Ctrl + Shift + W"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "What is the shortcut to blur your background during a meeting?",
    options: ["Ctrl + Shift + P", "Ctrl + Shift + B", "Ctrl + Alt + B", "Ctrl + B"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "How do you open the 'More actions' menu during a meeting?",
    options: ["Ctrl + Shift + Period", "Ctrl + Shift + M", "Ctrl + Shift + A", "Ctrl + M"],
    correctAnswer: "Ctrl + Shift + Period"
  },
  {
    question: "What is the shortcut to toggle live captions on or off?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + L", "Ctrl + Alt + C", "Ctrl + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "What is the shortcut to navigate between meeting controls?",
    options: ["Ctrl + Shift + Space", "Ctrl + Space", "Ctrl + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Ctrl + Shift + Space"
  },
  {
    question: "What is the shortcut to accept an incoming call?",
    options: ["Ctrl + Shift + A", "Ctrl + Shift + C", "Ctrl + A", "Ctrl + C"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "What is the shortcut to decline an incoming call?",
    options: ["Ctrl + Shift + D", "Ctrl + Shift + C", "Ctrl + D", "Ctrl + C"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "What is the shortcut to search for messages or files?",
    options: ["Ctrl + E", "Ctrl + F", "Ctrl + K", "Ctrl + S"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What is the shortcut to open the Activity tab?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "What is the shortcut to go to the next message in a chat?",
    options: ["Tab", "Enter", "Down Arrow", "Ctrl + Down Arrow"],
    correctAnswer: "Tab"
  },
  {
    question: "What is the shortcut to go to the previous message in a chat?",
    options: ["Shift + Tab", "Up Arrow", "Ctrl + Up Arrow", "Enter"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "How do you delete a message you sent?",
    options: ["Ctrl + Backspace", "Ctrl + Delete", "Alt + Delete", "Delete"],
    correctAnswer: "Delete"
  },
  {
    question: "What is the shortcut to edit your last message?",
    options: ["Up Arrow (when focus is in message box)", "Ctrl + E", "Ctrl + Shift + E", "Alt + E"],
    correctAnswer: "Up Arrow (when focus is in message box)"
  },
  {
    question: "What is the shortcut to mark a message as unread?",
    options: ["Ctrl + Shift + U", "Ctrl + U", "Ctrl + Shift + M", "Alt + U"],
    correctAnswer: "Ctrl + Shift + U"
  },
  {
    question: "What is the shortcut to open the command box?",
    options: ["Ctrl + E", "Ctrl + K", "Ctrl + F", "Ctrl + G"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What is the shortcut to move between sections on the left navigation?",
    options: ["Ctrl + Tab / Ctrl + Shift + Tab", "Ctrl + Up / Ctrl + Down", "Ctrl + Left / Ctrl + Right", "Tab / Shift + Tab"],
    correctAnswer: "Ctrl + Tab / Ctrl + Shift + Tab"
  },
  {
    question: "What is the shortcut to navigate between conversations?",
    options: ["Up / Down Arrow", "Ctrl + Up / Ctrl + Down", "Tab / Shift + Tab", "Page Up / Page Down"],
    correctAnswer: "Up / Down Arrow"
  },
  {
    question: "What is the shortcut to start a new meeting?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Ctrl + M", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "What is the shortcut to schedule a meeting?",
    options: ["Ctrl + Shift + S", "Ctrl + Shift + M", "Ctrl + Shift + N", "Ctrl + S"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "What is the shortcut to turn on live reactions?",
    options: ["Ctrl + Shift + Y", "Ctrl + Shift + R", "Ctrl + Alt + R", "Ctrl + R"],
    correctAnswer: "Ctrl + Shift + Y"
  },
  {
    question: "What is the shortcut to open the Files tab?",
    options: ["Ctrl + 6", "Ctrl + 5", "Ctrl + 7", "Ctrl + 4"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "What is the shortcut to open your profile menu?",
    options: ["Ctrl + Shift + P", "Ctrl + Shift + O", "Ctrl + Shift + A", "Ctrl + Shift + Q"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "How do you toggle the sidebar in Teams?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "What is the shortcut to open Settings?",
    options: ["Ctrl + , (comma)", "Ctrl + Shift + S", "Ctrl + . (period)", "Ctrl + Shift + , (comma)"],
    correctAnswer: "Ctrl + , (comma)"
  },
  {
    question: "What is the shortcut to open Help?",
    options: ["F1", "Ctrl + H", "Ctrl + F1", "Alt + H"],
    correctAnswer: "F1"
  },
  {
    question: "What is the shortcut to toggle mute/unmute your mic in meeting?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Alt + M", "Ctrl + Alt + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the shortcut to toggle your video on/off in meeting?",
    options: ["Ctrl + Shift + O", "Ctrl + O", "Ctrl + Alt + O", "Alt + O"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "What is the shortcut to open chat from the main Teams window?",
    options: ["Ctrl + 2", "Ctrl + 3", "Ctrl + 1", "Ctrl + 4"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "What is the shortcut to pin or unpin a chat?",
    options: ["Ctrl + Shift + P", "Ctrl + P", "Ctrl + Alt + P", "Alt + P"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "What is the shortcut to open the command box for searching?",
    options: ["Ctrl + E", "Ctrl + F", "Ctrl + K", "Ctrl + L"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What is the shortcut to open the activity tab?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "What is the shortcut to open calendar?",
    options: ["Ctrl + 4", "Ctrl + 3", "Ctrl + 2", "Ctrl + 5"],
    correctAnswer: "Ctrl + 4"
  },
  {
    question: "What is the shortcut to open calls tab?",
    options: ["Ctrl + 5", "Ctrl + 4", "Ctrl + 6", "Ctrl + 3"],
    correctAnswer: "Ctrl + 5"
  },
  {
    question: "What is the shortcut to open files tab?",
    options: ["Ctrl + 6", "Ctrl + 5", "Ctrl + 7", "Ctrl + 4"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "What is the shortcut to mark a message as important?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Ctrl + Shift + M", "Ctrl + M"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What is the shortcut to insert a hyperlink in a message?",
    options: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + U"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What is the shortcut to add a new line in chat without sending?",
    options: ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Enter"],
    correctAnswer: "Shift + Enter"
  },
  {
    question: "What is the shortcut to send message?",
    options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
    correctAnswer: "Enter"
  },
  {
    question: "What is the shortcut to jump to the next message?",
    options: ["Down Arrow", "Tab", "Ctrl + Down Arrow", "Enter"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "What is the shortcut to jump to the previous message?",
    options: ["Up Arrow", "Shift + Tab", "Ctrl + Up Arrow", "Enter"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "What is the shortcut to toggle full screen mode?",
    options: ["Ctrl + Shift + F", "Ctrl + F", "Ctrl + Alt + F", "Alt + F"],
    correctAnswer: "Ctrl + Shift + F"
  }
    ],
    hard: [
      {
        question: "How do you toggle the background blur in a Teams meeting?",
        options: ["Ctrl+Shift+P", "Ctrl+Shift+B", "Ctrl+Shift+L", "Ctrl+Alt+B"],
        correctAnswer: "Ctrl+Shift+B"
      },
      {
        question: "What is the shortcut to raise or lower your hand in a meeting?",
        options: ["Ctrl+Shift+K", "Ctrl+Alt+K", "Ctrl+Shift+H", "Ctrl+H"],
        correctAnswer: "Ctrl+Shift+H"
      },
      {
        question: "What is the shortcut to start a new chat from anywhere in Teams?",
        options: ["Ctrl+N", "Ctrl+Shift+N", "Ctrl+Alt+N", "Alt+N"],
        correctAnswer: "Ctrl+N"
      },
      {
        question: "What is the shortcut to open the 'Meet Now' meeting window?",
        options: ["Ctrl+Shift+M", "Ctrl+Alt+M", "Ctrl+Shift+N", "Ctrl+M"],
        correctAnswer: "Ctrl+Shift+N"
      },
      {
        question: "What is the shortcut to share your screen in a meeting?",
        options: ["Ctrl+Shift+E", "Ctrl+Alt+E", "Ctrl+Shift+S", "Ctrl+S"],
        correctAnswer: "Ctrl+Shift+E"
      },
      {
        question: "What is the shortcut to go to the last message in a chat?",
        options: ["Ctrl+End", "Ctrl+Home", "Alt+End", "Alt+Home"],
        correctAnswer: "Ctrl+End"
      },
      {
        question: "What is the shortcut to open the message actions menu for the selected message?",
        options: ["Ctrl+. (period)", "Ctrl+Shift+.", "Ctrl+, (comma)", "Ctrl+Shift+,"],
        correctAnswer: "Ctrl+. (period)"
      },
      {
        question: "What is the shortcut to insert an emoji in chat?",
        options: ["Ctrl+E", "Ctrl+Shift+E", "Windows+. (period)", "Alt+E"],
        correctAnswer: "Windows+. (period)"
      },
      {
        question: "What is the shortcut to navigate between chats in Teams?",
        options: ["Ctrl+Tab", "Ctrl+Shift+Tab", "Alt+Tab", "Ctrl+Shift+N"],
        correctAnswer: "Ctrl+Tab"
      },
      {
        question: "What is the shortcut to open the command box and jump to a team or channel?",
        options: ["Ctrl+E", "Ctrl+K", "Ctrl+F", "Ctrl+L"],
        correctAnswer: "Ctrl+K"
      },
      {
        question: "What is the shortcut to accept an incoming call?",
        options: ["Ctrl+Shift+A", "Ctrl+Shift+C", "Ctrl+Alt+A", "Ctrl+A"],
        correctAnswer: "Ctrl+Shift+A"
      },
      {
        question: "What is the shortcut to decline an incoming call?",
        options: ["Ctrl+Shift+D", "Ctrl+Shift+C", "Ctrl+D", "Alt+D"],
        correctAnswer: "Ctrl+Shift+D"
      },
      {
        question: "What is the shortcut to toggle captions/subtitles in meetings?",
        options: ["Ctrl+Shift+C", "Ctrl+Alt+C", "Ctrl+Shift+S", "Ctrl+C"],
        correctAnswer: "Ctrl+Shift+C"
      },
      {
        question: "What is the shortcut to toggle meeting chat pane?",
        options: ["Ctrl+Shift+O", "Ctrl+Shift+M", "Ctrl+O", "Ctrl+M"],
        correctAnswer: "Ctrl+Shift+O"
      },
      {
        question: "What is the shortcut to open the People pane in a meeting?",
        options: ["Ctrl+Shift+U", "Ctrl+U", "Ctrl+Shift+P", "Ctrl+P"],
        correctAnswer: "Ctrl+Shift+U"
      },
      {
        question: "What is the shortcut to start video call from chat?",
        options: ["Ctrl+Shift+V", "Ctrl+Shift+C", "Ctrl+Alt+V", "Ctrl+V"],
        correctAnswer: "Ctrl+Shift+V"
      },
      {
        question: "What is the shortcut to end a call or leave a meeting?",
        options: ["Ctrl+Shift+E", "Ctrl+Shift+L", "Ctrl+Shift+Q", "Ctrl+Q"],
        correctAnswer: "Ctrl+Shift+Q"
      },
      {
        question: "What is the shortcut to open the calendar app in Teams?",
        options: ["Ctrl+4", "Ctrl+3", "Ctrl+5", "Ctrl+6"],
        correctAnswer: "Ctrl+4"
      },
      {
        question: "What is the shortcut to move to the next section of a meeting?",
        options: ["Ctrl+Shift+Tab", "Ctrl+Tab", "Alt+Tab", "Ctrl+Shift+N"],
        correctAnswer: "Ctrl+Tab"
      },
      {
        question: "What is the shortcut to mute another participant if you are the meeting organizer?",
        options: ["Ctrl+Shift+M", "No shortcut (manual only)", "Ctrl+Alt+M", "Alt+M"],
        correctAnswer: "No shortcut (manual only)"
      },
      {
        question: "What is the shortcut to expand the chat pane to full screen?",
        options: ["Ctrl+Shift+F", "Ctrl+Shift+C", "Ctrl+F", "Ctrl+C"],
        correctAnswer: "Ctrl+Shift+F"
      },
      {
        question: "What is the shortcut to toggle meeting roster?",
        options: ["Ctrl+Shift+R", "Ctrl+R", "Ctrl+Alt+R", "Alt+R"],
        correctAnswer: "Ctrl+Shift+R"
      },
      {
        question: "What is the shortcut to open the Share Tray in a meeting?",
        options: ["Ctrl+Shift+S", "Ctrl+Shift+T", "Ctrl+Alt+S", "Ctrl+S"],
        correctAnswer: "Ctrl+Shift+S"
      },
      {
        question: "What is the shortcut to raise a question or react with an emoji in meeting?",
        options: ["Ctrl+Shift+K", "Ctrl+Alt+K", "Ctrl+Shift+R", "Ctrl+R"],
        correctAnswer: "Ctrl+Shift+K"
      },
      {
        question: "What is the shortcut to open the call controls during a call?",
        options: ["Ctrl+Shift+C", "Ctrl+Alt+C", "Ctrl+C", "Alt+C"],
        correctAnswer: "Ctrl+Shift+C"
      },
      {
        question: "What is the shortcut to toggle spotlighting a video in a meeting?",
        options: ["No default shortcut", "Ctrl+Shift+L", "Ctrl+Alt+L", "Ctrl+L"],
        correctAnswer: "No default shortcut"
      },
      {
        question: "What is the shortcut to toggle live captions on/off?",
        options: ["Ctrl+Shift+C", "Ctrl+C", "Ctrl+Alt+C", "Alt+C"],
        correctAnswer: "Ctrl+Shift+C"
      },
      {
        question: "What is the shortcut to search within a chat or channel?",
        options: ["Ctrl+F", "Ctrl+E", "Ctrl+S", "Ctrl+K"],
        correctAnswer: "Ctrl+F"
      },
      {
        question: "What is the shortcut to add a reaction to a message?",
        options: ["Select message + Ctrl+1-9", "Ctrl+R", "Ctrl+Shift+R", "Alt+R"],
        correctAnswer: "Select message + Ctrl+1-9"
      },
      {
        question: "What is the shortcut to start a meeting from calendar?",
        options: ["Enter on calendar event", "Ctrl+Shift+M", "Ctrl+Enter", "Ctrl+Shift+S"],
        correctAnswer: "Enter on calendar event"
      },
      {
        question: "What is the shortcut to mark a chat message as unread?",
        options: ["Ctrl+Shift+U", "Ctrl+U", "Ctrl+Shift+R", "Ctrl+R"],
        correctAnswer: "Ctrl+Shift+U"
      },
      {
        question: "What is the shortcut to go to the next unread message in chat?",
        options: ["Alt+Down Arrow", "Ctrl+Down Arrow", "Shift+Down Arrow", "Ctrl+Alt+Down Arrow"],
        correctAnswer: "Alt+Down Arrow"
      },
      {
        question: "What is the shortcut to open saved messages?",
        options: ["Ctrl+Shift+S", "Ctrl+Alt+S", "Ctrl+S", "Alt+S"],
        correctAnswer: "Ctrl+Shift+S"
      },
      {
        question: "What is the shortcut to open the organization chart?",
        options: ["Ctrl+Shift+O", "Ctrl+O", "Ctrl+Alt+O", "Alt+O"],
        correctAnswer: "Ctrl+Shift+O"
      },
      {
        question: "What is the shortcut to join a meeting via code or link?",
        options: ["Ctrl+J", "Ctrl+Shift+J", "Ctrl+Alt+J", "Alt+J"],
        correctAnswer: "Ctrl+J"
      },
      {
        question: "What is the shortcut to open Teams on a new window?",
        options: ["Ctrl+Shift+N", "Ctrl+N", "Ctrl+Alt+N", "Alt+N"],
        correctAnswer: "Ctrl+Shift+N"
      },
      {
        question: "What is the shortcut to move to the next channel in a team?",
        options: ["Ctrl+Alt+Down Arrow", "Alt+Down Arrow", "Ctrl+Down Arrow", "Ctrl+Shift+Down Arrow"],
        correctAnswer: "Ctrl+Down Arrow"
      },
      {
        question: "What is the shortcut to move to the previous channel in a team?",
        options: ["Ctrl+Up Arrow", "Alt+Up Arrow", "Ctrl+Alt+Up Arrow", "Shift+Up Arrow"],
        correctAnswer: "Ctrl+Up Arrow"
      },
      {
        question: "What is the shortcut to reply to a thread in channel conversation?",
        options: ["R", "Shift+R", "Enter", "Ctrl+R"],
        correctAnswer: "R"
      },
      {
        question: "What is the shortcut to jump to the compose box from any point in chat?",
        options: ["C", "Ctrl+C", "Alt+C", "Ctrl+Shift+X"],
        correctAnswer: "Ctrl+Shift+X"
      },
      {
        question: "What is the shortcut to open the Help menu in Teams?",
        options: ["Ctrl+/", "Ctrl+H", "Ctrl+Shift+?", "F1"],
        correctAnswer: "Ctrl+/"
      },
      {
        question: "What is the shortcut to create a new team?",
        options: ["Ctrl+Shift+T", "Ctrl+T", "No default shortcut", "Ctrl+Alt+T"],
        correctAnswer: "No default shortcut"
      },
      {
        question: "What is the shortcut to open the apps sidebar (more added apps)?",
        options: ["Ctrl+5", "Ctrl+6", "Ctrl+.", "Ctrl+/"],
        correctAnswer: "Ctrl+6"
      },
      {
        question: "What is the shortcut to switch to Teams activity feed?",
        options: ["Ctrl+1", "Ctrl+A", "Ctrl+Shift+A", "Alt+A"],
        correctAnswer: "Ctrl+1"
      },
      {
        question: "What is the shortcut to switch to Calls tab?",
        options: ["Ctrl+5", "Ctrl+6", "Ctrl+4", "Ctrl+7"],
        correctAnswer: "Ctrl+5"
      },
      {
        question: "What is the shortcut to focus on the meeting content being shared?",
        options: ["Ctrl+Shift+Space", "Ctrl+Space", "Alt+Space", "Ctrl+Shift+F"],
        correctAnswer: "Ctrl+Shift+Space"
      },
      {
        question: "What is the shortcut to navigate to previous app (when navigating apps)?",
        options: ["Ctrl+Shift+,", "Ctrl+Shift+Tab", "Ctrl+Tab", "Alt+Shift+Tab"],
        correctAnswer: "Ctrl+Shift+Tab"
      },
      {
        question: "What is the shortcut to open Teams search box directly?",
        options: ["Ctrl+E", "Ctrl+Shift+F", "Ctrl+F", "Ctrl+K"],
        correctAnswer: "Ctrl+E"
      },
      {
        question: "What is the shortcut to filter the chat or team list?",
        options: ["Ctrl+Shift+F", "Ctrl+Alt+F", "Ctrl+F", "Alt+F"],
        correctAnswer: "Ctrl+Shift+F"
      },
      {
        question: "What is the shortcut to check Teams version (About)?",
        options: ["Ctrl+Alt+V", "Ctrl+Shift+V", "No default shortcut", "Ctrl+/ then type \"version\""],
        correctAnswer: "Ctrl+/ then type \"version\""
      },
      {
        question: "What is the shortcut to download a file in chat or channel?",
        options: ["Ctrl+D", "Alt+D", "Enter on selected file", "Ctrl+Enter"],
        correctAnswer: "Enter on selected file"
      },
      {
        question: "What is the shortcut to open Files tab in the left sidebar?",
        options: ["Ctrl+6", "Ctrl+7", "Ctrl+5", "Ctrl+Shift+F"],
        correctAnswer: "Ctrl+7"
      },
      {
        question: "What is the shortcut to toggle full screen in Teams window?",
        options: ["F11", "Ctrl+Shift+F", "Alt+Enter", "Ctrl+Enter"],
        correctAnswer: "Ctrl+Shift+F"
      }
    ]
  },


  // Google Chrome
  "Microsoft Edge": {
    easy: [
       {
    question: "How do you open a new tab in Microsoft Edge?",
    options: ["Ctrl + T", "Ctrl + N", "Alt + T", "Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you close the current tab?",
    options: ["Ctrl + Q", "Ctrl + W", "Ctrl + F4", "Alt + W"],
    correctAnswer: "Ctrl + W"
  },
  {
    question: "How do you open a new window?",
    options: ["Ctrl + W", "Ctrl + N", "Alt + N", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you refresh the current page?",
    options: ["F5", "Ctrl + R", "Ctrl + F5", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you go to the home page?",
    options: ["Alt + Home", "Ctrl + H", "Shift + Home", "Ctrl + Home"],
    correctAnswer: "Alt + Home"
  },
  {
    question: "How do you open the Downloads page?",
    options: ["Ctrl + D", "Ctrl + J", "Ctrl + Shift + J", "Alt + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "How do you open the Favorites bar?",
    options: ["Ctrl + B", "Ctrl + D", "Ctrl + Shift + B", "Ctrl + F"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "How do you open a link in a new tab?",
    options: ["Ctrl + Click", "Shift + Click", "Alt + Click", "Ctrl + Shift + Click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "How do you zoom in on the page?",
    options: ["Ctrl + +", "Ctrl + =", "Ctrl + Up Arrow", "Alt + +"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "How do you zoom out on the page?",
    options: ["Ctrl + -", "Ctrl + Shift + -", "Alt + -", "Shift + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "How do you reset zoom to default?",
    options: ["Ctrl + 0", "Ctrl + 1", "Alt + 0", "Shift + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "How do you open InPrivate (incognito) mode?",
    options: ["Ctrl + Shift + P", "Ctrl + Shift + N", "Ctrl + Alt + N", "Ctrl + P"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you print the current page?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Ctrl + F2"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you find text on the page?",
    options: ["Ctrl + F", "Ctrl + H", "Alt + F", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you open browser settings?",
    options: ["Alt + F, then S", "Ctrl + Shift + S", "Ctrl + ,", "Alt + E"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you open the browser history?",
    options: ["Ctrl + H", "Ctrl + J", "Ctrl + Y", "Ctrl + L"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How do you open the Edge menu?",
    options: ["Alt + F", "Ctrl + M", "Alt + M", "Ctrl + Shift + F"],
    correctAnswer: "Alt + F"
  },
  {
    question: "How do you open Developer Tools?",
    options: ["F12", "Ctrl + Shift + I", "Both A and B", "Ctrl + I"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the address bar to type a new URL?",
    options: ["Ctrl + L", "Alt + D", "F6", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you go back to the previous page?",
    options: ["Alt + Left Arrow", "Ctrl + Left Arrow", "Shift + Left Arrow", "Ctrl + Backspace"],
    correctAnswer: "Alt + Left Arrow"
  },
  {
    question: "How do you go forward to the next page?",
    options: ["Alt + Right Arrow", "Ctrl + Right Arrow", "Shift + Right Arrow", "Ctrl + F"],
    correctAnswer: "Alt + Right Arrow"
  },
  {
    question: "How do you bookmark the current page?",
    options: ["Ctrl + D", "Ctrl + B", "Ctrl + M", "Ctrl + F2"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you open the Favorites menu?",
    options: ["Ctrl + Shift + O", "Alt + F, then A", "Ctrl + I", "Ctrl + O"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "How do you open a file in Microsoft Edge?",
    options: ["Ctrl + O", "Ctrl + F", "Alt + O", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you save the current page?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "Alt + S", "Ctrl + D"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "How do you switch between open tabs?",
    options: ["Ctrl + Tab", "Ctrl + PgUp", "Ctrl + PgDn", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you reopen the last closed tab?",
    options: ["Ctrl + Shift + T", "Ctrl + Shift + R", "Ctrl + Shift + W", "Ctrl + T"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "How do you scroll down the page using keyboard?",
    options: ["Spacebar", "Down Arrow", "Page Down", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you scroll up the page using keyboard?",
    options: ["Shift + Spacebar", "Up Arrow", "Page Up", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Reading View if available?",
    options: ["Ctrl + Shift + R", "F9", "Alt + R", "F10"],
    correctAnswer: "F9"
  },
  {
    question: "How do you mute a tab?",
    options: ["Right-click the tab and choose \"Mute tab\"", "Ctrl + M", "Alt + M", "Ctrl + Shift + M"],
    correctAnswer: "Right-click the tab and choose \"Mute tab\""
  },
  {
    question: "How do you open a link in a new window?",
    options: ["Shift + Click", "Ctrl + Click", "Alt + Click", "Ctrl + Shift + Click"],
    correctAnswer: "Shift + Click"
  },
  {
    question: "How do you stop a page from loading?",
    options: ["Esc", "Ctrl + Esc", "F5", "Alt + F4"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you open the context menu (right-click menu) using the keyboard?",
    options: ["Shift + F10", "Ctrl + F10", "Alt + F10", "Ctrl + Shift + F10"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How do you open the Find on Page bar?",
    options: ["Ctrl + F", "Alt + F", "Ctrl + Shift + F", "Ctrl + H"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you switch to the next tab?",
    options: ["Ctrl + Tab", "Ctrl + Right Arrow", "Ctrl + PgDn", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you switch to the previous tab?",
    options: ["Ctrl + Shift + Tab", "Ctrl + PgUp", "Ctrl + Left Arrow", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you exit Microsoft Edge?",
    options: ["Alt + F4", "Ctrl + Q", "Ctrl + W (for all tabs)", "Shift + Q"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "How do you open the Share menu?",
    options: ["Ctrl + H", "Ctrl + Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How do you copy the URL from the address bar?",
    options: ["Ctrl + L, then Ctrl + C", "F6, then Ctrl + C", "Alt + D, then Ctrl + C", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the PDF viewer in Edge?",
    options: ["Open any PDF file", "Ctrl + O and select a PDF", "Drag and drop a PDF", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you toggle full-screen mode?",
    options: ["F11", "Ctrl + F11", "Alt + F11", "Ctrl + Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you save a web page as a PDF?",
    options: ["Ctrl + P → Choose \"Save as PDF\"", "Ctrl + S", "Ctrl + Shift + S", "Alt + S"],
    correctAnswer: "Ctrl + P → Choose \"Save as PDF\""
  },
  {
    question: "How do you open the sidebar or vertical tabs?",
    options: ["Ctrl + Shift + ,", "Alt + Shift + V", "Ctrl + Shift + E", "Ctrl + E"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "How do you open Collections?",
    options: ["Ctrl + Shift + Y", "Ctrl + Y", "Alt + Y", "Ctrl + Shift + C"],
    correctAnswer: "Ctrl + Shift + Y"
  },
  {
    question: "How do you open Web Capture tool?",
    options: ["Ctrl + Shift + S", "Ctrl + Alt + S", "Shift + S", "Alt + Shift + S"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "How do you open Web Select tool?",
    options: ["Ctrl + Shift + X", "Ctrl + Alt + X", "Shift + X", "Alt + X"],
    correctAnswer: "Ctrl + Shift + X"
  },
  {
    question: "How do you open Sidebar search (Smart Find)?",
    options: ["Ctrl + E", "Ctrl + Shift + E", "Alt + E", "Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you add a site to your reading list or favorites quickly?",
    options: ["Ctrl + D", "Alt + D", "Ctrl + Shift + D", "F9"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you edit the current favorite/bookmark?",
    options: ["Ctrl + D again", "Right-click → Edit", "Click star icon", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you enable caret browsing?",
    options: ["F7", "Ctrl + F7", "Shift + F7", "Alt + F7"],
    correctAnswer: "F7"
  },
  {
    question: "How do you read aloud a web page?",
    options: ["Ctrl + Shift + U", "Alt + Shift + U", "Alt + U", "Ctrl + U"],
    correctAnswer: "Ctrl + Shift + U"
  },
  {
    question: "How do you copy the link address from a hyperlink?",
    options: ["Right-click → Copy link", "Ctrl + Click", "Alt + Click", "Ctrl + Shift + Click"],
    correctAnswer: "Right-click → Copy link"
  },
  {
    question: "How do you open the feedback/report menu?",
    options: ["Alt + Shift + I", "Ctrl + Shift + I", "Ctrl + I", "Ctrl + F12"],
    correctAnswer: "Alt + Shift + I"
  },
  {
    question: "How do you download a page for offline use?",
    options: ["Ctrl + S", "Ctrl + D", "Alt + S", "Shift + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "How do you use voice search in Edge?",
    options: ["Ctrl + Shift + .", "Click the mic icon in the search bar", "Alt + .", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you access password settings?",
    options: ["edge://settings/passwords", "Ctrl + , → Passwords", "Settings → Profiles", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you move to the top of the page instantly?",
    options: ["Home", "Ctrl + Home", "Alt + Up Arrow", "Ctrl + Up Arrow"],
    correctAnswer: "Home"
  },
  {
    question: "How do you move to the bottom of the page instantly?",
    options: ["End", "Ctrl + End", "Alt + Down Arrow", "Ctrl + Down Arrow"],
    correctAnswer: "End"
  },
  {
    question: "How do you reload the page ignoring cached content?",
    options: ["Ctrl + F5", "Shift + F5", "Ctrl + R", "F5"],
    correctAnswer: "Ctrl + F5"
  }
    ],
    medium: [
      {
  question: "What shortcut opens Developer Tools in Microsoft Edge?",
  options: ["Ctrl + Shift + D", "Ctrl + Shift + I", "Ctrl + Alt + I", "F12"],
  correctAnswer: "Ctrl + Shift + I"
},
{
  question: "How do you open InPrivate browsing mode using keyboard shortcuts?",
  options: ["Ctrl + N", "Ctrl + Shift + N", "Ctrl + P", "Ctrl + Alt + N"],
  correctAnswer: "Ctrl + Shift + N"
},
{
  question: "Which shortcut opens the browser's downloads page?",
  options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + J", "Ctrl + H"],
  correctAnswer: "Ctrl + J"
},
{
  question: "How do you pin/unpin a website as an app in the Start menu?",
  options: ["Alt + P", "Alt + F, then P", "Ctrl + Shift + P", "There is no direct shortcut"],
  correctAnswer: "There is no direct shortcut"
},
{
  question: "What shortcut activates the address bar?",
  options: ["F6", "Alt + D", "Ctrl + L", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Which shortcut opens the \"Clear Browsing Data\" popup directly?",
  options: ["Ctrl + Shift + Delete", "Ctrl + Shift + Backspace", "Alt + Delete", "Ctrl + Alt + D"],
  correctAnswer: "Ctrl + Shift + Delete"
},
{
  question: "How do you move a tab to a new window using keyboard only?",
  options: ["Ctrl + Shift + Drag (Mouse required)", "Ctrl + N", "No direct shortcut; needs mouse", "Alt + T"],
  correctAnswer: "No direct shortcut; needs mouse"
},
{
  question: "What does Ctrl + Shift + B do in Edge?",
  options: ["Opens bookmarks", "Shows/hides the favorites bar", "Opens browsing history", "Enables immersive reader"],
  correctAnswer: "Shows/hides the favorites bar"
},
{
  question: "Which shortcut allows you to focus on the vertical tab pane?",
  options: ["Ctrl + Shift + ,", "Alt + Shift + V", "Ctrl + Shift + E", "No shortcut for this"],
  correctAnswer: "Ctrl + Shift + E"
},
{
  question: "How do you zoom in the page content using keyboard shortcuts?",
  options: ["Ctrl + +", "Ctrl + =", "Ctrl + Scroll up", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you restore default zoom level?",
  options: ["Ctrl + 0", "Ctrl + R", "Ctrl + Z", "Alt + 0"],
  correctAnswer: "Ctrl + 0"
},
{
  question: "What is the shortcut to print a page in Edge?",
  options: ["Ctrl + S", "Ctrl + P", "Ctrl + Shift + P", "Alt + P"],
  correctAnswer: "Ctrl + P"
},
{
  question: "Which shortcut opens the PDF highlighting tool while viewing PDFs?",
  options: ["Ctrl + Alt + H", "Ctrl + H", "Alt + H", "No fixed shortcut; use toolbar"],
  correctAnswer: "No fixed shortcut; use toolbar"
},
{
  question: "Which key combination opens Web Notes in Edge?",
  options: ["Ctrl + Shift + N", "Ctrl + Shift + W", "Alt + N", "No longer supported in new versions"],
  correctAnswer: "No longer supported in new versions"
},
{
  question: "What does Ctrl + K do in Edge?",
  options: ["Duplicates current tab", "Opens a new tab", "Focuses address bar", "Opens web search"],
  correctAnswer: "Duplicates current tab"
},
{
  question: "How do you mute/unmute a tab from the keyboard?",
  options: ["Ctrl + M", "No default keyboard shortcut", "Alt + M", "Shift + M"],
  correctAnswer: "No default keyboard shortcut"
},
{
  question: "What shortcut lets you open \"Collections\"?",
  options: ["Ctrl + Shift + Y", "Ctrl + Y", "Ctrl + Shift + X", "Alt + Y"],
  correctAnswer: "Ctrl + Shift + Y"
},
{
  question: "What is the shortcut to perform a Smart Search (sidebar)?",
  options: ["Ctrl + E", "Ctrl + Shift + E", "Alt + E", "Ctrl + Alt + E"],
  correctAnswer: "Ctrl + E"
},
{
  question: "How do you inspect elements on a webpage?",
  options: ["F12", "Ctrl + Shift + I", "Right-click → Inspect", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you open vertical tabs (if enabled)?",
  options: ["Ctrl + Shift + E", "Alt + Shift + V", "F10", "Ctrl + V"],
  correctAnswer: "Ctrl + Shift + E"
},
{
  question: "How do you open the Find on Page search bar?",
  options: ["Ctrl + F", "Alt + F", "Ctrl + H", "Shift + F"],
  correctAnswer: "Ctrl + F"
},
{
  question: "What shortcut lets you open the Favorites menu?",
  options: ["Ctrl + I", "Alt + I", "Ctrl + Shift + F", "Ctrl + B"],
  correctAnswer: "Ctrl + I"
},
{
  question: "Which shortcut reopens the last closed tab?",
  options: ["Ctrl + Shift + T", "Ctrl + Alt + T", "Ctrl + T", "Shift + Ctrl + R"],
  correctAnswer: "Ctrl + Shift + T"
},
{
  question: "What does Ctrl + Shift + M do in Edge?",
  options: ["Opens PDF markup", "Switches profiles (if signed into multiple accounts)", "Opens a new tab in InPrivate mode", "Opens the Microsoft Edge menu"],
  correctAnswer: "Switches profiles (if signed into multiple accounts)"
},
{
  question: "How do you open the settings page?",
  options: ["Alt + F, then S", "Ctrl + ,", "Both A and B", "Ctrl + Alt + S"],
  correctAnswer: "Both A and B"
},
{
  question: "What is the shortcut for reading mode or Immersive Reader?",
  options: ["F9", "Ctrl + R", "Ctrl + Shift + R", "Alt + I"],
  correctAnswer: "F9"
},
{
  question: "Which shortcut closes all open tabs and exits the browser?",
  options: ["Ctrl + W", "Ctrl + Shift + W", "Alt + F4", "Ctrl + Q"],
  correctAnswer: "Alt + F4"
},
{
  question: "What does Ctrl + Shift + L do?",
  options: ["Opens a link from clipboard", "Opens Language settings", "Opens last visited site", "Locks the Edge browser"],
  correctAnswer: "Opens a link from clipboard"
},
{
  question: "How do you jump to the top of a page instantly?",
  options: ["Ctrl + ↑", "Home", "Alt + Up", "Ctrl + Home"],
  correctAnswer: "Home"
},
{
  question: "What is the shortcut to jump to the bottom of a page?",
  options: ["End", "Ctrl + ↓", "Ctrl + End", "Shift + End"],
  correctAnswer: "End"
},
{
  question: "Which shortcut lets you enter fullscreen mode?",
  options: ["F11", "Ctrl + F11", "Alt + Enter", "Ctrl + Enter"],
  correctAnswer: "F11"
},
{
  question: "What does pressing Esc do in Edge?",
  options: ["Closes current tab", "Stops page loading or exits full screen", "Opens Edge menu", "Refreshes the page"],
  correctAnswer: "Stops page loading or exits full screen"
},
{
  question: "What does Ctrl + Tab do in Edge?",
  options: ["Opens new tab", "Switches to next tab", "Closes current tab", "Opens recently closed tabs"],
  correctAnswer: "Switches to next tab"
},
{
  question: "What does Ctrl + Shift + Tab do in Edge?",
  options: ["Opens new private tab", "Switches to previous tab", "Opens downloads", "Closes current tab"],
  correctAnswer: "Switches to previous tab"
},
{
  question: "Which shortcut opens the browsing history in Edge?",
  options: ["Ctrl + H", "Alt + H", "Ctrl + J", "Ctrl + Shift + H"],
  correctAnswer: "Ctrl + H"
},
{
  question: "What does Ctrl + U do in Edge?",
  options: ["Opens View Source", "Opens a URL", "Undoes last action", "Uploads file"],
  correctAnswer: "Opens View Source"
},
{
  question: "How do you force-refresh a page, bypassing cache?",
  options: ["Ctrl + F5", "Shift + F5", "Ctrl + Shift + R", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Which shortcut lets you bookmark the current page?",
  options: ["Ctrl + D", "Alt + D", "Ctrl + Shift + D", "Ctrl + B"],
  correctAnswer: "Ctrl + D"
},
{
  question: "How do you open a file from your PC in Edge?",
  options: ["Ctrl + O", "Ctrl + F", "Ctrl + Shift + O", "Alt + O"],
  correctAnswer: "Ctrl + O"
},
{
  question: "What does Ctrl + Shift + O do?",
  options: ["Opens favorites manager", "Opens browser extensions", "Opens the downloads folder", "Opens the browser menu"],
  correctAnswer: "Opens favorites manager"
},
{
  question: "How do you download the current page as a PDF?",
  options: ["Ctrl + P → Select \"Save as PDF\"", "Ctrl + S", "Ctrl + Shift + D", "Ctrl + D"],
  correctAnswer: "Ctrl + P → Select \"Save as PDF\""
},
{
  question: "What does Ctrl + Shift + Delete do in Edge?",
  options: ["Clears browsing data", "Deletes cookies only", "Deletes last tab", "Opens browser settings"],
  correctAnswer: "Clears browsing data"
},
{
  question: "How do you quickly focus the address bar?",
  options: ["Ctrl + L", "Alt + D", "F6", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Which shortcut lets you mute/unmute a tab?",
  options: ["Ctrl + M", "Alt + M", "Ctrl + Shift + M", "This must be done manually"],
  correctAnswer: "This must be done manually"
},
{
  question: "How do you open the developer tools?",
  options: ["F12", "Ctrl + Shift + I", "Both A and B", "Ctrl + Alt + I"],
  correctAnswer: "Both A and B"
},
{
  question: "What does Alt + Left Arrow do?",
  options: ["Reloads the page", "Goes back to the previous page", "Closes the tab", "Moves to the tab on the left"],
  correctAnswer: "Goes back to the previous page"
},
{
  question: "What does Alt + Right Arrow do?",
  options: ["Reloads page", "Goes forward to the next page", "Closes Edge", "Opens downloads"],
  correctAnswer: "Goes forward to the next page"
},
{
  question: "How do you focus on web content from the address bar?",
  options: ["Esc", "F6", "Tab", "Alt + Tab"],
  correctAnswer: "Esc"
},
{
  question: "Which shortcut opens the Share panel?",
  options: ["Ctrl + Shift + S", "Alt + Shift + S", "There is no default shortcut", "Ctrl + S"],
  correctAnswer: "There is no default shortcut"
},
{
  question: "What does Ctrl + N do in Edge?",
  options: ["Opens new window", "Opens new tab", "Opens downloads", "Opens notes"],
  correctAnswer: "Opens new window"
},
{
  question: "What does Ctrl + Shift + N do?",
  options: ["Opens new InPrivate window", "Opens downloads", "Opens new tab", "Creates a new note"],
  correctAnswer: "Opens new InPrivate window"
},
{
  question: "Which shortcut closes just the current tab?",
  options: ["Ctrl + W", "Ctrl + F4", "Both A and B", "Ctrl + Q"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you open your browsing history in a side panel?",
  options: ["Ctrl + H", "Ctrl + Shift + H", "Alt + H", "F6"],
  correctAnswer: "Ctrl + H"
},
{
  question: "What shortcut is used to toggle between vertical and horizontal tabs (if enabled)?",
  options: ["No shortcut, manual toggle", "Ctrl + T", "Ctrl + Shift + Tab", "Ctrl + Alt + V"],
  correctAnswer: "No shortcut, manual toggle"
},
{
  question: "Which shortcut opens the Collection panel?",
  options: ["Ctrl + Shift + Y", "Ctrl + Shift + C", "Alt + Y", "Ctrl + Alt + Y"],
  correctAnswer: "Ctrl + Shift + Y"
},
{
  question: "How do you move to the next open Edge window?",
  options: ["Alt + Tab", "Ctrl + Shift + Tab", "Ctrl + Tab", "Windows + Tab"],
  correctAnswer: "Alt + Tab"
},
{
  question: "How do you print a webpage in Edge?",
  options: ["Ctrl + P", "Alt + P", "Ctrl + Shift + P", "Ctrl + S"],
  correctAnswer: "Ctrl + P"
},
{
  question: "What is the shortcut to zoom in on a page?",
  options: ["Ctrl + +", "Ctrl + =", "Ctrl + Mouse Wheel Up", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you zoom out?",
  options: ["Ctrl + -", "Ctrl + Mouse Wheel Down", "Ctrl + Shift + -", "Both A and B"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you reset zoom to 100%?",
  options: ["Ctrl + 0", "Ctrl + Shift + 0", "Ctrl + Alt + 0", "Ctrl + ="],
  correctAnswer: "Ctrl + 0"
}
    ],
    hard: [
      {
  question: "How do you open a feedback tool in Microsoft Edge?",
  options: ["Ctrl + Alt + F", "Alt + Shift + I", "Ctrl + Shift + F12", "Ctrl + Alt + I"],
  correctAnswer: "Alt + Shift + I"
},
{
  question: "How do you view certificate information of a site?",
  options: ["Alt + Shift + S", "Ctrl + Shift + Y", "Click the padlock icon, then press Ctrl + Shift + I", "Alt + D"],
  correctAnswer: "Click the padlock icon, then press Ctrl + Shift + I"
},
{
  question: "How do you enter the immersive reader mode quickly?",
  options: ["F9", "F7", "Ctrl + Shift + M", "Alt + I"],
  correctAnswer: "F9"
},
{
  question: "How do you toggle the vertical tabs pane in Microsoft Edge?",
  options: ["Ctrl + Shift + ,", "Ctrl + Shift + L", "Ctrl + Shift + V", "Ctrl + K"],
  correctAnswer: "Ctrl + Shift + V"
},
{
  question: "How do you bring focus to the sidebar search (Copilot)?",
  options: ["Ctrl + Shift + .", "Ctrl + Shift + ;", "Ctrl + Shift + Space", "Ctrl + /"],
  correctAnswer: "Ctrl + Shift + ."
},
{
  question: "How do you switch between horizontal and vertical tab layouts?",
  options: ["Ctrl + Space", "Ctrl + .", "Ctrl + Shift + Tab", "No dedicated shortcut"],
  correctAnswer: "No dedicated shortcut"
},
{
  question: "How do you open the 'Web Capture' tool?",
  options: ["Ctrl + Shift + S", "Ctrl + Shift + X", "Ctrl + Alt + S", "Ctrl + Alt + W"],
  correctAnswer: "Ctrl + Shift + S"
},
{
  question: "How do you mute/unmute a tab using a shortcut?",
  options: ["Ctrl + M", "Ctrl + Shift + M", "No dedicated shortcut", "Alt + M"],
  correctAnswer: "No dedicated shortcut"
},
{
  question: "How do you open Downloads using keyboard?",
  options: ["Ctrl + D", "Ctrl + J", "Ctrl + Shift + D", "Alt + D"],
  correctAnswer: "Ctrl + J"
},
{
  question: "How do you open Developer Tools?",
  options: ["Ctrl + Alt + I", "Ctrl + Shift + I", "F12", "Both B and C"],
  correctAnswer: "Both B and C"
},
{
  question: "How do you open the JavaScript console in Microsoft Edge?",
  options: ["Ctrl + Shift + J", "Ctrl + Shift + K", "Ctrl + J", "Ctrl + Shift + L"],
  correctAnswer: "Ctrl + Shift + J"
},
{
  question: "How do you open Edge flags page?",
  options: ["edge://flags", "Ctrl + Shift + F", "Ctrl + Alt + F", "Alt + F7"],
  correctAnswer: "edge://flags"
},
{
  question: "What is the shortcut to open the Collections panel?",
  options: ["Ctrl + Shift + Y", "Ctrl + Shift + H", "Ctrl + Shift + C", "Ctrl + Shift + E"],
  correctAnswer: "Ctrl + Shift + Y"
},
{
  question: "How do you view site permissions?",
  options: ["Ctrl + Shift + P", "Click padlock icon → Site permissions", "Ctrl + Alt + P", "Ctrl + 9"],
  correctAnswer: "Click padlock icon → Site permissions"
},
{
  question: "How do you enter Caret Browsing mode?",
  options: ["F7", "F9", "Ctrl + F7", "Alt + F7"],
  correctAnswer: "F7"
},
{
  question: "How do you inspect an element on a webpage directly?",
  options: ["Ctrl + Shift + Q", "Ctrl + Shift + C", "Ctrl + Alt + I", "Ctrl + Shift + E"],
  correctAnswer: "Ctrl + Shift + C"
},
{
  question: "How do you duplicate a tab in Microsoft Edge?",
  options: ["Ctrl + K", "Ctrl + D", "Ctrl + Shift + K", "No dedicated shortcut"],
  correctAnswer: "Ctrl + K"
},
{
  question: "How do you focus the address bar from anywhere?",
  options: ["Alt + D", "Ctrl + L", "F6", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you enter Full Screen mode?",
  options: ["F11", "Ctrl + F", "Alt + Enter", "Ctrl + Alt + F"],
  correctAnswer: "F11"
},
{
  question: "How do you open the \"Favorites\" hub using a shortcut?",
  options: ["Ctrl + Shift + O", "Ctrl + I", "Ctrl + B", "Ctrl + H"],
  correctAnswer: "Ctrl + I"
},
{
  question: "How do you reopen a closed tab?",
  options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + R", "Ctrl + Alt + T"],
  correctAnswer: "Ctrl + Shift + T"
},
{
  question: "How do you move a tab to a new window?",
  options: ["Ctrl + N", "Drag the tab out", "Ctrl + Shift + N", "Ctrl + Alt + N"],
  correctAnswer: "Drag the tab out"
},
{
  question: "How do you go to the next open tab?",
  options: ["Ctrl + Tab", "Ctrl + Page Down", "Ctrl + Right Arrow", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you go to the previous open tab?",
  options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Ctrl + Left Arrow", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you print a webpage?",
  options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + Alt + P", "Alt + P"],
  correctAnswer: "Ctrl + P"
},
{
  question: "How do you clear browsing data?",
  options: ["Ctrl + Shift + Delete", "Ctrl + Alt + Delete", "Ctrl + Backspace", "Alt + Shift + Delete"],
  correctAnswer: "Ctrl + Shift + Delete"
},
{
  question: "How do you open History?",
  options: ["Ctrl + H", "Alt + H", "Ctrl + Y", "Ctrl + Shift + H"],
  correctAnswer: "Ctrl + H"
},
{
  question: "How do you zoom in on a page?",
  options: ["Ctrl + +", "Ctrl + Scroll Up", "Ctrl + =", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you open a new InPrivate window?",
  options: ["Ctrl + Shift + N", "Ctrl + Alt + N", "Ctrl + Shift + P", "Alt + N"],
  correctAnswer: "Ctrl + Shift + N"
},
{
  question: "How do you open the browser settings?",
  options: ["Alt + F → S", "edge://settings", "Ctrl + ,", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you open the page source in Microsoft Edge?",
  options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "Ctrl + Alt + U"],
  correctAnswer: "Ctrl + U"
},
{
  question: "How do you open the Downloads page in Edge?",
  options: ["Ctrl + J", "Ctrl + D", "Alt + J", "Ctrl + Shift + J"],
  correctAnswer: "Ctrl + J"
},
{
  question: "How do you toggle the bookmarks bar?",
  options: ["Ctrl + Shift + B", "Ctrl + B", "Alt + B", "Ctrl + Shift + O"],
  correctAnswer: "Ctrl + Shift + B"
},
{
  question: "How do you save a webpage as a favorite?",
  options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Ctrl + F"],
  correctAnswer: "Ctrl + D"
},
{
  question: "How do you mute a tab in Edge?",
  options: ["Right-click tab → Mute", "Ctrl + M", "Alt + M", "Ctrl + Shift + M"],
  correctAnswer: "Right-click tab → Mute"
},
{
  question: "What is the shortcut to open Edge's Read Aloud feature?",
  options: ["Ctrl + Shift + U", "Ctrl + Shift + G", "Ctrl + Shift + R", "Alt + Shift + R"],
  correctAnswer: "Ctrl + Shift + R"
},
{
  question: "How do you access Web Capture?",
  options: ["Ctrl + Shift + S", "Ctrl + Shift + A", "Ctrl + Alt + S", "Alt + S"],
  correctAnswer: "Ctrl + Shift + S"
},
{
  question: "How do you scroll horizontally with keyboard in Edge?",
  options: ["Shift + Scroll", "Shift + Arrow Left/Right", "Ctrl + Arrow Left/Right", "Alt + Arrow Left/Right"],
  correctAnswer: "Shift + Arrow Left/Right"
},
{
  question: "How do you open the Favorites sidebar?",
  options: ["Ctrl + Shift + O", "Ctrl + Shift + I", "Ctrl + Shift + F", "Alt + F"],
  correctAnswer: "Ctrl + Shift + O"
},
{
  question: "What is the shortcut to toggle immersive reader?",
  options: ["F9", "F11", "Ctrl + R", "Alt + F9"],
  correctAnswer: "F9"
},
{
  question: "How do you enter Developer Tools?",
  options: ["F12", "Ctrl + Shift + I", "Both A and B", "Ctrl + I"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you refresh a webpage ignoring cached content?",
  options: ["Ctrl + F5", "Shift + F5", "Ctrl + Shift + R", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you close the current window in Edge?",
  options: ["Ctrl + Shift + W", "Alt + F4", "Ctrl + F4", "Ctrl + W"],
  correctAnswer: "Alt + F4"
},
{
  question: "How do you bookmark all open tabs?",
  options: ["Ctrl + Shift + D", "Ctrl + Alt + D", "Ctrl + Shift + B", "Alt + Shift + D"],
  correctAnswer: "Ctrl + Shift + D"
},
{
  question: "How do you jump to the tab bar?",
  options: ["Ctrl + 1–8", "Ctrl + Tab", "F6", "Alt + Tab"],
  correctAnswer: "F6"
},
{
  question: "How do you move through different browser elements (tabs, address bar, etc.)?",
  options: ["F6", "Shift + F6", "Ctrl + F6", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you open Microsoft Edge Help?",
  options: ["F1", "Ctrl + F1", "Alt + F1", "Shift + F1"],
  correctAnswer: "F1"
},
{
  question: "How do you close the current tab quickly?",
  options: ["Ctrl + W", "Ctrl + F4", "Alt + W", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you scroll down a page using keyboard only?",
  options: ["Space", "Page Down", "Arrow Down", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you zoom out of a page using keyboard?",
  options: ["Ctrl + -", "Ctrl + Scroll Down", "Ctrl + [", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you restore the zoom to 100%?",
  options: ["Ctrl + 0", "Ctrl + 1", "Alt + 0", "Ctrl + Shift + 0"],
  correctAnswer: "Ctrl + 0"
},
{
  question: "What is the shortcut to search within the page?",
  options: ["Ctrl + F", "Ctrl + G", "Ctrl + H", "Ctrl + Shift + F"],
  correctAnswer: "Ctrl + F"
},
{
  question: "How do you access the profile menu?",
  options: ["Click profile icon", "edge://settings/profiles", "No direct shortcut", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you switch between user profiles?",
  options: ["Click profile icon → Switch", "edge://profiles → Switch", "Use profile-specific shortcuts", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you toggle vertical tabs?",
  options: ["Ctrl + Shift + ,", "Right-click → Turn on vertical tabs", "Use vertical tabs button", "B and C"],
  correctAnswer: "B and C"
},
{
  question: "How do you navigate back to the previous page?",
  options: ["Alt + Left Arrow", "Backspace", "Ctrl + [", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you navigate forward to the next page?",
  options: ["Alt + Right Arrow", "Ctrl + ]", "Shift + Backspace", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you pin a tab in Microsoft Edge?",
  options: ["Right-click tab → Pin", "Ctrl + Shift + P", "No default shortcut", "A and C"],
  correctAnswer: "A and C"
},
{
  question: "How do you drag a tab into a new window using keyboard?",
  options: ["No dedicated shortcut", "Alt + Shift + N", "Ctrl + Shift + N", "Ctrl + Alt + N"],
  correctAnswer: "No dedicated shortcut"
}
    ]
  },

"Google Chrome": {
    easy: [
      {
    question: "How do you open a new tab in Chrome?",
    options: ["Ctrl + N", "Ctrl + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you open a new window in Chrome?",
    options: ["Ctrl + N", "Ctrl + Shift + N", "Alt + N", "Ctrl + T"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you reopen the last closed tab?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + Alt + T", "Ctrl + R"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "How do you close the current tab?",
    options: ["Ctrl + W", "Ctrl + F4", "Alt + F4", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you refresh the current page?",
    options: ["F5", "Ctrl + R", "Alt + R", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you open a new incognito window?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Ctrl + Alt + N", "Shift + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you open the Chrome menu?",
    options: ["Alt + E", "Alt + F", "Ctrl + E", "Ctrl + M"],
    correctAnswer: "Alt + F"
  },
  {
    question: "How do you open the Chrome settings page?",
    options: ["Alt + S", "Ctrl + ,", "Ctrl + H", "Ctrl + Alt + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you open a link in a new tab?",
    options: ["Ctrl + Click", "Shift + Click", "Alt + Click", "Ctrl + Alt + Click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "How do you open a link in a new window?",
    options: ["Shift + Click", "Ctrl + Click", "Alt + Click", "Right-click → Open in new window"],
    correctAnswer: "Shift + Click"
  },
  {
    question: "How do you move to the next tab?",
    options: ["Ctrl + Tab", "Ctrl + Page Down", "Ctrl + Shift + Tab", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you move to the previous tab?",
    options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Alt + Tab", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you open the Find bar to search on the current page?",
    options: ["Ctrl + F", "Alt + F", "Ctrl + H", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you print the current page?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Ctrl + Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you bookmark the current page?",
    options: ["Ctrl + D", "Ctrl + B", "Alt + D", "Ctrl + Shift + B"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you toggle the bookmarks bar?",
    options: ["Ctrl + Shift + B", "Ctrl + B", "Alt + B", "Ctrl + Alt + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "How do you go to the address bar?",
    options: ["Ctrl + L", "Alt + D", "F6", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you save the current page as a bookmark?",
    options: ["Ctrl + D", "Ctrl + B", "Alt + D", "Ctrl + Alt + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you open the History page?",
    options: ["Ctrl + H", "Alt + H", "Ctrl + Shift + H", "Shift + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How do you open the Downloads page?",
    options: ["Ctrl + J", "Alt + J", "Ctrl + Shift + J", "Shift + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "How do you open Chrome Help?",
    options: ["F1", "Ctrl + F1", "Alt + F1", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you open a file from your computer in Chrome?",
    options: ["Ctrl + O", "Ctrl + F", "Ctrl + Shift + O", "Ctrl + Alt + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you open the Chrome bookmarks manager?",
    options: ["Ctrl + Shift + O", "Ctrl + B", "Ctrl + O", "Ctrl + Alt + O"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "How do you stop loading a page?",
    options: ["Esc", "Ctrl + S", "F5", "Alt + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you view source code of a webpage?",
    options: ["Ctrl + U", "Ctrl + Shift + I", "F12", "Ctrl + Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you download the current page as a PDF?",
    options: ["Ctrl + P → Save as PDF", "Ctrl + S", "Ctrl + Shift + S", "Alt + P"],
    correctAnswer: "Ctrl + P → Save as PDF"
  },
  {
    question: "How do you zoom in?",
    options: ["Ctrl + +", "Ctrl + =", "Ctrl + Scroll Up", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you zoom out?",
    options: ["Ctrl + -", "Ctrl + Scroll Down", "Ctrl + Shift + -", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you reset zoom to 100%?",
    options: ["Ctrl + 0", "Ctrl + R", "Alt + 0", "Shift + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "How do you open Developer Tools?",
    options: ["Ctrl + Shift + I", "F12", "Right-click → Inspect", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Clear Browsing Data dialog?",
    options: ["Ctrl + Shift + Delete", "Ctrl + D", "Ctrl + Delete", "Shift + Backspace"],
    correctAnswer: "Ctrl + Shift + Delete"
  },
  {
    question: "How do you open the Chrome Task Manager?",
    options: ["Shift + Esc", "Ctrl + Shift + Esc", "Ctrl + Esc", "Alt + Esc"],
    correctAnswer: "Shift + Esc"
  },
  {
    question: "How do you switch tabs by number (e.g., Tab 1, Tab 2)?",
    options: ["Ctrl + 1 through Ctrl + 8", "Alt + 1 through Alt + 8", "Shift + 1 through Shift + 8", "Ctrl + Shift + 1"],
    correctAnswer: "Ctrl + 1 through Ctrl + 8"
  },
  {
    question: "How do you switch to the last tab?",
    options: ["Ctrl + 9", "Ctrl + 0", "Ctrl + End", "Alt + 9"],
    correctAnswer: "Ctrl + 9"
  },
  {
    question: "How do you open Chrome Extensions page?",
    options: ["Ctrl + Shift + E", "chrome://extensions", "Alt + E", "Ctrl + E"],
    correctAnswer: "chrome://extensions"
  },
  {
    question: "How do you view page info (SSL certificate, cookies, etc.)?",
    options: ["Click the padlock icon", "Alt + P", "Ctrl + Shift + I", "Ctrl + Alt + I"],
    correctAnswer: "Click the padlock icon"
  },
  {
    question: "How do you download the current page as HTML?",
    options: ["Ctrl + S", "Ctrl + H", "Ctrl + Alt + S", "Shift + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "How do you search from the address bar?",
    options: ["Type query and press Enter", "Ctrl + K", "Ctrl + E", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you exit Google Chrome?",
    options: ["Alt + F4", "Ctrl + Shift + Q (twice)", "Ctrl + W", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you open the Chrome Help Center?",
    options: ["F1", "Alt + F1", "Ctrl + Shift + H", "Ctrl + ?"],
    correctAnswer: "F1"
  },
  {
    question: "How do you search with Google from the address bar?",
    options: ["Type and press Enter", "Ctrl + K", "Ctrl + E", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you drag a tab out into a new window?",
    options: ["Click and drag it out", "Ctrl + Drag", "Shift + Drag", "Double-click the tab"],
    correctAnswer: "Click and drag it out"
  },
  {
    question: "How do you mute a tab?",
    options: ["Right-click tab → Mute site", "Ctrl + M", "Alt + M", "Ctrl + Shift + M"],
    correctAnswer: "Right-click tab → Mute site"
  },
  {
    question: "How do you open a recently closed site via History?",
    options: ["Ctrl + H → Click desired site", "Ctrl + Shift + H", "Ctrl + Alt + H", "Alt + Left"],
    correctAnswer: "Ctrl + H → Click desired site"
  },
  {
    question: "How do you open the context menu on a webpage?",
    options: ["Right-click", "Ctrl + Click", "Alt + Click", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you open a link in a new tab in the background?",
    options: ["Ctrl + Click", "Shift + Click", "Ctrl + Shift + Click", "Alt + Click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "How do you open a link in a new tab in the foreground?",
    options: ["Ctrl + Shift + Click", "Ctrl + Click", "Shift + Click", "Alt + Click"],
    correctAnswer: "Ctrl + Shift + Click"
  },
  {
    question: "How do you select everything on a page?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "Alt + A", "Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you copy selected content?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Alt + C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you paste copied content?",
    options: ["Ctrl + V", "Ctrl + P", "Ctrl + Shift + V", "Alt + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "How do you cut selected content?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Alt + X"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "How do you move a tab left or right?",
    options: ["Ctrl + Shift + Page Up/Down", "Ctrl + Left/Right", "Alt + Shift + Arrows", "Ctrl + Shift + Left/Right"],
    correctAnswer: "Ctrl + Shift + Page Up/Down"
  },
  {
    question: "How do you duplicate a tab manually?",
    options: ["Right-click tab → Duplicate", "Ctrl + Drag tab", "Ctrl + D", "Ctrl + Alt + T"],
    correctAnswer: "Right-click tab → Duplicate"
  },
  {
    question: "How do you enter full-screen mode?",
    options: ["F11", "Ctrl + F11", "Alt + Enter", "Ctrl + Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you exit full-screen mode?",
    options: ["F11 again", "Esc", "Alt + F4", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you search selected text using right-click?",
    options: ["Right-click → \"Search Google for…\"", "Ctrl + Right-click", "Ctrl + Shift + S", "Shift + Right-click"],
    correctAnswer: "Right-click → \"Search Google for…\""
  },
  {
    question: "How do you open your Chrome profile menu?",
    options: ["Click profile icon", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "Click profile icon"
  },
  {
    question: "How do you import bookmarks and settings?",
    options: ["chrome://settings/importData", "Ctrl + Shift + I", "Ctrl + B", "Alt + S"],
    correctAnswer: "chrome://settings/importData"
  },
  {
    question: "How do you go back a page in tab history?",
    options: ["Alt + Left Arrow", "Backspace", "Ctrl + Left", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you go forward a page in tab history?",
    options: ["Alt + Right Arrow", "Shift + Backspace", "Ctrl + Right", "A and B"],
    correctAnswer: "A and B"
  }
    ],
    medium: [
      {
  question: "How do you open the Clear Browsing Data options in Chrome?",
  options: ["Ctrl + H", "Ctrl + Shift + Delete", "Ctrl + J", "Ctrl + Shift + H"],
  correctAnswer: "Ctrl + Shift + Delete"
},
{
  question: "How do you duplicate the current tab in Chrome?",
  options: ["Alt + D", "Ctrl + K", "Alt + Enter", "Ctrl + Shift + K"],
  correctAnswer: "Alt + Enter"
},
{
  question: "How do you bookmark all open tabs into a folder?",
  options: ["Ctrl + Shift + B", "Ctrl + D", "Ctrl + Shift + D", "Alt + D"],
  correctAnswer: "Ctrl + Shift + D"
},
{
  question: "How do you open the Chrome Task Manager?",
  options: ["Shift + Esc", "Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + Esc"],
  correctAnswer: "Shift + Esc"
},
{
  question: "How do you open the Downloads page?",
  options: ["Ctrl + D", "Ctrl + J", "Ctrl + Shift + J", "Ctrl + H"],
  correctAnswer: "Ctrl + J"
},
{
  question: "How do you inspect the current page's elements?",
  options: ["Ctrl + Shift + I", "Ctrl + I", "Ctrl + Alt + I", "Alt + Shift + I"],
  correctAnswer: "Ctrl + Shift + I"
},
{
  question: "How do you open the History page in a new tab?",
  options: ["Ctrl + H", "Ctrl + Shift + H", "Ctrl + Alt + H", "Shift + H"],
  correctAnswer: "Ctrl + H"
},
{
  question: "How do you reopen the last closed tab?",
  options: ["Ctrl + R", "Ctrl + Shift + T", "Ctrl + T", "Alt + T"],
  correctAnswer: "Ctrl + Shift + T"
},
{
  question: "How do you switch to the last tab?",
  options: ["Ctrl + 9", "Ctrl + End", "Alt + 9", "Ctrl + Tab"],
  correctAnswer: "Ctrl + 9"
},
{
  question: "How do you switch between user profiles in Chrome?",
  options: ["Ctrl + Shift + M", "Ctrl + Alt + P", "Ctrl + Shift + P", "Alt + Shift + M"],
  correctAnswer: "Ctrl + Shift + M"
},
{
  question: "How do you jump to the address bar in Chrome?",
  options: ["Ctrl + Shift + A", "Ctrl + L", "Alt + D", "Both B and C"],
  correctAnswer: "Both B and C"
},
{
  question: "How do you open a link in a new tab from the current page?",
  options: ["Shift + Click", "Ctrl + Click", "Alt + Click", "Ctrl + Alt + Click"],
  correctAnswer: "Ctrl + Click"
},
{
  question: "How do you open a link in a new window?",
  options: ["Ctrl + Shift + Click", "Shift + Click", "Alt + Click", "Ctrl + Click"],
  correctAnswer: "Ctrl + Shift + Click"
},
{
  question: "How do you save the current page as a bookmark?",
  options: ["Ctrl + D", "Ctrl + B", "Alt + D", "Shift + D"],
  correctAnswer: "Ctrl + D"
},
{
  question: "How do you toggle the bookmarks bar?",
  options: ["Ctrl + Shift + B", "Ctrl + B", "Alt + B", "Shift + B"],
  correctAnswer: "Ctrl + Shift + B"
},
{
  question: "How do you search for a word on the current page?",
  options: ["Ctrl + F", "Ctrl + G", "Alt + F", "Ctrl + Shift + F"],
  correctAnswer: "Ctrl + F"
},
{
  question: "How do you view the source code of a webpage?",
  options: ["Ctrl + U", "Ctrl + Shift + I", "F12", "Alt + U"],
  correctAnswer: "Ctrl + U"
},
{
  question: "How do you toggle Developer Tools in Chrome?",
  options: ["Ctrl + Shift + J", "F12", "Ctrl + Shift + I", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you print the current page?",
  options: ["Ctrl + P", "Alt + P", "Shift + P", "Ctrl + Shift + P"],
  correctAnswer: "Ctrl + P"
},
{
  question: "How do you open a file from your computer in Chrome?",
  options: ["Ctrl + O", "Ctrl + L", "Ctrl + Shift + O", "Alt + O"],
  correctAnswer: "Ctrl + O"
},
{
  question: "How do you open the Chrome settings page?",
  options: ["Ctrl + ,", "Alt + E", "Alt + F then S", "Ctrl + Shift + S"],
  correctAnswer: "Alt + F then S"
},
{
  question: "How do you mute/unmute a site in a tab?",
  options: ["Alt + M", "Ctrl + M", "Right-click tab > Mute site", "Ctrl + Shift + M"],
  correctAnswer: "Right-click tab > Mute site"
},
{
  question: "How do you go to the next open tab?",
  options: ["Ctrl + Tab", "Ctrl + Page Down", "Alt + →", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you go to the previous tab?",
  options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Alt + ←", "Both A and B"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you open the Chrome bookmarks manager?",
  options: ["Ctrl + Shift + O", "Ctrl + B", "Ctrl + Shift + B", "Alt + B"],
  correctAnswer: "Ctrl + Shift + O"
},
{
  question: "How do you open the Extensions page in Chrome?",
  options: ["Ctrl + Shift + X", "Ctrl + Shift + E", "chrome://extensions", "None of the above"],
  correctAnswer: "chrome://extensions"
},
{
  question: "How do you refresh the page ignoring cached content?",
  options: ["Ctrl + R", "Ctrl + F5", "Ctrl + Shift + R", "Both B and C"],
  correctAnswer: "Both B and C"
},
{
  question: "How do you open the Chrome help center?",
  options: ["F1", "Ctrl + H", "Alt + H", "Shift + H"],
  correctAnswer: "F1"
},
{
  question: "How do you toggle full-screen mode in Chrome?",
  options: ["F11", "Ctrl + Shift + F", "Alt + F", "F10"],
  correctAnswer: "F11"
},
{
  question: "How do you close all other tabs except the current one?",
  options: ["Ctrl + Shift + W", "Right-click on tab > Close other tabs", "Alt + W", "Ctrl + Alt + W"],
  correctAnswer: "Right-click on tab > Close other tabs"
},
{
  question: "How do you zoom in on a page in Chrome?",
  options: ["Ctrl + =", "Ctrl + Plus (+)", "Ctrl + Scroll Up", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you zoom out on a page in Chrome?",
  options: ["Ctrl + -", "Ctrl + Minus", "Ctrl + Scroll Down", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you reset zoom level to default in Chrome?",
  options: ["Ctrl + 0", "Ctrl + R", "Alt + 0", "Ctrl + Alt + 0"],
  correctAnswer: "Ctrl + 0"
},
{
  question: "How do you open downloads page in Chrome?",
  options: ["Ctrl + J", "Ctrl + Shift + J", "Alt + J", "Ctrl + D"],
  correctAnswer: "Ctrl + J"
},
{
  question: "How do you open the history page in Chrome?",
  options: ["Ctrl + H", "Ctrl + Y", "Ctrl + Shift + H", "Both A and B"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you open the Clear Browsing Data dialog?",
  options: ["Ctrl + Shift + Del", "Ctrl + Alt + Delete", "Ctrl + Backspace", "Alt + F4"],
  correctAnswer: "Ctrl + Shift + Del"
},
{
  question: "How do you open the Task Manager in Chrome?",
  options: ["Shift + Esc", "Ctrl + Shift + Esc", "Alt + Shift + T", "F11"],
  correctAnswer: "Shift + Esc"
},
{
  question: "How do you bookmark all open tabs into a folder?",
  options: ["Ctrl + Shift + D", "Ctrl + Shift + B", "Ctrl + D", "Ctrl + Alt + B"],
  correctAnswer: "Ctrl + Shift + D"
},
{
  question: "How do you open Chrome in incognito mode from the desktop?",
  options: ["Right-click > New Incognito Window", "Shift + Click Chrome icon", "Ctrl + Right-click > Incognito", "Alt + N"],
  correctAnswer: "Right-click > New Incognito Window"
},
{
  question: "How do you quickly switch between users/profiles in Chrome?",
  options: ["Ctrl + Shift + M", "Click profile icon > Select profile", "Alt + Shift + P", "Ctrl + Alt + P"],
  correctAnswer: "Click profile icon > Select profile"
},
{
  question: "How do you reopen a previously closed window (not just a tab)?",
  options: ["Ctrl + Shift + T (twice)", "Ctrl + Shift + N", "Alt + Shift + W", "Ctrl + Alt + W"],
  correctAnswer: "Ctrl + Shift + T (twice)"
},
{
  question: "How do you go forward to the next page in browsing history?",
  options: ["Alt + →", "Ctrl + →", "Shift + →", "Ctrl + Shift + →"],
  correctAnswer: "Alt + →"
},
{
  question: "How do you go back to the previous page in history?",
  options: ["Alt + ←", "Ctrl + ←", "Shift + ←", "Ctrl + Shift + ←"],
  correctAnswer: "Alt + ←"
},
{
  question: "How do you open the Chrome menu using the keyboard?",
  options: ["Alt + F", "Alt + E", "F10", "Ctrl + F"],
  correctAnswer: "Alt + F"
},
{
  question: "How do you open Chrome DevTools in a separate window?",
  options: ["Ctrl + Shift + I, then drag", "Ctrl + Shift + J", "Ctrl + Alt + I", "Shift + Esc"],
  correctAnswer: "Ctrl + Shift + I, then drag"
},
{
  question: "How do you toggle between tabs in recently used order?",
  options: ["Ctrl + Tab", "Ctrl + 9", "Ctrl + Shift + Tab", "Ctrl + Shift + A (then arrow keys)"],
  correctAnswer: "Ctrl + Shift + A (then arrow keys)"
},
{
  question: "How do you open the Chrome Experiments (flags) page?",
  options: ["chrome://flags", "Ctrl + Shift + F", "Alt + Shift + E", "Ctrl + Shift + E"],
  correctAnswer: "chrome://flags"
},
{
  question: "How do you open Chrome's internal DNS page?",
  options: ["chrome://net-internals/#dns", "chrome://dns", "Ctrl + Shift + D", "chrome://network"],
  correctAnswer: "chrome://net-internals/#dns"
},
{
  question: "How do you inspect an element under your cursor directly?",
  options: ["Ctrl + Shift + C", "Ctrl + Alt + I", "Ctrl + Shift + I", "Ctrl + U"],
  correctAnswer: "Ctrl + Shift + C"
},
{
  question: "How do you open Developer Tools docked to the bottom?",
  options: ["Ctrl + Shift + I, then Ctrl + Shift + D", "Ctrl + Shift + D", "Alt + D", "Ctrl + D"],
  correctAnswer: "Ctrl + Shift + I, then Ctrl + Shift + D"
},
{
  question: "How do you move to the last tab in Chrome?",
  options: ["Ctrl + 9", "Ctrl + End", "Ctrl + L", "Ctrl + →"],
  correctAnswer: "Ctrl + 9"
},
{
  question: "How do you close the current window?",
  options: ["Ctrl + Shift + W", "Alt + F4", "Ctrl + W", "Ctrl + Q"],
  correctAnswer: "Alt + F4"
},
{
  question: "How do you close all Chrome windows at once?",
  options: ["Ctrl + Shift + Q (twice)", "Alt + F4", "Ctrl + Q", "Shift + Q"],
  correctAnswer: "Ctrl + Shift + Q (twice)"
},
{
  question: "How do you open site info and permissions dialog?",
  options: ["Click on lock icon in address bar", "Ctrl + L", "Ctrl + Shift + P", "Ctrl + Shift + L"],
  correctAnswer: "Click on lock icon in address bar"
},
{
  question: "How do you open a new Chrome profile in a new window?",
  options: ["Right-click profile icon > Select profile", "Shift + Click on Chrome icon", "Click user icon > Add", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you access password manager in Chrome?",
  options: ["chrome://settings/passwords", "Ctrl + Shift + P", "Ctrl + Alt + P", "chrome://security"],
  correctAnswer: "chrome://settings/passwords"
},
{
  question: "How do you create a desktop shortcut for a website in Chrome?",
  options: ["Menu > More tools > Create shortcut", "Ctrl + D", "Drag URL to desktop", "Both A and C"],
  correctAnswer: "Both A and C"
},
{
  question: "How do you mute a specific tab using Chrome flags?",
  options: ["Enable tab audio muting in chrome://flags", "Ctrl + Shift + M", "Alt + Shift + M", "Right-click tab > Mute"],
  correctAnswer: "Enable tab audio muting in chrome://flags"
},
{
  question: "How do you import bookmarks and settings from another browser?",
  options: ["Menu > Bookmarks > Import", "Menu > Settings > Import bookmarks", "Ctrl + Shift + B", "Alt + I"],
  correctAnswer: "Menu > Settings > Import bookmarks"
},
{
  question: "How do you quickly view SSL certificate details of a site?",
  options: ["Click padlock icon in address bar", "Ctrl + Shift + S", "Alt + Enter", "Ctrl + Enter"],
  correctAnswer: "Click padlock icon in address bar"
}
    ],
    hard: [
      {
    question: "How do you open Chrome's Developer Tools panel?",
    options: ["Ctrl + Alt + I", "F12", "Ctrl + Shift + I", "Ctrl + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "How do you simulate mobile device view in DevTools?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Alt + M", "Ctrl + Alt + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What shortcut opens the JavaScript Console?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Alt + J", "Ctrl + Alt + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "How do you open the 'Clear Browsing Data' dialog?",
    options: ["Ctrl + Shift + Del", "Ctrl + Alt + Delete", "Shift + Delete", "Ctrl + Delete"],
    correctAnswer: "Ctrl + Shift + Del"
  },
  {
    question: "What is the shortcut to toggle full screen mode?",
    options: ["Ctrl + F", "Alt + Enter", "F11", "Ctrl + Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you view Chrome's Task Manager?",
    options: ["Shift + Esc", "Ctrl + Alt + Esc", "Ctrl + Shift + Esc", "Alt + Shift + Esc"],
    correctAnswer: "Shift + Esc"
  },
  {
    question: "What is the shortcut to mute/unmute a site?",
    options: ["Ctrl + M", "Alt + Shift + M", "Ctrl + Shift + M", "Not available by default"],
    correctAnswer: "Not available by default"
  },
  {
    question: "How do you open the Chrome Help page?",
    options: ["Ctrl + H", "F1", "Alt + H", "Ctrl + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you open the Chrome Settings page?",
    options: ["Ctrl + ,", "Alt + S", "Ctrl + Shift + S", "Ctrl + Shift + ,"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "Shortcut to open the Downloads page in Chrome?",
    options: ["Ctrl + J", "Ctrl + D", "Ctrl + Shift + J", "Alt + D"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "Shortcut to open Chrome's History?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "Alt + H", "Ctrl + Alt + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "Shortcut to duplicate the current tab?",
    options: ["Alt + D", "Ctrl + K", "Ctrl + Shift + K", "Ctrl + L + Enter"],
    correctAnswer: "Ctrl + L + Enter"
  },
  {
    question: "Open Chrome's Bookmarks Manager?",
    options: ["Ctrl + Shift + B", "Ctrl + B", "Ctrl + Alt + B", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "Add 'www.' and '.com' to a site name and open it?",
    options: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Ctrl + Shift + Enter"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "Open the last closed tab?",
    options: ["Ctrl + Shift + T", "Ctrl + Alt + T", "Ctrl + Z", "Ctrl + T"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "Focus on address bar without using mouse?",
    options: ["Ctrl + L", "Alt + D", "F6", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Open link in a new background tab?",
    options: ["Ctrl + Click", "Shift + Click", "Alt + Click", "Ctrl + Shift + Click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "Open link in a new foreground tab?",
    options: ["Ctrl + Shift + Click", "Shift + Click", "Ctrl + Click", "Ctrl + Alt + Click"],
    correctAnswer: "Ctrl + Shift + Click"
  },
  {
    question: "Open a file from your computer in Chrome?",
    options: ["Ctrl + O", "Ctrl + Shift + O", "Alt + O", "Ctrl + Alt + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "Shortcut to print the current page?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Ctrl + Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "Toggle bookmarks bar?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Alt + B", "Ctrl + Alt + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "Save all open tabs as bookmarks in a new folder?",
    options: ["Ctrl + Shift + D", "Ctrl + Alt + D", "Alt + Shift + D", "Ctrl + D"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "Move to next tab?",
    options: ["Ctrl + Tab", "Ctrl + Page Down", "Both A and B", "Alt + Tab"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Move to previous tab?",
    options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Both A and B", "Alt + Shift + Tab"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Jump to specific tab 1-8?",
    options: ["Ctrl + (1-8)", "Alt + (1-8)", "Shift + (1-8)", "Ctrl + Shift + (1-8)"],
    correctAnswer: "Ctrl + (1-8)"
  },
  {
    question: "Jump to the last tab?",
    options: ["Ctrl + 9", "Ctrl + 0", "Ctrl + L", "Ctrl + End"],
    correctAnswer: "Ctrl + 9"
  },
  {
    question: "Switch between Chrome profiles?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Ctrl + Tab", "None"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "Reload page ignoring cached content?",
    options: ["Ctrl + F5", "Shift + F5", "Ctrl + Shift + R", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Go to the home page?",
    options: ["Alt + Home", "Ctrl + Home", "Shift + Home", "Ctrl + Alt + Home"],
    correctAnswer: "Alt + Home"
  },
  {
    question: "Search from anywhere on the page?",
    options: ["Ctrl + F", "Alt + F", "F3", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "How do you open Chrome's Downloads page in a new tab?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Alt + D", "Ctrl + D"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "How do you reopen the last closed window?",
    options: ["Ctrl + Shift + N", "Ctrl + Shift + T", "Ctrl + N", "Alt + Shift + T"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "What shortcut opens the Chrome Help Center?",
    options: ["F1", "Ctrl + H", "Ctrl + F1", "Alt + H"],
    correctAnswer: "F1"
  },
  {
    question: "Shortcut to bookmark all open tabs?",
    options: ["Ctrl + Shift + D", "Ctrl + D", "Ctrl + Alt + D", "Ctrl + Shift + B"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "How do you open the Find bar for searching text on the page?",
    options: ["Ctrl + F", "F3", "Ctrl + G", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to open a new incognito window?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Ctrl + I", "Alt + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "Close the current tab?",
    options: ["Ctrl + W", "Ctrl + F4", "Both A and B", "Ctrl + Q"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to toggle the bookmarks bar?",
    options: ["Ctrl + Shift + B", "Ctrl + B", "Ctrl + Alt + B", "Shift + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "Shortcut to open the Chrome Task Manager?",
    options: ["Shift + Esc", "Ctrl + Esc", "Ctrl + Shift + Esc", "Alt + Shift + Esc"],
    correctAnswer: "Shift + Esc"
  },
  {
    question: "Open Developer Tools and inspect element?",
    options: ["Ctrl + Shift + I", "F12", "Right-click + Inspect", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you zoom in on a page?",
    options: ["Ctrl + +", "Ctrl + Scroll up", "Ctrl + Shift + +", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Zoom out on a page?",
    options: ["Ctrl + -", "Ctrl + Scroll down", "Both A and B", "Ctrl + Shift + -"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Reset zoom to default?",
    options: ["Ctrl + 0", "Ctrl + Shift + 0", "Ctrl + Alt + 0", "Ctrl + Z"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "Shortcut to focus on the next link or form control on a page?",
    options: ["Tab", "Shift + Tab", "Ctrl + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Focus on the previous link or form control?",
    options: ["Shift + Tab", "Tab", "Ctrl + Shift + Tab", "Ctrl + Tab"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "How to toggle mute on the current tab?",
    options: ["Ctrl + M", "Alt + M", "Not a default shortcut", "Ctrl + Shift + M"],
    correctAnswer: "Not a default shortcut"
  },
  {
    question: "How to open a link in a new tab and jump to it?",
    options: ["Ctrl + Shift + Click", "Ctrl + Click", "Shift + Click", "Alt + Click"],
    correctAnswer: "Ctrl + Shift + Click"
  },
  {
    question: "Open the Chrome menu?",
    options: ["Alt + E", "Alt + F", "Ctrl + M", "Ctrl + E"],
    correctAnswer: "Alt + F"
  },
  {
    question: "Open the Extensions page?",
    options: ["Ctrl + Shift + E", "Ctrl + Shift + X", "Ctrl + Shift + A", "Ctrl + Shift + B"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "How to open Chrome's print preview directly?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Shift + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you open the Chrome password manager?",
    options: ["chrome://settings/passwords", "Ctrl + Shift + P", "Alt + P", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to toggle the reading mode in Chrome (if available)?",
    options: ["F9", "Ctrl + Shift + R", "No default shortcut", "Ctrl + R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to open the Chrome task manager?",
    options: ["Shift + Esc", "Ctrl + Esc", "Ctrl + Shift + Esc", "Alt + Shift + Esc"],
    correctAnswer: "Shift + Esc"
  },
  {
    question: "How to move the current tab left?",
    options: ["Ctrl + Shift + Page Up", "Ctrl + Page Up", "Ctrl + Shift + Left Arrow", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to move the current tab right?",
    options: ["Ctrl + Shift + Page Down", "Ctrl + Page Down", "Ctrl + Shift + Right Arrow", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to open the Chrome browser's source code page?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + Alt + U", "Ctrl + Shift + I"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How to open the Downloads folder in File Explorer (Windows) directly from Chrome?",
    options: ["Ctrl + J then Open Folder", "Ctrl + Shift + J", "Alt + D", "Ctrl + O"],
    correctAnswer: "Ctrl + J then Open Folder"
  },
  {
    question: "How to focus the first search result on a Google search page?",
    options: ["Tab", "Ctrl + L", "Ctrl + K", "Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to open the Chrome History page?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "Alt + H", "Ctrl + Alt + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How to open Chrome's Developer Tools in undocked mode?",
    options: ["Ctrl + Shift + D (when DevTools is open)", "Ctrl + Shift + U", "Ctrl + Shift + I", "No shortcut"],
    correctAnswer: "Ctrl + Shift + D (when DevTools is open)"
  }
    ]
  },


  // Google Chrome
  "File Explorer": {
    easy: [
      {
    question: "How do you open File Explorer quickly?",
    options: ["Ctrl + E", "Win + E", "Alt + F", "Shift + E"],
    correctAnswer: "Win + E"
  },
  {
    question: "How do you select all items in a folder?",
    options: ["Ctrl + A", "Alt + A", "Shift + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you rename a selected file or folder?",
    options: ["Ctrl + R", "Shift + R", "F2", "F5"],
    correctAnswer: "F2"
  },
  {
    question: "How do you delete a selected file to Recycle Bin?",
    options: ["Del", "Shift + Del", "Ctrl + Del", "Backspace"],
    correctAnswer: "Del"
  },
  {
    question: "How do you open the context menu (right-click)?",
    options: ["Ctrl + C", "Shift + F10", "Alt + Enter", "F10"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How do you refresh the current folder?",
    options: ["Ctrl + R", "F5", "Alt + F5", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "How do you go up one folder level?",
    options: ["Backspace", "Alt + Up Arrow", "Ctrl + Up Arrow", "Shift + Up Arrow"],
    correctAnswer: "Alt + Up Arrow"
  },
  {
    question: "How do you copy a selected file?",
    options: ["Ctrl + C", "Alt + C", "Shift + C", "Ctrl + Shift + C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you paste a copied item?",
    options: ["Ctrl + V", "Alt + V", "Shift + V", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "How do you cut a file or folder?",
    options: ["Ctrl + X", "Alt + X", "Shift + X", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "How do you open the file's Properties dialog box?",
    options: ["F10", "Alt + Enter", "Shift + P", "Ctrl + Enter"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How do you move between panes in File Explorer?",
    options: ["F6", "Ctrl + Tab", "Alt + F6", "Tab"],
    correctAnswer: "F6"
  },
  {
    question: "How do you open a new File Explorer window?",
    options: ["Ctrl + N", "Alt + N", "Shift + N", "F2"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you close the current File Explorer window?",
    options: ["Alt + F4", "Ctrl + W", "Ctrl + F4", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you select multiple files with your keyboard?",
    options: ["Shift + Arrow Keys", "Ctrl + Shift", "Alt + Arrow Keys", "Ctrl + A"],
    correctAnswer: "Shift + Arrow Keys"
  },
  {
    question: "How do you undo the last action in File Explorer?",
    options: ["Ctrl + Z", "Alt + Z", "Shift + Z", "Ctrl + Shift + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "How do you redo an undone action in File Explorer?",
    options: ["Ctrl + Y", "Alt + Y", "Shift + Y", "Ctrl + Shift + Y"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "How do you select non-contiguous items?",
    options: ["Ctrl + Click", "Shift + Click", "Alt + Click", "Ctrl + Shift + Click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "How do you view the address bar dropdown history?",
    options: ["F4", "Alt + Down", "Ctrl + F4", "Shift + F4"],
    correctAnswer: "F4"
  },
  {
    question: "How do you go to the previous folder?",
    options: ["Alt + Left Arrow", "Ctrl + Left Arrow", "Backspace", "Shift + Left Arrow"],
    correctAnswer: "Alt + Left Arrow"
  },
  {
    question: "How do you go forward in folder history?",
    options: ["Alt + Right Arrow", "Ctrl + Right Arrow", "Shift + Right Arrow", "Win + Right Arrow"],
    correctAnswer: "Alt + Right Arrow"
  },
  {
    question: "How do you open the search box in File Explorer?",
    options: ["Ctrl + E", "Ctrl + F", "F3", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you display file details in a folder?",
    options: ["Alt + V, then D", "Alt + D", "Ctrl + 1", "Shift + F5"],
    correctAnswer: "Alt + V, then D"
  },
  {
    question: "How do you switch to icon view?",
    options: ["Ctrl + Shift + 2", "Ctrl + Shift + 1", "Alt + V, then L", "Ctrl + Shift + V"],
    correctAnswer: "Alt + V, then L"
  },
  {
    question: "How do you create a new folder?",
    options: ["Ctrl + Shift + N", "Alt + Shift + N", "Ctrl + N", "Ctrl + Alt + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you collapse all folders in the navigation pane?",
    options: ["Ctrl + Shift + 1", "Num Lock + Minus (on numeric keypad)", "Alt + -", "Ctrl + L"],
    correctAnswer: "Num Lock + Minus (on numeric keypad)"
  },
  {
    question: "How do you open Quick Access in File Explorer?",
    options: ["Ctrl + Q", "Alt + Home", "Win + Q", "Shift + Q"],
    correctAnswer: "Alt + Home"
  },
  {
    question: "How do you maximize a File Explorer window?",
    options: ["Win + Up Arrow", "Alt + Up Arrow", "Ctrl + M", "F11"],
    correctAnswer: "Win + Up Arrow"
  },
  {
    question: "How do you open the navigation pane?",
    options: ["Alt + F, then N", "Alt + V, then P, then N", "Ctrl + Shift + P", "F5"],
    correctAnswer: "Alt + V, then P, then N"
  },
  {
    question: "How do you open the preview pane?",
    options: ["Alt + V, then P, then P", "Alt + P", "F8", "Shift + P"],
    correctAnswer: "Alt + V, then P, then P"
  },
  {
    question: "How do you open the details pane?",
    options: ["Alt + V, then P, then D", "Alt + Shift + D", "F9", "Ctrl + P"],
    correctAnswer: "Alt + V, then P, then D"
  },
  {
    question: "How do you change the folder layout to 'List'?",
    options: ["Alt + V, then L", "Alt + V, then D", "Alt + V, then S", "Alt + V, then U"],
    correctAnswer: "Alt + V, then U"
  },
  {
    question: "How do you switch to the address bar?",
    options: ["Alt + D", "F4", "Ctrl + L", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Help menu in File Explorer?",
    options: ["F1", "Alt + H", "Ctrl + F1", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you search inside the current folder only?",
    options: ["Click search → Alt + F3", "F3", "Ctrl + E", "None of the above"],
    correctAnswer: "Click search → Alt + F3"
  },
  {
    question: "How do you open the Ribbon with keyboard shortcuts?",
    options: ["Alt", "Ctrl", "Shift", "F2"],
    correctAnswer: "Alt"
  },
  {
    question: "How do you hide/show the Ribbon?",
    options: ["Ctrl + F1", "Alt + F1", "Shift + F1", "F2"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "How do you open the 'This PC' view directly?",
    options: ["Win + E → Click This PC", "Win + E → Alt + Home", "Pin 'This PC' to Quick Access", "Set as default in Folder Options"],
    correctAnswer: "Set as default in Folder Options"
  },
  {
    question: "How do you cycle through open apps, including File Explorer?",
    options: ["Alt + Tab", "Ctrl + Tab", "Win + Tab", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "How do you open a file with its default program?",
    options: ["Enter", "Ctrl + O", "Alt + Enter", "Double-click"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you move a file with drag + shortcut?",
    options: ["Shift + Drag", "Ctrl + Drag", "Alt + Drag", "Alt + Shift + Drag"],
    correctAnswer: "Shift + Drag"
  },
  {
    question: "How do you copy a file with drag + shortcut?",
    options: ["Ctrl + Drag", "Shift + Drag", "Alt + Drag", "None"],
    correctAnswer: "Ctrl + Drag"
  },
  {
    question: "How do you open the system tray / notification area?",
    options: ["Win + B", "Win + T", "Alt + B", "Alt + T"],
    correctAnswer: "Win + B"
  },
  {
    question: "How do you snap File Explorer to left side of screen?",
    options: ["Win + Left Arrow", "Ctrl + Left Arrow", "Shift + Left Arrow", "Win + Shift + Left Arrow"],
    correctAnswer: "Win + Left Arrow"
  },
  {
    question: "How do you minimize the current window?",
    options: ["Win + Down Arrow", "Ctrl + Down Arrow", "Alt + Down Arrow", "Win + M"],
    correctAnswer: "Win + Down Arrow"
  },
  {
    question: "How do you minimize all windows and go to desktop?",
    options: ["Win + D", "Win + M", "Win + ,", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you quickly search for a setting within File Explorer options?",
    options: ["Alt + V → Options", "Alt + T → Options", "Alt + F → Options", "Alt + E"],
    correctAnswer: "Alt + T → Options"
  },
  {
    question: "How do you open Control Panel from File Explorer address bar?",
    options: ["Type Control Panel and press Enter", "Ctrl + Shift + P", "Alt + Ctrl + P", "F4"],
    correctAnswer: "Type Control Panel and press Enter"
  },
  {
    question: "How do you open 'Run' dialog to open File Explorer folders?",
    options: ["Win + R", "Ctrl + R", "Shift + R", "Alt + R"],
    correctAnswer: "Win + R"
  },
  {
    question: "How do you open the parent folder in a new window?",
    options: ["Ctrl + Click on Up Arrow", "Shift + Click on Up Arrow", "Alt + Up Arrow", "Win + Up Arrow"],
    correctAnswer: "Shift + Click on Up Arrow"
  },
  {
    question: "How do you expand all folders in the left pane?",
    options: ["Num Lock + Plus (on numeric keypad)", "Ctrl + Shift + +", "Alt + +", "Ctrl + +"],
    correctAnswer: "Num Lock + Plus (on numeric keypad)"
  },
  {
    question: "How do you close File Explorer using just the keyboard?",
    options: ["Alt + F4", "Ctrl + W", "Ctrl + F4", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open 'Downloads' directly in Explorer?",
    options: ["Win + E → Downloads", "Win + R → type downloads", "Use Quick Access", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you go to the 'Documents' folder quickly?",
    options: ["Win + E → Click Documents", "Win + R → type documents", "Use Quick Access", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open a new tab in File Explorer (Windows 11)?",
    options: ["Ctrl + T", "Ctrl + N", "Ctrl + Shift + T", "F8"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you close the current tab in File Explorer (Windows 11)?",
    options: ["Ctrl + W", "Ctrl + F4", "Alt + F4", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you switch between tabs in File Explorer?",
    options: ["Ctrl + Tab", "Ctrl + Page Up / Down", "Ctrl + Shift + Tab", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open folder options quickly?",
    options: ["Alt + T, then O", "Alt + F, then O", "Alt + V, then O", "Ctrl + Shift + O"],
    correctAnswer: "Alt + T, then O"
  },
  {
    question: "How do you go to your Home folder?",
    options: ["Win + E → Home", "Alt + Home", "Use the Navigation Pane", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open a network drive in File Explorer?",
    options: ["Win + E → Click Network", "Type the path in address bar", "Win + R → \\\\servername\\folder", "All of the above"],
    correctAnswer: "All of the above"
  }
    ],
    medium: [
      {
    question: "How do you open the 'File' menu in File Explorer using the keyboard?",
    options: ["Alt + F", "Ctrl + F", "Alt + E", "Ctrl + E"],
    correctAnswer: "Alt + F"
  },
  {
    question: "How do you activate the menu bar in older versions of File Explorer?",
    options: ["Alt", "F10", "Alt + Shift", "Alt + M"],
    correctAnswer: "F10"
  },
  {
    question: "How do you toggle between open File Explorer windows?",
    options: ["Alt + Tab", "Ctrl + Tab", "Ctrl + Shift + Tab", "Win + Tab"],
    correctAnswer: "Alt + Tab"
  },
  {
    question: "How do you delete an item without sending it to the Recycle Bin?",
    options: ["Shift + Delete", "Alt + Delete", "Ctrl + Delete", "Ctrl + Shift + Delete"],
    correctAnswer: "Shift + Delete"
  },
  {
    question: "How do you move a selected file to a different folder with keyboard only?",
    options: ["Ctrl + X, then navigate, then Ctrl + V", "Shift + Drag", "Alt + M", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + X, then navigate, then Ctrl + V"
  },
  {
    question: "How do you go directly to the Desktop using keyboard shortcuts?",
    options: ["Win + D", "Win + M", "Win + B", "Alt + D"],
    correctAnswer: "Win + D"
  },
  {
    question: "How do you open the Recycle Bin from File Explorer address bar?",
    options: ["Type Recycle Bin", "Type shell:RecycleBinFolder", "Type bin://", "Type %recycle%"],
    correctAnswer: "Type shell:RecycleBinFolder"
  },
  {
    question: "How do you open the user profile folder directly?",
    options: ["Type %userprofile% in address bar", "Ctrl + U", "Alt + U", "Shift + Home"],
    correctAnswer: "Type %userprofile% in address bar"
  },
  {
    question: "How do you lock the navigation pane?",
    options: ["It cannot be locked", "Alt + V, then P, then Lock", "Ctrl + L", "Shift + P"],
    correctAnswer: "It cannot be locked"
  },
  {
    question: "How do you toggle the visibility of hidden files?",
    options: ["Ctrl + H", "Alt + V, then H", "Alt + F", "Shift + H"],
    correctAnswer: "Alt + V, then H"
  },
  {
    question: "How do you enter 'Folder Options' from the Control Panel path?",
    options: ["Control Panel > File Explorer Options", "Run → control folders", "Use search", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you select all items and open the Properties dialog box?",
    options: ["Ctrl + A, then Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + A, then Alt + Enter"
  },
  {
    question: "How do you pin a folder to Quick Access using only keyboard?",
    options: ["Shift + F10 → P", "Alt + P", "Ctrl + P", "Alt + F, then P"],
    correctAnswer: "Shift + F10 → P"
  },
  {
    question: "How do you switch the view to 'Content'?",
    options: ["Alt + V → D → C", "Alt + V → C", "Ctrl + Shift + 6", "Alt + V → W"],
    correctAnswer: "Alt + V → D → C"
  },
  {
    question: "How do you display 'Group by' menu?",
    options: ["Right-click → G", "Alt + V, then Y", "Alt + V, then G", "Ctrl + G"],
    correctAnswer: "Alt + V, then G"
  },
  {
    question: "How do you change the sort order to ascending/descending using keyboard?",
    options: ["Right-click → S", "Alt + V → S", "Alt + V → O", "Cannot be done without mouse"],
    correctAnswer: "Alt + V → O"
  },
  {
    question: "How do you switch to 'Details' view directly?",
    options: ["Ctrl + Shift + 5", "Alt + V → D", "Alt + V → P", "Ctrl + 5"],
    correctAnswer: "Alt + V → D"
  },
  {
    question: "How do you rename multiple selected files at once?",
    options: ["Select → F2", "Ctrl + F2", "Alt + F2", "Right-click → Rename"],
    correctAnswer: "Select → F2"
  },
  {
    question: "How do you create a shortcut to a file using keyboard?",
    options: ["Alt + Drag the file", "Ctrl + Shift + Drag", "Shift + F10 → Create shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open properties of the selected file or folder?",
    options: ["Alt + Enter", "Ctrl + P", "Shift + Enter", "F10"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How do you open File Explorer with focus on 'This PC'?",
    options: ["Win + E, then click 'This PC'", "Set default view in Folder Options", "Use Run → explorer shell:MyComputerFolder", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the parent folder in the same window?",
    options: ["Alt + Up Arrow", "Ctrl + Backspace", "Shift + Backspace", "Ctrl + Up Arrow"],
    correctAnswer: "Alt + Up Arrow"
  },
  {
    question: "How do you open the current folder in a new window?",
    options: ["Ctrl + N", "Shift + Double-click", "Ctrl + Enter", "Alt + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you refresh the folder view?",
    options: ["F5", "Ctrl + R", "Alt + F5", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "How do you open the 'Map Network Drive' dialog?",
    options: ["Alt + T → N", "Alt + F → N", "Ctrl + Shift + M", "Win + M"],
    correctAnswer: "Alt + T → N"
  },
  {
    question: "How do you expand a folder in the navigation pane without opening it?",
    options: ["Right arrow", "Shift + Right arrow", "Ctrl + →", "Alt + →"],
    correctAnswer: "Right arrow"
  },
  {
    question: "How do you collapse a folder in the navigation pane?",
    options: ["Left arrow", "Shift + Left arrow", "Ctrl + ←", "Alt + ←"],
    correctAnswer: "Left arrow"
  },
  {
    question: "How do you open a right-click context menu using keyboard?",
    options: ["Shift + F10", "Alt + Enter", "Ctrl + Enter", "Ctrl + Shift + C"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How do you preview a file in the Preview pane?",
    options: ["Alt + P", "Enable Preview pane, then select file", "Use spacebar in third-party tools like QuickLook", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open File Explorer as Administrator?",
    options: ["Search → Right-click → Run as Administrator", "Create shortcut and set to run as admin", "Use command line with elevated privileges", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you go up multiple folder levels in the address bar?",
    options: ["Click the desired level", "Alt + Up repeatedly", "Ctrl + Click in address bar", "Type full path"],
    correctAnswer: "Alt + Up repeatedly"
  },
  {
    question: "How do you paste a path into the address bar and navigate to it?",
    options: ["Ctrl + V → Enter", "Alt + D → Ctrl + V → Enter", "F4 → Paste → Enter", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you sort files by date modified using keyboard only?",
    options: ["Alt + V → S → D", "Right-click → Sort by → Date Modified", "Tab to column header and press Enter", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you change folder icon via keyboard?",
    options: ["Alt + Enter → Customize tab → Change icon", "Shift + F10 → Properties", "Cannot be done directly", "Right-click → Properties"],
    correctAnswer: "Alt + Enter → Customize tab → Change icon"
  },
  {
    question: "How do you quickly access Network section in File Explorer?",
    options: ["Win + E → Navigation pane", "Type shell:NetworkPlacesFolder", "Use Quick Access", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you move focus from address bar back to file list?",
    options: ["Tab", "Ctrl + Down Arrow", "Esc", "F6"],
    correctAnswer: "F6"
  },
  {
    question: "How do you show the full path in the title bar?",
    options: ["View → Options → Folder Options → View tab", "Enable 'Display full path in the title bar'", "Use registry setting", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you enable dark mode in File Explorer?",
    options: ["Windows Settings → Personalization → Colors", "Registry", "Group Policy", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you set File Explorer to open to 'This PC' instead of 'Quick Access'?",
    options: ["View → Options", "Folder Options → General tab", "Choose 'Open File Explorer to' dropdown", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you map a network drive via Run?",
    options: ["Run → explorer \\\\servername\\folder", "Run → net use", "Use subst command", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the 'Send To' menu with keyboard?",
    options: ["Shift + F10 → N", "Right-click → N", "Alt + N", "Ctrl + N"],
    correctAnswer: "Shift + F10 → N"
  },
  {
    question: "How do you activate the Search Tools tab in the ribbon?",
    options: ["Click search bar", "Ctrl + E", "F3", "Any of the above"],
    correctAnswer: "Any of the above"
  },
  {
    question: "How do you show/hide file extensions?",
    options: ["Alt + V → H → E", "View tab → File name extensions", "Folder Options → View tab", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you display large icons in File Explorer?",
    options: ["Alt + V → L", "Alt + V → X", "Ctrl + Shift + 2", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you create a shortcut to a folder on the desktop via keyboard?",
    options: ["Alt + Drag to Desktop", "Ctrl + Shift + Drag", "Shift + F10 → Create Shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the folder's location from a shortcut?",
    options: ["Alt + Enter → Open File Location", "Right-click → Open file location", "Ctrl + Shift + L", "Shift + Enter"],
    correctAnswer: "Alt + Enter → Open File Location"
  },
  {
    question: "How do you open an elevated File Explorer window?",
    options: ["Run as Administrator from shortcut", "Command Prompt (Admin) → explorer.exe", "Use Task Manager → File → Run", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you see folder size in File Explorer?",
    options: ["Hover over folder", "Use Properties", "Third-party apps", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you select a range of files using keyboard?",
    options: ["Click first file, Shift + Click last", "Arrow keys + Shift", "Ctrl + Space", "Any of the above"],
    correctAnswer: "Any of the above"
  },
  {
    question: "How do you copy a file path to clipboard?",
    options: ["Shift + Right-click → Copy as path", "Alt + D → Ctrl + C", "File → Copy path", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you navigate folder history forward and backward?",
    options: ["Alt + Left / Right Arrow", "Backspace and Shift + Backspace", "Mouse buttons", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you view all drives on the PC?",
    options: ["Win + E → This PC", "Type My Computer", "Run → shell:MyComputerFolder", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you minimize all File Explorer windows?",
    options: ["Win + M", "Win + D", "Ctrl + Shift + Esc → minimize", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you maximize a File Explorer window?",
    options: ["Win + Up", "Alt + Space → X", "Double-click title bar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you close all File Explorer windows at once?",
    options: ["Shift + Click on taskbar → Close all windows", "Task Manager", "Batch script", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you check available space on a drive via keyboard?",
    options: ["Select drive → Alt + Enter", "Ctrl + Shift + P", "Shift + F10 → Properties", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "How do you rename a folder using the context menu?",
    options: ["Shift + F10 → M", "Shift + F10 → Rename", "F2", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you copy a folder from one drive to another using keyboard only?",
    options: ["Ctrl + C → Navigate → Ctrl + V", "Ctrl + X → Navigate → Ctrl + V", "Drag + Ctrl", "Both A and C"],
    correctAnswer: "Ctrl + C → Navigate → Ctrl + V"
  },
  {
    question: "How do you view folder permissions?",
    options: ["Alt + Enter → Security tab", "Right-click → Properties → Security", "Third-party utilities", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open File Explorer to a specific folder via shortcut?",
    options: ["Create shortcut → Set 'Start in' folder", "Use explorer 'path'", "Use File → Open Folder", "All of the above"],
    correctAnswer: "All of the above"
  }
    ],
    hard: [
     {
    question: "How do you open File Explorer from Task Manager?",
    options: ["File → Run new task → type explorer", "Ctrl + N", "Ctrl + Shift + E", "Alt + E"],
    correctAnswer: "File → Run new task → type explorer"
  },
  {
    question: "How do you open the Startup folder in File Explorer?",
    options: ["Win + R → shell:startup", "Win + R → %appdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup", "Both A and B", "Win + S → Startup"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What is the shortcut to directly open the Programs folder in Start Menu?",
    options: ["shell:programs", "shell:startmenu", "shell:common programs", "shell:appsFolder"],
    correctAnswer: "shell:programs"
  },
  {
    question: "How do you open the File Explorer Ribbon with a shortcut?",
    options: ["Ctrl + F1", "Alt", "Alt + F10", "Win + F1"],
    correctAnswer: "Ctrl + F1"
  },
  {
    question: "How do you launch File Explorer from Command Prompt?",
    options: ["Type explorer and press Enter", "Type start .", "Type full path like explorer C:\\", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you show the \"Preview pane\" using keyboard shortcuts?",
    options: ["Alt + P", "Alt + V → P", "Alt + V → H → P", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you show the \"Details pane\" using keyboard?",
    options: ["Alt + Shift + P", "Alt + V → D", "Alt + V → P → D", "Ctrl + Shift + D"],
    correctAnswer: "Alt + Shift + P"
  },
  {
    question: "How do you open \"Open with\" dialog using keyboard?",
    options: ["Shift + F10 → H", "Alt + Enter → Change", "Ctrl + F10", "Right-click → Open with"],
    correctAnswer: "Shift + F10 → H"
  },
  {
    question: "How do you access the Libraries folder directly?",
    options: ["shell:Libraries", "%appdata%\\Libraries", "Create manually", "Cannot access directly"],
    correctAnswer: "shell:Libraries"
  },
  {
    question: "What is the shortcut to launch \"System32\" directly in File Explorer?",
    options: ["Win + R → %windir%\\system32", "Win + S → System32", "CMD → explorer system32", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Recent Files folder?",
    options: ["Win + R → shell:recent", "Win + R → %appdata%\\Microsoft\\Windows\\Recent", "Both A and B", "Win + E → Recent"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the File Explorer options dialog quickly?",
    options: ["Alt + V → O", "Win + R → control folders", "Win + S → File Explorer Options", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Templates folder in File Explorer?",
    options: ["shell:templates", "%appdata%\\Microsoft\\Windows\\Templates", "Both", "Cannot access"],
    correctAnswer: "Both"
  },
  {
    question: "How do you open the SendTo folder in File Explorer?",
    options: ["Win + R → shell:sendto", "%APPDATA%\\Microsoft\\Windows\\SendTo", "File Explorer → Manual navigation", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What command opens \"Control Panel\" inside File Explorer?",
    options: ["control", "explorer shell:ControlPanelFolder", "explorer control", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you directly access the Favorites folder?",
    options: ["shell:favorites", "%userprofile%\\Favorites", "Both", "Favorites no longer exists"],
    correctAnswer: "Both"
  },
  {
    question: "How do you open Administrative Tools in File Explorer?",
    options: ["shell:adminTools", "%programdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools", "Both", "Start menu only"],
    correctAnswer: "Both"
  },
  {
    question: "How do you create a new folder with a specific name via command line?",
    options: ["mkdir \"Folder Name\"", "md FolderName", "Both", "Only in File Explorer"],
    correctAnswer: "Both"
  },
  {
    question: "How do you open AppData folder via Run?",
    options: ["%appdata%", "%localappdata%", "%userprofile%\\AppData", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the \"Fonts\" folder directly?",
    options: ["shell:fonts", "%windir%\\Fonts", "Run → fonts", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the \"Startup (All Users)\" folder in File Explorer?",
    options: ["shell:common startup", "%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup", "Both A and B", "Not possible via shortcut"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open a folder as a different user via Run?",
    options: ["Use runas /user:domain\\user explorer", "Win + R → explorer", "Ctrl + Shift + Enter", "Not possible"],
    correctAnswer: "Use runas /user:domain\\user explorer"
  },
  {
    question: "How do you open WindowsApps folder in File Explorer?",
    options: ["Navigate to C:\\Program Files\\WindowsApps (requires permission)", "shell:AppsFolder", "Both", "Not accessible"],
    correctAnswer: "Both"
  },
  {
    question: "Which command opens the \"Printers\" folder in File Explorer?",
    options: ["shell:PrintersFolder", "control printers", "%windir%\\System32\\spool\\PRINTERS", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open \"Network Connections\" using File Explorer or Run?",
    options: ["ncpa.cpl", "shell:ConnectionsFolder", "control netconnections", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What's the shortcut to quickly jump to the last item in a folder list?",
    options: ["End", "Ctrl + Down", "Shift + End", "Tab + End"],
    correctAnswer: "End"
  },
  {
    question: "What is the keyboard shortcut to open File Explorer in Safe Mode with Networking?",
    options: ["Shift + F8 → Safe Mode → Win + E", "Boot to Safe Mode, then Win + E", "Requires safe boot first", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you mount an ISO file using keyboard?",
    options: ["Select ISO → Enter", "Select ISO → Shift + F10 → M", "Select ISO → Ctrl + M", "Select ISO → Alt + Enter"],
    correctAnswer: "Select ISO → Shift + F10 → M"
  },
  {
    question: "What is the keyboard shortcut to toggle hidden items?",
    options: ["Alt + V → H", "Alt + V → Show/hide → Hidden items", "Both", "No shortcut"],
    correctAnswer: "Both"
  },
  {
    question: "How do you delete a folder that's in use from File Explorer?",
    options: ["Use Task Manager to close process → Delete", "Safe Mode", "Command line with del /f or rmdir /s /q", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Users folder quickly?",
    options: ["Win + R → C:\\Users", "shell:UsersFilesFolder", "%userprofile%\\..", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What opens the Documents folder regardless of user?",
    options: ["shell:CommonDocuments", "%public%\\Documents", "%userprofile%\\Documents", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you open the Quick Access toolbar options?",
    options: ["Right-click on the ribbon", "Alt + F → Options", "Click drop-down in title bar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Downloads folder via command line?",
    options: ["explorer %userprofile%\\Downloads", "shell:Downloads", "Win + R → %userprofile%\\Downloads", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you access clipboard history to paste into File Explorer path bar?",
    options: ["Win + V", "Ctrl + V", "Win + Shift + V", "Clipboard not accessible"],
    correctAnswer: "Win + V"
  },
  {
    question: "How do you access the Navigation pane settings in File Explorer?",
    options: ["Alt + V → N", "View → Navigation pane", "Folder Options → General", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the shortcut to rename multiple selected files in sequence?",
    options: ["F2 → Type → Enter", "Ctrl + A → F2", "Both A and B", "Shift + F2"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the temporary files folder?",
    options: ["%temp%", "shell:Temp", "C:\\Windows\\Temp", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Desktop folder from Run?",
    options: ["shell:desktop", "%userprofile%\\Desktop", "explorer desktop", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the keyboard shortcut to open \"File Explorer Properties\"?",
    options: ["Alt + Enter", "Right-click This PC → Properties", "Win + Pause", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Recent items from the Start menu quickly via Run?",
    options: ["shell:Recent", "%AppData%\\Microsoft\\Windows\\Recent", "explorer recent", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What command opens the Recycle Bin in File Explorer?",
    options: ["shell:RecycleBinFolder", "%SystemDrive%\\$Recycle.Bin", "explorer shell:RecycleBinFolder", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open OneDrive folder directly?",
    options: ["%userprofile%\\OneDrive", "shell:OneDrive", "explorer onedrive", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you pin a folder to Quick Access using keyboard?",
    options: ["Shift + F10 → P", "Right-click → Pin to Quick Access", "Drag to Quick Access pane", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut shows the context menu with modern UI?",
    options: ["Shift + F10", "Win + Shift + F10", "Right-click", "There's no shortcut"],
    correctAnswer: "Win + Shift + F10"
  },
  {
    question: "How do you list all environment variables in a File Explorer window?",
    options: ["Type % in address bar", "Win + R → SystemPropertiesAdvanced", "Use CMD: set", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Programs and Features window via File Explorer?",
    options: ["Control Panel → Programs", "Run → appwiz.cpl", "shell:AppManagement", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you assign a drive letter via File Explorer tools?",
    options: ["Disk Management → Right-click partition", "diskmgmt.msc", "mountvol or diskpart", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open File Explorer as a specific user in domain?",
    options: ["runas /user:DOMAIN\\username explorer", "Use PowerShell → Start-Process explorer -Credential", "Task Scheduler", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you enable \"Always show menus\" in File Explorer?",
    options: ["Folder Options → View tab", "Registry Editor", "Group Policy", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you lock File Explorer navigation pane customization?",
    options: ["Group Policy", "Registry Edit", "Explorer advanced options", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What command opens Windows Tools (formerly Administrative Tools)?",
    options: ["shell:WindowsTools", "%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools", "Win + X → T", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you toggle preview pane via registry or script?",
    options: ["Modify AdvancedSettings key", "Use reg add commands", "Use PowerShell", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you create a shortcut that opens File Explorer to a specific UNC path?",
    options: ["explorer \\\\servername\\folder", "Use shortcut properties", "Map as network drive", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you assign shortcut keys to a File Explorer shortcut?",
    options: ["Right-click → Properties → Shortcut Key", "Desktop Shortcut → Properties", "Taskbar shortcuts", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you toggle \"Hidden files and folders\" via script?",
    options: ["Registry edit", "PowerShell script", "VBS or BAT file", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you display folder sizes in File Explorer natively?",
    options: ["Hover over folder", "Properties dialog", "Not possible inline without third-party tools", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you reset File Explorer settings to default?",
    options: ["Folder Options → Restore Defaults", "Delete registry keys", "Group Policy → Reset", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open \"Open File Location\" for Start Menu items via keyboard?",
    options: ["Win → Search → Right-click → Open file location", "Alt + Enter → Location", "Shift + Right-click", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you kill and restart File Explorer from keyboard only?",
    options: ["Ctrl + Shift + Esc → End Task → File → Run → explorer", "CMD: taskkill /f /im explorer.exe then start explorer", "PowerShell: Stop-Process and Start-Process", "All of the above"],
    correctAnswer: "All of the above"
  }
    ]
  },

  "Slack": {
    easy: [
      {
  question: "How do you open the Quick Switcher in Slack?",
  options: ["Ctrl + K", "Ctrl + Q", "Ctrl + S", "Ctrl + Shift + K"],
  correctAnswer: "Ctrl + K"
},
{
  question: "What shortcut lets you compose a new message in Slack?",
  options: ["Ctrl + N", "Ctrl + Shift + M", "Ctrl + Shift + N", "Alt + N"],
  correctAnswer: "Ctrl + N"
},
{
  question: "How do you open your mentions and reactions panel?",
  options: ["Ctrl + Shift + M", "Ctrl + M", "Ctrl + Shift + R", "Alt + M"],
  correctAnswer: "Ctrl + Shift + M"
},
{
  question: "Which shortcut opens the Threads view?",
  options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + Shift + H", "Alt + T"],
  correctAnswer: "Ctrl + Shift + T"
},
{
  question: "What is the shortcut to search Slack?",
  options: ["Ctrl + F", "Ctrl + K", "Ctrl + Shift + S", "Ctrl + Shift + F"],
  correctAnswer: "Ctrl + F"
},
{
  question: "How do you toggle the sidebar visibility?",
  options: ["Ctrl + Shift + D", "Ctrl + .", "Ctrl + /", "Ctrl + B"],
  correctAnswer: "Ctrl + B"
},
{
  question: "What shortcut allows you to open Direct Messages?",
  options: ["Ctrl + Shift + K", "Ctrl + Shift + M", "Ctrl + Shift + D", "Ctrl + D"],
  correctAnswer: "Ctrl + Shift + K"
},
{
  question: "Which key sends the current message?",
  options: ["Enter", "Shift + Enter", "Ctrl + Enter", "Alt + Enter"],
  correctAnswer: "Enter"
},
{
  question: "How do you start a new line without sending the message?",
  options: ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Enter"],
  correctAnswer: "Shift + Enter"
},
{
  question: "Shortcut to open the Channel browser?",
  options: ["Ctrl + Shift + L", "Ctrl + Shift + C", "Ctrl + Shift + T", "Ctrl + Shift + R"],
  correctAnswer: "Ctrl + Shift + L"
},
{
  question: "How do you jump to the most recent unread message?",
  options: ["Ctrl + J", "Alt + Shift + Down", "Alt + Shift + Up", "Shift + Esc"],
  correctAnswer: "Shift + Esc"
},
{
  question: "What shortcut opens your saved items?",
  options: ["Ctrl + Shift + S", "Ctrl + S", "Alt + S", "Ctrl + Shift + D"],
  correctAnswer: "Ctrl + Shift + S"
},
{
  question: "How do you toggle the emoji reaction menu?",
  options: ["Shift + +", "Ctrl + E", "Hover and click the smiley", "Ctrl + Shift + E"],
  correctAnswer: "Hover and click the smiley"
},
{
  question: "Shortcut to mark all messages as read?",
  options: ["Esc", "Shift + Esc", "Ctrl + Esc", "Alt + Esc"],
  correctAnswer: "Esc"
},
{
  question: "What does Ctrl + ↑ do in the message box?",
  options: ["Edit the last message", "Send the message", "Go to previous conversation", "Nothing"],
  correctAnswer: "Edit the last message"
},
{
  question: "What does Ctrl + Shift + Y do?",
  options: ["Toggle formatting", "Upload a file", "Toggle do not disturb", "Open activity"],
  correctAnswer: "Toggle do not disturb"
},
{
  question: "How do you open the Shortcuts menu in Slack?",
  options: ["Ctrl + /", "Ctrl + ?", "Both A and B", "Ctrl + Shift + /"],
  correctAnswer: "Both A and B"
},
{
  question: "What is the shortcut to move to the next channel or DM?",
  options: ["Alt + Down Arrow", "Ctrl + Down Arrow", "Alt + Shift + Down", "Ctrl + Tab"],
  correctAnswer: "Alt + Down Arrow"
},
{
  question: "Shortcut to move to the previous channel or DM?",
  options: ["Alt + Up Arrow", "Ctrl + Up Arrow", "Ctrl + Tab", "Alt + Tab"],
  correctAnswer: "Alt + Up Arrow"
},
{
  question: "What does `Ctrl + Shift + `` (backtick) do?",
  options: ["Switch workspace", "Refresh", "Start huddle", "Open files"],
  correctAnswer: "Switch workspace"
},
{
  question: "What does Ctrl + Shift + A do in Slack?",
  options: ["Open activity", "Open attachments", "Archive channel", "Accept call"],
  correctAnswer: "Open activity"
},
{
  question: "What does Ctrl + Shift + E do in Slack?",
  options: ["Open files", "Export message", "Expand sidebar", "Edit last message"],
  correctAnswer: "Open files"
},
{
  question: "How do you quickly set your status in Slack?",
  options: ["Ctrl + Shift + Y", "Click on profile and choose status", "Type /status", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What happens when you press Ctrl + Shift + I?",
  options: ["Opens team info", "Opens notification settings", "Opens inbox", "Opens preferences"],
  correctAnswer: "Opens inbox"
},
{
  question: "Which shortcut collapses or expands all inline images?",
  options: ["Ctrl + Shift + X", "Ctrl + Shift + Y", "Ctrl + Shift + L", "Ctrl + Shift + C"],
  correctAnswer: "Ctrl + Shift + X"
},
{
  question: "What shortcut opens the Preferences menu?",
  options: ["Ctrl + ,", "Ctrl + .", "Ctrl + Shift + ,", "Ctrl + /"],
  correctAnswer: "Ctrl + ,"
},
{
  question: "What is the use of Esc key inside a channel?",
  options: ["Marks messages as read", "Clears current message", "Refreshes the channel", "Moves to the top"],
  correctAnswer: "Marks messages as read"
},
{
  question: "How to view pinned messages in a channel?",
  options: ["Ctrl + Shift + P", "Click the pin icon in top-right", "Type /pinned", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What does pressing Ctrl + Shift + Space do?",
  options: ["Clears formatting", "Marks all messages read", "Toggles dark mode", "Opens shortcuts"],
  correctAnswer: "Marks all messages read"
},
{
  question: "How to quickly start a Slack huddle?",
  options: ["Ctrl + H", "Click headphones icon", "Type /huddle", "Both B and C"],
  correctAnswer: "Both B and C"
},
{
  question: "How to create a snippet?",
  options: ["Ctrl + Shift + Enter", "Use + icon > Snippet", "Type /snippet", "Both B and C"],
  correctAnswer: "Both B and C"
},
{
  question: "What happens when you press Ctrl + Shift + M again?",
  options: ["Toggles mentions panel", "Mutes/unmutes", "Opens messages", "Refresh"],
  correctAnswer: "Toggles mentions panel"
},
{
  question: "How do you open the emoji picker in the message box?",
  options: ["Click the smiley face", "Type : and start typing", "Both A and B", "None of the above"],
  correctAnswer: "Both A and B"
},
{
  question: "What does Ctrl + Shift + J do?",
  options: ["Jump to next unread", "Nothing", "Opens emoji reactions", "Opens settings"],
  correctAnswer: "Nothing"
},
{
  question: "Which key combination lets you upload a file?",
  options: ["Ctrl + U", "Drag and drop", "Click + icon > Upload", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What shortcut switches between threads and conversation?",
  options: ["Esc", "Ctrl + Shift + Left/Right", "Alt + Left/Right", "No direct shortcut"],
  correctAnswer: "No direct shortcut"
},
{
  question: "How do you bold text in Slack?",
  options: ["*text*", "**text**", "Ctrl + B", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How to italicize text in Slack?",
  options: ["text", "*text*", "Ctrl + I", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you strikethrough text in Slack?",
  options: ["~text~", "Ctrl + Shift + X", "Both A and B", "None"],
  correctAnswer: "Both A and B"
},
{
  question: "How to insert a code block?",
  options: ["Use backticks (`)", "Ctrl + Shift + C", "Use triple backticks", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Shortcut to toggle dark mode?",
  options: ["Not available", "Ctrl + Shift + D", "Ctrl + Shift + M", "Ctrl + Shift + L"],
  correctAnswer: "Not available (set via preferences)"
},
{
  question: "What does typing /dnd do?",
  options: ["Sets Do Not Disturb", "Deletes a message", "Dismisses a notification", "Downloads"],
  correctAnswer: "Sets Do Not Disturb"
},
{
  question: "Shortcut to jump to a specific conversation?",
  options: ["Ctrl + K", "Ctrl + J", "Ctrl + Q", "Ctrl + Shift + K"],
  correctAnswer: "Ctrl + K"
},
{
  question: "How to access the Slackbot quickly?",
  options: ["Search \"Slackbot\" in Ctrl + K", "Type \"@slackbot\"", "Both A and B", "Not possible"],
  correctAnswer: "Both A and B"
},
{
  question: "What is the purpose of Ctrl + Shift + D in Slack?",
  options: ["Nothing", "Archive", "Toggle sidebar", "Start huddle"],
  correctAnswer: "Toggle sidebar"
},
{
  question: "How to edit your last message?",
  options: ["Ctrl + ↑", "Click the three-dot menu", "Press ↑ in message box", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How to react to the last message?",
  options: ["Click emoji", "Hover + add reaction", "+:emoji:", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What does /remind command do?",
  options: ["Creates reminder", "Nothing", "Sets alarm", "Pins a message"],
  correctAnswer: "Creates reminder"
},
{
  question: "Shortcut to view uploaded files?",
  options: ["Ctrl + Shift + E", "Ctrl + E", "Ctrl + Shift + X", "Ctrl + Shift + F"],
  correctAnswer: "Ctrl + Shift + E"
},
{
  question: "How to access notifications quickly?",
  options: ["Ctrl + Shift + M", "Click bell icon", "Check activity panel", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Shortcut to close Slack app (Windows)?",
  options: ["Alt + F4", "Ctrl + Q", "Ctrl + W", "Esc"],
  correctAnswer: "Alt + F4"
},
{
  question: "Shortcut to close current conversation tab?",
  options: ["Ctrl + W", "Ctrl + Shift + W", "Alt + W", "Esc"],
  correctAnswer: "Ctrl + W"
},
{
  question: "What shortcut opens help?",
  options: ["Ctrl + /", "Ctrl + H", "F1", "Ctrl + ?"],
  correctAnswer: "Ctrl + /"
},
{
  question: "What is the shortcut for clearing formatting?",
  options: ["Ctrl + \\", "Ctrl + Shift + Space", "Ctrl + Space", "Ctrl + Shift + Delete"],
  correctAnswer: "Ctrl + Shift + Space"
},
{
  question: "Shortcut to reply in a thread?",
  options: ["Click \"Reply in thread\"", "Hover and click arrow", "Type >>", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What shortcut inserts a quote block?",
  options: [">", "Ctrl + Q", "Ctrl + Shift + Q", "Alt + Q"],
  correctAnswer: ">"
},
{
  question: "What is the purpose of /collapse command?",
  options: ["Collapses all media", "Minimizes Slack", "Clears messages", "Deletes channel"],
  correctAnswer: "Collapses all media"
},
{
  question: "What does Ctrl + P do in Slack?",
  options: ["Print", "Opens file", "Opens previous message", "Opens channel switcher"],
  correctAnswer: "Opens channel switcher"
},
{
  question: "What is the use of /leave command?",
  options: ["Exit current channel", "Sign out", "Close Slack", "Delete message"],
  correctAnswer: "Exit current channel"
},
{
  question: "What is the shortcut to mark selected conversation as read?",
  options: ["Esc", "Shift + Esc", "Ctrl + R", "Ctrl + Shift + R"],
  correctAnswer: "Shift + Esc"
}
    ],
    medium: [
      {
    "question": "How do you quickly set your status in Slack?",
    "options": ["Ctrl + Shift + S", "Ctrl + Shift + Y", "Ctrl + Shift + X", "Ctrl + Shift + Z"],
    "correctAnswer": "Ctrl + Shift + S"
  },
  {
    "question": "How do you mark all messages in a channel as read?",
    "options": ["Esc", "Shift + Esc", "Ctrl + Esc", "Alt + Esc"],
    "correctAnswer": "Shift + Esc"
  },
  {
    "question": "What shortcut shows or hides the right sidebar?",
    "options": ["Ctrl + .", "Ctrl + ,", "Ctrl + /", "Ctrl + Shift + S"],
    "correctAnswer": "Ctrl + ."
  },
  {
    "question": "How do you jump to the next unread channel or DM?",
    "options": ["Alt + Down Arrow", "Ctrl + Shift + A", "Alt + Shift + ↓", "Alt + Shift + →"],
    "correctAnswer": "Alt + Shift + ↓"
  },
  {
    "question": "What is the shortcut to browse all channels?",
    "options": ["Ctrl + Shift + L", "Ctrl + Shift + C", "Ctrl + Shift + E", "Ctrl + Shift + D"],
    "correctAnswer": "Ctrl + Shift + C"
  },
  {
    "question": "How do you go to the previous workspace?",
    "options": ["Ctrl + Shift + Tab", "Alt + Shift + ←", "Ctrl + Shift + ←", "Ctrl + ,"],
    "correctAnswer": "Ctrl + Shift + ←"
  },
  {
    "question": "What shortcut do you use to jump to the search bar?",
    "options": ["Ctrl + F", "Ctrl + K", "Ctrl + G", "Ctrl + /"],
    "correctAnswer": "Ctrl + F"
  },
  {
    "question": "How do you open the threads view?",
    "options": ["Ctrl + Shift + T", "Ctrl + Shift + M", "Ctrl + Shift + V", "Ctrl + Shift + N"],
    "correctAnswer": "Ctrl + Shift + T"
  },
  {
    "question": "What's the shortcut to download a file?",
    "options": ["Ctrl + J", "Ctrl + D", "Ctrl + S", "Ctrl + Shift + S"],
    "correctAnswer": "Ctrl + S"
  },
  {
    "question": "How do you open the keyboard shortcuts list in Slack?",
    "options": ["Ctrl + /", "Ctrl + ?", "Ctrl + Shift + /", "Ctrl + Shift + ?"],
    "correctAnswer": "Ctrl + /"
  },
  {
    "question": "How do you start a new DM?",
    "options": ["Ctrl + N", "Ctrl + Shift + K", "Ctrl + K", "Ctrl + Shift + N"],
    "correctAnswer": "Ctrl + Shift + K"
  },
  {
    "question": "Shortcut to switch to the next section in Slack?",
    "options": ["F6", "Ctrl + F6", "Tab", "Ctrl + Tab"],
    "correctAnswer": "Tab"
  },
  {
    "question": "How to go back to the previous conversation?",
    "options": ["Ctrl + [", "Ctrl + Shift + [", "Alt + ←", "Ctrl + ←"],
    "correctAnswer": "Ctrl + ["
  },
  {
    "question": "How do you format code in a message?",
    "options": ["Ctrl + `", "Ctrl + Shift + C", "Shift + Enter", "Alt + C"],
    "correctAnswer": "Ctrl + Shift + C"
  },
  {
    "question": "Which shortcut lets you switch between workspaces?",
    "options": ["Ctrl + 1–9", "Ctrl + Shift + Tab", "Ctrl + ,", "Alt + Shift + Tab"],
    "correctAnswer": "Ctrl + 1–9"
  },
  {
    "question": "How do you add a reaction to the last message?",
    "options": ["Shift + :", "Ctrl + Shift + \\", "Ctrl + Shift + `", "Ctrl + Shift + ["],
    "correctAnswer": "Ctrl + Shift + \\"
  },
  {
    "question": "How do you upload a file in Slack?",
    "options": ["Ctrl + O", "Ctrl + U", "Ctrl + Shift + U", "Ctrl + Shift + F"],
    "correctAnswer": "Ctrl + O"
  },
  {
    "question": "What shortcut is used to log out of Slack?",
    "options": ["Ctrl + Shift + Q", "Ctrl + Shift + X", "Ctrl + Q", "Alt + F4"],
    "correctAnswer": "Ctrl + Shift + Q"
  },
  {
    "question": "Shortcut to quickly bold selected text?",
    "options": ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Ctrl + 1"],
    "correctAnswer": "Ctrl + B"
  },
  {
    "question": "How do you create a numbered list?",
    "options": ["Ctrl + Shift + 7", "Ctrl + Alt + 7", "Ctrl + 7", "Shift + 7"],
    "correctAnswer": "Ctrl + Shift + 7"
  },
  {
    "question": "How do you create a bulleted list?",
    "options": ["Ctrl + Shift + 8", "Ctrl + Alt + 8", "Ctrl + 8", "Shift + 8"],
    "correctAnswer": "Ctrl + Shift + 8"
  },
  {
    "question": "Shortcut to add strikethrough formatting?",
    "options": ["Ctrl + Shift + X", "Ctrl + Shift + -", "Ctrl + Alt + X", "Ctrl + X"],
    "correctAnswer": "Ctrl + Shift + X"
  },
  {
    "question": "How do you go to the next section in Slack (Threads → Channels → DM)?",
    "options": ["F6", "Tab", "Ctrl + Tab", "Alt + Tab"],
    "correctAnswer": "Tab"
  },
  {
    "question": "How do you go back a section (DM → Channels → Threads)?",
    "options": ["Shift + Tab", "Ctrl + Shift + Tab", "Alt + Shift + Tab", "Ctrl + ←"],
    "correctAnswer": "Shift + Tab"
  },
  {
    "question": "How do you open your mentions & reactions?",
    "options": ["Ctrl + Shift + M", "Ctrl + M", "Ctrl + Shift + R", "Ctrl + Shift + T"],
    "correctAnswer": "Ctrl + Shift + M"
  },
  {
    "question": "What shortcut do you use to show all unread messages?",
    "options": ["Ctrl + Shift + A", "Ctrl + A", "Ctrl + U", "Ctrl + Shift + U"],
    "correctAnswer": "Ctrl + Shift + A"
  },
  {
    "question": "How do you italicize selected text in Slack?",
    "options": ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + Alt + I", "Ctrl + 2"],
    "correctAnswer": "Ctrl + I"
  },
  {
    "question": "Shortcut to toggle sidebar in Slack?",
    "options": ["Ctrl + .", "Ctrl + /", "Ctrl + B", "Ctrl + Shift + ."],
    "correctAnswer": "Ctrl + ."
  },
  {
    "question": "How do you go to your saved items in Slack?",
    "options": ["Ctrl + Shift + S", "Ctrl + S", "Ctrl + Alt + S", "Ctrl + Shift + O"],
    "correctAnswer": "Ctrl + Shift + S"
  },
  {
    "question": "How to quickly start a call in Slack?",
    "options": ["Ctrl + Shift + C", "Ctrl + Shift + H", "Ctrl + Shift + K", "Ctrl + Shift + Enter"],
    "correctAnswer": "Ctrl + Shift + H"
  },
  {
    "question": "How do you mute a conversation?",
    "options": ["Ctrl + Shift + M", "Ctrl + Shift + U", "Ctrl + Shift + Q", "Ctrl + Shift + 1"],
    "correctAnswer": "Ctrl + Shift + M"
  },
  {
    "question": "How do you edit the last message sent?",
    "options": ["↑ (Up Arrow)", "Ctrl + ↑", "Alt + ↑", "Ctrl + E"],
    "correctAnswer": "↑ (Up Arrow)"
  },
  {
    "question": "How do you mark a channel as read without clicking into it?",
    "options": ["Esc", "Shift + Esc", "Ctrl + K", "Alt + R"],
    "correctAnswer": "Shift + Esc"
  },
  {
    "question": "How to insert a line break in Slack?",
    "options": ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Enter"],
    "correctAnswer": "Shift + Enter"
  },
  {
    "question": "How to view all shortcuts available in Slack?",
    "options": ["Ctrl + /", "Ctrl + Shift + /", "Ctrl + Shift + K", "Ctrl + Shift + ?"],
    "correctAnswer": "Ctrl + /"
  },
  {
    "question": "How do you navigate to the next message in a thread?",
    "options": ["↓ (Down Arrow)", "Ctrl + ↓", "Alt + ↓", "Tab"],
    "correctAnswer": "↓ (Down Arrow)"
  },
  {
    "question": "How to delete a message you sent?",
    "options": ["Up Arrow > Delete", "Up Arrow > Backspace", "Up Arrow > Ctrl + Backspace", "Up Arrow > Ctrl + D"],
    "correctAnswer": "Up Arrow > Delete"
  },
  {
    "question": "Shortcut to go to the previous workspace?",
    "options": ["Ctrl + Shift + ←", "Alt + ←", "Ctrl + ←", "Shift + ←"],
    "correctAnswer": "Ctrl + Shift + ←"
  },
  {
    "question": "What is the shortcut to quote a message?",
    "options": ["Ctrl + Shift + 9", "Ctrl + Shift + >", "Ctrl + Shift + '", "Ctrl + Shift + >"],
    "correctAnswer": "Ctrl + Shift + '"
  },
  {
    "question": "How do you collapse all inline images and files in a conversation?",
    "options": ["Esc", "Ctrl + .", "Ctrl + Shift + .", "Ctrl + Shift + I"],
    "correctAnswer": "Ctrl + Shift + ."
  },
  {
    "question": "How to search for messages in Slack?",
    "options": ["Ctrl + F", "Ctrl + G", "Ctrl + K", "Ctrl + /"],
    "correctAnswer": "Ctrl + F"
  },
  {
    "question": "How do you format inline code?",
    "options": ["Backtick `", "Ctrl + `", "Shift + `", "Alt + `"],
    "correctAnswer": "Backtick `"
  },
  {
    "question": "How do you switch to a different thread view?",
    "options": ["Ctrl + Shift + T", "Ctrl + T", "Alt + T", "Shift + T"],
    "correctAnswer": "Ctrl + Shift + T"
  },
  {
    "question": "Shortcut to quickly react with an emoji?",
    "options": ["Ctrl + Shift + \\", "Ctrl + E", "Shift + :", "Ctrl + R"],
    "correctAnswer": "Ctrl + Shift + \\"
  },
  {
    "question": "How to access preferences directly via shortcut?",
    "options": ["Ctrl + ,", "Ctrl + P", "Ctrl + Shift + P", "Ctrl + Alt + P"],
    "correctAnswer": "Ctrl + ,"
  },
  {
    "question": "Shortcut to quickly go to saved items?",
    "options": ["Ctrl + Shift + S", "Ctrl + Shift + M", "Ctrl + S", "Ctrl + Alt + S"],
    "correctAnswer": "Ctrl + Shift + S"
  },
  {
    "question": "How to open activity view in Slack?",
    "options": ["Ctrl + Shift + E", "Ctrl + Shift + Y", "Ctrl + Shift + L", "Ctrl + Shift + A"],
    "correctAnswer": "Ctrl + Shift + A"
  },
  {
    "question": "How do you send a message without formatting?",
    "options": ["Ctrl + Shift + Enter", "Ctrl + Enter", "Enter", "Shift + Enter"],
    "correctAnswer": "Enter"
  },
  {
    "question": "Shortcut to toggle full screen mode?",
    "options": ["Ctrl + Shift + F", "Ctrl + F", "Ctrl + Alt + F", "F11"],
    "correctAnswer": "F11"
  },
  {
    "question": "How do you pin a message to a channel?",
    "options": ["Ctrl + P", "Ctrl + Shift + P", "Click ••• > Pin", "Ctrl + Alt + P"],
    "correctAnswer": "Click ••• > Pin"
  },
  {
    "question": "How do you jump to your last unread message?",
    "options": ["Alt + Shift + ↑", "Alt + Shift + ↓", "Ctrl + Shift + ↑", "Ctrl + Alt + ↑"],
    "correctAnswer": "Alt + Shift + ↓"
  },
  {
    "question": "How do you toggle dark mode in Slack?",
    "options": ["Ctrl + Shift + D", "Ctrl + Alt + D", "Ctrl + , > Preferences", "Ctrl + Shift + M"],
    "correctAnswer": "Ctrl + , > Preferences"
  },
  {
    "question": "Shortcut to collapse or expand all threads?",
    "options": ["Ctrl + Shift + L", "Ctrl + Shift + F", "Ctrl + Shift + .", "Ctrl + Shift + E"],
    "correctAnswer": "Ctrl + Shift + ."
  },
  {
    "question": "How to navigate to previous channel or DM?",
    "options": ["Ctrl + Shift + Tab", "Alt + ←", "Ctrl + ←", "Ctrl + ["],
    "correctAnswer": "Ctrl + ["
  },
  {
    "question": "Shortcut to refresh Slack?",
    "options": ["Ctrl + R", "Ctrl + Shift + R", "F5", "Ctrl + Shift + F5"],
    "correctAnswer": "Ctrl + R"
  },
  {
    "question": "How do you insert a block quote?",
    "options": ["Ctrl + Shift + 9", "> (greater-than symbol)", "Ctrl + Q", "Shift + Q"],
    "correctAnswer": "> (greater-than symbol)"
  },
  {
    "question": "How do you view your recent mentions?",
    "options": ["Ctrl + Shift + M", "Ctrl + Shift + R", "Ctrl + M", "Ctrl + Alt + M"],
    "correctAnswer": "Ctrl + Shift + M"
  },
  {
    "question": "What's the shortcut to open Help?",
    "options": ["F1", "Ctrl + /", "Ctrl + H", "Ctrl + Shift + /"],
    "correctAnswer": "Ctrl + /"
  },
  {
    "question": "How to add an emoji using shortcut?",
    "options": ["Ctrl + Shift + \\", "Ctrl + :", "Ctrl + Shift + :", "Shift + \\"],
    "correctAnswer": "Ctrl + Shift + \\"
  },
  {
    "question": "How do you format a block of code?",
    "options": ["Triple Backtick (```)", "Ctrl + Shift + C", "Ctrl + C", "Alt + Shift + C"],
    "correctAnswer": "Triple Backtick (```)"
  }
    ],
    hard: [
     {
    question: "How do you open the keyboard shortcuts menu in Slack?",
    options: ["Ctrl + K", "Ctrl + /", "Ctrl + Shift + K", "Ctrl + Shift + /"],
    correctAnswer: "Ctrl + /"
  },
  {
    question: "What shortcut allows you to jump to a specific workspace?",
    options: ["Ctrl + Shift + W", "Ctrl + Number (1-9)", "Ctrl + Alt + W", "Ctrl + Shift + Number (1-9)"],
    correctAnswer: "Ctrl + Number (1-9)"
  },
  {
    question: "How do you toggle the right sidebar in Slack?",
    options: ["Ctrl + .", "Ctrl + ,", "Ctrl + /", "Ctrl + Shift + ."],
    correctAnswer: "Ctrl + ."
  },
  {
    question: "Which shortcut lets you compose a new message?",
    options: ["Ctrl + M", "Ctrl + N", "Ctrl + Shift + M", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you open the quick switcher to jump to channels or DMs?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Ctrl + Q", "Ctrl + Shift + Q"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What shortcut opens your saved items?",
    options: ["Ctrl + Shift + S", "Ctrl + S", "Ctrl + Alt + S", "Ctrl + Shift + I"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "How do you open the Threads view?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + Alt + T", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "Which shortcut allows you to edit your last message?",
    options: ["Ctrl + E", "Up Arrow", "Ctrl + Up Arrow", "Alt + E"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you mark all messages in a channel as read?",
    options: ["Esc", "Shift + Esc", "Ctrl + Esc", "Alt + Esc"],
    correctAnswer: "Shift + Esc"
  },
  {
    question: "What shortcut lets you start a new direct message?",
    options: ["Ctrl + Shift + K", "Ctrl + K", "Ctrl + D", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "How do you open your mentions and reactions?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Ctrl + Alt + M", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "Which shortcut allows you to upload a file?",
    options: ["Ctrl + U", "Ctrl + O", "Ctrl + Shift + U", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you toggle full-screen mode in Slack?",
    options: ["Ctrl + Shift + F", "F11", "Ctrl + F", "Alt + F"],
    correctAnswer: "F11"
  },
  {
    question: "What shortcut lets you open the preferences menu?",
    options: ["Ctrl + P", "Ctrl + ,", "Ctrl + Shift + P", "Ctrl + Alt + P"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you start a call in Slack?",
    options: ["Ctrl + Shift + H", "Ctrl + H", "Ctrl + Shift + C", "Ctrl + C"],
    correctAnswer: "Ctrl + Shift + H"
  },
  {
    question: "Which shortcut allows you to bold selected text?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Ctrl + 1"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How do you italicize selected text?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + Alt + I", "Ctrl + 2"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What shortcut creates a bulleted list?",
    options: ["Ctrl + Shift + 8", "Ctrl + Alt + 8", "Ctrl + 8", "Shift + 8"],
    correctAnswer: "Ctrl + Shift + 8"
  },
  {
    question: "How do you create a numbered list?",
    options: ["Ctrl + Shift + 7", "Ctrl + Alt + 7", "Ctrl + 7", "Shift + 7"],
    correctAnswer: "Ctrl + Shift + 7"
  },
  {
    question: "Which shortcut lets you format code in a message?",
    options: ["Ctrl + Shift + C", "Ctrl + C", "Ctrl + Alt + C", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you navigate to the next section in Slack?",
    options: ["F6", "Tab", "Ctrl + Tab", "Alt + Tab"],
    correctAnswer: "F6"
  },
  {
    question: "What shortcut moves focus to the previous section?",
    options: ["Shift + F6", "Shift + Tab", "Ctrl + Shift + Tab", "Alt + Shift + Tab"],
    correctAnswer: "Shift + F6"
  },
  {
    question: "How do you jump to the next unread channel or DM?",
    options: ["Alt + Shift + Down Arrow", "Ctrl + Shift + Down Arrow", "Ctrl + Alt + Down Arrow", "Alt + Down Arrow"],
    correctAnswer: "Alt + Shift + Down Arrow"
  },
  {
    question: "Which shortcut lets you jump to the previous unread channel or DM?",
    options: ["Alt + Shift + Up Arrow", "Ctrl + Shift + Up Arrow", "Ctrl + Alt + Up Arrow", "Alt + Up Arrow"],
    correctAnswer: "Alt + Shift + Up Arrow"
  },
  {
    question: "How do you go to the next channel or DM?",
    options: ["Alt + Down Arrow", "Ctrl + Down Arrow", "Ctrl + Tab", "Alt + Tab"],
    correctAnswer: "Alt + Down Arrow"
  },
  {
    question: "What shortcut allows you to go to the previous channel or DM?",
    options: ["Alt + Up Arrow", "Ctrl + Up Arrow", "Ctrl + Shift + Tab", "Alt + Shift + Tab"],
    correctAnswer: "Alt + Up Arrow"
  },
  {
    question: "How do you go to the next workspace?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Ctrl + ]", "Ctrl + Shift + ]"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "Which shortcut lets you go to the previous workspace?",
    options: ["Ctrl + Shift + Tab", "Ctrl + [", "Ctrl + Shift + [", "Ctrl + Alt + ["],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "How do you open the channel info pane?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Ctrl + Alt + I", "Ctrl + Shift + C"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What shortcut allows you to collapse or expand all inline images and files in a conversation?",
    options: ["Ctrl + Shift + .", "Ctrl + .", "Ctrl + Shift + ,", "Ctrl + ,"],
    correctAnswer: "Ctrl + Shift + ."
  },
  {
    question: "How do you open the list of all people in your workspace?",
    options: ["Ctrl + Shift + E", "Ctrl + E", "Ctrl + Alt + E", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "Which shortcut lets you view all downloaded files?",
    options: ["Ctrl + Shift + J", "Ctrl + J", "Ctrl + Alt + J", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "How do you create a new snippet?",
    options: ["Ctrl + Shift + Enter", "Ctrl + Enter", "Ctrl + Alt + Enter", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Shift + Enter"
  },
  {
    question: "What shortcut allows you to set your status?",
    options: ["Ctrl + Shift + Y", "Ctrl + Y", "Ctrl + Alt + Y", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Shift + Y"
  },
  {
    question: "How do you open the activity view in Slack?",
    options: ["Ctrl + Shift + A", "Ctrl + A", "Ctrl + Alt + A", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "Which shortcut lets you go to your drafts?",
    options: ["Ctrl + Shift + D", "Ctrl + D", "Ctrl + Alt + D", "Ctrl + Shift + G"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "How do you open the help center?",
    options: ["F1", "Ctrl + H", "Ctrl + Shift + H", "Ctrl + /"],
    correctAnswer: "F1"
  },
  {
    question: "What shortcut allows you to search the current channel or conversation?",
    options: ["Ctrl + F", "Ctrl + G", "Ctrl + Shift + F", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you search the entire workspace?",
    options: ["Ctrl + K", "Ctrl + G", "Ctrl + Shift + G", "Ctrl + F"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "What shortcut allows you to create a custom emoji?",
    options: ["Ctrl + Shift + E", "It must be done via Slack settings manually", "Ctrl + Alt + E", "Ctrl + /"],
    correctAnswer: "It must be done via Slack settings manually"
  },
  {
    question: "Which shortcut lets you cycle through threads, saved, mentions, and apps?",
    options: ["Alt + Shift + ← / →", "Ctrl + Shift + Tab", "Ctrl + Alt + ← / →", "F6"],
    correctAnswer: "Alt + Shift + ← / →"
  },
  {
    question: "How do you send a message without formatting?",
    options: ["Shift + Enter", "Ctrl + Enter", "Ctrl + Shift + Enter", "Alt + Enter"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "What shortcut jumps to the last unread message in a channel?",
    options: ["Ctrl + J", "Alt + Shift + ↓", "Ctrl + .", "Ctrl + Shift + A"],
    correctAnswer: "Alt + Shift + ↓"
  },
  {
    question: "How do you open shortcuts to apps (like polling, reminders)?",
    options: ["Ctrl + /", "Ctrl + .", "Ctrl + K", "Ctrl + Shift + /"],
    correctAnswer: "Ctrl + Shift + /"
  },
  {
    question: "What shortcut expands all threads in a channel view?",
    options: ["Ctrl + Shift + ↑", "This must be done manually", "Alt + Shift + ↑", "Ctrl + Shift + M"],
    correctAnswer: "This must be done manually"
  },
  {
    question: "How do you start a huddle in Slack (if enabled)?",
    options: ["Ctrl + Shift + H", "Alt + Shift + H", "Click the headphones icon", "Ctrl + Alt + H"],
    correctAnswer: "Click the headphones icon"
  },
  {
    question: "How do you mention everyone in a channel?",
    options: ["@channel", "Ctrl + @", "@everyone", "Shift + @"],
    correctAnswer: "@channel"
  },
  {
    question: "What command lets you set a reminder using shortcuts?",
    options: ["/remind", "Ctrl + Shift + R", "Alt + R", "/alert"],
    correctAnswer: "/remind"
  },
  {
    question: "What shortcut will let you quickly add an emoji reaction to a message?",
    options: ["Hover and click on the smiley face", "Ctrl + Shift + \\", "Ctrl + Shift + E", "No direct keyboard shortcut - must use mouse"],
    correctAnswer: "Hover and click on the smiley face"
  },
  {
    question: "How do you jump directly to a specific channel using its number on sidebar?",
    options: ["Ctrl + Number (1–9)", "Alt + Number (1–9)", "Cmd + Number (1–9)", "You cannot jump directly"],
    correctAnswer: "Ctrl + Number (1–9)"
  },
  {
    question: "What shortcut allows opening emoji picker while composing a message?",
    options: ["Ctrl + E", ": (colon)", "Alt + E", "Ctrl + Shift + E"],
    correctAnswer: ": (colon)"
  },
  {
    question: "How do you mark a message as unread starting from that message?",
    options: ["Alt + Click on the message", "Ctrl + Shift + U", "Ctrl + Click", "Ctrl + Shift + M"],
    correctAnswer: "Alt + Click on the message"
  },
  {
    question: "What shortcut lets you collapse the left sidebar?",
    options: ["Ctrl + Shift + D", "Ctrl + Shift + L", "Ctrl + Shift + ←", "No shortcut - must be done via mouse"],
    correctAnswer: "No shortcut - must be done via mouse"
  },
  {
    question: "How do you bring up the emoji code helper?",
    options: ["Type :", "Ctrl + :", "Ctrl + Shift + :", "Ctrl + Shift + E"],
    correctAnswer: "Type :"
  },
  {
    question: "Which slash command will show your reminders?",
    options: ["/myreminders", "/showreminders", "/remind list", "/reminders"],
    correctAnswer: "/remind list"
  },
  {
    question: "How do you react with the same emoji again on the most recent message?",
    options: ["Use arrow keys and press :", "Click with mouse", "Press the up arrow and select emoji", "No keyboard shortcut available"],
    correctAnswer: "No keyboard shortcut available"
  },
  {
    question: "What shortcut lets you add a strikethrough format in a message?",
    options: ["Ctrl + Shift + X", "Text", "Ctrl + X", "Alt + X"],
    correctAnswer: "Text"
  },
  {
    question: "How do you insert a blockquote in Slack messages?",
    options: ["> followed by space", "Ctrl + Shift + Q", "Ctrl + Q", "Alt + >"],
    correctAnswer: "> followed by space"
  },
  {
    question: "What is the shortcut for opening the workflow builder?",
    options: ["It can only be opened via the sidebar Tools menu", "Ctrl + W", "Ctrl + Shift + W", "Alt + Shift + W"],
    correctAnswer: "It can only be opened via the sidebar Tools menu"
  }
    ]
  },

   "Telegram": {
    easy: [
     {
  question: "How do you start a new chat in Telegram?",
  options: ["Ctrl + N", "Ctrl + M", "Ctrl + Shift + N", "Alt + N"],
  correctAnswer: "Ctrl + N"
},
{
  question: "How do you open Telegram Settings?",
  options: ["Ctrl + ,", "Ctrl + Alt + S", "Ctrl + P", "Alt + ,"],
  correctAnswer: "Ctrl + ,"
},
{
  question: "How do you search messages in a chat?",
  options: ["Ctrl + F", "Ctrl + S", "Ctrl + H", "Alt + F"],
  correctAnswer: "Ctrl + F"
},
{
  question: "How do you go to the next chat?",
  options: ["Ctrl + Down Arrow", "Tab", "Ctrl + Tab", "Shift + Down"],
  correctAnswer: "Ctrl + Tab"
},
{
  question: "How do you go to the previous chat?",
  options: ["Ctrl + Shift + Tab", "Alt + Up", "Ctrl + Up", "Shift + Tab"],
  correctAnswer: "Ctrl + Shift + Tab"
},
{
  question: "How do you open the emoji panel?",
  options: ["Ctrl + E", "Ctrl + ;", "Ctrl + .", ": (colon key)"],
  correctAnswer: ": (colon key)"
},
{
  question: "How do you jump to the bottom of a chat?",
  options: ["Ctrl + End", "End", "Alt + End", "Shift + End"],
  correctAnswer: "End"
},
{
  question: "How do you edit your last message?",
  options: ["Up Arrow", "Ctrl + E", "Shift + E", "Alt + ↑"],
  correctAnswer: "Up Arrow"
},
{
  question: "How do you send a message?",
  options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
  correctAnswer: "Enter"
},
{
  question: "How do you insert a new line while typing a message?",
  options: ["Shift + Enter", "Alt + Enter", "Ctrl + Enter", "Enter"],
  correctAnswer: "Shift + Enter"
},
{
  question: "How do you go to the beginning of a chat?",
  options: ["Home", "Ctrl + Home", "Alt + ↑", "Shift + ↑"],
  correctAnswer: "Home"
},
{
  question: "How do you forward a message?",
  options: ["Right-click and choose \"Forward\"", "Ctrl + F", "Alt + F", "F2"],
  correctAnswer: "Right-click and choose \"Forward\""
},
{
  question: "How do you delete a message?",
  options: ["Delete", "Ctrl + Delete", "Backspace", "Alt + Delete"],
  correctAnswer: "Delete"
},
{
  question: "How do you select a message?",
  options: ["Click on the message", "Long press or right-click", "Ctrl + Click", "Alt + Click"],
  correctAnswer: "Long press or right-click"
},
{
  question: "How do you open Telegram on desktop?",
  options: ["By launching the app", "Ctrl + Alt + T", "No shortcut, only icon", "Windows + T"],
  correctAnswer: "By launching the app"
},
{
  question: "How do you open a user profile from chat?",
  options: ["Click on the user's name", "Ctrl + P", "Right-click > View Profile", "Any of the above"],
  correctAnswer: "Any of the above"
},
{
  question: "How do you start a voice call in a chat?",
  options: ["Click phone icon", "Ctrl + C", "Alt + C", "No shortcut"],
  correctAnswer: "Click phone icon"
},
{
  question: "How do you view shared media in a chat?",
  options: ["Click on chat header", "Ctrl + M", "Ctrl + Shift + M", "Alt + M"],
  correctAnswer: "Click on chat header"
},
{
  question: "How do you mute a chat?",
  options: ["Right-click > Mute", "Ctrl + M", "Alt + M", "Ctrl + Shift + M"],
  correctAnswer: "Right-click > Mute"
},
{
  question: "How do you pin a chat?",
  options: ["Right-click > Pin", "Ctrl + Shift + P", "Ctrl + P", "Alt + P"],
  correctAnswer: "Right-click > Pin"
},
{
  question: "How do you copy a message?",
  options: ["Ctrl + C", "Alt + C", "Ctrl + Insert", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you paste a message or link?",
  options: ["Ctrl + V", "Shift + Insert", "Alt + V", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you reply to a message?",
  options: ["Right-click > Reply", "Swipe right (mobile)", "Click reply icon", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you minimize Telegram window?",
  options: ["Ctrl + M", "Alt + Space → N", "Windows + ↓", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you maximize Telegram window?",
  options: ["Double-click title bar", "Windows + ↑", "Alt + Space → X", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you switch between chats?",
  options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Alt + ↑ / ↓", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you log out from Telegram Desktop?",
  options: ["Settings → Log Out", "No direct shortcut", "Alt + Shift + L", "Ctrl + Shift + L"],
  correctAnswer: "Settings → Log Out"
},
{
  question: "How do you enable night mode?",
  options: ["Settings → Chat Settings → Dark", "No shortcut", "Ctrl + Shift + D", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you delete a message for both sides?",
  options: ["Delete → \"Also delete for…\"", "Alt + Delete", "Ctrl + Shift + Delete", "Shift + Delete"],
  correctAnswer: "Delete → \"Also delete for…\""
},
{
  question: "How do you save a message to your personal chat?",
  options: ["Forward to \"Saved Messages\"", "Ctrl + S", "Drag and drop", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you open Telegram's Search bar?",
  options: ["Ctrl + F", "Alt + F", "Ctrl + S", "Shift + F"],
  correctAnswer: "Ctrl + F"
},
{
  question: "How do you open \"Saved Messages\"?",
  options: ["Click on your profile → Saved Messages", "Search \"Saved Messages\"", "Pin it for easy access", "Any of the above"],
  correctAnswer: "Any of the above"
},
{
  question: "How do you access Telegram Web?",
  options: ["web.telegram.org", "Alt + W", "Ctrl + W", "telegram.com/web"],
  correctAnswer: "web.telegram.org"
},
{
  question: "How do you change your profile picture?",
  options: ["Settings → Profile → Tap image", "Right-click on profile", "Double-click on profile pic", "Alt + P"],
  correctAnswer: "Settings → Profile → Tap image"
},
{
  question: "How do you add a contact?",
  options: ["New chat → Add contact", "Contacts → Add", "Alt + A", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you join a Telegram group by link?",
  options: ["Click the link", "Search the group", "Ctrl + J", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you leave a group?",
  options: ["Right-click group → Leave", "Open group → ⋮ → Leave", "Settings → Group → Leave", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you change language settings?",
  options: ["Settings → Language", "Ctrl + Shift + L", "Alt + Shift + L", "Language toggle button"],
  correctAnswer: "Settings → Language"
},
{
  question: "How do you send files in Telegram?",
  options: ["Click clip icon → Choose file", "Drag and drop file", "Ctrl + O (on desktop apps)", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you bold text in Telegram?",
  options: ["Use text", "Ctrl + B", "Highlight → Bold option", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you italicize text in Telegram?",
  options: ["Use text", "Ctrl + I", "Highlight → Italic", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you strikethrough text in Telegram?",
  options: ["Use text", "Ctrl + Shift + X", "Format → Strikethrough", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you create inline code in Telegram?",
  options: ["Use code", "Ctrl + Shift + C", "Format menu", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you quote a message?",
  options: ["Right-click → Reply", "Swipe right", "Highlight → Quote", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you archive a chat?",
  options: ["Swipe left", "Right-click → Archive", "Settings → Archive", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you unarchive a chat?",
  options: ["Scroll to top → Archive → Unarchive", "Right-click → Unarchive", "A and B", "Can't be done"],
  correctAnswer: "A and B"
},
{
  question: "How do you access archived chats?",
  options: ["Scroll up in chat list", "Click \"Archived Chats\"", "Search", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "How do you change Telegram theme?",
  options: ["Settings → Chat Settings", "Ctrl + Shift + T", "Alt + Shift + T", "Ctrl + Alt + T"],
  correctAnswer: "Settings → Chat Settings"
},
{
  question: "How do you create a poll in Telegram?",
  options: ["Attach menu → Poll", "Bot → /poll", "A and B", "Ctrl + P"],
  correctAnswer: "A and B"
},
{
  question: "How do you open Telegram keyboard shortcuts list (Desktop)?",
  options: ["Ctrl + /", "Alt + /", "Ctrl + Shift + /", "Ctrl + K"],
  correctAnswer: "Ctrl + /"
},
{
  question: "How do you clear Telegram cache?",
  options: ["Settings → Advanced → Manage Local Storage", "Ctrl + Shift + Delete", "Alt + C", "Settings → Clear All"],
  correctAnswer: "Settings → Advanced → Manage Local Storage"
},
{
  question: "How do you mark messages as unread?",
  options: ["Right-click → Mark as unread", "Ctrl + U", "Settings → Unread", "Ctrl + Shift + U"],
  correctAnswer: "Right-click → Mark as unread"
},
{
  question: "How do you schedule a message?",
  options: ["Long-press Send → Schedule", "Right-click Send → Schedule", "A and B", "Ctrl + T"],
  correctAnswer: "A and B"
},
{
  question: "How do you send a silent message?",
  options: ["Long-press Send → Send Without Sound", "Right-click → Silent", "Ctrl + M", "Alt + Enter"],
  correctAnswer: "Long-press Send → Send Without Sound"
},
{
  question: "How do you send media as file (not compressed)?",
  options: ["Attach → File", "Drag and drop → Choose \"Send without compression\"", "Right-click media", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you create a new group?",
  options: ["Menu → New Group", "Ctrl + G", "Ctrl + N", "A and C"],
  correctAnswer: "A and C"
},
{
  question: "How do you block a user?",
  options: ["User profile → Block", "Right-click user → Block", "Settings → Privacy", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you clear chat history?",
  options: ["Chat options → Clear History", "Right-click → Clear Chat", "Ctrl + Shift + Del", "A and B"],
  correctAnswer: "A and B"
},
{
  question: "How do you find GIFs in Telegram?",
  options: ["Click on Emoji → GIF", "Type @gif", "Both A and B", "Alt + G"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you report a message or user?",
  options: ["Right-click → Report", "Profile → Report", "Message options → Report", "All of the above"],
  correctAnswer: "All of the above"
}
    ],
    medium: [
     {
    question: "What shortcut opens the emoji panel in Telegram Desktop?",
    options: ["Ctrl + E", "Ctrl + .", "Tab", "Ctrl + Shift + E"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you lock Telegram Desktop?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Ctrl + Alt + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Which shortcut minimizes Telegram to the system tray (if no text is selected)?",
    options: ["Ctrl + X", "Ctrl + M", "Alt + X", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "What is the shortcut to open 'Saved Messages'?",
    options: ["Ctrl + 0", "Ctrl + S", "Ctrl + M", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "How do you navigate to the archived chats?",
    options: ["Ctrl + 9", "Ctrl + A", "Ctrl + Shift + A", "Alt + 9"],
    correctAnswer: "Ctrl + 9"
  },
  {
    question: "Which shortcut sends a file in Telegram Desktop?",
    options: ["Ctrl + F", "Ctrl + O", "Ctrl + Shift + F", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How can you quickly switch between two last chats?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Alt + Arrow Up", "Ctrl + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What shortcut allows you to insert the last sent message into the text field?",
    options: ["Ctrl + Up Arrow", "Ctrl + Shift + Up Arrow", "Alt + Up Arrow", "Ctrl + R"],
    correctAnswer: "Ctrl + Up Arrow"
  },
  {
    question: "How do you open the formatting panel in Telegram Desktop?",
    options: ["Ctrl + Shift + F", "Ctrl + Shift + M", "Ctrl + Shift + P", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "Which shortcut applies monospace formatting to selected text?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Ctrl + Shift + C", "Ctrl + Shift + T"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the shortcut to apply underline formatting?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + Alt + U", "Ctrl + Shift + Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you apply strikethrough formatting?",
    options: ["Ctrl + Shift + X", "Ctrl + Alt + X", "Ctrl + X", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Shift + X"
  },
  {
    question: "Which shortcut opens the keyboard shortcuts list in Telegram Desktop?",
    options: ["Ctrl + /", "Ctrl + Shift + /", "Alt + /", "Ctrl + K"],
    correctAnswer: "Ctrl + /"
  },
  {
    question: "How can you quickly navigate to the next chat?",
    options: ["Ctrl + Tab", "Alt + Down Arrow", "Ctrl + Down Arrow", "Shift + Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "How can you quickly navigate to the previous chat?",
    options: ["Ctrl + Shift + Tab", "Alt + Up Arrow", "Ctrl + Up Arrow", "Shift + Tab"],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "What shortcut closes Telegram Desktop?",
    options: ["Ctrl + Q", "Alt + F4", "Ctrl + W", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you maximize Telegram Desktop window?",
    options: ["F11", "Alt + Space, then X", "Double-click title bar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you minimize Telegram Desktop window?",
    options: ["Alt + Space, then N", "Windows + Down Arrow", "Click minimize button", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which shortcut allows you to send a message without sound?",
    options: ["Ctrl + Enter", "Alt + Enter", "Long-press Send button", "Shift + Enter"],
    correctAnswer: "Long-press Send button"
  },
  {
    question: "How do you schedule a message to be sent later?",
    options: ["Right-click Send button", "Long-press Send button", "Ctrl + Shift + S", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens the chat search bar?",
    options: ["Ctrl + F", "Ctrl + S", "Ctrl + H", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you open the chat list search bar?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Ctrl + L", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "Which shortcut allows you to edit your last message?",
    options: ["Up Arrow", "Ctrl + E", "Ctrl + Shift + E", "Alt + E"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you delete a message?",
    options: ["Delete key", "Right-click message → Delete", "Ctrl + Delete", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens the GIF panel?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Type @gif", "None of the above"],
    correctAnswer: "Type @gif"
  },
  {
    question: "How do you forward a message?",
    options: ["Right-click message → Forward", "Ctrl + F", "Alt + F", "Ctrl + Shift + F"],
    correctAnswer: "Right-click message → Forward"
  },
  {
    question: "Which shortcut allows you to reply to a message?",
    options: ["Right-click message → Reply", "Ctrl + R", "Alt + R", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you mark a chat as unread?",
    options: ["Right-click chat → Mark as Unread", "Ctrl + U", "Alt + U", "Ctrl + Shift + U"],
    correctAnswer: "Right-click chat → Mark as Unread"
  },
  {
    question: "What shortcut allows you to clear chat history?",
    options: ["Ctrl + Shift + Delete", "Right-click chat → Clear History", "Ctrl + Alt + Delete", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you access the chat's shared media?",
    options: ["Click on chat header", "Ctrl + M", "Alt + M", "Ctrl + Shift + M"],
    correctAnswer: "Click on chat header"
  },
  {
    question: "Which shortcut applies bold formatting to selected text?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Ctrl + Shift + Alt + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How do you italicize selected text?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + Alt + I", "Ctrl + Shift + Alt + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What shortcut allows you to create a hyperlink?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Ctrl + Alt + K", "Ctrl + Shift + Alt + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you apply hidden text formatting?",
    options: ["Ctrl + Shift + P", "Ctrl + P", "Ctrl + Alt + P", "Ctrl + Shift + Alt + P"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "Which shortcut opens the emoji panel?",
    options: ["Ctrl + .", "Ctrl + E", "Tab", "Ctrl + Shift + E"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you navigate to the next suggested sticker?",
    options: ["Right Arrow", "Down Arrow", "Tab", "Ctrl + Tab"],
    correctAnswer: "Right Arrow"
  },
  {
    question: "How do you navigate to the previous suggested sticker?",
    options: ["Left Arrow", "Up Arrow", "Shift + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Left Arrow"
  },
  {
    question: "What shortcut allows you to exit the current chat?",
    options: ["Esc", "Ctrl + W", "Alt + F4", "Ctrl + Q"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you cancel the current action?",
    options: ["Esc", "Ctrl + Z", "Alt + Esc", "Ctrl + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "Which shortcut opens the settings menu?",
    options: ["Ctrl + ,", "Ctrl + S", "Ctrl + Shift + S", "Alt + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you quickly jump to the top of the chat?",
    options: ["Home", "Ctrl + Home", "Page Up", "Ctrl + Up Arrow"],
    correctAnswer: "Ctrl + Home"
  },
  {
    question: "How do you jump to the bottom of the chat?",
    options: ["End", "Ctrl + End", "Page Down", "Ctrl + Down Arrow"],
    correctAnswer: "Ctrl + End"
  },
  {
    question: "What shortcut allows you to open the call menu with a contact?",
    options: ["Ctrl + Shift + C", "Right-click contact → Call", "Alt + C", "None (mouse only)"],
    correctAnswer: "Right-click contact → Call"
  },
  {
    question: "How do you mute/unmute a chat?",
    options: ["Ctrl + M", "Right-click chat → Mute notifications", "Ctrl + Shift + M", "Alt + M"],
    correctAnswer: "Right-click chat → Mute notifications"
  },
  {
    question: "How do you pin a message in a group chat?",
    options: ["Right-click message → Pin", "Ctrl + P", "Ctrl + Shift + P", "Alt + P"],
    correctAnswer: "Right-click message → Pin"
  },
  {
    question: "What's the shortcut to clear the current search in a chat?",
    options: ["Esc", "Ctrl + Backspace", "Ctrl + Z", "Alt + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you scroll up one page in a chat?",
    options: ["Page Up", "Shift + Up Arrow", "Ctrl + Up Arrow", "Alt + Up Arrow"],
    correctAnswer: "Page Up"
  },
  {
    question: "How do you scroll down one page in a chat?",
    options: ["Page Down", "Shift + Down Arrow", "Ctrl + Down Arrow", "Alt + Down Arrow"],
    correctAnswer: "Page Down"
  },
  {
    question: "How do you open Telegram's debug menu (advanced only)?",
    options: ["Ctrl + Alt + Shift + D", "Ctrl + D", "Alt + D", "It's not available in stable version"],
    correctAnswer: "Ctrl + Alt + Shift + D"
  },
  {
    question: "What shortcut opens Telegram's experimental features window?",
    options: ["Ctrl + Alt + Shift + P", "Ctrl + Alt + E", "Ctrl + Shift + Alt + E", "Ctrl + Alt + X"],
    correctAnswer: "Ctrl + Alt + Shift + P"
  },
  {
    question: "What shortcut jumps to unread messages in a chat?",
    options: ["Ctrl + J", "Ctrl + U", "Down Arrow", "Scroll manually"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "How do you create a new group from keyboard?",
    options: ["Ctrl + N → Select contacts", "No shortcut, use the \"New Group\" button", "Ctrl + G", "Ctrl + Shift + G"],
    correctAnswer: "No shortcut, use the \"New Group\" button"
  },
  {
    question: "Which key allows you to quote a message while replying?",
    options: ["Ctrl + R", "Right-click → Reply", "Select message → R", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you edit a sent message using the keyboard only?",
    options: ["Up Arrow (when input box is empty)", "Ctrl + E", "Shift + Up Arrow", "Double-click the message"],
    correctAnswer: "Up Arrow (when input box is empty)"
  },
  {
    question: "Which shortcut opens Telegram's bug reporting tool (if enabled)?",
    options: ["Ctrl + Shift + B", "Ctrl + Shift + F12", "Ctrl + Alt + B", "Alt + Shift + B"],
    correctAnswer: "Ctrl + Shift + F12"
  },
  {
    question: "What is the shortcut to resend a failed message?",
    options: ["Ctrl + Enter", "Click resend icon", "Right-click → Resend", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you delete a chat conversation?",
    options: ["Right-click → Delete chat", "Ctrl + Shift + D", "Delete key", "A only"],
    correctAnswer: "A only"
  },
  {
    question: "How can you hide Telegram from the taskbar (if minimized to tray)?",
    options: ["Settings → Advanced → Uncheck \"Show in taskbar\"", "Use third-party tools", "Not possible via shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What's the shortcut to quickly change language settings?",
    options: ["Ctrl + Shift + L", "No shortcut – navigate via Settings", "Alt + L", "Ctrl + Alt + L"],
    correctAnswer: "No shortcut – navigate via Settings"
  },
  {
    question: "What key combination can be used to trigger a message draft saving?",
    options: ["Pause typing", "Ctrl + S", "Close chat window", "Both A and C"],
    correctAnswer: "Both A and C"
  }
    ],
    hard: [
      {
    question: "How do you send a message with a line break instead of sending it immediately?",
    options: ["Shift + Enter", "Alt + Enter", "Ctrl + Enter", "Tab"],
    correctAnswer: "Shift + Enter"
  },
  {
    question: "How do you bold text using Markdown in Telegram?",
    options: ["**text**", "*text*", "**text**", "_text_"],
    correctAnswer: "**text**"
  },
  {
    question: "What is the keyboard shortcut to reply to a message in Telegram Desktop?",
    options: ["R", "Ctrl + R", "Right-click > Reply", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you access the search bar in Telegram Desktop?",
    options: ["Ctrl + F", "Alt + F", "Ctrl + /", "Ctrl + H"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you strike through text in Telegram Markdown?",
    options: ["~~text~~", "–text–", "==text==", "%%text%%"],
    correctAnswer: "~~text~~"
  },
  {
    question: "What is the Markdown for inline code in Telegram?",
    options: ["`text`", "[code]", "=text=", "::text::"],
    correctAnswer: "`text`"
  },
  {
    question: "What Markdown syntax is used to add spoiler formatting in Telegram?",
    options: ["||text||", "//text//", "##text##", "~~text~~"],
    correctAnswer: "||text||"
  },
  {
    question: "Shortcut to forward a message?",
    options: ["Ctrl + F", "F", "Shift + F", "Alt + F"],
    correctAnswer: "F"
  },
  {
    question: "Shortcut to mute a chat in Telegram Desktop?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the keyboard shortcut to open Telegram settings?",
    options: ["Ctrl + ,", "Ctrl + P", "Ctrl + Alt + S", "Alt + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you pin a message in a Telegram group?",
    options: ["Right-click > Pin", "Click three dots > Pin", "Both A and B", "Ctrl + P"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to edit a sent message?",
    options: ["↑ (Up Arrow)", "Ctrl + E", "Double-click the message", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to navigate to next chat?",
    options: ["Alt + ↓", "Ctrl + ↓", "Shift + Tab", "Tab"],
    correctAnswer: "Alt + ↓"
  },
  {
    question: "Shortcut to navigate to previous chat?",
    options: ["Alt + ↑", "Ctrl + ↑", "Shift + ↑", "Tab"],
    correctAnswer: "Alt + ↑"
  },
  {
    question: "What is the Markdown syntax for creating hyperlinks?",
    options: ["[text](url)", "text[url]", "{text:url}", "(text)[url]"],
    correctAnswer: "[text](url)"
  },
  {
    question: "Shortcut to open Telegram in full-screen mode?",
    options: ["F11", "Ctrl + F11", "Alt + Enter", "Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "Shortcut to access the emoji picker in Telegram?",
    options: [":emoji_name", "Ctrl + .", "Click emoji icon", "No shortcut"],
    correctAnswer: "No shortcut"
  },
  {
    question: "How to italicize text in Telegram?",
    options: ["*text*", "/text/", "\\text\\", "_text_"],
    correctAnswer: "*text*"
  },
  {
    question: "Shortcut to send a file or media?",
    options: ["Ctrl + Shift + A", "Ctrl + O", "Ctrl + U", "Ctrl + I"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "Shortcut to archive a selected chat?",
    options: ["Ctrl + Shift + A", "Ctrl + A", "Right-click > Archive", "Alt + A"],
    correctAnswer: "Right-click > Archive"
  },
  {
    question: "Shortcut to delete selected chat?",
    options: ["Delete key", "Right-click > Delete", "Ctrl + Backspace", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to create a new group in Telegram Desktop?",
    options: ["Ctrl + N", "Ctrl + Shift + N", "Menu > New Group", "Both B and C"],
    correctAnswer: "Both B and C"
  },
  {
    question: "Shortcut to open Telegram folder for downloads?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "File > Show in Folder", "Alt + J"],
    correctAnswer: "File > Show in Folder"
  },
  {
    question: "Shortcut to log out of Telegram Desktop?",
    options: ["Ctrl + Shift + Q", "File > Log out", "Alt + F4", "Esc"],
    correctAnswer: "File > Log out"
  },
  {
    question: "Shortcut to send current message?",
    options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
    correctAnswer: "Enter"
  },
  {
    question: "Shortcut to open profile info of a contact?",
    options: ["Click profile pic", "Ctrl + I", "Right-click > View Profile", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to schedule a message?",
    options: ["Ctrl + S", "Click send > Schedule message", "Alt + S", "Shift + S"],
    correctAnswer: "Click send > Schedule message"
  },
  {
    question: "Shortcut to access saved messages?",
    options: ["Ctrl + 1", "Alt + 1", "Ctrl + K", "Click on \"Saved Messages\""],
    correctAnswer: "Click on \"Saved Messages\""
  },
  {
    question: "Shortcut to quickly search emojis using a colon?",
    options: [":emoji_name", "::emoji::", "/emoji/", "{emoji}"],
    correctAnswer: ":emoji_name"
  },
  {
    question: "Shortcut to jump to top of chat?",
    options: ["Ctrl + Home", "Home", "Shift + Home", "Alt + Home"],
    correctAnswer: "Ctrl + Home"
  },
  {
    question: "Shortcut to jump to bottom of chat?",
    options: ["Ctrl + End", "End", "Shift + End", "Alt + End"],
    correctAnswer: "Ctrl + End"
  },
  {
    question: "Shortcut to scroll up one page?",
    options: ["Page Up", "Ctrl + ↑", "Alt + ↑", "Shift + ↑"],
    correctAnswer: "Page Up"
  },
  {
    question: "Shortcut to scroll down one page?",
    options: ["Page Down", "Ctrl + ↓", "Shift + ↓", "Alt + ↓"],
    correctAnswer: "Page Down"
  },
  {
    question: "Shortcut to go to unread message?",
    options: ["Click on \"Unread\" indicator", "Ctrl + U", "Alt + U", "U"],
    correctAnswer: "Click on \"Unread\" indicator"
  },
  {
    question: "Shortcut to search inside a conversation?",
    options: ["Ctrl + F", "Alt + F", "Shift + F", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to use animated emojis in a message?",
    options: ["Type specific emoji", "No shortcut, feature-based", "Ctrl + Shift + E", "Alt + E"],
    correctAnswer: "No shortcut, feature-based"
  },
  {
    question: "Shortcut to jump between unread chats?",
    options: ["Ctrl + Tab", "Ctrl + Shift + ↑ / ↓", "Alt + ↑ / ↓", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to clear a message before sending?",
    options: ["Esc", "Ctrl + Backspace", "Delete", "Alt + Delete"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to toggle message preview?",
    options: ["No shortcut", "Settings > Chat Settings", "Ctrl + Shift + P", "Alt + P"],
    correctAnswer: "Settings > Chat Settings"
  },
  {
    question: "Shortcut to go to the previous media in chat?",
    options: ["Left Arrow", "Alt + Left", "Ctrl + Left", "Backspace"],
    correctAnswer: "Left Arrow"
  },
  {
    question: "How do you enable Telegram's night mode manually on desktop?",
    options: ["Settings > Chat Settings > Theme", "Ctrl + Alt + N", "Right-click > Night Mode", "Ctrl + Shift + D"],
    correctAnswer: "Settings > Chat Settings > Theme"
  },
  {
    question: "What is the fastest way to jump to a specific date in a chat?",
    options: ["Search > Calendar icon", "Ctrl + G", "Ctrl + D", "Double-click on the date bubble"],
    correctAnswer: "Search > Calendar icon"
  },
  {
    question: "Shortcut to mark a message as unread on Telegram Desktop?",
    options: ["Right-click > Mark as Unread", "Ctrl + U", "Alt + U", "None"],
    correctAnswer: "Right-click > Mark as Unread"
  },
  {
    question: "Shortcut to select multiple messages in a chat?",
    options: ["Ctrl + Click", "Shift + Click", "Both A and B", "Alt + Click"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to open Telegram's GIF panel?",
    options: ["Type a keyword + click GIF icon", "Ctrl + G", "/gif command", "None of the above"],
    correctAnswer: "Type a keyword + click GIF icon"
  },
  {
    question: "How can you view all shared media in a chat?",
    options: ["Click chat header > Media", "Ctrl + M", "Alt + Shift + M", "View > Media"],
    correctAnswer: "Click chat header > Media"
  },
  {
    question: "Shortcut to go to Archived Chats?",
    options: ["Scroll to top > Click \"Archived\"", "Ctrl + A", "Alt + A", "None of the above"],
    correctAnswer: "Scroll to top > Click \"Archived\""
  },
  {
    question: "Shortcut to quickly switch between multiple Telegram accounts?",
    options: ["Ctrl + Tab", "Ctrl + Shift + 1/2/3", "Profile menu > Switch Account", "Both B and C"],
    correctAnswer: "Both B and C"
  },
  {
    question: "Shortcut to report spam or inappropriate content?",
    options: ["Right-click > Report", "Ctrl + R", "Alt + Shift + R", "Settings > Report"],
    correctAnswer: "Right-click > Report"
  },
  {
    question: "Shortcut to copy message text without formatting?",
    options: ["Right-click > Copy text", "Ctrl + Shift + C", "Ctrl + C", "Alt + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "Shortcut to access voice message speed control?",
    options: ["Play voice note > Click speed icon", "Ctrl + Shift + V", "Alt + V", "No shortcut, only clickable"],
    correctAnswer: "No shortcut, only clickable"
  },
  {
    question: "Shortcut to jump directly to Saved Messages on mobile?",
    options: ["Menu > Saved Messages", "Swipe right > Saved Messages", "Search bar > \"Saved\"", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to view poll results in a group or channel?",
    options: ["Tap \"View Results\"", "Right-click > View Results", "Ctrl + P", "Shift + V"],
    correctAnswer: "Tap \"View Results\""
  },
  {
    question: "Shortcut to share your live location?",
    options: ["Attachment icon > Location > Share Live", "/sharelive", "Ctrl + Alt + L", "No shortcut, only manual"],
    correctAnswer: "No shortcut, only manual"
  },
  {
    question: "Shortcut to pause/resume voice note playback?",
    options: ["Spacebar", "P", "Click play/pause", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to open chat list sidebar again if hidden?",
    options: ["Esc", "Ctrl + B", "F1", "Alt + ←"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to copy a file's download link?",
    options: ["Right-click > Copy Link", "Ctrl + L", "Alt + Shift + C", "Only available for certain bots/channels"],
    correctAnswer: "Only available for certain bots/channels"
  },
  {
    question: "Shortcut to save a sticker or emoji to favorites?",
    options: ["Right-click > Add to Favorites", "Click + icon", "Both A and B", "Ctrl + F"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to react to a message?",
    options: ["Right-click > React", "Hover > Click emoji", "Double-click the message", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How to change Telegram's font size via shortcut?",
    options: ["Ctrl + Mouse Wheel", "Ctrl + + / -", "Settings > Chat Settings > Font size", "All of the above"],
    correctAnswer: "All of the above"
  }
    ]
  },

   "Discord": {
    easy: [
      {
    question: "How do you open the Discord app quickly on Windows?",
    options: ["Win + D", "Ctrl + Shift + D", "Use desktop shortcut or Start menu", "Alt + D"],
    correctAnswer: "Use desktop shortcut or Start menu"
  },
  {
    question: "How do you toggle mute/unmute your microphone?",
    options: ["Ctrl + M", "Alt + M", "Shift + M", "Ctrl + U"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "How do you toggle deafen/undeafen yourself?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Ctrl + E"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you open your Friends list?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + F", "Alt + F"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "How do you open Direct Messages?",
    options: ["Ctrl + 3", "Ctrl + 4", "Ctrl + D", "Ctrl + M"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "How do you open the Server list?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + Shift + S", "Alt + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "How do you create a new message in the current chat?",
    options: ["Ctrl + N", "Enter", "Shift + Enter", "Ctrl + M"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you send a line break without sending the message?",
    options: ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Enter"],
    correctAnswer: "Shift + Enter"
  },
  {
    question: "How do you search messages in the current channel?",
    options: ["Ctrl + F", "Ctrl + S", "Alt + F", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you open User Settings?",
    options: ["Ctrl + , (comma)", "Ctrl + . (period)", "Alt + S", "Shift + S"],
    correctAnswer: "Ctrl + , (comma)"
  },
  {
    question: "How do you quickly open the emoji picker?",
    options: ["Ctrl + E", "Ctrl + Shift + E", "Ctrl + I", "Ctrl + . (period)"],
    correctAnswer: "Ctrl + . (period)"
  },
  {
    question: "How do you toggle full screen mode?",
    options: ["F11", "Ctrl + F", "Alt + Enter", "Ctrl + Alt + F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you open the channel list on mobile?",
    options: ["Swipe left", "Swipe right", "Tap hamburger menu", "None of the above"],
    correctAnswer: "Swipe left"
  },
  {
    question: "How do you navigate to the previous channel?",
    options: ["Alt + Up Arrow", "Alt + Left Arrow", "Ctrl + Up Arrow", "Ctrl + Left Arrow"],
    correctAnswer: "Alt + Up Arrow"
  },
  {
    question: "How do you navigate to the next channel?",
    options: ["Alt + Down Arrow", "Alt + Right Arrow", "Ctrl + Down Arrow", "Ctrl + Right Arrow"],
    correctAnswer: "Alt + Down Arrow"
  },
  {
    question: "How do you open the Notifications settings?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Ctrl + Alt + N", "Shift + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you quickly switch to the last channel you were in?",
    options: ["Ctrl + K", "Ctrl + L", "Alt + K", "Alt + L"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you open the quick switcher to jump between servers or channels?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Ctrl + L", "Ctrl + J"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you pin a message?",
    options: ["Click the three dots → Pin Message", "Ctrl + P", "Shift + P", "Ctrl + Shift + P"],
    correctAnswer: "Click the three dots → Pin Message"
  },
  {
    question: "How do you open the Mentions tab?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "How do you toggle the member list in a server?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "Ctrl + M"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you mute a user in a voice channel?",
    options: ["Right-click user → Mute", "Ctrl + M", "Shift + M", "Alt + M"],
    correctAnswer: "Right-click user → Mute"
  },
  {
    question: "How do you open the Discord Help page?",
    options: ["F1", "Ctrl + H", "Ctrl + F1", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you create a new server?",
    options: ["Click plus (+) icon on server list", "Ctrl + N", "Alt + N", "Shift + N"],
    correctAnswer: "Click plus (+) icon on server list"
  },
  {
    question: "How do you toggle the deafened state in voice chat?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you open the voice settings quickly?",
    options: ["Ctrl + Shift + S", "Ctrl + Alt + S", "Ctrl + , (comma)", "Alt + V"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "How do you jump to the next unread channel?",
    options: ["Alt + Down Arrow", "Ctrl + Down Arrow", "Shift + Down Arrow", "Ctrl + Shift + Down Arrow"],
    correctAnswer: "Alt + Down Arrow"
  },
  {
    question: "How do you jump to the previous unread channel?",
    options: ["Alt + Up Arrow", "Ctrl + Up Arrow", "Shift + Up Arrow", "Ctrl + Shift + Up Arrow"],
    correctAnswer: "Alt + Up Arrow"
  },
  {
    question: "How do you open the GIF picker?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + I", "Ctrl + . (period)"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you toggle the emoji reaction picker?",
    options: ["Ctrl + . (period)", "Ctrl + Shift + .", "Ctrl + E", "Ctrl + R"],
    correctAnswer: "Ctrl + . (period)"
  },
  {
    question: "How do you log out of Discord?",
    options: ["User settings → Log out", "Ctrl + Shift + L", "Alt + L", "Ctrl + L"],
    correctAnswer: "User settings → Log out"
  },
  {
    question: "How do you mark all messages as read?",
    options: ["Ctrl + Shift + Esc", "Ctrl + Shift + A", "Ctrl + Shift + M", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "How do you quickly join a voice channel?",
    options: ["Click on the voice channel", "Double-click voice channel", "Right-click voice channel → Join", "Any of the above"],
    correctAnswer: "Any of the above"
  },
  {
    question: "How do you toggle the microphone mute button in a voice channel?",
    options: ["Ctrl + M", "Alt + M", "Shift + M", "Ctrl + D"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "How do you open the server settings?",
    options: ["Right-click server icon → Server Settings", "Ctrl + Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "Right-click server icon → Server Settings"
  },
  {
    question: "How do you jump to the next message?",
    options: ["Down Arrow", "Ctrl + Down Arrow", "Shift + Down Arrow", "Alt + Down Arrow"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "How do you jump to the previous message?",
    options: ["Up Arrow", "Ctrl + Up Arrow", "Shift + Up Arrow", "Alt + Up Arrow"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you open a user's profile?",
    options: ["Click on username", "Right-click username → Profile", "Ctrl + Click username", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the Discord overlay?",
    options: ["Shift + ` (backtick)", "Ctrl + `", "Alt + `", "Ctrl + Shift + `"],
    correctAnswer: "Shift + ` (backtick)"
  },
  {
    question: "How do you toggle streaming status?",
    options: ["User settings → Streamer Mode", "Ctrl + S", "Alt + S", "Shift + S"],
    correctAnswer: "User settings → Streamer Mode"
  },
  {
    question: "How do you add a friend?",
    options: ["Ctrl + Shift + F", "Ctrl + F", "Alt + F", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you block a user?",
    options: ["Right-click user → Block", "Ctrl + B", "Alt + B", "Shift + B"],
    correctAnswer: "Right-click user → Block"
  },
  {
    question: "How do you create a new text channel?",
    options: ["Click server name → Create Channel", "Ctrl + N", "Alt + N", "Shift + N"],
    correctAnswer: "Click server name → Create Channel"
  },
  {
    question: "How do you create a new voice channel?",
    options: ["Same as creating text channel, select voice", "Ctrl + V", "Alt + V", "Shift + V"],
    correctAnswer: "Same as creating text channel, select voice"
  },
  {
    question: "How do you open the Discord Nitro settings?",
    options: ["User settings → Nitro", "Ctrl + I", "Alt + I", "Shift + I"],
    correctAnswer: "User settings → Nitro"
  },
  {
    question: "How do you toggle Taskbar icon flashing for notifications?",
    options: ["User settings → Notifications", "Ctrl + T", "Alt + T", "Shift + T"],
    correctAnswer: "User settings → Notifications"
  },
  {
    question: "How do you quickly start a group DM?",
    options: ["Ctrl + Shift + G", "Ctrl + G", "Alt + G", "Shift + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you toggle push-to-talk mode?",
    options: ["User settings → Voice & Video", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "User settings → Voice & Video"
  },
  {
    question: "How do you delete a message you sent?",
    options: ["Hover message → Click three dots → Delete", "Ctrl + Del", "Alt + Del", "Shift + Del"],
    correctAnswer: "Hover message → Click three dots → Delete"
  },
  {
    question: "How do you edit a message you sent?",
    options: ["Up Arrow (when message box empty)", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "Up Arrow (when message box empty)"
  },
  {
    question: "How do you open the Server Boost panel?",
    options: ["Click server name → Server Boost", "Ctrl + B", "Alt + B", "Shift + B"],
    correctAnswer: "Click server name → Server Boost"
  },
  {
    question: "How do you open your activity status?",
    options: ["User settings → Activity Status", "Ctrl + A", "Alt + A", "Shift + A"],
    correctAnswer: "User settings → Activity Status"
  },
  {
    question: "How do you toggle Developer Mode?",
    options: ["User settings → Advanced", "Ctrl + D", "Alt + D", "Shift + D"],
    correctAnswer: "User settings → Advanced"
  },
  {
    question: "How do you toggle the streamer mode?",
    options: ["User settings → Streamer Mode", "Ctrl + S", "Alt + S", "Shift + S"],
    correctAnswer: "User settings → Streamer Mode"
  },
  {
    question: "How do you copy a message link?",
    options: ["Right-click message → Copy Link", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "Right-click message → Copy Link"
  },
  {
    question: "How do you open your own profile?",
    options: ["Click your avatar on bottom-left", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "Click your avatar on bottom-left"
  },
  {
    question: "How do you open Discord's list of keyboard shortcuts?",
    options: ["Ctrl + /", "Ctrl + ?", "Ctrl + H", "Ctrl + K"],
    correctAnswer: "Ctrl + /"
  },
  {
    question: "How do you add a reaction to a message?",
    options: ["Hover message → Click emoji icon", "Ctrl + R", "Alt + R", "Shift + R"],
    correctAnswer: "Hover message → Click emoji icon"
  },
  {
    question: "How do you open the pinned messages in a channel?",
    options: ["Click pin icon top right", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "Click pin icon top right"
  },
  {
    question: "How do you open your inbox (DMs and mentions)?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  }
    ],
    medium: [
      {
  question: "How do you quickly open your inbox for mentions and unread messages?",
  options: ["Ctrl + I", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
  correctAnswer: "Ctrl + Shift + M"
},
{
  question: "How do you jump to your most recent @mention?",
  options: ["Ctrl + Shift + @", "Ctrl + Shift + M", "Alt + Shift + M", "Ctrl + M"],
  correctAnswer: "Ctrl + Shift + M"
},
{
  question: "How do you open the quick emoji reaction bar?",
  options: ["Ctrl + E", "Hover over message → Click smiley face", "Ctrl + R", "Shift + E"],
  correctAnswer: "Hover over message → Click smiley face"
},
{
  question: "How do you start a voice call in a DM?",
  options: ["Ctrl + V", "Click phone icon in DM", "Ctrl + Shift + V", "Alt + V"],
  correctAnswer: "Click phone icon in DM"
},
{
  question: "How do you start a video call in a DM?",
  options: ["Click camera icon", "Ctrl + Shift + C", "Alt + V", "Ctrl + V"],
  correctAnswer: "Click camera icon"
},
{
  question: "How do you block someone from their profile?",
  options: ["Click ⋮ on profile → Block", "Ctrl + B", "Alt + B", "Ctrl + Alt + B"],
  correctAnswer: "Click ⋮ on profile → Block"
},
{
  question: "What shortcut opens the GIF picker in Discord?",
  options: ["Ctrl + G", "Ctrl + Alt + G", "Alt + Shift + G", "Shift + G"],
  correctAnswer: "Ctrl + G"
},
{
  question: "How do you open the text formatting guide in Discord?",
  options: ["Ctrl + T", "Not available via shortcut", "Shift + T", "Ctrl + Shift + T"],
  correctAnswer: "Not available via shortcut"
},
{
  question: "How do you toggle the server/channel list on the left?",
  options: ["Ctrl + Shift + L", "Ctrl + Shift + S", "Ctrl + `", "Not available via shortcut"],
  correctAnswer: "Not available via shortcut"
},
{
  question: "How do you copy a user ID (with Developer Mode on)?",
  options: ["Right-click username → Copy ID", "Ctrl + I", "Shift + C", "Ctrl + Shift + I"],
  correctAnswer: "Right-click username → Copy ID"
},
{
  question: "How do you navigate to the previous server?",
  options: ["Ctrl + Alt + Up", "Ctrl + Alt + Arrow Left", "Ctrl + Alt + Arrow Up", "Alt + Shift + Left"],
  correctAnswer: "Ctrl + Alt + Arrow Up"
},
{
  question: "How do you navigate to the next server?",
  options: ["Ctrl + Alt + Down", "Ctrl + Alt + Arrow Right", "Ctrl + Alt + Arrow Down", "Alt + Shift + Right"],
  correctAnswer: "Ctrl + Alt + Arrow Down"
},
{
  question: "How do you mark a server as read?",
  options: ["Right-click server icon → Mark as Read", "Ctrl + R", "Shift + R", "Ctrl + Shift + R"],
  correctAnswer: "Right-click server icon → Mark as Read"
},
{
  question: "How do you hide muted channels in a server?",
  options: ["Channel settings → Hide muted", "Right-click → Hide muted", "Server settings → Toggle", "Not available"],
  correctAnswer: "Channel settings → Hide muted"
},
{
  question: "What shortcut allows you to open the full shortcut list?",
  options: ["Ctrl + /", "Ctrl + Shift + /", "Alt + /", "Shift + /"],
  correctAnswer: "Ctrl + /"
},
{
  question: "How do you clear Discord's cache manually?",
  options: ["No shortcut, must delete cache files", "Ctrl + Shift + Delete", "Ctrl + Shift + C", "Alt + Delete"],
  correctAnswer: "No shortcut, must delete cache files"
},
{
  question: "How do you upload a file in a chat?",
  options: ["Ctrl + Shift + U", "Click plus (+) next to chat", "Ctrl + U", "Drag and drop file"],
  correctAnswer: "Drag and drop file"
},
{
  question: "How do you switch between open DMs?",
  options: ["Ctrl + Tab", "Alt + Tab", "Ctrl + Alt + M", "Ctrl + Shift + Tab"],
  correctAnswer: "Ctrl + Tab"
},
{
  question: "How do you reply to a specific message?",
  options: ["Hover → Click \"Reply\"", "Right-click → Reply", "Both A and B", "Shift + R"],
  correctAnswer: "Both A and B"
},
{
  question: "How do you mention a role in a server message?",
  options: ["Type @rolename", "Type @role", "Only works with permissions", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What does Ctrl + Shift + I open in Discord?",
  options: ["Developer Tools", "Server Settings", "Invite Menu", "Nothing"],
  correctAnswer: "Developer Tools"
},
{
  question: "How do you close a DM chat window?",
  options: ["Click \"X\" beside DM name", "Right-click → Close", "Both", "Ctrl + W"],
  correctAnswer: "Both"
},
{
  question: "What does Ctrl + K do in Discord?",
  options: ["Opens quick switcher", "Kicks user", "Deletes message", "Opens server settings"],
  correctAnswer: "Opens quick switcher"
},
{
  question: "What shortcut sends the message you are typing?",
  options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Space"],
  correctAnswer: "Enter"
},
{
  question: "How do you toggle auto-deafen on voice chat?",
  options: ["Ctrl + D", "Alt + D", "Use the deafen icon", "Ctrl + Alt + D"],
  correctAnswer: "Use the deafen icon"
},
{
  question: "How do you mute all sounds temporarily?",
  options: ["No shortcut, needs sound settings", "Ctrl + Shift + M", "F10", "Mute button on headset"],
  correctAnswer: "No shortcut, needs sound settings"
},
{
  question: "How do you switch between text and voice channels with keyboard?",
  options: ["Alt + Up/Down", "Ctrl + Alt + Arrow keys", "Alt + ←/→", "Ctrl + Shift + T"],
  correctAnswer: "Ctrl + Alt + Arrow keys"
},
{
  question: "How do you toggle user volume in a voice channel?",
  options: ["Right-click user → Adjust volume", "Ctrl + ↑/↓", "Alt + V", "No shortcut available"],
  correctAnswer: "Right-click user → Adjust volume"
},
{
  question: "What key combination closes Discord?",
  options: ["Alt + F4", "Ctrl + Q", "Ctrl + W", "Esc"],
  correctAnswer: "Alt + F4"
},
{
  question: "How do you jump to the oldest unread message?",
  options: ["Shift + Page Up", "Scroll up manually", "Home", "There is no dedicated shortcut"],
  correctAnswer: "There is no dedicated shortcut"
},
{
  question: "How do you go to the newest message in a channel?",
  options: ["End", "Ctrl + End", "Shift + End", "Scroll bar"],
  correctAnswer: "End"
},
{
  question: "How do you share your screen in a DM or server?",
  options: ["Click the screen icon", "Ctrl + Shift + S", "Alt + S", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What happens if you press Ctrl + ` in Discord?",
  options: ["Opens overlay (if enabled)", "Nothing", "Opens console", "Toggles code block"],
  correctAnswer: "Opens overlay (if enabled)"
},
{
  question: "How do you expand or collapse categories in server?",
  options: ["Click category name", "Alt + Click", "Double-click", "A and C"],
  correctAnswer: "A and C"
},
{
  question: "How do you delete a server you own?",
  options: ["Server Settings → Delete Server", "Ctrl + Shift + Del", "Right-click → Delete", "None of the above"],
  correctAnswer: "Server Settings → Delete Server"
},
{
  question: "How do you leave a server?",
  options: ["Right-click server icon → Leave Server", "Ctrl + L", "Alt + L", "Shift + L"],
  correctAnswer: "Right-click server icon → Leave Server"
},
{
  question: "How do you enable push-to-talk?",
  options: ["User settings → Voice & Video", "Ctrl + P", "Alt + P", "Ctrl + Shift + P"],
  correctAnswer: "User settings → Voice & Video"
},
{
  question: "How do you view audit log as admin?",
  options: ["Server Settings → Audit Log", "Ctrl + A", "Ctrl + L", "No shortcut"],
  correctAnswer: "Server Settings → Audit Log"
},
{
  question: "What does Ctrl + / do in Discord?",
  options: ["Shows all shortcuts", "Opens commands", "Nothing", "Opens DM search"],
  correctAnswer: "Shows all shortcuts"
},
{
  question: "How do you start a stage event?",
  options: ["Start Voice → Select Stage", "Server Settings", "Right-click → Start Stage", "Ctrl + S"],
  correctAnswer: "Start Voice → Select Stage"
},
{
  question: "How do you disable link previews?",
  options: ["User Settings → Text & Images", "Ctrl + Shift + L", "Right-click message", "Server Settings"],
  correctAnswer: "User Settings → Text & Images"
},
{
  question: "How do you set slowmode in a channel?",
  options: ["Channel Settings → Slowmode", "Ctrl + S", "Server Settings", "Alt + S"],
  correctAnswer: "Channel Settings → Slowmode"
},
{
  question: "How do you delete your account?",
  options: ["User Settings → My Account", "Ctrl + Alt + D", "You can't via shortcut", "None of the above"],
  correctAnswer: "User Settings → My Account"
},
{
  question: "How do you view someone's stream in a voice channel?",
  options: ["Click \"Watch Stream\"", "Ctrl + W", "Shift + W", "Alt + W"],
  correctAnswer: "Click \"Watch Stream\""
},
{
  question: "How do you boost a server?",
  options: ["Server Name → Boost Server", "Ctrl + B", "Alt + B", "Nitro Settings"],
  correctAnswer: "Server Name → Boost Server"
},
{
  question: "How do you collapse the right user panel?",
  options: ["Ctrl + U", "Alt + U", "Ctrl + Shift + U", "Shift + U"],
  correctAnswer: "Ctrl + U"
},
{
  question: "How do you hide or show pinned messages panel?",
  options: ["Click pin icon", "Ctrl + P", "Alt + P", "Shift + P"],
  correctAnswer: "Click pin icon"
},
{
  question: "How do you go to top of a channel quickly?",
  options: ["Home", "Ctrl + Home", "Page Up", "Alt + Up"],
  correctAnswer: "Home"
},
{
  question: "How do you go to bottom of a channel?",
  options: ["End", "Ctrl + End", "Page Down", "Alt + Down"],
  correctAnswer: "End"
},
{
  question: "What shortcut opens the emoji picker in a message box?",
  options: ["Ctrl + .", "Ctrl + Shift + E", "Ctrl + ;", "Ctrl + ,"],
  correctAnswer: "Ctrl + ."
},
{
  question: "How do you mention everyone in a message (if permitted)?",
  options: ["Type @everyone", "Type everyone", "Type @all", "Ctrl + E"],
  correctAnswer: "Type @everyone"
},
{
  question: "How do you mention online members with a role (if permitted)?",
  options: ["Type @role_name", "Type @here", "Type @online", "Shift + @"],
  correctAnswer: "Type @here"
},
{
  question: "How do you navigate between unread channels within a server using the keyboard?",
  options: ["Alt + Up/Down", "Ctrl + Alt + Arrow Up/Down", "Shift + Tab", "Ctrl + Tab"],
  correctAnswer: "Ctrl + Alt + Arrow Up/Down"
},
{
  question: "How do you add a spoiler tag to text?",
  options: ["Wrap it in ||like this||", "Ctrl + S", "Alt + H", "Double asterisks"],
  correctAnswer: "Wrap it in ||like this||"
},
{
  question: "How do you italicize text in Discord?",
  options: ["*italic* or _italic_", "*italic", "_italic", "italic*"],
  correctAnswer: "*italic* or _italic_"
},
{
  question: "How do you strikethrough text in Discord?",
  options: ["~~text~~", "--text--", "//text//", "-text-"],
  correctAnswer: "~~text~~"
},
{
  question: "How do you bold and underline text together?",
  options: ["__**text**__", "**_text_**", "__text__", "Both A and C"],
  correctAnswer: "Both A and C"
},
{
  question: "How do you quote a message in Discord?",
  options: ["Use > before the message", "Shift + >", "Ctrl + Q", "/quote command"],
  correctAnswer: "Use > before the message"
},
{
  question: "How do you create a single-line code block in Discord?",
  options: ["Use a single backtick: `code`", "Use triple backticks", "Use <code>", "Use \"code\""],
  correctAnswer: "Use a single backtick: `code`"
},
{
  question: "How do you create a multi-line code block?",
  options: ["Use triple backticks: ```code```", "Shift + Enter", "Alt + Enter", "Ctrl + Enter"],
  correctAnswer: "Use triple backticks: ```code```"
}
    ],
    hard: [
     {
    "question": "How do you open Discord's built-in Developer Tools (browser-like)?",
    "options": ["Ctrl + Shift + I", "Ctrl + I", "Alt + D", "Ctrl + Shift + D"],
    "correctAnswer": "Ctrl + Shift + I"
  },
  {
    "question": "How do you reload Discord's interface (hard reload)?",
    "options": ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "F5"],
    "correctAnswer": "Ctrl + Shift + R"
  },
  {
    "question": "How do you toggle the text-to-speech function for messages (per user)?",
    "options": ["User Settings → Notifications → TTS", "Ctrl + Shift + T", "Alt + Shift + T", "There is no shortcut"],
    "correctAnswer": "There is no shortcut"
  },
  {
    "question": "How do you use Markdown to combine bold, italics, and underline together?",
    "options": ["text", "text", "text", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "question": "How do you toggle the experimental overlay (Windows only)?",
    "options": ["Ctrl + Shift + ", "Ctrl + ", "Alt + Shift + O", "No shortcut; must enable from settings"],
    "correctAnswer": "No shortcut; must enable from settings"
  },
  {
    "question": "How do you jump to a specific channel using its channel ID (with dev mode)?",
    "options": ["Use the Quick Switcher (Ctrl + K)", "Use the API", "Use a bot command", "Not available via default UI"],
    "correctAnswer": "Use the Quick Switcher (Ctrl + K)"
  },
  {
    "question": "How do you open the context menu on a channel using only the keyboard?",
    "options": ["Tab to channel, press Menu key or Shift + F10", "Ctrl + Right Click", "Alt + F4", "There is no method"],
    "correctAnswer": "Tab to channel, press Menu key or Shift + F10"
  },
  {
    "question": "Which formatting creates inline code?",
    "options": ["text", "text", "text", "> text"],
    "correctAnswer": "text"
  },
  {
    "question": "How do you center text in Discord using Markdown?",
    "options": ["Not possible", "Use <center> tags", "Use centertext/center", "Ctrl + Shift + C"],
    "correctAnswer": "Not possible"
  },
  {
    "question": "How do you escape Markdown formatting in Discord?",
    "options": ["Use a backslash before formatting symbols", "Use double slashes", "Type normally", "Use alt codes"],
    "correctAnswer": "Use a backslash before formatting symbols"
  },
  {
    "question": "What shortcut toggles the emoji picker in a text field?",
    "options": ["Ctrl + .", "Ctrl + ,", "Alt + E", "Ctrl + Shift + E"],
    "correctAnswer": "Ctrl + ."
  },
  {
    "question": "How do you toggle stream audio without stopping the video?",
    "options": ["Hover over stream → Click volume", "Right-click → Mute", "Ctrl + Shift + M", "Not available via shortcut"],
    "correctAnswer": "Not available via shortcut"
  },
  {
    "question": "What does Ctrl + Shift + D do in Discord?",
    "options": ["Duplicates Discord window", "Toggles developer mode", "Opens Discord on web", "Nothing"],
    "correctAnswer": "Nothing"
  },
  {
    "question": "What is the shortcut to copy message link?",
    "options": ["Right-click → Copy Message Link", "Ctrl + L", "Ctrl + C", "No default shortcut"],
    "correctAnswer": "Right-click → Copy Message Link"
  },
  {
    "question": "How do you access Discord Canary?",
    "options": ["Install separate app", "Ctrl + Alt + C", "Update Discord", "Toggle in settings"],
    "correctAnswer": "Install separate app"
  },
  {
    "question": "What Markdown syntax creates a block quote in Discord?",
    "options": ["> Quote", "::Quote", "\"Quote\"", "\\> Quote"],
    "correctAnswer": "> Quote"
  },
  {
    "question": "How do you jump between multiple open Discord windows (if using Canary & Stable)?",
    "options": ["Alt + Tab", "Ctrl + Shift + Tab", "Ctrl + ~", "Alt + ~"],
    "correctAnswer": "Alt + Tab"
  },
  {
    "question": "How do you refresh the member list in a channel?",
    "options": ["Ctrl + R", "F5", "Not available", "Rejoin voice"],
    "correctAnswer": "Not available"
  },
  {
    "question": "How do you collapse an embed (like a YouTube preview)?",
    "options": ["Click the down arrow", "Right-click → Collapse", "Ctrl + Click", "No shortcut"],
    "correctAnswer": "Click the down arrow"
  },
  {
    "question": "How do you toggle voice activity/push-to-talk mode?",
    "options": ["User Settings → Voice & Video", "Ctrl + V", "Alt + V", "Ctrl + Alt + V"],
    "correctAnswer": "User Settings → Voice & Video"
  },
  {
    "question": "Which shortcut allows you to navigate up through channel history?",
    "options": ["Alt + Up Arrow", "Ctrl + Alt + Up", "No shortcut", "Scroll manually"],
    "correctAnswer": "Ctrl + Alt + Up"
  },
  {
    "question": "How do you copy a role ID (with dev mode)?",
    "options": ["Right-click role → Copy ID", "Ctrl + Shift + C", "Ctrl + Alt + R", "Not possible"],
    "correctAnswer": "Right-click role → Copy ID"
  },
  {
    "question": "What keyboard shortcut sends a message without creating a new line?",
    "options": ["Enter", "Shift + Enter", "Ctrl + Enter", "Ctrl + Shift + Enter"],
    "correctAnswer": "Enter"
  },
  {
    "question": "How do you insert a line break without sending the message?",
    "options": ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Esc"],
    "correctAnswer": "Shift + Enter"
  },
  {
    "question": "How do you start screen sharing directly in a call?",
    "options": ["Ctrl + Shift + S", "Click screen icon", "Both", "Alt + S"],
    "correctAnswer": "Both"
  },
  {
    "question": "What is the result of using three backticks ``` in Discord?",
    "options": ["Multi-line code block", "Spoiler", "Bold", "Quote"],
    "correctAnswer": "Multi-line code block"
  },
  {
    "question": "How do you ping a channel in Discord?",
    "options": ["Type #channel-name", "Type @channel-name", "Ctrl + C", "Use backtick"],
    "correctAnswer": "Type #channel-name"
  },
  {
    "question": "How do you highlight syntax in a code block?",
    "options": ["Use language after triple backticks", "Use syntax command", "Ctrl + H", "Not supported"],
    "correctAnswer": "Use language after triple backticks"
  },
  {
    "question": "What Markdown renders a code block with syntax highlighting for Python?",
    "options": ["```python\\ncode\\n```", "```py\\ncode\\n```", "```Python3\\ncode\\n```", "All of the above"],
    "correctAnswer": "```python\\ncode\\n```"
  },
  {
    "question": "How do you initiate a thread from a message?",
    "options": ["Hover → Click # icon", "Right-click → Create thread", "Both", "Ctrl + T"],
    "correctAnswer": "Both"
  },
  {
    "question": "How do you copy a server ID (with Developer Mode enabled)?",
    "options": ["Right-click server icon → Copy ID", "Ctrl + Alt + I", "Ctrl + Shift + C", "Double-click the server name"],
    "correctAnswer": "Right-click server icon → Copy ID"
  },
  {
    "question": "How do you copy a user's ID (with Developer Mode enabled)?",
    "options": ["Right-click username → Copy ID", "Ctrl + Alt + U", "Alt + Shift + U", "No shortcut"],
    "correctAnswer": "Right-click username → Copy ID"
  },
  {
    "question": "Which of these shortcuts allows you to mark a server as read?",
    "options": ["Shift + Esc", "Ctrl + Shift + M", "Ctrl + Alt + M", "Ctrl + Shift + A"],
    "correctAnswer": "Shift + Esc"
  },
  {
    "question": "How do you delete a message you sent using only the keyboard?",
    "options": ["Tab to message → Shift + Delete", "Arrow keys → Delete", "No built-in shortcut", "Alt + Backspace"],
    "correctAnswer": "No built-in shortcut"
  },
  {
    "question": "How do you change the input/output audio devices quickly during a call?",
    "options": ["User Settings → Voice & Video", "Right-click your icon in VC", "Windows volume mixer", "No direct shortcut"],
    "correctAnswer": "No direct shortcut"
  },
  {
    "question": "Which shortcut lets you focus the message field instantly?",
    "options": ["Tab + Shift", "Ctrl + F", "Esc, then Tab", "None; it's always focused"],
    "correctAnswer": "None; it's always focused"
  },
  {
    "question": "How do you toggle streamer mode manually?",
    "options": ["User Settings → Streamer Mode", "Ctrl + Shift + M", "Alt + S", "Ctrl + Shift + S"],
    "correctAnswer": "User Settings → Streamer Mode"
  },
  {
    "question": "What does pressing Ctrl + / do in Discord?",
    "options": ["Opens keyboard shortcuts cheat sheet", "Nothing", "Opens settings", "Clears chat"],
    "correctAnswer": "Opens keyboard shortcuts cheat sheet"
  },
  {
    "question": "How can you quickly test TTS for your client only?",
    "options": ["Type /tts hello", "Use Bot", "Shift + T", "Not available"],
    "correctAnswer": "Type /tts hello"
  },
  {
    "question": "How do you switch to your most recently used server?",
    "options": ["Ctrl + Alt + Tab", "Ctrl + Shift + Alt + Up", "No direct shortcut", "Alt + Left Arrow"],
    "correctAnswer": "Alt + Left Arrow"
  },
  {
    "question": "How do you switch to the next server?",
    "options": ["Ctrl + Alt + Down", "Ctrl + Alt + Right", "Ctrl + Alt + Up", "Alt + Right Arrow"],
    "correctAnswer": "Alt + Right Arrow"
  },
  {
    "question": "How do you search your DMs for a keyword?",
    "options": ["Open DM → Ctrl + F", "Ctrl + Shift + F", "Alt + F", "Slash command"],
    "correctAnswer": "Open DM → Ctrl + F"
  },
  {
    "question": "How do you set a custom status using shortcuts?",
    "options": ["User Settings → Set Custom Status", "Ctrl + Alt + S", "No keyboard shortcut", "Slash command"],
    "correctAnswer": "No keyboard shortcut"
  },
  {
    "question": "How do you mute the entire Discord application using the keyboard?",
    "options": ["Use system volume", "Ctrl + Shift + M", "No direct shortcut", "Alt + M"],
    "correctAnswer": "No direct shortcut"
  },
  {
    "question": "How do you cycle through multiple accounts if you're logged in via browser sessions?",
    "options": ["Ctrl + Tab", "Browser-specific login", "Use incognito", "Not supported natively"],
    "correctAnswer": "Not supported natively"
  },
  {
    "question": "How do you view a message's timestamp without a mouse?",
    "options": ["Hover required - not possible via keyboard", "Tab to message", "Esc", "Ctrl + T"],
    "correctAnswer": "Hover required - not possible via keyboard"
  },
  {
    "question": "What combination lets you check unread pings in all servers?",
    "options": ["Ctrl + Shift + A", "Shift + Esc", "No global shortcut", "Use Inbox (Esc → Tab → Enter)"],
    "correctAnswer": "Use Inbox (Esc → Tab → Enter)"
  },
  {
    "question": "How do you start a video call in a DM?",
    "options": ["Ctrl + Shift + V", "Click camera icon", "Alt + V", "No shortcut"],
    "correctAnswer": "No shortcut"
  },
  {
    "question": "What is the shortcut to mute/unmute yourself in a voice channel?",
    "options": ["Ctrl + Shift + M", "Alt + M", "Shift + M", "Ctrl + M"],
    "correctAnswer": "Ctrl + Shift + M"
  },
  {
    "question": "What is the shortcut to deafen/undeafen yourself?",
    "options": ["Ctrl + Shift + D", "Alt + D", "Ctrl + D", "Shift + D"],
    "correctAnswer": "Ctrl + Shift + D"
  },
  {
    "question": "How do you toggle overlay settings during gameplay?",
    "options": ["Must use in-game shortcut configured in settings", "Alt + Shift + O", "Ctrl + Shift + O", "Esc + O"],
    "correctAnswer": "Must use in-game shortcut configured in settings"
  },
  {
    "question": "How do you find archived threads in a channel?",
    "options": ["Click Threads → View Archived", "Ctrl + Alt + A", "Shift + A", "There is a shortcut in thread list"],
    "correctAnswer": "Click Threads → View Archived"
  },
  {
    "question": "How do you use emoji names to insert emoji?",
    "options": ["Type :emoji_name:", "Alt + E", "Ctrl + E", "/emoji"],
    "correctAnswer": "Type :emoji_name:"
  },
  {
    "question": "What shortcut toggles the emoji picker (if on Linux)?",
    "options": ["Ctrl + ;", "Ctrl + .", "Alt + Shift + E", "None - OS-dependent"],
    "correctAnswer": "None - OS-dependent"
  },
  {
    "question": "How do you join a Stage channel using keyboard navigation?",
    "options": ["Tab to channel → Enter", "Ctrl + J", "/join command", "Alt + Enter"],
    "correctAnswer": "Tab to channel → Enter"
  },
  {
    "question": "How do you raise your hand in a Stage channel?",
    "options": ["Click raise hand icon", "Use Tab + Enter on icon", "Both", "No keyboard shortcut"],
    "correctAnswer": "Both"
  },
  {
    "question": "How do you edit your last message quickly?",
    "options": ["Press the Up Arrow key", "Ctrl + E", "Shift + ↑", "Esc, then ↑"],
    "correctAnswer": "Press the Up Arrow key"
  },
  {
    "question": "How do you react to a message with the last used emoji?",
    "options": ["Press + key after selecting message", "Hover → +", "Right-click → Add Reaction", "No shortcut"],
    "correctAnswer": "Press + key after selecting message"
  },
  {
    "question": "How do you invite someone to a server without using the mouse?",
    "options": ["Press Esc → Tab to server → Ctrl + Shift + I", "Ctrl + Shift + I", "Use invite button via tabbing", "No fixed shortcut"],
    "correctAnswer": "Use invite button via tabbing"
  },
  {
    "question": "What is the shortcut to jump to the last message in a channel?",
    "options": ["Ctrl + End", "Ctrl + Shift + ↓", "Alt + ↓", "Esc + End"],
    "correctAnswer": "Ctrl + End"
  }
    ]
  },

   "WhatsApp": {
    easy: [
      {
    question: "How do you open a new chat in WhatsApp Web?",
    options: ["Ctrl + N", "Alt + N", "Shift + N", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you search in a chat on WhatsApp Web?",
    options: ["Ctrl + F", "Alt + S", "Ctrl + S", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "What shortcut is used to archive a chat?",
    options: ["Ctrl + E", "Ctrl + H", "Alt + E", "Ctrl + D"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you mute a chat?",
    options: ["Ctrl + Shift + M", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "Shortcut to delete a chat?",
    options: ["Ctrl + Backspace", "Ctrl + D", "Ctrl + Shift + D", "Delete key"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "How do you pin a chat on WhatsApp Web?",
    options: ["Right-click > Pin", "Ctrl + P", "Shift + P", "Ctrl + Shift + P"],
    correctAnswer: "Right-click > Pin"
  },
  {
    question: "Shortcut to open emoji panel?",
    options: ["Ctrl + E", "Alt + E", "Tab", "Click emoji icon"],
    correctAnswer: "Click emoji icon"
  },
  {
    question: "Shortcut to send a message?",
    options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Alt + S"],
    correctAnswer: "Enter"
  },
  {
    question: "Shortcut to go to the previous chat?",
    options: ["Ctrl + Shift + [", "Ctrl + ↑", "Alt + Up Arrow", "None"],
    correctAnswer: "Ctrl + Shift + ["
  },
  {
    question: "Shortcut to go to the next chat?",
    options: ["Ctrl + Shift + ]", "Ctrl + ↓", "Alt + Down Arrow", "None"],
    correctAnswer: "Ctrl + Shift + ]"
  },
  {
    question: "Shortcut to search all chats?",
    options: ["Ctrl + Alt + /", "Ctrl + Alt + F", "Ctrl + Alt + S", "Ctrl + Alt + Shift"],
    correctAnswer: "Ctrl + Alt + /"
  },
  {
    question: "Shortcut to open Profile Settings?",
    options: ["Ctrl + ,", "Ctrl + P", "Alt + P", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "Shortcut to mark a message as unread?",
    options: ["Ctrl + Shift + U", "Ctrl + U", "Alt + U", "Right-click > Mark as Unread"],
    correctAnswer: "Right-click > Mark as Unread"
  },
  {
    question: "Shortcut to open starred messages?",
    options: ["Ctrl + Shift + S", "Ctrl + S", "Alt + S", "Ctrl + Shift + *"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "Shortcut to log out from WhatsApp Web?",
    options: ["Menu > Log out", "Ctrl + Shift + Q", "Ctrl + L", "Ctrl + Q"],
    correctAnswer: "Menu > Log out"
  },
  {
    question: "How to open WhatsApp Web in a browser quickly?",
    options: ["Type web.whatsapp.com", "Ctrl + W", "webwa.me", "Ctrl + Shift + W"],
    correctAnswer: "Type web.whatsapp.com"
  },
  {
    question: "Shortcut to attach a file on WhatsApp Web?",
    options: ["Ctrl + Shift + A", "Click paperclip icon", "Alt + A", "Ctrl + A"],
    correctAnswer: "Click paperclip icon"
  },
  {
    question: "Shortcut to record a voice message?",
    options: ["Hold mic icon", "Ctrl + R", "Shift + V", "Ctrl + M"],
    correctAnswer: "Hold mic icon"
  },
  {
    question: "Shortcut to bold text?",
    options: ["*Your text*", "Ctrl + B", "Alt + B", "_Your text_"],
    correctAnswer: "*Your text*"
  },
  {
    question: "Shortcut to italicize text?",
    options: ["_Your text_", "Ctrl + I", "Alt + I", "*Your text*"],
    correctAnswer: "_Your text_"
  },
  {
    question: "Shortcut to strikethrough text?",
    options: ["~Your text~", "Ctrl + ~", "Ctrl + S", "=Your text="],
    correctAnswer: "~Your text~"
  },
  {
    question: "Shortcut to monospace text?",
    options: ["`Your text`", "Ctrl + Shift + T", "'Your text'", "=Your text="],
    correctAnswer: "`Your text`"
  },
  {
    question: "Shortcut to open notification settings?",
    options: ["Settings > Notifications", "Ctrl + Alt + N", "Ctrl + Shift + N", "Ctrl + N"],
    correctAnswer: "Settings > Notifications"
  },
  {
    question: "Shortcut to change wallpaper on chat?",
    options: ["Chat settings > Wallpaper", "Ctrl + W", "Alt + W", "Ctrl + Alt + W"],
    correctAnswer: "Chat settings > Wallpaper"
  },
  {
    question: "Shortcut to enable dark mode?",
    options: ["Menu > Theme", "Ctrl + D", "Ctrl + Alt + D", "Ctrl + Shift + T"],
    correctAnswer: "Menu > Theme"
  },
  {
    question: "Shortcut to forward a message?",
    options: ["Right-click > Forward", "Ctrl + F", "Ctrl + Shift + F", "Alt + F"],
    correctAnswer: "Right-click > Forward"
  },
  {
    question: "Shortcut to reply to a message?",
    options: ["Click arrow icon", "Ctrl + R", "Right-click > Reply", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to react to a message (emoji)?",
    options: ["Hover > Emoji", "Ctrl + E", "Click emoji popup", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to block a contact?",
    options: ["Contact info > Block", "Ctrl + Shift + B", "Alt + B", "Ctrl + Alt + B"],
    correctAnswer: "Contact info > Block"
  },
  {
    question: "Shortcut to report a message?",
    options: ["Right-click > Report", "Ctrl + Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "Right-click > Report"
  },
  {
    question: "How do you open contact info in WhatsApp Web?",
    options: ["Ctrl + I", "Click contact name", "Alt + I", "Ctrl + Alt + I"],
    correctAnswer: "Click contact name"
  },
  {
    question: "Shortcut to select multiple messages?",
    options: ["Shift + Click", "Ctrl + Click", "Alt + Click", "Tab"],
    correctAnswer: "Shift + Click"
  },
  {
    question: "How do you create a new group?",
    options: ["Menu > New Group", "Ctrl + G", "Alt + G", "Shift + G"],
    correctAnswer: "Menu > New Group"
  },
  {
    question: "Shortcut to start a voice call on mobile app?",
    options: ["Tap phone icon", "Ctrl + V", "Ctrl + Shift + V", "Alt + C"],
    correctAnswer: "Tap phone icon"
  },
  {
    question: "Shortcut to start a video call on mobile app?",
    options: ["Tap video icon", "Ctrl + Shift + V", "Alt + V", "Ctrl + V"],
    correctAnswer: "Tap video icon"
  },
  {
    question: "Shortcut to open group info?",
    options: ["Click group name", "Ctrl + G", "Shift + G", "Ctrl + Alt + G"],
    correctAnswer: "Click group name"
  },
  {
    question: "Shortcut to open keyboard shortcuts menu in WhatsApp Web?",
    options: ["Shift + /", "Ctrl + /", "Alt + /", "None"],
    correctAnswer: "Shift + /"
  },
  {
    question: "How do you go to the last message in a chat?",
    options: ["End key", "Ctrl + ↓", "Scroll manually", "Home key"],
    correctAnswer: "End key"
  },
  {
    question: "Shortcut to copy a message?",
    options: ["Ctrl + C", "Right-click > Copy", "Both A and B", "Ctrl + Alt + C"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to paste copied text?",
    options: ["Ctrl + V", "Shift + V", "Alt + V", "Ctrl + Shift + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "Shortcut to cut selected text?",
    options: ["Ctrl + X", "Alt + X", "Ctrl + Alt + X", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "Shortcut to undo typed message?",
    options: ["Ctrl + Z", "Alt + Z", "Ctrl + Shift + Z", "Ctrl + U"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "Shortcut to redo text after undo?",
    options: ["Ctrl + Y", "Ctrl + Shift + Z", "Alt + Y", "Ctrl + R"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "Shortcut to select all text in message box?",
    options: ["Ctrl + A", "Shift + A", "Alt + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Shortcut to toggle between emoji/sticker/GIF?",
    options: ["Click tabs", "Ctrl + Tab", "Shift + Tab", "Ctrl + 1/2/3"],
    correctAnswer: "Click tabs"
  },
  {
    question: "Shortcut to navigate to Settings?",
    options: ["Menu > Settings", "Ctrl + ,", "Alt + S", "Ctrl + S"],
    correctAnswer: "Menu > Settings"
  },
  {
    question: "Shortcut to take screenshot of chat (browser)?",
    options: ["OS-level shortcut (e.g., PrtSc or Snipping Tool)", "Ctrl + Shift + S", "None built-in", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to switch language in WhatsApp Web?",
    options: ["Browser Settings", "Ctrl + Shift + L", "Menu > Settings > Language", "Ctrl + L"],
    correctAnswer: "Menu > Settings > Language"
  },
  {
    question: "Shortcut to clear chat?",
    options: ["Chat settings > Clear Chat", "Ctrl + Shift + Delete", "Alt + Backspace", "Ctrl + L"],
    correctAnswer: "Chat settings > Clear Chat"
  },
  {
    question: "Shortcut to delete media from chat?",
    options: ["Click > Delete", "Ctrl + Delete", "Right-click > Delete", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to find starred messages in a chat?",
    options: ["Menu > Starred Messages", "Ctrl + Shift + S", "Alt + *", "Ctrl + *"],
    correctAnswer: "Menu > Starred Messages"
  },
  {
    question: "Shortcut to report spam?",
    options: ["Contact info > Report", "Ctrl + R", "Ctrl + Shift + R", "Alt + R"],
    correctAnswer: "Contact info > Report"
  },
  {
    question: "Shortcut to open a WhatsApp message in pop-out (desktop app)?",
    options: ["Double-click message", "Ctrl + Enter", "Not available", "Click > Open in window"],
    correctAnswer: "Click > Open in window"
  },
  {
    question: "Shortcut to collapse emoji/sticker panel?",
    options: ["Esc", "Ctrl + E", "Alt + E", "Tab"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to send broadcast message?",
    options: ["Menu > New Broadcast", "Ctrl + B", "Alt + B", "Ctrl + Shift + B"],
    correctAnswer: "Menu > New Broadcast"
  },
  {
    question: "Shortcut to reply to last message quickly?",
    options: ["↑ Arrow", "Ctrl + R", "Shift + R", "Alt + ↑"],
    correctAnswer: "↑ Arrow"
  },
  {
    question: "Shortcut to tag someone in a group chat?",
    options: ["Type \"@\" then name", "Ctrl + T", "Shift + @", "Alt + A"],
    correctAnswer: "Type \"@\" then name"
  },
  {
    question: "Shortcut to send a sticker?",
    options: ["Click sticker icon", "Ctrl + S", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "Click sticker icon"
  },
  {
    question: "Shortcut to hide chat preview in notifications?",
    options: ["Settings > Notifications", "Ctrl + N", "Ctrl + Shift + P", "Privacy > Hide preview"],
    correctAnswer: "Settings > Notifications"
  },
  {
    question: "Shortcut to enable two-step verification?",
    options: ["Settings > Privacy > Two-step verification", "Ctrl + T", "Alt + P", "Ctrl + 2"],
    correctAnswer: "Settings > Privacy > Two-step verification"
  }
    ],
    medium: [
       {
    question: "How do you search for messages within a specific chat?",
    options: ["Ctrl + F", "Ctrl + Shift + F", "Alt + F", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to archive a chat in WhatsApp Web?",
    options: ["Ctrl + E", "Ctrl + Shift + E", "Alt + A", "None (done through UI)"],
    correctAnswer: "None (done through UI)"
  },
  {
    question: "Shortcut to open the next chat in the list?",
    options: ["Ctrl + Tab", "Ctrl + ↓", "Down Arrow", "Tab"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "Shortcut to open the previous chat in the list?",
    options: ["Ctrl + ↑", "Up Arrow", "Shift + Tab", "Alt + ↑"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "Shortcut to open a chat in a new tab (browser only)?",
    options: ["Ctrl + Click", "Shift + Click", "Middle Mouse Click", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to search for a contact globally in WhatsApp Web?",
    options: ["Ctrl + K", "Ctrl + /", "Ctrl + Alt + F", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "Shortcut to bold text in a message?",
    options: ["*text*", "Ctrl + B", "Shift + B", "**text**"],
    correctAnswer: "*text*"
  },
  {
    question: "Shortcut to italicize text in WhatsApp?",
    options: ["_text_", "Ctrl + I", "Alt + I", "/text/"],
    correctAnswer: "_text_"
  },
  {
    question: "Shortcut to strikethrough text?",
    options: ["~text~", "Ctrl + Shift + X", "Alt + X", "-text-"],
    correctAnswer: "~text~"
  },
  {
    question: "Shortcut to create monospace text?",
    options: ["```text```", "`text`", "Ctrl + `", "Alt + `"],
    correctAnswer: "`text`"
  },
  {
    question: "Shortcut to mark chat as unread (UI)?",
    options: ["Right-click > Mark as Unread", "Ctrl + Shift + U", "Alt + M", "Ctrl + Alt + M"],
    correctAnswer: "Right-click > Mark as Unread"
  },
  {
    question: "How to mark all chats as read?",
    options: ["Menu > Mark All as Read", "Ctrl + Shift + R", "Alt + R", "Not available"],
    correctAnswer: "Menu > Mark All as Read"
  },
  {
    question: "Shortcut to forward a message (keyboard navigation)?",
    options: ["Click > Forward", "Select > Click forward icon", "Ctrl + F", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to access starred messages?",
    options: ["Menu > Starred", "Ctrl + Shift + S", "Alt + S", "Ctrl + *"],
    correctAnswer: "Menu > Starred"
  },
  {
    question: "Shortcut to log out from WhatsApp Web?",
    options: ["Menu > Log out", "Ctrl + Shift + Q", "Alt + Q", "Ctrl + Alt + L"],
    correctAnswer: "Menu > Log out"
  },
  {
    question: "Shortcut to delete an entire chat?",
    options: ["Right-click > Delete Chat", "Ctrl + Shift + Delete", "Alt + Backspace", "Ctrl + Alt + D"],
    correctAnswer: "Right-click > Delete Chat"
  },
  {
    question: "Shortcut to select multiple messages in WhatsApp Web?",
    options: ["Shift + Click", "Ctrl + Click", "Both", "None"],
    correctAnswer: "Shift + Click"
  },
  {
    question: "How to quickly go to the top of a chat?",
    options: ["Home key", "Ctrl + ↑", "Click scroll bar", "All of the above"],
    correctAnswer: "Home key"
  },
  {
    question: "Shortcut to send a voice note?",
    options: ["Click mic icon", "Hold mic icon", "Ctrl + M (Desktop app only)", "No keyboard shortcut"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to open profile photo of contact?",
    options: ["Click on profile pic", "Ctrl + P", "Alt + P", "Ctrl + Shift + P"],
    correctAnswer: "Click on profile pic"
  },
  {
    question: "Shortcut to change your WhatsApp Web theme?",
    options: ["Settings > Theme", "Ctrl + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "Settings > Theme"
  },
  {
    question: "Shortcut to block a contact?",
    options: ["Contact Info > Block", "Ctrl + B", "Alt + Shift + B", "None"],
    correctAnswer: "Contact Info > Block"
  },
  {
    question: "How do you remove a contact from your list?",
    options: ["Not possible directly from WhatsApp", "Ctrl + D", "Delete from phone", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to jump to last unread message in a chat?",
    options: ["Click \"Jump to latest\" arrow", "Ctrl + End", "Alt + ↓", "Shift + ↓"],
    correctAnswer: "Click \"Jump to latest\" arrow"
  },
  {
    question: "Shortcut to minimize chat window in desktop app?",
    options: ["Ctrl + M", "Windows shortcut (Alt + Space > N)", "Alt + M", "Ctrl + W"],
    correctAnswer: "Windows shortcut (Alt + Space > N)"
  },
  {
    question: "How do you mute notifications for a contact?",
    options: ["Right-click chat > Mute", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "Right-click chat > Mute"
  },
  {
    question: "Shortcut to open emoji picker in chat input?",
    options: ["Ctrl + E", "Windows + . (period)", "Alt + E", "Ctrl + Shift + E"],
    correctAnswer: "Windows + . (period)"
  },
  {
    question: "Shortcut to toggle between light and dark mode?",
    options: ["Ctrl + Shift + L", "Manually via Settings", "Alt + T", "Ctrl + T"],
    correctAnswer: "Manually via Settings"
  },
  {
    question: "Shortcut to edit your profile info?",
    options: ["Menu > Profile", "Ctrl + P", "Alt + P", "Ctrl + Shift + P"],
    correctAnswer: "Menu > Profile"
  },
  {
    question: "Shortcut to select an emoji by keyboard in message field (Windows)?",
    options: ["Windows + .", "Ctrl + E", "Alt + E", "None"],
    correctAnswer: "Windows + ."
  },
  {
    question: "Shortcut to reply to a specific message?",
    options: ["Right-click > Reply", "Swipe (mobile only)", "Ctrl + Shift + R", "Alt + R"],
    correctAnswer: "Right-click > Reply"
  },
  {
    question: "Shortcut to quote a message quickly (desktop)?",
    options: ["Hover > Click reply arrow", "Ctrl + Shift + R", "Alt + Q", "Ctrl + Q"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "Shortcut to pin a chat?",
    options: ["Right-click > Pin", "Ctrl + Shift + P", "Alt + Shift + P", "Ctrl + P"],
    correctAnswer: "Right-click > Pin"
  },
  {
    question: "Shortcut to unpin a chat?",
    options: ["Right-click > Unpin", "Ctrl + Shift + U", "Alt + U", "Ctrl + U"],
    correctAnswer: "Right-click > Unpin"
  },
  {
    question: "Shortcut to star a message?",
    options: ["Ctrl + S", "Right-click > Star message", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "Right-click > Star message"
  },
  {
    question: "How to access the keyboard shortcuts list in WhatsApp Web?",
    options: ["Ctrl + /", "Ctrl + Shift + /", "Alt + K", "None"],
    correctAnswer: "Ctrl + /"
  },
  {
    question: "Shortcut to clear a chat?",
    options: ["Menu > Clear messages", "Ctrl + Shift + Del", "Alt + Backspace", "Ctrl + Alt + Delete"],
    correctAnswer: "Menu > Clear messages"
  },
  {
    question: "Shortcut to download a media file?",
    options: ["Click on download icon", "Ctrl + J", "Right-click > Download", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to zoom in on an image in chat?",
    options: ["Click to open > Scroll", "Ctrl + Scroll", "Pinch gesture", "None"],
    correctAnswer: "Click to open > Scroll"
  },
  {
    question: "Shortcut to quickly scroll to latest message in chat?",
    options: ["Click Jump arrow", "Ctrl + End", "Fn + ↓", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to move between messages with arrow keys?",
    options: ["Only in selected mode", "Yes, using Up/Down", "Not available", "Ctrl + Up/Down"],
    correctAnswer: "Yes, using Up/Down"
  },
  {
    question: "Shortcut to open contact info page?",
    options: ["Click chat header", "Ctrl + I", "Alt + I", "Ctrl + Shift + I"],
    correctAnswer: "Click chat header"
  },
  {
    question: "Shortcut to use stickers in a message?",
    options: ["Ctrl + Shift + S", "Click emoji > Stickers", "Ctrl + Alt + S", "None"],
    correctAnswer: "Click emoji > Stickers"
  },
  {
    question: "Shortcut to toggle GIF panel?",
    options: ["Emoji panel > GIF", "Ctrl + G", "Alt + G", "Ctrl + Shift + G"],
    correctAnswer: "Emoji panel > GIF"
  },
  {
    question: "Shortcut to go back from open image to chat?",
    options: ["Esc", "Backspace", "Ctrl + ←", "Alt + ←"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to pause audio playback in a chat?",
    options: ["Click pause", "Spacebar", "Alt + Space", "Ctrl + Space"],
    correctAnswer: "Click pause"
  },
  {
    question: "Shortcut to open sticker suggestions using text?",
    options: ["Type \":\"", "Type word > wait", "Ctrl + :", "Alt + :"],
    correctAnswer: "Type word > wait"
  },
  {
    question: "Shortcut to forward multiple messages together?",
    options: ["Select > Forward", "Ctrl + Click > Forward", "Shift + Click > Forward", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Shortcut to disable read receipts?",
    options: ["Settings > Privacy", "Ctrl + Shift + H", "Ctrl + H", "Alt + Shift + R"],
    correctAnswer: "Settings > Privacy"
  },
  {
    question: "Shortcut to create a group?",
    options: ["Menu > New Group", "Ctrl + Shift + G", "Ctrl + G", "Alt + G"],
    correctAnswer: "Menu > New Group"
  },
  {
    question: "Shortcut to exit group?",
    options: ["Group Info > Exit", "Ctrl + Shift + Q", "Alt + Q", "Ctrl + Alt + Q"],
    correctAnswer: "Group Info > Exit"
  },
  {
    question: "Shortcut to delete sent message (if not read)?",
    options: ["Right-click > Delete > Delete for everyone", "Ctrl + Shift + Del", "Alt + Del", "Ctrl + Del"],
    correctAnswer: "Right-click > Delete > Delete for everyone"
  },
  {
    question: "Shortcut to switch between chats quickly (desktop app)?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Ctrl + 1/2/3", "Ctrl + Arrow Keys"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "Shortcut to move backwards in chat list?",
    options: ["Ctrl + Shift + Tab", "Ctrl + Page Up", "Alt + ↑", "Shift + ↑"],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "Shortcut to open menu/settings?",
    options: ["Click 3-dot menu", "Ctrl + ,", "Ctrl + Shift + ,", "Alt + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "Shortcut to set custom wallpaper in WhatsApp Web?",
    options: ["Not available", "Settings > Wallpaper", "Ctrl + Shift + W", "Alt + W"],
    correctAnswer: "Not available"
  },
  {
    question: "Shortcut to open WhatsApp help/documentation?",
    options: ["Ctrl + /", "Settings > Help", "F1", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to move focus to chat list from message pane?",
    options: ["Esc", "Tab", "Shift + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to move focus from search bar to chat list?",
    options: ["Esc", "Tab", "Ctrl + Tab", "Shift + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to turn off notifications for WhatsApp Web?",
    options: ["Browser Settings > Notifications", "Ctrl + N", "WhatsApp Settings > Notifications", "A and C"],
    correctAnswer: "A and C"
  }
    ],
    hard: [
      {
    question: "How do you quickly switch between multiple WhatsApp accounts in the desktop app?",
    options: ["Not supported", "Ctrl + Alt + A", "Menu > Switch Account", "Ctrl + Shift + A"],
    correctAnswer: "Not supported"
  },
  {
    question: "Shortcut to open developer console on WhatsApp Web?",
    options: ["Ctrl + Shift + I", "F12", "Ctrl + Shift + J", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to open WhatsApp Web in incognito/private mode?",
    options: ["Ctrl + Shift + N (Chrome)", "Ctrl + Shift + P (Firefox)", "Menu > New Incognito Window", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How to clear WhatsApp Web cache without logging out?",
    options: ["Browser settings > Clear cache", "Ctrl + Shift + Del", "Ctrl + Alt + Del", "Not possible without logout"],
    correctAnswer: "Browser settings > Clear cache"
  },
  {
    question: "Shortcut to create a temporary group call in WhatsApp desktop?",
    options: ["Ctrl + Shift + C", "Click Call button in group chat", "Alt + G", "Not supported"],
    correctAnswer: "Click Call button in group chat"
  },
  {
    question: "Shortcut to download all media from a chat at once?",
    options: ["Click chat media > Select all > Download", "Ctrl + D", "Alt + D", "Not supported"],
    correctAnswer: "Click chat media > Select all > Download"
  },
  {
    question: "Shortcut to open WhatsApp Web keyboard shortcuts help?",
    options: ["Ctrl + /", "F1", "Alt + H", "Ctrl + H"],
    correctAnswer: "Ctrl + /"
  },
  {
    question: "Shortcut to navigate between open chat windows in WhatsApp desktop?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Ctrl + Page Up/Page Down", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to open search inside a specific chat?",
    options: ["Ctrl + F", "Ctrl + Shift + F", "Alt + F", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to jump to next search result inside chat?",
    options: ["Enter", "F3", "Ctrl + G", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to jump to previous search result inside chat?",
    options: ["Shift + Enter", "Shift + F3", "Ctrl + Shift + G", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to toggle video call on/off during a call?",
    options: ["Ctrl + Shift + V", "V key", "Alt + V", "Not supported"],
    correctAnswer: "V key"
  },
  {
    question: "Shortcut to toggle mute/unmute mic during a call?",
    options: ["M key", "Ctrl + M", "Alt + M", "Not supported"],
    correctAnswer: "M key"
  },
  {
    question: "Shortcut to share screen during a video call?",
    options: ["Click screen share button", "Ctrl + Shift + S", "Alt + S", "Not supported"],
    correctAnswer: "Click screen share button"
  },
  {
    question: "Shortcut to open the starred messages list?",
    options: ["Ctrl + Shift + S", "Ctrl + Alt + S", "Menu > Starred messages", "None of the above"],
    correctAnswer: "Menu > Starred messages"
  },
  {
    question: "Shortcut to send a message without pressing Enter (send on Ctrl + Enter)?",
    options: ["Change setting in Preferences", "Ctrl + Enter", "Alt + Enter", "Not possible"],
    correctAnswer: "Change setting in Preferences"
  },
  {
    question: "Shortcut to add a contact to your phone from WhatsApp desktop?",
    options: ["Click contact name > Add contact", "Ctrl + Shift + A", "Alt + A", "Not supported"],
    correctAnswer: "Click contact name > Add contact"
  },
  {
    question: "Shortcut to create a new broadcast list?",
    options: ["Menu > New broadcast", "Ctrl + Shift + B", "Alt + B", "Not supported"],
    correctAnswer: "Menu > New broadcast"
  },
  {
    question: "Shortcut to toggle chat wallpaper on/off?",
    options: ["Settings > Wallpaper", "Ctrl + W", "Alt + W", "Not supported"],
    correctAnswer: "Settings > Wallpaper"
  },
  {
    question: "Shortcut to reply privately in a group chat?",
    options: ["Right-click message > Reply privately", "Ctrl + Shift + R", "Alt + R", "Not supported"],
    correctAnswer: "Right-click message > Reply privately"
  },
  {
    question: "Shortcut to tag a user in group chat?",
    options: ["Type @ + username", "Ctrl + T", "Alt + T", "Not supported"],
    correctAnswer: "Type @ + username"
  },
  {
    question: "Shortcut to quickly archive a chat?",
    options: ["Right-click chat > Archive", "Ctrl + Shift + A", "Alt + A", "Ctrl + A"],
    correctAnswer: "Right-click chat > Archive"
  },
  {
    question: "Shortcut to unarchive chats?",
    options: ["Settings > Archived chats", "Scroll to bottom > Archived", "Right-click archived chat > Unarchive", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to open WhatsApp in full screen?",
    options: ["F11", "Ctrl + F", "Alt + Enter", "Ctrl + Enter"],
    correctAnswer: "F11"
  },
  {
    question: "Shortcut to open keyboard shortcuts list and search inside it?",
    options: ["Ctrl + / + search terms", "Ctrl + Shift + /", "Alt + /", "Not supported"],
    correctAnswer: "Ctrl + / + search terms"
  },
  {
    question: "Shortcut to open the \"About\" section on WhatsApp Web?",
    options: ["Menu > About", "Ctrl + Shift + I", "Alt + I", "Not supported"],
    correctAnswer: "Menu > About"
  },
  {
    question: "Shortcut to quickly forward media to multiple contacts?",
    options: ["Select media > Forward > Select multiple", "Ctrl + Shift + F", "Alt + F", "Not supported"],
    correctAnswer: "Select media > Forward > Select multiple"
  },
  {
    question: "Shortcut to delete all chats (clear chat list)?",
    options: ["Settings > Clear all chats", "Ctrl + Shift + Del", "Alt + Shift + Del", "Not supported"],
    correctAnswer: "Settings > Clear all chats"
  },
  {
    question: "Shortcut to move the cursor to start of the message while typing?",
    options: ["Home key", "Ctrl + Left arrow", "Alt + Home", "Shift + Home"],
    correctAnswer: "Home key"
  },
  {
    question: "Shortcut to move the cursor to end of the message while typing?",
    options: ["End key", "Ctrl + Right arrow", "Alt + End", "Shift + End"],
    correctAnswer: "End key"
  },
  {
    question: "Shortcut to select text while typing?",
    options: ["Shift + Arrow keys", "Ctrl + Shift + Arrow keys", "Alt + Shift + Arrow keys", "Ctrl + Arrow keys"],
    correctAnswer: "Shift + Arrow keys"
  },
  {
    question: "Shortcut to undo typing?",
    options: ["Ctrl + Z", "Ctrl + Y", "Alt + Z", "Shift + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "Shortcut to redo typing?",
    options: ["Ctrl + Y", "Ctrl + Z", "Alt + Y", "Shift + Y"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "Shortcut to paste text without formatting?",
    options: ["Ctrl + Shift + V", "Ctrl + V", "Alt + V", "Shift + V"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "Shortcut to zoom in WhatsApp Web UI?",
    options: ["Ctrl + +", "Ctrl + -", "Ctrl + 0", "Alt + +"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "Shortcut to zoom out WhatsApp Web UI?",
    options: ["Ctrl + -", "Ctrl + +", "Ctrl + 0", "Alt + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "Shortcut to reset zoom in WhatsApp Web UI?",
    options: ["Ctrl + 0", "Ctrl + Shift + 0", "Alt + 0", "Shift + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "Shortcut to open Chrome DevTools console in WhatsApp Web?",
    options: ["Ctrl + Shift + J", "Ctrl + Shift + I", "F12", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to toggle dark mode in WhatsApp Web (if supported)?",
    options: ["Settings > Theme", "Ctrl + D", "Alt + D", "Not available via shortcut"],
    correctAnswer: "Settings > Theme"
  },
  {
    question: "Shortcut to quickly mute/unmute notifications for a chat?",
    options: ["Right-click chat > Mute notifications", "Ctrl + M", "Alt + M", "Not supported"],
    correctAnswer: "Right-click chat > Mute notifications"
  },
  {
    question: "Shortcut to mark a chat as unread?",
    options: ["Right-click chat > Mark as unread", "Ctrl + Shift + U", "Alt + U", "Not supported"],
    correctAnswer: "Right-click chat > Mark as unread"
  },
  {
    question: "Shortcut to star a message?",
    options: ["Hover over message > Click star icon", "Ctrl + Shift + S", "Alt + S", "Not supported"],
    correctAnswer: "Hover over message > Click star icon"
  },
  {
    question: "Shortcut to jump to the next chat in the chat list?",
    options: ["Ctrl + ]", "Ctrl + Tab", "Alt + ]", "Shift + ]"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "Shortcut to jump to the previous chat in the chat list?",
    options: ["Ctrl + [", "Ctrl + Shift + Tab", "Alt + [", "Shift + ["],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "Shortcut to refresh WhatsApp Web?",
    options: ["Ctrl + R", "F5", "Ctrl + F5", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Shortcut to open chat info pane?",
    options: ["Ctrl + I", "Alt + I", "Shift + I", "Not supported"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "Shortcut to add emoji while typing message?",
    options: ["Windows key + . (period)", "Ctrl + E", "Alt + E", "Not supported"],
    correctAnswer: "Windows key + . (period)"
  },
  {
    question: "Shortcut to forward a message?",
    options: ["Ctrl + F", "Right-click > Forward", "Alt + F", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to delete a message for yourself?",
    options: ["Right-click > Delete message", "Ctrl + D", "Alt + D", "Not supported"],
    correctAnswer: "Right-click > Delete message"
  },
  {
    question: "Shortcut to delete a message for everyone?",
    options: ["Right-click > Delete for everyone", "Ctrl + Shift + D", "Alt + Shift + D", "Not supported"],
    correctAnswer: "Right-click > Delete for everyone"
  },
  {
    question: "Shortcut to pin a chat to top?",
    options: ["Right-click chat > Pin chat", "Ctrl + P", "Alt + P", "Not supported"],
    correctAnswer: "Right-click chat > Pin chat"
  },
  {
    question: "Shortcut to unpin a chat?",
    options: ["Right-click pinned chat > Unpin chat", "Ctrl + Shift + P", "Alt + Shift + P", "Not supported"],
    correctAnswer: "Right-click pinned chat > Unpin chat"
  },
  {
    question: "Shortcut to block a contact?",
    options: ["Chat info > Block contact", "Ctrl + B", "Alt + B", "Not supported"],
    correctAnswer: "Chat info > Block contact"
  },
  {
    question: "Shortcut to report a contact or group?",
    options: ["Chat info > Report contact/group", "Ctrl + R", "Alt + R", "Not supported"],
    correctAnswer: "Chat info > Report contact/group"
  },
  {
    question: "Shortcut to save media from chat to your PC?",
    options: ["Right-click media > Save as", "Ctrl + S", "Alt + S", "Not supported"],
    correctAnswer: "Right-click media > Save as"
  },
  {
    question: "Shortcut to preview a photo or video before sending?",
    options: ["Click media > Preview window opens", "Ctrl + P", "Alt + P", "Not supported"],
    correctAnswer: "Click media > Preview window opens"
  },
  {
    question: "Shortcut to open emoji panel in WhatsApp mobile?",
    options: ["Tap emoji icon in text box", "Swipe keyboard", "Not supported", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to open sticker panel?",
    options: ["Click sticker icon in text box", "Ctrl + Shift + E", "Alt + E", "Not supported"],
    correctAnswer: "Click sticker icon in text box"
  },
  {
    question: "Shortcut to send a voice message?",
    options: ["Hold microphone button in chat", "Ctrl + Shift + V", "Alt + V", "Not supported"],
    correctAnswer: "Hold microphone button in chat"
  },
  {
    question: "Shortcut to switch between text and voice message input (mobile)?",
    options: ["Tap keyboard/mic icon toggle", "Swipe up/down on mic icon", "Not supported", "Both A and B"],
    correctAnswer: "Both A and B"
  }
    ]
  },

  "Skype": {
    easy: [
      {
    question: "How do you start a voice call with a selected contact?",
    options: ["Ctrl + Shift + C", "Ctrl + C", "Ctrl + R", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you start a video call with a selected contact?",
    options: ["Ctrl + Shift + K", "Ctrl + Shift + V", "Ctrl + K", "Ctrl + V"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "What shortcut opens the Skype settings menu?",
    options: ["Ctrl + ,", "Ctrl + P", "Ctrl + S", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you open a new chat window?",
    options: ["Ctrl + N", "Ctrl + Shift + M", "Ctrl + Alt + N", "Ctrl + M"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "What shortcut ends an active call?",
    options: ["Ctrl + E", "Esc", "Ctrl + Q", "Alt + End"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you search for contacts or messages?",
    options: ["Ctrl + F", "Ctrl + S", "Ctrl + Shift + F", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you toggle the microphone on/off during a call?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "Esc"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "What shortcut turns your camera on or off during a call?",
    options: ["Ctrl + Shift + K", "Ctrl + Shift + O", "Ctrl + O", "Ctrl + E"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "How do you open the notifications panel in Skype?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + Alt + N", "There is no shortcut"],
    correctAnswer: "There is no shortcut"
  },
  {
    question: "How do you mute/unmute audio during a call?",
    options: ["Ctrl + M", "Ctrl + U", "Esc", "Alt + M"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "What is the shortcut to log out of Skype?",
    options: ["Ctrl + Shift + Q", "Ctrl + L", "Alt + F4", "Ctrl + Q"],
    correctAnswer: "Ctrl + Shift + Q"
  },
  {
    question: "How do you open your profile?",
    options: ["Click on your profile icon", "Ctrl + ,", "Ctrl + P", "No shortcut"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the shortcut to show the contact list?",
    options: ["Ctrl + 1", "Alt + 1", "Ctrl + Shift + C", "Ctrl + Alt + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "How do you open the dial pad for Skype-to-phone calls?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Ctrl + Alt + D"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "How do you open Skype Help quickly?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + H"],
    correctAnswer: "F1"
  },
  {
    question: "What shortcut lets you toggle full screen during a video call?",
    options: ["F11", "Alt + Enter", "Ctrl + Enter", "Esc"],
    correctAnswer: "F11"
  },
  {
    question: "How do you switch to a different conversation using the keyboard?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Ctrl + Arrow keys", "Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "What is the shortcut to exit full screen?",
    options: ["Esc", "F11", "Ctrl + F", "Alt + F4"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you start a screen share?",
    options: ["Click screen share button", "No shortcut", "Ctrl + Shift + S", "Alt + S"],
    correctAnswer: "No shortcut"
  },
  {
    question: "What shortcut minimizes the Skype window?",
    options: ["Alt + Space → N", "Ctrl + M", "Windows + Down Arrow", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What key can you press to send a message?",
    options: ["Enter", "Ctrl + Enter", "Shift + Enter", "Both A and B"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you insert a line break while typing a message?",
    options: ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Esc"],
    correctAnswer: "Shift + Enter"
  },
  {
    question: "What is the shortcut to switch between Skype tabs (if multiple are open)?",
    options: ["Ctrl + Tab", "Alt + Tab", "Ctrl + Shift + Tab", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "How do you reopen a closed chat window?",
    options: ["Ctrl + Shift + T", "Ctrl + Shift + N", "Ctrl + N", "Not available"],
    correctAnswer: "Not available"
  },
  {
    question: "What is the shortcut to open the emoji picker in Skype chat?",
    options: ["Click emoji icon", "Type :", "Use built-in OS emoji picker", "No direct Skype shortcut"],
    correctAnswer: "No direct Skype shortcut"
  },
  {
    question: "How do you quickly close Skype?",
    options: ["Alt + F4", "Ctrl + Q", "Right-click tray icon → Quit", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you copy a message in Skype chat?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Alt + C", "Ctrl + Alt + C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you paste a copied item into Skype chat?",
    options: ["Ctrl + V", "Shift + V", "Alt + V", "Ctrl + Alt + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "What shortcut allows you to switch your availability status (Active/Away)?",
    options: ["No direct shortcut", "Ctrl + Shift + A", "Ctrl + A", "Alt + A"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you open Skype via Run dialog?",
    options: ["Press Win + R, then type skype", "Type skype.exe", "Use taskbar icon", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you select all text in the Skype chat box?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "Alt + A", "Ctrl + Alt + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you bold text in a Skype message?",
    options: ["Enclose text with * (e.g., *bold*)", "Ctrl + B", "Shift + B", "Use emoji"],
    correctAnswer: "Enclose text with * (e.g., *bold*)"
  },
  {
    question: "How do you italicize text in Skype chat?",
    options: ["Enclose text with _ (e.g., _italic_)", "Ctrl + I", "Shift + I", "Use format bar"],
    correctAnswer: "Enclose text with _ (e.g., _italic_)"
  },
  {
    question: "How do you strikethrough text in Skype chat?",
    options: ["Enclose text with ~ (e.g., ~strikethrough~)", "Ctrl + T", "Shift + T", "Not supported"],
    correctAnswer: "Enclose text with ~ (e.g., ~strikethrough~)"
  },
  {
    question: "How do you send a file in a chat?",
    options: ["Drag & drop into chat", "Use paperclip icon", "Ctrl + O", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you use Skype's search bar quickly with the keyboard?",
    options: ["Ctrl + F", "Ctrl + E", "Tab to top → Enter", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you switch between open Skype chats using keyboard?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Alt + Tab (system level)", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the shortcut to open Skype for Web in a browser?",
    options: ["No dedicated shortcut", "Open browser → type web.skype.com", "Pin site to taskbar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you quickly scroll to older messages in a chat?",
    options: ["Page Up", "Scroll wheel", "Up Arrow", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you minimize Skype to the system tray?",
    options: ["Click \"X\" if Skype is set to stay in tray", "Alt + F4 (if set)", "Click minimize", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut pastes text without formatting in Skype?",
    options: ["Ctrl + Shift + V", "Ctrl + V", "Alt + V", "Ctrl + Alt + V"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "How do you use emojis in Skype chat?",
    options: ["Click emoji icon", "Type emoji code like :)", "Use system emoji picker", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open Skype from the taskbar?",
    options: ["Click icon", "Win + number (if pinned)", "Right-click → Open", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you see Skype version info?",
    options: ["Help → About", "Ctrl + , → About", "Skype Menu → About", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut opens the system emoji picker (Windows 10/11)?",
    options: ["Win + .", "Win + ;", "Both A and B", "Ctrl + ."],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you check Skype's call quality indicator?",
    options: ["During call → Click call info icon", "No shortcut", "Settings", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you add a new contact in Skype?",
    options: ["Ctrl + N", "Use search → Add contact", "Click \"New Chat\" → New Contact", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does pressing Esc do during a chat or call?",
    options: ["Ends call or closes dialog", "Nothing", "Sends message", "Mutes mic"],
    correctAnswer: "Ends call or closes dialog"
  },
  {
    question: "How do you delete a message you sent (if allowed)?",
    options: ["Right-click → Remove", "Tab → Enter on More Options", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you switch Skype themes (dark/light)?",
    options: ["Settings → Appearance", "Ctrl + , → Appearance", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the shortcut to open Skype on macOS?",
    options: ["Cmd + Space → \"Skype\"", "Click dock icon", "Use Launchpad", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you increase Skype chat font size?",
    options: ["Ctrl + +", "Ctrl + Mouse Scroll Up", "Settings → Appearance", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you decrease Skype chat font size?",
    options: ["Ctrl + –", "Ctrl + Mouse Scroll Down", "Settings → Appearance", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What key lets you access Skype's context menu (via keyboard)?",
    options: ["Shift + F10", "Menu key (if present)", "Right-click equivalent", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you start a group chat in Skype?",
    options: ["New Chat → New Group", "Ctrl + N", "No keyboard-only shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you blur your background before a video call?",
    options: ["Settings → Audio & Video", "During call → Blur option", "No keyboard shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you enable subtitles during calls?",
    options: ["Settings → Calling → Call subtitles", "During call → Turn on subtitles", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you block a contact in Skype?",
    options: ["Right-click → Block", "Contact → Block", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you delete a chat?",
    options: ["Right-click → Delete Conversation", "Use More Options menu", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you check Skype notifications from taskbar?",
    options: ["Hover over Skype icon", "Click tray icon", "Use Action Center", "All of the above"],
    correctAnswer: "All of the above"
  }
    ],
    medium: [
      {
    question: "How do you quickly switch from a voice call to a video call?",
    options: ["Click video icon during call", "Ctrl + Shift + K", "Ctrl + Shift + V", "No shortcut"],
    correctAnswer: "Click video icon during call"
  },
  {
    question: "What shortcut opens the Skype test call service?",
    options: ["Search for \"Echo / Sound Test Service\"", "Ctrl + Shift + T", "Ctrl + T", "Alt + T"],
    correctAnswer: "Search for \"Echo / Sound Test Service\""
  },
  {
    question: "How do you toggle speaker output during a call?",
    options: ["Click audio device dropdown", "Settings → Audio", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut jumps between unread conversations?",
    options: ["Tab", "Ctrl + Tab", "No direct shortcut", "Alt + Tab"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "What's the shortcut to open Skype's message formatting guide?",
    options: ["No dedicated shortcut", "Use Help → Formatting", "Ctrl + /", "Alt + F1"],
    correctAnswer: "No dedicated shortcut"
  },
  {
    question: "How do you enable background effects during video calls?",
    options: ["Settings → Audio & Video", "During call → More → Choose background", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you view your Skype call history quickly?",
    options: ["Click \"Calls\" tab", "Ctrl + 2", "No direct shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you hide a conversation from the main chat list?",
    options: ["Right-click → Hide conversation", "Delete chat", "Archive", "None of the above"],
    correctAnswer: "Right-click → Hide conversation"
  },
  {
    question: "How do you star or pin a conversation to the top?",
    options: ["Right-click → Pin", "Drag chat to top", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you mark a conversation as unread?",
    options: ["Right-click → Mark as Unread", "No shortcut", "Menu → Mark Unread", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What happens if you press Ctrl + Shift + M during a call?",
    options: ["Mutes or unmutes your mic", "Opens microphone settings", "Minimizes call", "None"],
    correctAnswer: "Mutes or unmutes your mic"
  },
  {
    question: "Which shortcut opens the Skype Audio & Video settings?",
    options: ["Ctrl + , then navigate", "Click Settings → Audio & Video", "No direct shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you change Skype notification sounds?",
    options: ["Settings → Notifications → Sound", "No shortcut", "Use Windows sound settings", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you use Skype translator (real-time translation)?",
    options: ["Enable it in conversation settings", "Ctrl + T", "Ctrl + Shift + T", "Not a keyboard shortcut"],
    correctAnswer: "Enable it in conversation settings"
  },
  {
    question: "How do you clear recent search history in Skype?",
    options: ["Settings → Privacy", "Ctrl + H", "No shortcut", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "How do you view someone's Skype profile during chat?",
    options: ["Click their name in chat", "Right-click → View Profile", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you adjust individual contact notifications?",
    options: ["Right-click chat → Notification Settings", "Chat header → Bell icon", "No keyboard shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you view sent file history in Skype?",
    options: ["Open chat → View media & files", "No direct shortcut", "Use \"...\" menu in chat", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you copy only the selected portion of a message?",
    options: ["Highlight → Ctrl + C", "Right-click → Copy Selection", "Both A and B", "None"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you record a Skype call (if available)?",
    options: ["Click + More options → Start recording", "Ctrl + R", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is a quick way to toggle dark mode?",
    options: ["Ctrl + , → Appearance", "Settings → Appearance", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut moves between tabs in Skype Web?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Both", "None"],
    correctAnswer: "Both"
  },
  {
    question: "How do you open Skype from Command Prompt?",
    options: ["Type start skype", "skype.exe", "Both A and B", "Only from GUI"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut lets you manually set \"Do Not Disturb\"?",
    options: ["No direct shortcut", "Click profile → Status", "Alt + D", "Settings shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you turn off Skype auto-start on login?",
    options: ["Settings → General", "Ctrl + , → General", "Disable via Task Manager", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What keyboard shortcut navigates to the previous chat (if using tab view)?",
    options: ["Ctrl + Shift + Tab", "Alt + Shift + Left", "Ctrl + ←", "Tab"],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "How do you forward a message in Skype?",
    options: ["Right-click → Forward", "Hover → More options", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you check which devices are signed into Skype?",
    options: ["Settings → Account", "No shortcut", "Account page on browser", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you pause and resume screen sharing during a call?",
    options: ["Use on-screen controls", "No keyboard shortcut", "Click \"Stop sharing\"", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open a Skype group's media gallery?",
    options: ["Chat header → Media", "Ctrl + Shift + M", "No shortcut", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you switch between open Skype windows (if using multiple)?",
    options: ["Alt + Tab", "Ctrl + Tab", "Win + Tab", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you open the Skype Feedback menu?",
    options: ["Help → Send Feedback", "No shortcut", "Alt + H", "Ctrl + F"],
    correctAnswer: "Help → Send Feedback"
  },
  {
    question: "How do you adjust the ring volume for calls?",
    options: ["Settings → Audio", "Use system volume", "No keyboard shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you reply to a message inline using keyboard?",
    options: ["Tab → Select message → Enter → Reply", "Right-click → Reply", "No shortcut", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you schedule a Skype call with someone?",
    options: ["Use Outlook integration", "Copy Skype link", "No built-in scheduler", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you report spam in Skype?",
    options: ["Right-click user → Report", "Block → Report", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you enable read receipts in Skype?",
    options: ["Settings → Messaging", "Ctrl + , → Messaging", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you quote a specific message in chat?",
    options: ["Right-click → Quote", "Long press (mobile)", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you mute a chat without blocking it?",
    options: ["Right-click chat → Mute", "Chat settings → Notifications", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you quickly add someone to an ongoing call?",
    options: ["Click \"+\" → Add people", "Ctrl + Shift + A", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you check Skype storage usage?",
    options: ["Settings → Messaging", "Skype does not show this directly", "Use system-level app data", "B and C"],
    correctAnswer: "B and C"
  },
  {
    question: "How do you disable Skype integration with Windows notifications?",
    options: ["Windows Settings → Notifications", "Skype Settings → Notifications", "Both A and B", "No option"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the emoji panel in Skype chat?",
    options: ["Win + . (system emoji picker)", "Ctrl + E", "Click smiley icon", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you toggle the Skype meeting link view in group chats?",
    options: ["Click group name → Share link", "No shortcut", "Copy invite", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you remove someone from a Skype group?",
    options: ["Right-click user → Remove", "Group settings → Manage group", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you clear conversation history for one chat?",
    options: ["Settings → Messaging → Clear history", "Delete chat", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you export Skype chat history?",
    options: ["Use export feature from account page in browser", "No in-app shortcut", "Use Microsoft Privacy Dashboard", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does Ctrl + P do in Skype?",
    options: ["Opens Print dialog (not applicable)", "Nothing", "No action by default", "Both B and C"],
    correctAnswer: "Both B and C"
  },
  {
    question: "How do you preview a file before sending it in Skype chat?",
    options: ["Drag file → Preview appears", "Use file upload button", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you pause notifications during a presentation?",
    options: ["Enable Do Not Disturb", "Use Windows Focus Assist", "No in-app toggle", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you change your Skype display name?",
    options: ["Profile → Edit Name", "No keyboard shortcut", "Settings → Account", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you unlink a Microsoft account from Skype?",
    options: ["Via Microsoft account settings (browser)", "No in-app method", "Sign out", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you use Skype on multiple devices simultaneously?",
    options: ["Sign in on each", "No shortcut", "Cross-device sync is automatic", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What happens if you long-hold a message in Skype desktop?",
    options: ["Opens options like Edit, Forward", "Opens emoji reactions", "Same as right-click", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you know if someone has read your message?",
    options: ["Look for read receipt (✓✓)", "Read receipts must be enabled", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you use keyboard to jump to a group's media section?",
    options: ["Tab to header → Enter on Media", "No dedicated shortcut", "Only via mouse", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you start a Skype call from a pinned conversation?",
    options: ["Click call icon", "Right-click → Call", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you access the Skype help center?",
    options: ["Help → Help & Feedback", "Web: support.skype.com", "No shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you identify a bot in Skype?",
    options: ["Label under contact name", "Usually has Bot tag", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you leave a Skype group?",
    options: ["Right-click group → Leave", "Chat settings → Leave group", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  }
    ],
    hard: [
     {
    question: "How do you launch Skype in compact view from the command line?",
    options: ["skype.exe -compact", "start skype -minimized", "skype.exe --secondary", "No such option"],
    correctAnswer: "skype.exe -compact"
  },
  {
    question: "What Skype shortcut lets you mute all audio (including call and media)?",
    options: ["No built-in shortcut", "Ctrl + Shift + M", "Use system mute", "Alt + M"],
    correctAnswer: "No built-in shortcut"
  },
  {
    question: "Which key combo starts Skype in secondary instance mode?",
    options: ["skype.exe /secondary", "Alt + S", "Shift + Alt + Launch", "No such option"],
    correctAnswer: "skype.exe /secondary"
  },
  {
    question: "How do you open Skype's logging console?",
    options: ["Ctrl + Alt + Shift + D", "Alt + L", "Developer tools only", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + Alt + Shift + D"
  },
  {
    question: "How can you copy the Skype username of a contact quickly?",
    options: ["Right-click → View Profile → Copy Skype Name", "Ctrl + Alt + C", "Ctrl + U", "No shortcut"],
    correctAnswer: "Right-click → View Profile → Copy Skype Name"
  },
  {
    question: "Which Skype version supports URI launching with skype:[username]?call?",
    options: ["Skype for Desktop", "Skype Classic", "Skype Web", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does the Ctrl + Shift + L shortcut do in legacy Skype?",
    options: ["Opens chat list", "Enables logging", "Opens language settings", "No function in modern version"],
    correctAnswer: "No function in modern version"
  },
  {
    question: "How do you manually clear Skype local cache without uninstalling?",
    options: ["%appdata%\\Skype", "Delete contents manually", "No in-app shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which hidden keyboard command resizes Skype's UI elements?",
    options: ["Ctrl + +/- (Zoom in/out text)", "Ctrl + Shift + R", "No official shortcut", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Which Skype file stores local account settings and conversations?",
    options: ["main.db", "config.xml", "shared.xml", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you disable hardware acceleration via shortcut?",
    options: ["Ctrl + , → Advanced → Toggle", "No shortcut", "Use system settings", "A and C"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Which file should be deleted to reset Skype settings without affecting contacts?",
    options: ["shared.xml", "main.db", "skype.ini", "config.db"],
    correctAnswer: "shared.xml"
  },
  {
    question: "How do you use Skype command-line to call someone directly?",
    options: ["skype:[username]?call", "callto:[username]", "tel:[username]", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "Which combination was used to send system-wide messages in Skype for Business?",
    options: ["Ctrl + Shift + M", "Ctrl + Shift + S", "Right-click contact group → Send IM", "Ctrl + G"],
    correctAnswer: "Right-click contact group → Send IM"
  },
  {
    question: "Which system service does Skype rely on for audio routing in Windows?",
    options: ["Windows Audio", "AudioSrv", "SkypeAudioHelper", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "What hidden file stores Skype crash logs?",
    options: ["logs.txt", "SkypeCrash.log", "%appdata%\\Skype\\logs", "All of the above"],
    correctAnswer: "%appdata%\\Skype\\logs"
  },
  {
    question: "What happens if you press F10 in Skype for Web?",
    options: ["Opens browser menu", "Focus on toolbar", "Nothing", "Developer tools"],
    correctAnswer: "Opens browser menu"
  },
  {
    question: "How do you generate a Skype diagnostics log?",
    options: ["Ctrl + Alt + Shift + D", "Help → Enable logging", "Both", "Only support team"],
    correctAnswer: "Both"
  },
  {
    question: "What protocol does Skype use for P2P calling in legacy versions?",
    options: ["Proprietary", "SIP", "UDP", "XMPP"],
    correctAnswer: "Proprietary"
  },
  {
    question: "Which version of Skype allowed plugins via API?",
    options: ["Skype Classic", "Skype UWP", "Skype Web", "None"],
    correctAnswer: "Skype Classic"
  },
  {
    question: "How can you invoke Skype's URI handler from a browser?",
    options: ["skype:echo123?call", "skype:[username]?chat", "skype:[groupid]?add", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What's the purpose of shared.lck file in Skype data directory?",
    options: ["Prevents multi-access", "Cache lock", "No real use", "Skype backup marker"],
    correctAnswer: "Prevents multi-access"
  },
  {
    question: "How do you recover accidentally deleted Skype chat history (locally)?",
    options: ["Restore main.db", "Use SQLite editor", "No guaranteed method", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does the Skype for Business shortcut Ctrl + Shift + P do?",
    options: ["Pop out a conversation", "Mark as Priority", "Start presentation", "Mute presentation"],
    correctAnswer: "Pop out a conversation"
  },
  {
    question: "What's the max file size that Skype supports for direct sharing?",
    options: ["300 MB", "1 GB", "100 MB", "2 GB"],
    correctAnswer: "1 GB"
  },
  {
    question: "Which database holds messages in legacy desktop Skype?",
    options: ["main.db", "messages.db", "history.db", "chat.db"],
    correctAnswer: "main.db"
  },
  {
    question: "How do you manually extract messages from main.db?",
    options: ["Use SQLite Browser", "Open in Notepad", "Export via script", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "What's the shortcut to open full screen call view?",
    options: ["F11", "Alt + Enter", "Ctrl + Shift + F", "No consistent shortcut"],
    correctAnswer: "No consistent shortcut"
  },
  {
    question: "Which Skype version supports background blur natively?",
    options: ["Skype for Desktop (v8+)", "Skype UWP", "Skype for Web", "All of the above"],
    correctAnswer: "Skype for Desktop (v8+)"
  },
  {
    question: "What command line disables Skype's automatic startup?",
    options: ["skype.exe /nosetup", "msconfig", "Task Manager → Startup", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you bypass Skype's auto-update on launch?",
    options: ["Block SkypeUpdate.exe", "Use firewall rules", "Rename update executable", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you capture Skype video calls externally?",
    options: ["Use OBS or screen recorder", "Skype doesn't support external output", "Windows Game Bar", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "Which file logs Skype's auto-login activity?",
    options: ["main.db", "shared.xml", "%appdata%\\Skype\\logs", "None"],
    correctAnswer: "%appdata%\\Skype\\logs"
  },
  {
    question: "What shortcut launches Skype in debug mode?",
    options: ["skype.exe /debug", "Ctrl + Shift + D", "No documented shortcut", "Alt + Shift + D"],
    correctAnswer: "No documented shortcut"
  },
  {
    question: "What is the Skype shortcut for changing language settings (legacy)?",
    options: ["Alt + T → L", "Ctrl + Shift + L", "Ctrl + ,", "No shortcut"],
    correctAnswer: "Alt + T → L"
  },
  {
    question: "Which Skype version deprecated API access for bots and third-party tools?",
    options: ["Skype 7 (Classic)", "Skype 8+", "Skype for Web", "Skype Lite"],
    correctAnswer: "Skype 8+"
  },
  {
    question: "How do you extract contacts list manually from Skype local files?",
    options: ["Export from main.db using SQLite", "No official tool", "Through Privacy Dashboard", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "What does Alt + V do in legacy Skype for Business?",
    options: ["Start video call", "View menu", "Start voice message", "No action"],
    correctAnswer: "Start video call"
  },
  {
    question: "Which file governs Skype's update settings?",
    options: ["config.xml", "Registry key", "shared.xml", "Both B and C"],
    correctAnswer: "Both B and C"
  },
  {
    question: "How do you limit Skype's network usage on Windows?",
    options: ["Set via Task Manager → App bandwidth", "Group Policy Editor", "No built-in control", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you block Skype from using a webcam on system level?",
    options: ["Device Manager", "Privacy settings", "Group Policy", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is config.xml used for in Skype's data folder?",
    options: ["Store user preferences", "UI layout data", "Account credentials", "Update policy"],
    correctAnswer: "Store user preferences"
  },
  {
    question: "Which method allows command-line Skype URI triggering in browsers?",
    options: ["<a href=\"skype:username?call\">Call</a>", "Skype Web SDK", "Protocol handler registration", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How can Skype usage analytics be disabled?",
    options: ["Settings → Privacy → Diagnostics", "Via registry", "Block telemetry domains", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does Skype's media-stack process handle?",
    options: ["Audio/video streaming", "File transfers", "Logging", "UI rendering"],
    correctAnswer: "Audio/video streaming"
  },
  {
    question: "How do you invoke Skype webhooks for integrations?",
    options: ["Skype Developer API", "Not available in modern version", "Used in Skype Bots only", "B and C"],
    correctAnswer: "B and C"
  },
  {
    question: "What port range is typically used by Skype for audio/video?",
    options: ["10000–20000 UDP", "50000–60000 TCP", "443", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you test Skype network performance for calls?",
    options: ["Call echo123", "Use built-in call quality test", "Settings → Audio & Video → Test", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you disable Skype as the default calling app?",
    options: ["Settings → Apps → Default apps", "Skype settings", "Registry editor", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How do you enable end-to-end encryption in Skype?",
    options: ["Start a Private Conversation", "Use lock icon", "Settings → Privacy", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How do you isolate Skype traffic on a network?",
    options: ["Monitor via port filtering", "Use QoS settings", "Check Skype IP ranges", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which shortcut opens Skype in Incognito (Private Conversation) mode?",
    options: ["No direct shortcut", "Ctrl + Shift + N", "Right-click → New Private Chat", "A and C"],
    correctAnswer: "A and C"
  },
  {
    question: "How can Skype logs be sent to Microsoft for troubleshooting?",
    options: ["Help → Report a Problem", "Upload via diagnostics tool", "Both", "Not possible"],
    correctAnswer: "Both"
  },
  {
    question: "What protocol does Skype use for encrypted messaging?",
    options: ["TLS", "MTProto", "AES with P2P layer", "SRTP"],
    correctAnswer: "AES with P2P layer"
  },
  {
    question: "Which database field in main.db stores timestamps?",
    options: ["timestamp", "chatdate", "time_sent", "msg_time"],
    correctAnswer: "timestamp"
  },
  {
    question: "How do you change Skype's startup behavior on Mac?",
    options: ["System Preferences → Users → Login Items", "Skype Preferences", "Terminal command", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "How can Skype for Business be logged silently?",
    options: ["Enable logging via registry", "Group Policy", "Config file edit", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What's the use of DbRecovery tool for Skype?",
    options: ["Restore deleted messages", "Fix corrupted main.db", "Rebuild index", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What's the maximum participants Skype supports in a single video call?",
    options: ["25", "50", "100", "99"],
    correctAnswer: "100"
  },
  {
    question: "How can Skype messages be backed up automatically?",
    options: ["Copy main.db periodically", "Use third-party tools", "Use Microsoft account backup", "All of the above"],
    correctAnswer: "All of the above"
  }
    ]
  },


  "Zoom": {
    easy: [
      {
    question: "How do you start or stop video during a Zoom meeting?",
    options: ["Alt + V", "Ctrl + V", "Shift + V", "Alt + Shift + V"],
    correctAnswer: "Alt + V"
  },
  {
    question: "How do you mute or unmute your audio in Zoom?",
    options: ["Alt + A", "Ctrl + A", "Shift + A", "Alt + Shift + A"],
    correctAnswer: "Alt + A"
  },
  {
    question: "How do you start or stop screen sharing in Zoom?",
    options: ["Alt + S", "Ctrl + S", "Shift + S", "Alt + Shift + S"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How do you open the chat panel in Zoom?",
    options: ["Alt + H", "Ctrl + H", "Alt + C", "Shift + H"],
    correctAnswer: "Alt + H"
  },
  {
    question: "How do you raise or lower your hand in Zoom?",
    options: ["Alt + Y", "Ctrl + Y", "Shift + Y", "Alt + Shift + Y"],
    correctAnswer: "Alt + Y"
  },
  {
    question: "How do you open the participants panel?",
    options: ["Alt + U", "Ctrl + U", "Shift + U", "Alt + Shift + U"],
    correctAnswer: "Alt + U"
  },
  {
    question: "How do you open the invite window during a meeting?",
    options: ["Alt + I", "Ctrl + I", "Shift + I", "Alt + Shift + I"],
    correctAnswer: "Alt + I"
  },
  {
    question: "How do you end or leave the meeting?",
    options: ["Alt + Q", "Ctrl + Q", "Shift + Q", "Alt + Shift + Q"],
    correctAnswer: "Alt + Q"
  },
  {
    question: "How do you toggle full screen in Zoom?",
    options: ["Alt + F", "F11", "Ctrl + F", "Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you switch camera if you have multiple?",
    options: ["Alt + N", "Ctrl + N", "Shift + N", "Alt + Shift + N"],
    correctAnswer: "Alt + N"
  },
  {
    question: "How do you toggle audio on/off in Zoom (mobile)?",
    options: ["Tap the microphone icon", "Ctrl + A", "Shift + A", "Not possible"],
    correctAnswer: "Tap the microphone icon"
  },
  {
    question: "How do you join a Zoom meeting?",
    options: ["Ctrl + J", "Alt + J", "Shift + J", "Ctrl + Shift + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "How do you schedule a meeting from the home screen?",
    options: ["Ctrl + D", "Alt + D", "Ctrl + Shift + D", "Click Schedule"],
    correctAnswer: "Click Schedule"
  },
  {
    question: "How do you open the Zoom settings panel?",
    options: ["Ctrl + ,", "Alt + ,", "Ctrl + Shift + S", "Alt + Shift + S"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you toggle screen sharing options?",
    options: ["Alt + S", "Alt + Shift + S", "Alt + T", "Alt + F"],
    correctAnswer: "Alt + T"
  },
  {
    question: "How do you switch between gallery and speaker view?",
    options: ["Alt + F1", "Ctrl + F1", "Alt + F2", "Ctrl + F2"],
    correctAnswer: "Alt + F1"
  },
  {
    question: "How do you pause or resume screen share?",
    options: ["Alt + T", "Alt + P", "Ctrl + T", "Ctrl + P"],
    correctAnswer: "Alt + T"
  },
  {
    question: "How do you record the meeting (if host)?",
    options: ["Alt + R", "Ctrl + R", "Shift + R", "Alt + Shift + R"],
    correctAnswer: "Alt + R"
  },
  {
    question: "How do you pause/resume local recording?",
    options: ["Alt + P", "Ctrl + P", "Shift + P", "Alt + Shift + P"],
    correctAnswer: "Alt + P"
  },
  {
    question: "How do you toggle background blur (if available)?",
    options: ["Video Settings > Backgrounds & Effects", "Alt + B", "Ctrl + B", "Shift + B"],
    correctAnswer: "Video Settings > Backgrounds & Effects"
  },
  {
    question: "How do you view previous meetings history?",
    options: ["Meetings tab", "Ctrl + H", "Alt + M", "Settings"],
    correctAnswer: "Meetings tab"
  },
  {
    question: "How do you copy the invitation link?",
    options: ["Alt + I → Copy Invite Link", "Ctrl + C", "Alt + L", "Shift + C"],
    correctAnswer: "Alt + I → Copy Invite Link"
  },
  {
    question: "How do you open reactions menu?",
    options: ["Alt + R", "Alt + Shift + R", "Alt + Shift + Y", "Not available"],
    correctAnswer: "Not available"
  },
  {
    question: "How do you close the current Zoom window?",
    options: ["Alt + F4", "Ctrl + Q", "Shift + W", "Alt + W"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "How do you take a screenshot of the Zoom window?",
    options: ["PrtSc or Snipping Tool", "Alt + S", "Ctrl + Shift + S", "Not possible"],
    correctAnswer: "PrtSc or Snipping Tool"
  },
  {
    question: "How do you lock meeting as host?",
    options: ["Security > Lock Meeting", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "Security > Lock Meeting"
  },
  {
    question: "How do you open whiteboard (Zoom Whiteboard)?",
    options: ["Click Whiteboard icon", "Ctrl + W", "Alt + W", "Shift + W"],
    correctAnswer: "Click Whiteboard icon"
  },
  {
    question: "How do you react with a thumbs up?",
    options: ["Click Reactions > 👍", "Alt + T", "Ctrl + T", "Shift + T"],
    correctAnswer: "Click Reactions > 👍"
  },
  {
    question: "How do you open Zoom on Windows?",
    options: ["Click Zoom app icon", "Win + Zoom", "Alt + Z", "Ctrl + Alt + Z"],
    correctAnswer: "Click Zoom app icon"
  },
  {
    question: "How do you close chat window in Zoom?",
    options: ["Alt + H", "Ctrl + H", "Shift + H", "Esc"],
    correctAnswer: "Alt + H"
  },
  {
    question: "How do you join Zoom audio by computer?",
    options: ["Alt + A", "Alt + Shift + A", "Click \"Join with Computer Audio\"", "Ctrl + A"],
    correctAnswer: "Click \"Join with Computer Audio\""
  },
  {
    question: "How do you toggle annotation tools while sharing screen?",
    options: ["Alt + Shift + T", "Ctrl + A", "Move mouse to top > Annotate", "Ctrl + Shift + A"],
    correctAnswer: "Move mouse to top > Annotate"
  },
  {
    question: "How do you open reactions during meeting?",
    options: ["Click on \"Reactions\" in the toolbar", "Alt + R", "Ctrl + R", "Shift + R"],
    correctAnswer: "Click on \"Reactions\" in the toolbar"
  },
  {
    question: "What's the shortcut to open settings in Zoom?",
    options: ["Ctrl + ,", "Ctrl + Alt + S", "Alt + ,", "Shift + ,"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "How do you toggle the meeting control toolbar?",
    options: ["Alt", "Esc", "Tab", "Shift"],
    correctAnswer: "Alt"
  },
  {
    question: "How do you minimize the Zoom meeting window?",
    options: ["Windows + Down Arrow", "Alt + Down", "Ctrl + M", "Shift + M"],
    correctAnswer: "Windows + Down Arrow"
  },
  {
    question: "How do you zoom into shared content?",
    options: ["Ctrl + +", "Alt + +", "Shift + Z", "Ctrl + Z"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "How do you zoom out of shared content?",
    options: ["Ctrl + -", "Alt + -", "Shift + Z", "Ctrl + Shift + Z"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "How do you open closed captions (if enabled)?",
    options: ["Alt + C", "Ctrl + C", "Alt + Shift + C", "Not available"],
    correctAnswer: "Alt + C"
  },
  {
    question: "How do you give remote control to someone while screen sharing?",
    options: ["Screen Share toolbar → Remote Control", "Alt + Shift + R", "Ctrl + R", "Alt + R"],
    correctAnswer: "Screen Share toolbar → Remote Control"
  },
  {
    question: "How do you stop remote control access?",
    options: ["Give up control", "Alt + Q", "Ctrl + R", "Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you hide your own video?",
    options: ["Right-click your video > Hide Self View", "Alt + H", "Alt + V", "Ctrl + H"],
    correctAnswer: "Right-click your video > Hide Self View"
  },
  {
    question: "How do you re-enable your video after hiding it?",
    options: ["Click \"Start Video\"", "Alt + V", "Ctrl + V", "Shift + V"],
    correctAnswer: "Click \"Start Video\""
  },
  {
    question: "How do you toggle \"Always show meeting controls\"?",
    options: ["Settings > General", "Alt + S", "Ctrl + Shift + M", "Alt + Ctrl + M"],
    correctAnswer: "Settings > General"
  },
  {
    question: "How do you switch between Zoom tabs (Home, Chat, Meetings, etc.)?",
    options: ["Tab", "Click Tabs", "Ctrl + Tab", "Ctrl + Shift + Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "How do you open Zoom support page?",
    options: ["Click Help > Support", "Alt + S", "Ctrl + H", "F1"],
    correctAnswer: "Click Help > Support"
  },
  {
    question: "How do you view your meeting ID while in meeting?",
    options: ["Click the shield icon on top left", "Alt + M", "Ctrl + I", "View Menu"],
    correctAnswer: "Click the shield icon on top left"
  },
  {
    question: "How do you change audio input device?",
    options: ["Click mic dropdown > Select mic", "Alt + A", "Ctrl + A", "Alt + Shift + A"],
    correctAnswer: "Click mic dropdown > Select mic"
  },
  {
    question: "How do you enable virtual background?",
    options: ["Settings > Backgrounds & Effects", "Ctrl + Shift + B", "Alt + V", "Alt + B"],
    correctAnswer: "Settings > Backgrounds & Effects"
  },
  {
    question: "How do you log out of the Zoom desktop app?",
    options: ["Profile > Sign Out", "Alt + Q", "Ctrl + W", "Esc"],
    correctAnswer: "Profile > Sign Out"
  },
  {
    question: "How do you log into Zoom?",
    options: ["Launch app → Sign In", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "Launch app → Sign In"
  },
  {
    question: "How do you test your speaker and microphone?",
    options: ["Settings > Audio > Test", "Ctrl + T", "Alt + Shift + S", "Alt + A"],
    correctAnswer: "Settings > Audio > Test"
  },
  {
    question: "How do you add a contact on Zoom?",
    options: ["Contacts tab → + Add Contact", "Alt + C", "Ctrl + C", "Shift + A"],
    correctAnswer: "Contacts tab → + Add Contact"
  },
  {
    question: "How do you rename yourself in a meeting?",
    options: ["Participants > More > Rename", "Ctrl + R", "Alt + R", "F2"],
    correctAnswer: "Participants > More > Rename"
  },
  {
    question: "How do you hide non-video participants?",
    options: ["Settings > Video > Hide non-video participants", "Alt + H", "Ctrl + H", "Alt + Shift + V"],
    correctAnswer: "Settings > Video > Hide non-video participants"
  },
  {
    question: "How do you hide names of participants?",
    options: ["Settings > Video > Hide names", "Alt + N", "Ctrl + N", "Alt + H"],
    correctAnswer: "Settings > Video > Hide names"
  },
  {
    question: "How do you disable waiting room?",
    options: ["Meeting Settings > Security", "Ctrl + Shift + W", "Alt + W", "Not possible"],
    correctAnswer: "Meeting Settings > Security"
  },
  {
    question: "How do you enable original sound for music?",
    options: ["Settings > Audio > Original Sound", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "Settings > Audio > Original Sound"
  },
  {
    question: "How do you launch a poll during a meeting (host only)?",
    options: ["Click \"Polls\" in bottom bar", "Ctrl + P", "Alt + Shift + P", "Alt + P"],
    correctAnswer: "Click \"Polls\" in bottom bar"
  },
  {
    question: "How do you access Zoom meeting controls using keyboard only?",
    options: ["Press Alt", "Press Ctrl", "Press Tab", "Press Esc"],
    correctAnswer: "Press Alt"
  }
    ],
    medium: [
     {
    "question": "How do you start/stop screen sharing during a Zoom call?",
    "options": ["Ctrl + Alt + S", "Alt + S", "Shift + S", "Ctrl + Shift + S"],
    "correctAnswer": "Alt + S"
  },
  {
    "question": "How do you mute/unmute audio on Zoom?",
    "options": ["Alt + A", "Ctrl + M", "Shift + A", "Alt + M"],
    "correctAnswer": "Alt + A"
  },
  {
    "question": "What shortcut opens the chat panel in a Zoom meeting?",
    "options": ["Alt + C", "Alt + H", "Ctrl + Shift + C", "Ctrl + Alt + H"],
    "correctAnswer": "Alt + H"
  },
  {
    "question": "How do you invite someone to a Zoom meeting?",
    "options": ["Ctrl + I", "Alt + I", "Shift + I", "Ctrl + Shift + I"],
    "correctAnswer": "Alt + I"
  },
  {
    "question": "What shortcut toggles video on/off in Zoom?",
    "options": ["Alt + V", "Ctrl + V", "Shift + V", "Alt + Shift + V"],
    "correctAnswer": "Alt + V"
  },
  {
    "question": "How do you pause/resume screen sharing?",
    "options": ["Alt + T", "Ctrl + T", "Alt + Shift + T", "Ctrl + Alt + T"],
    "correctAnswer": "Alt + T"
  },
  {
    "question": "What shortcut allows you to switch to Gallery View?",
    "options": ["Alt + F2", "Ctrl + F2", "Alt + F1", "Ctrl + Alt + G"],
    "correctAnswer": "Alt + F2"
  },
  {
    "question": "How do you raise/lower hand in a Zoom meeting?",
    "options": ["Alt + R", "Alt + Y", "Ctrl + Y", "Shift + Y"],
    "correctAnswer": "Alt + Y"
  },
  {
    "question": "What shortcut takes a screenshot of the Zoom meeting window?",
    "options": ["Alt + Shift + S", "Ctrl + Alt + S", "Alt + Shift + T", "Ctrl + Alt + T"],
    "correctAnswer": "Alt + Shift + T"
  },
  {
    "question": "How do you end the Zoom meeting for everyone (as host)?",
    "options": ["Alt + Q", "Ctrl + Q", "Alt + F4", "Ctrl + Shift + Q"],
    "correctAnswer": "Alt + Q"
  },
  {
    "question": "How do you record the Zoom meeting locally?",
    "options": ["Alt + R", "Ctrl + R", "Alt + Shift + R", "Ctrl + Shift + R"],
    "correctAnswer": "Alt + R"
  },
  {
    "question": "How do you toggle the \"Always show meeting controls\" option?",
    "options": ["Alt + M", "Ctrl + Alt + M", "Ctrl + Alt + Shift + M", "Ctrl + Shift + M"],
    "correctAnswer": "Ctrl + Alt + Shift + M"
  },
  {
    "question": "What shortcut switches between Speaker and Gallery View in Zoom?",
    "options": ["Alt + V", "Alt + F1", "Ctrl + 2", "Alt + F2"],
    "correctAnswer": "Alt + F2"
  },
  {
    "question": "How do you start a local recording in Zoom as a participant (if allowed)?",
    "options": ["Alt + Shift + R", "Alt + R", "Ctrl + R", "Shift + R"],
    "correctAnswer": "Alt + R"
  },
  {
    "question": "What is the shortcut to share a portion of your screen?",
    "options": ["Alt + P", "Alt + Shift + P", "Alt + S, then select 'Portion of Screen'", "Ctrl + Shift + P"],
    "correctAnswer": "Alt + S, then select 'Portion of Screen'"
  },
  {
    "question": "How do you start/stopping cloud recording (host only)?",
    "options": ["Alt + C", "Ctrl + C", "Shift + C", "Alt + Shift + R"],
    "correctAnswer": "Alt + C"
  },
  {
    "question": "What is the shortcut to access screen sharing settings during a share?",
    "options": ["Alt + S", "Alt + Shift + S", "Ctrl + Alt + S", "Alt + T"],
    "correctAnswer": "Alt + T"
  },
  {
    "question": "What does Alt + N do in Zoom?",
    "options": ["Start chat", "Switch camera", "Enable notifications", "New chat"],
    "correctAnswer": "Switch camera"
  },
  {
    "question": "What shortcut lets you temporarily unmute yourself while holding it?",
    "options": ["Spacebar", "Alt + A", "Ctrl + A", "Shift + Spacebar"],
    "correctAnswer": "Spacebar"
  },
  {
    "question": "How do you open the Participants panel in Zoom?",
    "options": ["Alt + U", "Alt + P", "Ctrl + U", "Shift + U"],
    "correctAnswer": "Alt + U"
  },
  {
    "question": "How do you open the Zoom settings window?",
    "options": ["Ctrl + ,", "Alt + S", "Ctrl + Alt + S", "Ctrl + Shift + S"],
    "correctAnswer": "Ctrl + ,"
  },
  {
    "question": "How do you focus the meeting controls without using the mouse?",
    "options": ["Ctrl + Alt + Shift", "Ctrl + Alt + Shift + C", "Ctrl + Alt + Shift + H", "Ctrl + Alt + Shift + F"],
    "correctAnswer": "Ctrl + Alt + Shift + H"
  },
  {
    "question": "How do you go to the next tab in Zoom settings?",
    "options": ["Ctrl + →", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    "correctAnswer": "Ctrl + Tab"
  },
  {
    "question": "What shortcut toggles full screen on/off in Zoom?",
    "options": ["Alt + F", "Alt + F11", "Alt + F", "Alt + F"],
    "correctAnswer": "Alt + F"
  },
  {
    "question": "How do you schedule a new meeting in Zoom?",
    "options": ["Ctrl + N", "Alt + Shift + S", "Ctrl + Shift + S", "Ctrl + Alt + S"],
    "correctAnswer": "Ctrl + N"
  },
  {
    "question": "What shortcut stops remote control?",
    "options": ["Alt + Shift + G", "Ctrl + Shift + G", "Ctrl + Alt + G", "Alt + G"],
    "correctAnswer": "Ctrl + Shift + G"
  },
  {
    "question": "What does Alt + F1 do in Zoom?",
    "options": ["Switch to active speaker view", "End meeting", "Toggle video", "Open chat"],
    "correctAnswer": "Switch to active speaker view"
  },
  {
    "question": "What shortcut gives you access to Zoom's reactions menu?",
    "options": ["Alt + R", "Alt + Shift + R", "Alt + Y", "Alt + Shift + T"],
    "correctAnswer": "Alt + Y"
  },
  {
    "question": "How do you open meeting information in Zoom?",
    "options": ["Alt + I", "Ctrl + I", "Alt + Shift + I", "Ctrl + Shift + I"],
    "correctAnswer": "Alt + I"
  },
  {
    "question": "How do you turn on/off original sound in Zoom?",
    "options": ["Alt + Shift + O", "Alt + Shift + S", "Ctrl + Shift + O", "Alt + O"],
    "correctAnswer": "Alt + O"
  },
  {
    "question": "Shortcut to show annotation tools while sharing screen?",
    "options": ["Ctrl + Alt + A", "Alt + T", "Ctrl + Alt + Shift + A", "Alt + Shift + T"],
    "correctAnswer": "Alt + T"
  },
  {
    "question": "Shortcut to pause/resume screen recording?",
    "options": ["Alt + P", "Ctrl + Shift + P", "Ctrl + P", "Alt + Shift + P"],
    "correctAnswer": "Alt + P"
  },
  {
    "question": "Shortcut to start annotation (host)?",
    "options": ["Alt + A", "Ctrl + Alt + Shift + A", "Alt + Shift + A", "Alt + Shift + M"],
    "correctAnswer": "Alt + Shift + A"
  },
  {
    "question": "Shortcut to jump to previous tab in Zoom settings?",
    "options": ["Ctrl + Shift + Tab", "Alt + Shift + Tab", "Ctrl + ←", "Ctrl + Alt + Tab"],
    "correctAnswer": "Ctrl + Shift + Tab"
  },
  {
    "question": "What shortcut disables/enables the camera in Zoom?",
    "options": ["Alt + V", "Ctrl + V", "Alt + Shift + V", "Ctrl + Shift + V"],
    "correctAnswer": "Alt + V"
  },
  {
    "question": "What key combo toggles \"Do not disturb\" mode in Zoom?",
    "options": ["Alt + D", "Ctrl + Shift + D", "Alt + Shift + D", "Ctrl + D"],
    "correctAnswer": "Alt + Shift + D"
  },
  {
    "question": "Shortcut to take remote control during share?",
    "options": ["Ctrl + Shift + R", "Alt + Shift + R", "Ctrl + Alt + R", "Request via Zoom UI"],
    "correctAnswer": "Request via Zoom UI"
  },
  {
    "question": "Shortcut to toggle dual-monitor mode?",
    "options": ["Alt + D", "Ctrl + D", "Alt + Shift + D", "Ctrl + Shift + D"],
    "correctAnswer": "Alt + D"
  },
  {
    "question": "Shortcut to show/hide floating meeting controls when screen sharing?",
    "options": ["Ctrl + Alt + Shift + H", "Alt + H", "Ctrl + Shift + H", "Ctrl + H"],
    "correctAnswer": "Ctrl + Alt + Shift + H"
  },
  {
    "question": "Shortcut to show settings in Zoom desktop client?",
    "options": ["Ctrl + ,", "Ctrl + Alt + ,", "Alt + Shift + ,", "Ctrl + Shift + ,"],
    "correctAnswer": "Ctrl + ,"
  },
  {
    "question": "How do you focus the Zoom client window without using a mouse?",
    "options": ["Ctrl + Alt + Shift + W", "Ctrl + Shift + W", "Ctrl + Alt + W", "Ctrl + W"],
    "correctAnswer": "Ctrl + Alt + Shift + W"
  },
  {
    "question": "What is the shortcut to open the invite window during a meeting?",
    "options": ["Alt + I", "Ctrl + I", "Shift + I", "Ctrl + Shift + I"],
    "correctAnswer": "Alt + I"
  },
  {
    "question": "What shortcut will open the main Zoom window from the system tray?",
    "options": ["Ctrl + Alt + Z", "Double-click tray icon", "Ctrl + Shift + Z", "Alt + Shift + Z"],
    "correctAnswer": "Double-click tray icon"
  },
  {
    "question": "How do you raise or lower your hand in a meeting?",
    "options": ["Alt + Y", "Ctrl + Y", "Shift + Y", "Alt + Shift + Y"],
    "correctAnswer": "Alt + Y"
  },
  {
    "question": "What is the shortcut to switch between Zoom's open windows?",
    "options": ["Ctrl + Tab", "Ctrl + Shift + Tab", "Ctrl + ", "Alt + Tab"],
    "correctAnswer": "Ctrl + "
  },
  {
    "question": "Shortcut to start whiteboard sharing (host only)?",
    "options": ["Alt + S then choose Whiteboard", "Alt + W", "Ctrl + W", "Shift + W"],
    "correctAnswer": "Alt + S then choose Whiteboard"
  },
  {
    "question": "How do you move focus to Zoom controls without the mouse during screen share?",
    "options": ["Ctrl + Alt + Shift + H", "Alt + H", "Ctrl + H", "Alt + Shift + H"],
    "correctAnswer": "Ctrl + Alt + Shift + H"
  },
  {
    "question": "Shortcut to leave meeting (but not end it)?",
    "options": ["Alt + Q", "Ctrl + W", "Alt + L", "Ctrl + Alt + Q"],
    "correctAnswer": "Alt + Q"
  },
  {
    "question": "What shortcut pauses your video without turning it off?",
    "options": ["Zoom does not support pause video", "Alt + Shift + V", "Ctrl + Shift + V", "Ctrl + Pause"],
    "correctAnswer": "Zoom does not support pause video"
  },
  {
    "question": "Shortcut to open statistics window in Zoom?",
    "options": ["Ctrl + Alt + Shift + S", "No default shortcut", "Alt + Shift + S", "Ctrl + Shift + S"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "Shortcut to access Security menu during meeting (host)?",
    "options": ["Alt + Shift + S", "Manually via host controls only", "Ctrl + Alt + S", "Ctrl + Shift + S"],
    "correctAnswer": "Manually via host controls only"
  },
  {
    "question": "Shortcut to enable closed captioning if available?",
    "options": ["Alt + C", "Alt + H", "Manually via Zoom menu", "Ctrl + Shift + C"],
    "correctAnswer": "Manually via Zoom menu"
  },
  {
    "question": "Shortcut to mute all participants (host only)?",
    "options": ["Alt + M", "Alt + Shift + M", "Ctrl + Shift + M", "Ctrl + Alt + M"],
    "correctAnswer": "Alt + M"
  },
  {
    "question": "Shortcut to rename yourself in Zoom meeting?",
    "options": ["Right-click your video and choose Rename", "Alt + R", "Ctrl + R", "Alt + Shift + R"],
    "correctAnswer": "Right-click your video and choose Rename"
  },
  {
    "question": "Shortcut to toggle participant video layout while sharing?",
    "options": ["Alt + Shift + L", "Alt + F2", "Ctrl + L", "No default shortcut"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "What does Alt + T do in Zoom?",
    "options": ["Pause screen share", "Pause meeting", "Switch to next screen during share", "Open transcript"],
    "correctAnswer": "Switch to next screen during share"
  },
  {
    "question": "Shortcut to jump to meeting controls when screen sharing?",
    "options": ["Ctrl + Alt + Shift + H", "Alt + Shift + C", "Ctrl + Alt + M", "Ctrl + Shift + M"],
    "correctAnswer": "Ctrl + Alt + Shift + H"
  },
  {
    "question": "What does Alt + C do during a meeting?",
    "options": ["Start/Stop cloud recording", "Enable captions", "Start chat", "Create contact"],
    "correctAnswer": "Start/Stop cloud recording"
  },
  {
    "question": "What does Alt + F4 do during a meeting?",
    "options": ["Exit Zoom", "Leave meeting", "End meeting", "Close current window"],
    "correctAnswer": "Close current window"
  },
  {
    "question": "What shortcut enables original audio (if configured)?",
    "options": ["Alt + O", "Alt + Shift + O", "Ctrl + O", "No shortcut by default"],
    "correctAnswer": "Alt + O"
  }
    ],
    hard: [
     {
        question: "How do you start local recording in Zoom (if enabled)?",
        options: ["Alt + R", "Ctrl + R", "Shift + R", "Alt + Shift + R"],
        correctAnswer: "Alt + R"
      },
      {
        question: "How do you pause or resume the recording in Zoom?",
        options: ["Alt + P", "Ctrl + P", "Shift + P", "Alt + Shift + P"],
        correctAnswer: "Alt + P"
      },
      {
        question: "How do you switch to the active speaker view in Zoom?",
        options: ["Alt + F1", "Alt + F2", "Alt + F5", "Alt + F10"],
        correctAnswer: "Alt + F1"
      },
      {
        question: "How do you switch to gallery view in Zoom?",
        options: ["Alt + F2", "Ctrl + F2", "Shift + F2", "Alt + G"],
        correctAnswer: "Alt + F2"
      },
      {
        question: "How do you turn on/off closed captioning?",
        options: ["Alt + H", "Alt + C", "Ctrl + Shift + C", "Alt + Shift + C"],
        correctAnswer: "Alt + C"
      },
      {
        question: "How do you enter or exit full screen in Zoom?",
        options: ["Alt + F", "Alt + F11", "Alt + F4", "Alt + Enter"],
        correctAnswer: "Alt + F"
      },
      {
        question: "How do you raise or lower your hand in Zoom?",
        options: ["Alt + Y", "Ctrl + Y", "Alt + H", "Ctrl + Shift + Y"],
        correctAnswer: "Alt + Y"
      },
      {
        question: "How do you toggle the video on/off in Zoom?",
        options: ["Alt + V", "Ctrl + V", "Shift + V", "Alt + Shift + V"],
        correctAnswer: "Alt + V"
      },
      {
        question: "How do you toggle audio mute/unmute in Zoom?",
        options: ["Alt + A", "Ctrl + A", "Alt + Shift + A", "Ctrl + Shift + A"],
        correctAnswer: "Alt + A"
      },
      {
        question: "How do you open the chat panel in Zoom?",
        options: ["Alt + H", "Ctrl + H", "Shift + H", "Alt + Shift + H"],
        correctAnswer: "Alt + H"
      },
      {
        question: "How do you open the invite window during a Zoom meeting?",
        options: ["Alt + I", "Ctrl + I", "Shift + I", "Alt + Shift + I"],
        correctAnswer: "Alt + I"
      },
      {
        question: "How do you open participants window in Zoom?",
        options: ["Alt + U", "Ctrl + U", "Alt + P", "Alt + Shift + U"],
        correctAnswer: "Alt + U"
      },
      {
        question: "How do you start screen share directly?",
        options: ["Alt + S", "Ctrl + S", "Shift + S", "Alt + Shift + S"],
        correctAnswer: "Alt + S"
      },
      {
        question: "How do you stop screen sharing?",
        options: ["Alt + S", "Esc", "Ctrl + W", "Ctrl + Q"],
        correctAnswer: "Alt + S"
      },
      {
        question: "How do you pause/resume screen share?",
        options: ["Alt + T", "Ctrl + T", "Shift + T", "Alt + Shift + T"],
        correctAnswer: "Alt + T"
      },
      {
        question: "How do you open annotation tools while sharing screen?",
        options: ["Ctrl + Alt + Shift + A", "Alt + A", "Ctrl + Alt + Shift + T", "Alt + Shift + T"],
        correctAnswer: "Ctrl + Alt + Shift + A"
      },
      {
        question: "How do you remote control someone else's screen (when given permission)?",
        options: ["Ctrl + Alt + Shift + R", "Alt + Shift + R", "Ctrl + Shift + R", "Alt + R"],
        correctAnswer: "Ctrl + Alt + Shift + R"
      },
      {
        question: "How do you switch between multiple Zoom meetings (if joined)?",
        options: ["Ctrl + Tab", "Ctrl + Alt + Shift", "Alt + Tab", "Ctrl + Shift + Tab"],
        correctAnswer: "Alt + Tab"
      },
      {
        question: "How do you take a screenshot of the Zoom screen?",
        options: ["Alt + Shift + T", "Ctrl + Shift + T", "Alt + Shift + S", "Ctrl + Shift + S"],
        correctAnswer: "Alt + Shift + T"
      },
      {
        question: "How do you toggle floating meeting controls when screen sharing?",
        options: ["Ctrl + Alt + Shift + H", "Ctrl + Alt + H", "Alt + H", "Ctrl + Shift + H"],
        correctAnswer: "Ctrl + Alt + Shift + H"
      },
      {
        question: "How do you quickly join a Zoom meeting using meeting ID?",
        options: ["Ctrl + J", "Alt + J", "Ctrl + Shift + J", "Alt + Shift + J"],
        correctAnswer: "Ctrl + J"
      },
      {
        question: "How do you start a new meeting with video off from Zoom desktop client?",
        options: ["Ctrl + Alt + N", "Ctrl + Alt + V", "Ctrl + Alt + Shift + N", "Ctrl + Alt + Shift + V"],
        correctAnswer: "Ctrl + Alt + Shift + N"
      },
      {
        question: "How do you toggle background blur or virtual background?",
        options: ["Ctrl + Alt + B", "Alt + B", "Ctrl + Shift + B", "Ctrl + Alt + Shift + B"],
        correctAnswer: "Ctrl + Alt + B"
      },
      {
        question: "How do you navigate to Zoom Settings quickly?",
        options: ["Ctrl + , (Comma)", "Ctrl + Alt + S", "Ctrl + Shift + S", "Alt + , (Comma)"],
        correctAnswer: "Ctrl + , (Comma)"
      },
      {
        question: "How do you start share whiteboard directly in a meeting?",
        options: ["Alt + Shift + W", "Alt + W", "Ctrl + Alt + W", "Ctrl + Shift + W"],
        correctAnswer: "Alt + Shift + W"
      },
      {
        question: "How do you toggle camera preview on/off before joining?",
        options: ["Ctrl + Alt + P", "Ctrl + Alt + Shift + P", "Ctrl + Shift + P", "Alt + P"],
        correctAnswer: "Ctrl + Alt + Shift + P"
      },
      {
        question: "How do you minimize the Zoom window during a meeting?",
        options: ["Alt + M", "Windows + Down Arrow", "Ctrl + M", "Alt + Space + N"],
        correctAnswer: "Alt + Space + N"
      },
      {
        question: "How do you end the meeting for all?",
        options: ["Alt + Q", "Ctrl + Q", "Shift + Q", "Alt + End"],
        correctAnswer: "Alt + Q"
      },
      {
        question: "How do you leave a meeting (not end for all)?",
        options: ["Alt + L", "Alt + Q", "Ctrl + Q", "Ctrl + L"],
        correctAnswer: "Alt + Q"
      },
      {
        question: "How do you toggle original sound for musician mode?",
        options: ["Ctrl + Alt + M", "Alt + Shift + O", "Ctrl + Shift + M", "Alt + Shift + M"],
        correctAnswer: "Alt + Shift + O"
      },
      {
        question: "How do you start a scheduled meeting immediately from Zoom desktop app?",
        options: ["Alt + S", "Ctrl + Shift + S", "Ctrl + Alt + S", "Alt + Shift + S"],
        correctAnswer: "Ctrl + Alt + S"
      },
      {
        question: "How do you toggle between active speaker and gallery view during a meeting?",
        options: ["Alt + V", "Ctrl + Shift + W", "Alt + F2", "Ctrl + Shift + F2"],
        correctAnswer: "Alt + F2"
      },
      {
        question: "How do you navigate to the in-meeting chat box?",
        options: ["Alt + H", "Ctrl + H", "Alt + C", "Ctrl + C"],
        correctAnswer: "Alt + H"
      },
      {
        question: "How do you toggle screen share in Zoom when using dual monitors?",
        options: ["Ctrl + Shift + D", "Alt + Shift + D", "Ctrl + Alt + D", "Alt + D"],
        correctAnswer: "Ctrl + Shift + D"
      },
      {
        question: "How do you toggle speaker view in fullscreen mode?",
        options: ["Alt + F", "Alt + V", "Alt + S", "Ctrl + Shift + V"],
        correctAnswer: "Alt + F"
      },
      {
        question: "How do you pin or unpin a video during a Zoom meeting?",
        options: ["Alt + P", "Alt + V", "Ctrl + Shift + P", "Alt + Shift + P"],
        correctAnswer: "Alt + Shift + P"
      },
      {
        question: "How do you pause/resume video recording in a meeting?",
        options: ["Alt + P", "Alt + R", "Alt + Shift + P", "Ctrl + Shift + R"],
        correctAnswer: "Alt + P"
      },
      {
        question: "How do you toggle the active speaker window when screen sharing?",
        options: ["Alt + F10", "Alt + F1", "Ctrl + Shift + F10", "Ctrl + Alt + F10"],
        correctAnswer: "Alt + F10"
      },
      {
        question: "How do you quickly open the Zoom Home tab using keyboard?",
        options: ["Ctrl + 1", "Ctrl + Alt + 1", "Alt + 1", "Shift + 1"],
        correctAnswer: "Ctrl + 1"
      },
      {
        question: "How do you go to the Zoom Chat tab?",
        options: ["Ctrl + 2", "Ctrl + Alt + 2", "Alt + 2", "Ctrl + Shift + 2"],
        correctAnswer: "Ctrl + 2"
      },
      {
        question: "How do you open the Zoom Meetings tab using shortcuts?",
        options: ["Ctrl + 3", "Alt + 3", "Ctrl + Alt + 3", "Shift + 3"],
        correctAnswer: "Ctrl + 3"
      },
      {
        question: "How do you switch between Zoom windows?",
        options: ["Alt + Tab", "Ctrl + Tab", "Ctrl + (Backtick)", "Shift + Tab"],
        correctAnswer: "Ctrl + (Backtick)"
      },
      {
        question: "How do you quickly start a whiteboard session from Zoom app?",
        options: ["Ctrl + N", "Ctrl + Alt + W", "Alt + Shift + W", "Ctrl + Shift + N"],
        correctAnswer: "Alt + Shift + W"
      },
      {
        question: "How do you access the audio settings window directly?",
        options: ["Ctrl + Alt + A", "Alt + A", "Ctrl + , (Comma) → Audio", "Ctrl + Shift + A"],
        correctAnswer: "Ctrl + , (Comma) → Audio"
      },
      {
        question: "How do you toggle the waiting room (host-only)?",
        options: ["Alt + W", "Ctrl + Alt + W", "Alt + Shift + W", "No direct shortcut – must be done via UI"],
        correctAnswer: "No direct shortcut – must be done via UI"
      },
      {
        question: "How do you enable/disable video filters?",
        options: ["Alt + F", "Ctrl + Shift + F", "Ctrl + Alt + Shift + F", "No direct shortcut – must access via video settings"],
        correctAnswer: "No direct shortcut – must access via video settings"
      },
      {
        question: "How do you raise your hand in a meeting (webinar mode)?",
        options: ["Alt + Y", "Ctrl + Y", "Shift + Y", "Ctrl + Shift + H"],
        correctAnswer: "Alt + Y"
      },
      {
        question: "How do you lower your hand after raising it?",
        options: ["Alt + Y again", "Ctrl + L", "Shift + H", "Alt + H"],
        correctAnswer: "Alt + Y again"
      },
      {
        question: "How do you toggle immersive view layout (host-only)?",
        options: ["Ctrl + Alt + I", "No shortcut", "Alt + Shift + I", "Alt + I"],
        correctAnswer: "No shortcut"
      },
      {
        question: "How do you quickly go to the Zoom Schedule tab?",
        options: ["Ctrl + 4", "Ctrl + Alt + S", "Ctrl + Alt + 4", "Ctrl + Shift + 4"],
        correctAnswer: "Ctrl + 4"
      },
      {
        question: "How do you switch camera (if multiple cameras are connected)?",
        options: ["Ctrl + Shift + N", "Alt + N", "Ctrl + N", "Alt + Shift + C"],
        correctAnswer: "Alt + N"
      },
      {
        question: "How do you toggle fullscreen mode in Zoom during a meeting?",
        options: ["Alt + F", "Alt + Enter", "F11", "Ctrl + F"],
        correctAnswer: "Alt + Enter"
      },
      {
        question: "How do you mute/unmute specific participant (host-only)?",
        options: ["Alt + M then select name", "No shortcut", "Ctrl + Alt + M", "Ctrl + M"],
        correctAnswer: "Alt + M then select name"
      },
      {
        question: "How do you navigate to reactions (e.g. claps, thumbs up)?",
        options: ["Alt + R", "Alt + Shift + R", "Ctrl + Alt + R", "Must use mouse – no shortcut"],
        correctAnswer: "Must use mouse – no shortcut"
      },
      {
        question: "How do you toggle focus mode (host-only)?",
        options: ["Alt + F", "Ctrl + Alt + F", "No shortcut – UI only", "Shift + F"],
        correctAnswer: "No shortcut – UI only"
      },
      {
        question: "How do you mute all participants as host?",
        options: ["Alt + M", "Ctrl + M", "Alt + Shift + M", "Ctrl + Shift + M"],
        correctAnswer: "Alt + M"
      },
      {
        question: "How do you enable breakout rooms as host?",
        options: ["Ctrl + Shift + B", "Alt + Shift + B", "No direct shortcut – via UI only", "Ctrl + Alt + B"],
        correctAnswer: "No direct shortcut – via UI only"
      },
      {
        question: "How do you open the breakout room management window as host?",
        options: ["Alt + B", "Ctrl + Alt + B", "No direct shortcut – via Zoom toolbar", "Alt + Shift + B"],
        correctAnswer: "No direct shortcut – via Zoom toolbar"
      },
      {
        question: "How do you open security settings during a meeting as host?",
        options: ["Ctrl + Shift + S", "No shortcut", "Alt + Shift + S", "Alt + S"],
        correctAnswer: "No shortcut"
      },
      {
        question: "How do you open the whiteboard tab in Zoom Home client?",
        options: ["Ctrl + 5", "Ctrl + W", "Ctrl + Alt + W", "Ctrl + Shift + W"],
        correctAnswer: "Ctrl + 5"
      }
    ]
  },



  "Adobe Photoshop": {
    easy: [
      {
    question: "How do you open a new document in Photoshop?",
    options: ["Ctrl + O", "Ctrl + N", "Ctrl + D", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you open an existing file in Photoshop?",
    options: ["Ctrl + O", "Ctrl + N", "Alt + O", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you save your work in Photoshop?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + P", "Ctrl + Alt + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "How do you undo the last action?",
    options: ["Ctrl + Z", "Ctrl + X", "Ctrl + V", "Alt + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "How do you redo the last undone action?",
    options: ["Ctrl + Y", "Ctrl + R", "Ctrl + Shift + Z", "Alt + Y"],
    correctAnswer: "Ctrl + Shift + Z"
  },
  {
    question: "How do you cut a selection?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "How do you copy a selection?",
    options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + D"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you paste a selection?",
    options: ["Ctrl + P", "Ctrl + V", "Ctrl + B", "Alt + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "How do you deselect a selection?",
    options: ["Ctrl + X", "Ctrl + D", "Ctrl + Z", "Ctrl + U"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you select all contents on a layer?",
    options: ["Ctrl + E", "Ctrl + A", "Ctrl + L", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you activate the Move Tool?",
    options: ["M", "V", "T", "S"],
    correctAnswer: "V"
  },
  {
    question: "How do you activate the Brush Tool?",
    options: ["P", "B", "V", "D"],
    correctAnswer: "B"
  },
  {
    question: "How do you activate the Eraser Tool?",
    options: ["E", "R", "K", "X"],
    correctAnswer: "E"
  },
  {
    question: "How do you activate the Text Tool?",
    options: ["T", "F", "X", "L"],
    correctAnswer: "T"
  },
  {
    question: "How do you switch foreground and background colors?",
    options: ["F", "X", "B", "G"],
    correctAnswer: "X"
  },
  {
    question: "How do you reset foreground and background colors to default (black/white)?",
    options: ["D", "R", "Ctrl + D", "Alt + D"],
    correctAnswer: "D"
  },
  {
    question: "How do you zoom in on the canvas?",
    options: ["Ctrl + +", "Ctrl + Z", "Alt + +", "Ctrl + Shift + +"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "How do you zoom out of the canvas?",
    options: ["Ctrl + -", "Ctrl + /", "Alt + -", "Shift + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "How do you fit the canvas to screen?",
    options: ["Ctrl + 0", "Ctrl + Alt + 0", "Ctrl + 9", "Shift + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "How do you activate the Zoom Tool?",
    options: ["Z", "Y", "V", "Ctrl + Z"],
    correctAnswer: "Z"
  },
  {
    question: "How do you use the Hand Tool?",
    options: ["H", "M", "V", "L"],
    correctAnswer: "H"
  },
  {
    question: "How do you fill a selection with foreground color?",
    options: ["Alt + Backspace", "Ctrl + F", "Shift + F5", "Ctrl + Backspace"],
    correctAnswer: "Alt + Backspace"
  },
  {
    question: "How do you fill a selection with background color?",
    options: ["Ctrl + Backspace", "Alt + Delete", "Ctrl + Alt + Delete", "Shift + Backspace"],
    correctAnswer: "Ctrl + Backspace"
  },
  {
    question: "How do you merge selected layers?",
    options: ["Ctrl + E", "Ctrl + M", "Ctrl + Shift + M", "Ctrl + Alt + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you open the preferences dialog?",
    options: ["Ctrl + K", "Ctrl + P", "Ctrl + ,", "Alt + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you switch between open documents?",
    options: ["Ctrl + Tab", "Ctrl + Shift + Tab", "Alt + Tab", "Ctrl + `"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "How do you transform a layer freely?",
    options: ["Ctrl + T", "Ctrl + F", "Ctrl + E", "Ctrl + Alt + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you apply a transformation?",
    options: ["Enter", "Esc", "Space", "Tab"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you cancel a transformation?",
    options: ["Esc", "Ctrl + Z", "Alt + Esc", "Backspace"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you bring up the color picker?",
    options: ["Alt + Click on Foreground", "Double-click Foreground color", "F6", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you activate the Lasso Tool?",
    options: ["L", "M", "C", "Z"],
    correctAnswer: "L"
  },
  {
    question: "How do you activate the Magic Wand Tool?",
    options: ["W", "M", "L", "V"],
    correctAnswer: "W"
  },
  {
    question: "How do you activate the Eyedropper Tool?",
    options: ["I", "E", "D", "G"],
    correctAnswer: "I"
  },
  {
    question: "How do you activate the Gradient Tool?",
    options: ["G", "H", "J", "K"],
    correctAnswer: "G"
  },
  {
    question: "How do you create a new layer?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Shift + N", "Ctrl + Alt + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you duplicate a layer?",
    options: ["Ctrl + J", "Ctrl + D", "Ctrl + Shift + J", "Alt + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "How do you group selected layers?",
    options: ["Ctrl + G", "Ctrl + Alt + G", "Ctrl + Shift + G", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you ungroup layers?",
    options: ["Ctrl + Shift + G", "Ctrl + G again", "Ctrl + U", "Ctrl + Alt + G"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "How do you show/hide rulers?",
    options: ["Ctrl + R", "Ctrl + H", "Ctrl + Shift + R", "Alt + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you toggle visibility of guides?",
    options: ["Ctrl + ;", "Ctrl + '", "Alt + ;", "Shift + ;"],
    correctAnswer: "Ctrl + ;"
  },
  {
    question: "How do you open Levels adjustment?",
    options: ["Ctrl + L", "Ctrl + M", "Ctrl + U", "Ctrl + Alt + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How do you open Curves adjustment?",
    options: ["Ctrl + M", "Ctrl + C", "Ctrl + U", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "How do you open Hue/Saturation adjustment?",
    options: ["Ctrl + U", "Ctrl + H", "Ctrl + Shift + U", "Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you desaturate a layer?",
    options: ["Ctrl + Shift + U", "Ctrl + U", "Alt + U", "Ctrl + Alt + U"],
    correctAnswer: "Ctrl + Shift + U"
  },
  {
    question: "How do you hide all other layers except the one selected?",
    options: ["Alt + click on the eye icon", "Ctrl + Alt + H", "Shift + H", "Ctrl + Shift + H"],
    correctAnswer: "Alt + click on the eye icon"
  },
  {
    question: "How do you access the hand tool temporarily?",
    options: ["Hold Spacebar", "Press H", "Hold H", "Ctrl + H"],
    correctAnswer: "Hold Spacebar"
  },
  {
    question: "How do you toggle fullscreen view?",
    options: ["F", "Ctrl + F", "Alt + F", "Shift + F"],
    correctAnswer: "F"
  },
  {
    question: "How do you hide all panels quickly?",
    options: ["Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you hide all panels except the Tools and Options bar?",
    options: ["Shift + Tab", "Ctrl + Shift + Tab", "Alt + Tab", "Tab"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "How do you open the Layer Style dialog box?",
    options: ["Double-click the layer", "Right-click → Blending Options", "Both A and B", "None of the above"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you add a new guide?",
    options: ["View → New Guide", "Ctrl + ;", "Ctrl + Shift + ;", "No shortcut – must use menu"],
    correctAnswer: "No shortcut – must use menu"
  },
  {
    question: "How do you rasterize a layer?",
    options: ["Right-click → Rasterize Layer", "No default shortcut", "Layer menu → Rasterize", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you convert text layer to shape?",
    options: ["Right-click → Convert to Shape", "No shortcut", "Both A and B", "Ctrl + Shift + C"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you duplicate a shape layer quickly?",
    options: ["Ctrl + J", "Alt + Drag", "Both A and B", "Ctrl + D"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you access the Layers panel?",
    options: ["F7", "F5", "F8", "Ctrl + L"],
    correctAnswer: "F7"
  },
  {
    question: "How do you access the Brush panel?",
    options: ["F5", "F7", "F6", "F4"],
    correctAnswer: "F5"
  },
  {
    question: "How do you rotate the canvas temporarily?",
    options: ["R", "Shift + R", "Hold R", "Ctrl + R"],
    correctAnswer: "R"
  },
  {
    question: "How do you access the Transform options without shortcut?",
    options: ["Edit → Free Transform", "Right-click → Transform", "Edit → Transform", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you switch between screen modes?",
    options: ["F", "Shift + F", "Ctrl + F", "Alt + F"],
    correctAnswer: "F"
  },
  {
    question: "How do you open the Help window?",
    options: ["F1", "Ctrl + F1", "Alt + F1", "Shift + F1"],
    correctAnswer: "F1"
  }
    ],
    medium: [
      {
    question: "How do you copy merged layers into the clipboard?",
    options: ["Ctrl + Shift + C", "Ctrl + Alt + C", "Ctrl + Shift + V", "Ctrl + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you show or hide guides in Photoshop?",
    options: ["Ctrl + ;", "Ctrl + '", "Ctrl + Shift + ;", "Alt + ;"],
    correctAnswer: "Ctrl + ;"
  },
  {
    question: "What is the shortcut to enable the Free Transform tool?",
    options: ["Ctrl + T", "Alt + T", "Ctrl + Shift + T", "Ctrl + F"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you toggle Quick Mask mode on/off?",
    options: ["Q", "M", "Shift + Q", "Ctrl + Q"],
    correctAnswer: "Q"
  },
  {
    question: "Which shortcut duplicates the current layer?",
    options: ["Ctrl + J", "Ctrl + D", "Ctrl + Shift + J", "Ctrl + Alt + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "What shortcut brings up the Fill dialog box?",
    options: ["Shift + F5", "Ctrl + Backspace", "Alt + Backspace", "F5"],
    correctAnswer: "Shift + F5"
  },
  {
    question: "How do you switch to the Move Tool?",
    options: ["V", "M", "Shift + V", "T"],
    correctAnswer: "V"
  },
  {
    question: "What is the shortcut to show/hide rulers?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Ctrl + Alt + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you undo multiple steps in Photoshop?",
    options: ["Ctrl + Alt + Z", "Ctrl + Z", "Ctrl + Shift + Z", "Ctrl + Y"],
    correctAnswer: "Ctrl + Alt + Z"
  },
  {
    question: "Which key temporarily enables the Hand Tool when any other tool is selected?",
    options: ["Spacebar", "H", "Shift", "Alt"],
    correctAnswer: "Spacebar"
  },
  {
    question: "How do you hide or show all other layers except the selected one?",
    options: ["Alt + Click on Eye icon", "Ctrl + H", "Shift + Click on Eye icon", "Ctrl + Alt + H"],
    correctAnswer: "Alt + Click on Eye icon"
  },
  {
    question: "Shortcut for Step Forward in History panel?",
    options: ["Ctrl + Shift + Z", "Ctrl + Y", "Ctrl + Alt + Z", "Shift + Ctrl + Y"],
    correctAnswer: "Ctrl + Shift + Z"
  },
  {
    question: "How do you reset foreground and background colors to black and white?",
    options: ["D", "X", "Shift + D", "Ctrl + D"],
    correctAnswer: "D"
  },
  {
    question: "What is the shortcut for the Clone Stamp Tool?",
    options: ["S", "C", "Q", "Alt + S"],
    correctAnswer: "S"
  },
  {
    question: "Shortcut to temporarily activate the Eyedropper Tool while using Brush Tool?",
    options: ["Alt (Hold)", "Ctrl", "Shift", "I"],
    correctAnswer: "Alt (Hold)"
  },
  {
    question: "Shortcut to group selected layers into a folder?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + E", "Ctrl + Alt + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "Shortcut to merge visible layers?",
    options: ["Ctrl + Shift + E", "Ctrl + E", "Ctrl + Alt + E", "Ctrl + Shift + Alt + E"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "What is the shortcut to bring forward a layer?",
    options: ["Ctrl + ]", "Ctrl + Alt + ]", "Ctrl + Shift + ]", "Alt + ]"],
    correctAnswer: "Ctrl + ]"
  },
  {
    question: "Shortcut to toggle layer mask on/off?",
    options: ["Shift + \\", "Alt + \\", "Ctrl + \\", "\\"],
    correctAnswer: "\\"
  },
  {
    question: "Shortcut to create a new layer?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Shift + Ctrl + L", "Alt + Ctrl + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "Shortcut to bring up the Color Picker dialog box?",
    options: ["Alt + Shift + Right Click", "Alt + Shift + Left Click", "Double-click on Foreground color", "Ctrl + Click on color swatch"],
    correctAnswer: "Double-click on Foreground color"
  },
  {
    question: "Shortcut to flatten an image?",
    options: ["Ctrl + Shift + F", "Ctrl + Alt + Shift + E", "Ctrl + Shift + Alt + F", "Ctrl + Shift + Alt + E"],
    correctAnswer: "Ctrl + Shift + Alt + E"
  },
  {
    question: "Shortcut to view the actual pixels of an image?",
    options: ["Ctrl + 1", "Ctrl + Alt + 0", "Ctrl + Shift + 0", "Ctrl + 0"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "Shortcut to lock transparent pixels?",
    options: ["/ (forward slash)", "\\ (backslash)", ". (period)", "; (semicolon)"],
    correctAnswer: "/ (forward slash)"
  },
  {
    question: "Shortcut for the Lasso Tool?",
    options: ["L", "M", "A", "K"],
    correctAnswer: "L"
  },
  {
    question: "Shortcut for the Gradient Tool?",
    options: ["G", "Shift + G", "Ctrl + G", "Alt + G"],
    correctAnswer: "G"
  },
  {
    question: "Shortcut to deselect a selection?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + Alt + D", "Ctrl + X"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Shortcut to feather a selection?",
    options: ["Shift + F6", "Ctrl + F6", "Alt + F6", "F6"],
    correctAnswer: "Shift + F6"
  },
  {
    question: "Shortcut to toggle between standard and full-screen mode?",
    options: ["F", "Shift + F", "Ctrl + F", "Alt + F"],
    correctAnswer: "F"
  },
  {
    question: "Shortcut to save for web?",
    options: ["Ctrl + Shift + Alt + S", "Ctrl + Alt + S", "Shift + S", "Alt + S"],
    correctAnswer: "Ctrl + Shift + Alt + S"
  },
  {
    question: "How do you cycle through layer blend modes?",
    options: ["Shift + + / -", "Ctrl + + / -", "Alt + + / -", "Ctrl + Alt + M"],
    correctAnswer: "Shift + + / -"
  },
  {
    question: "Shortcut to hide extras (guides, grids, etc.)?",
    options: ["Ctrl + H", "Alt + H", "Ctrl + ;", "Ctrl + '"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "Shortcut to access the Brush Settings panel?",
    options: ["F5", "B", "Ctrl + B", "Shift + B"],
    correctAnswer: "F5"
  },
  {
    question: "What shortcut switches between foreground and background colors?",
    options: ["X", "D", "Shift + X", "Ctrl + X"],
    correctAnswer: "X"
  },
  {
    question: "Shortcut to resize brush hardness and size on the fly (HUD)?",
    options: ["Alt + Right Click + Drag", "Ctrl + Right Click + Drag", "Shift + Right Click", "Alt + Left Click"],
    correctAnswer: "Alt + Right Click + Drag"
  },
  {
    question: "Shortcut to select all layers?",
    options: ["Ctrl + Alt + A", "Ctrl + A", "Shift + Ctrl + A", "Alt + Shift + A"],
    correctAnswer: "Ctrl + Alt + A"
  },
  {
    question: "Shortcut to invert a selection?",
    options: ["Ctrl + Shift + I", "Ctrl + Alt + I", "Ctrl + I", "Shift + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "Shortcut to toggle visibility of a single layer?",
    options: ["Click Eye icon", "Ctrl + H", "Alt + Shift + H", "None"],
    correctAnswer: "Click Eye icon"
  },
  {
    question: "Shortcut to apply the last used filter?",
    options: ["Ctrl + F", "Alt + F", "Ctrl + Shift + F", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to reselect the last selection?",
    options: ["Ctrl + Shift + D", "Ctrl + D", "Shift + Ctrl + R", "Ctrl + Alt + D"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "Shortcut to access the Character panel?",
    options: ["Ctrl + T", "Ctrl + Shift + T", "Ctrl + Alt + T", "Ctrl + T (with Type tool selected)"],
    correctAnswer: "Ctrl + T (with Type tool selected)"
  },
  {
    question: "Shortcut to open the Layer Style dialog?",
    options: ["Double-click on the layer", "Ctrl + L", "Ctrl + Shift + L", "Alt + L"],
    correctAnswer: "Double-click on the layer"
  },
  {
    question: "Shortcut to cut a selection and paste it into a new layer?",
    options: ["Ctrl + Shift + J", "Ctrl + X", "Ctrl + J", "Ctrl + Alt + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "Shortcut to convert a layer into a smart object?",
    options: ["Right-click layer → Convert to Smart Object", "Ctrl + Shift + O", "Ctrl + Alt + S", "Alt + Shift + S"],
    correctAnswer: "Right-click layer → Convert to Smart Object"
  },
  {
    question: "Shortcut to increase brush size?",
    options: ["]", "}", "Shift + ]", "Ctrl + ]"],
    correctAnswer: "]"
  },
  {
    question: "Shortcut to decrease brush size?",
    options: ["[", "{", "Shift + [", "Ctrl + ["],
    correctAnswer: "["
  },
  {
    question: "Shortcut to activate the Zoom Tool?",
    options: ["Z", "Ctrl + Z", "Shift + Z", "Alt + Z"],
    correctAnswer: "Z"
  },
  {
    question: "Shortcut to zoom in quickly?",
    options: ["Ctrl + +", "Ctrl + Shift + +", "Alt + +", "Ctrl + Alt + +"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "Shortcut to zoom out quickly?",
    options: ["Ctrl + -", "Alt + -", "Shift + -", "Ctrl + Alt + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "Shortcut to reset workspace layout?",
    options: ["Window → Workspace → Reset [Workspace Name]", "Ctrl + Shift + R", "F8", "Ctrl + Alt + R"],
    correctAnswer: "Window → Workspace → Reset [Workspace Name]"
  },
  {
    question: "Shortcut to hide panels and tools?",
    options: ["Tab", "Shift + Tab", "Alt + Tab", "Ctrl + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to hide only panels (not tools)?",
    options: ["Shift + Tab", "Ctrl + Tab", "Alt + Tab", "Tab"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "Shortcut to toggle screen modes?",
    options: ["F", "Shift + F", "Ctrl + F", "Alt + F"],
    correctAnswer: "F"
  },
  {
    question: "Shortcut to switch between open documents?",
    options: ["Ctrl + Tab", "Alt + Tab", "Ctrl + `", "Shift + Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "Shortcut to bring up the Save As dialog?",
    options: ["Ctrl + Shift + S", "Ctrl + S", "Alt + S", "Ctrl + Alt + S"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "Shortcut to select the Magic Wand Tool?",
    options: ["W", "M", "Shift + W", "Ctrl + W"],
    correctAnswer: "W"
  },
  {
    question: "Shortcut to select the Crop Tool?",
    options: ["C", "Ctrl + C", "Shift + C", "Alt + C"],
    correctAnswer: "C"
  },
  {
    question: "Shortcut to select the Eraser Tool?",
    options: ["E", "Ctrl + E", "Shift + E", "Alt + E"],
    correctAnswer: "E"
  },
  {
    question: "Shortcut to cycle through Brush, Pencil, and Color Replacement tools?",
    options: ["Shift + B", "Alt + B", "Ctrl + B", "B"],
    correctAnswer: "Shift + B"
  },
  {
    question: "Shortcut to select the Rectangular Marquee Tool?",
    options: ["M", "Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "M"
  }
    ],
    hard: [
      {
    question: "What is the shortcut to open the 'Select and Mask' workspace?",
    options: ["Ctrl + Alt + R", "Ctrl + Shift + R", "Ctrl + R", "Alt + R"],
    correctAnswer: "Ctrl + Alt + R"
  },
  {
    question: "Which shortcut applies the last used filter with the same settings?",
    options: ["Ctrl + F", "Ctrl + Alt + F", "Ctrl + Shift + F", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you toggle the lock transparency option for a layer?",
    options: ["/ (forward slash)", "Ctrl + /", "Alt + /", "Shift + /"],
    correctAnswer: "/ (forward slash)"
  },
  {
    question: "What is the shortcut to open the 'Curves' dialog box?",
    options: ["Ctrl + M", "Ctrl + C", "Ctrl + Shift + M", "Ctrl + Alt + M"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "Which shortcut creates a new layer via cut?",
    options: ["Ctrl + Shift + J", "Ctrl + J", "Ctrl + Alt + J", "Ctrl + Shift + Alt + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "How do you toggle the visibility of the Info panel?",
    options: ["F8", "F9", "F10", "F11"],
    correctAnswer: "F8"
  },
  {
    question: "What is the shortcut to open the 'Color Balance' dialog box?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Alt + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How do you switch between open documents?",
    options: ["Ctrl + Tab", "Alt + Tab", "Ctrl + Shift + Tab", "Ctrl + Alt + Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "Which shortcut opens the 'Levels' dialog box?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Ctrl + Alt + L", "Alt + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How do you toggle the visibility of the Histogram panel?",
    options: ["F9", "F10", "F11", "F12"],
    correctAnswer: "F9"
  },
  {
    question: "What is the shortcut to open the 'Hue/Saturation' dialog box?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + Alt + U", "Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you toggle the visibility of the Actions panel?",
    options: ["F9", "F10", "F11", "F12"],
    correctAnswer: "F10"
  },
  {
    question: "Which shortcut opens the 'Brightness/Contrast' dialog box?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Ctrl + Alt + B", "Alt + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "How do you toggle the visibility of the Brushes panel?",
    options: ["F5", "F6", "F7", "F8"],
    correctAnswer: "F5"
  },
  {
    question: "What is the shortcut to open the 'Invert' adjustment?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + Alt + I", "Alt + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "How do you toggle the visibility of the Color panel?",
    options: ["F6", "F7", "F8", "F9"],
    correctAnswer: "F6"
  },
  {
    question: "Which shortcut opens the 'Desaturate' adjustment?",
    options: ["Ctrl + Shift + U", "Ctrl + U", "Ctrl + Alt + U", "Alt + U"],
    correctAnswer: "Ctrl + Shift + U"
  },
  {
    question: "How do you toggle the visibility of the Layers panel?",
    options: ["F7", "F8", "F9", "F10"],
    correctAnswer: "F7"
  },
  {
    question: "What is the shortcut to open the 'New Layer' dialog box?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Ctrl + Alt + N", "Alt + N"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "How do you toggle the visibility of the Paragraph panel?",
    options: ["Ctrl + Alt + T", "Ctrl + T", "Ctrl + Shift + T", "Ctrl + Alt + Shift + T"],
    correctAnswer: "Ctrl + Alt + T"
  },
  {
    question: "Which shortcut opens the 'New Document' dialog box?",
    options: ["Ctrl + N", "Ctrl + Shift + N", "Ctrl + Alt + N", "Alt + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you toggle the visibility of the Character panel?",
    options: ["Ctrl + T", "Ctrl + Shift + T", "Ctrl + Alt + T", "Ctrl + Alt + Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "What is the shortcut to open the 'Save As' dialog box?",
    options: ["Ctrl + Shift + S", "Ctrl + S", "Ctrl + Alt + S", "Alt + S"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "How do you toggle the visibility of the Navigator panel?",
    options: ["F12", "F11", "F10", "F9"],
    correctAnswer: "F12"
  },
  {
    question: "Which shortcut opens the 'Print' dialog box?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + Alt + P", "Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you toggle the visibility of the Styles panel?",
    options: ["F11", "F10", "F9", "F8"],
    correctAnswer: "F11"
  },
  {
    question: "What is the shortcut to open the 'Preferences' dialog box?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Ctrl + Alt + K", "Alt + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you toggle the visibility of the Paths panel?",
    options: ["Ctrl + Shift + P", "Ctrl + Alt + P", "Ctrl + P", "Alt + P"],
    correctAnswer: "Ctrl + Shift + P"
  },
  {
    question: "Which shortcut opens the 'Color Settings' dialog box?",
    options: ["Ctrl + Shift + K", "Ctrl + Alt + K", "Ctrl + K", "Alt + K"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "How do you toggle the visibility of the Channels panel?",
    options: ["Ctrl + Shift + C", "Ctrl + Alt + C", "Ctrl + C", "Alt + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you select the first brush tool in the flyout menu (Brush, Pencil, Color Replacement, Mixer Brush)?",
    options: ["Shift + B", "Alt + B", "Ctrl + B", "Ctrl + Shift + B"],
    correctAnswer: "Shift + B"
  },
  {
    question: "What shortcut lets you reset the foreground and background colors to black and white?",
    options: ["D", "X", "R", "Shift + D"],
    correctAnswer: "D"
  },
  {
    question: "How do you switch between foreground and background colors?",
    options: ["X", "D", "Ctrl + X", "Alt + X"],
    correctAnswer: "X"
  },
  {
    question: "What is the shortcut to create a new group from layers?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + Alt + G", "Ctrl + Shift + Alt + G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "How do you ungroup layers?",
    options: ["Ctrl + Shift + G", "Ctrl + G", "Alt + G", "Shift + G"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "What shortcut enables Free Transform with Skew/Distort/Warp options?",
    options: ["Ctrl + T, then right-click", "Ctrl + Alt + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "Ctrl + T, then right-click"
  },
  {
    question: "How do you create a clipping mask from a layer?",
    options: ["Ctrl + Alt + G", "Ctrl + Shift + G", "Ctrl + G", "Alt + G"],
    correctAnswer: "Ctrl + Alt + G"
  },
  {
    question: "What shortcut allows you to fade the last filter applied?",
    options: ["Ctrl + Shift + F", "Ctrl + Alt + F", "Alt + F", "Ctrl + F"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "How do you merge all visible layers into a new layer without flattening?",
    options: ["Ctrl + Shift + Alt + E", "Ctrl + E", "Ctrl + Shift + E", "Ctrl + Alt + E"],
    correctAnswer: "Ctrl + Shift + Alt + E"
  },
  {
    question: "What is the shortcut for toggling the quick mask mode?",
    options: ["Q", "Shift + Q", "Ctrl + Q", "Alt + Q"],
    correctAnswer: "Q"
  },
  {
    question: "Which shortcut selects all layers?",
    options: ["Ctrl + Alt + A", "Ctrl + A", "Ctrl + Shift + A", "Alt + A"],
    correctAnswer: "Ctrl + Alt + A"
  },
  {
    question: "How do you nudge a selection 10 pixels at a time?",
    options: ["Shift + Arrow Key", "Ctrl + Arrow Key", "Alt + Arrow Key", "Ctrl + Shift + Arrow Key"],
    correctAnswer: "Shift + Arrow Key"
  },
  {
    question: "What is the shortcut to open the Layer Style dialog box?",
    options: ["Double-click the layer / Alt + Double-click", "Ctrl + Shift + S", "Ctrl + Alt + L", "Ctrl + L"],
    correctAnswer: "Double-click the layer / Alt + Double-click"
  },
  {
    question: "How do you cycle between blending modes?",
    options: ["Shift + + / Shift + -", "Ctrl + + / Ctrl + -", "Alt + + / Alt + -", "B + + / B + -"],
    correctAnswer: "Shift + + / Shift + -"
  },
  {
    question: "Which shortcut fills the selection with foreground color?",
    options: ["Alt + Backspace", "Ctrl + Backspace", "Shift + Delete", "Ctrl + Shift + Backspace"],
    correctAnswer: "Alt + Backspace"
  },
  {
    question: "How do you fill a selection with background color?",
    options: ["Ctrl + Backspace", "Alt + Backspace", "Ctrl + Shift + Backspace", "Shift + Delete"],
    correctAnswer: "Ctrl + Backspace"
  },
  {
    question: "What is the shortcut for the Smudge Tool?",
    options: ["R", "S", "U", "Shift + R"],
    correctAnswer: "Shift + R"
  },
  {
    question: "How do you cycle through gradient, paint bucket, and 3D Material Drop tools?",
    options: ["Shift + G", "G", "Alt + G", "Ctrl + G"],
    correctAnswer: "Shift + G"
  },
  {
    question: "Which shortcut brings the canvas to 100% zoom?",
    options: ["Ctrl + 1", "Ctrl + 0", "Alt + 1", "Ctrl + Alt + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "What shortcut lets you temporarily access the Move Tool?",
    options: ["Hold Ctrl (while using another tool)", "Hold V", "Hold Alt", "Hold M"],
    correctAnswer: "Hold Ctrl (while using another tool)"
  },
  {
    question: "How do you duplicate a layer precisely in the same position in another document?",
    options: ["Ctrl + Shift + Drag to tab", "Alt + Drag", "Ctrl + Drag", "Ctrl + Alt + Drag"],
    correctAnswer: "Ctrl + Shift + Drag to tab"
  },
  {
    question: "How do you activate the Slice tool?",
    options: ["C then Shift + C", "K", "Shift + K", "None"],
    correctAnswer: "C then Shift + C"
  },
  {
    question: "What is the shortcut to jump between guide/edge snapping modes?",
    options: ["Ctrl + Shift + ;", "Ctrl + ;", "Alt + ;", "Shift + ;"],
    correctAnswer: "Ctrl + Shift + ;"
  },
  {
    question: "How do you enable or disable snapping?",
    options: ["Ctrl + Shift + ;", "Ctrl + ;", "Shift + ;", "Alt + ;"],
    correctAnswer: "Ctrl + Shift + ;"
  },
  {
    question: "What is the shortcut to hide guides?",
    options: ["Ctrl + ;", "Ctrl + '", "Ctrl + Shift + ;", "Alt + ;"],
    correctAnswer: "Ctrl + ;"
  },
  {
    question: "How do you open the 'New Guide' dialog box?",
    options: ["Ctrl + R, then View > New Guide", "Alt + Ctrl + G", "No direct shortcut", "Ctrl + ;"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you enter precise numerical transform values?",
    options: ["With Free Transform active, use the top toolbar", "Ctrl + Alt + T", "Double-click with Move Tool", "Ctrl + Shift + M"],
    correctAnswer: "With Free Transform active, use the top toolbar"
  },
  {
    question: "How do you create a new Smart Object via copy?",
    options: ["Right-click > New Smart Object via Copy", "Ctrl + Alt + Shift + J", "Ctrl + J", "Alt + J"],
    correctAnswer: "Right-click > New Smart Object via Copy"
  },
  {
    question: "How do you temporarily disable layer styles for previewing?",
    options: ["Shift + click the \"fx\" icon", "Ctrl + click the \"fx\" icon", "Alt + click the \"fx\" icon", "Right-click > Disable"],
    correctAnswer: "Shift + click the \"fx\" icon"
  },
  {
    question: "How do you toggle precise cursor (crosshair) mode for brushes?",
    options: ["Caps Lock", "Shift + Caps Lock", "Alt + B", "Ctrl + B"],
    correctAnswer: "Caps Lock"
  }
    ]
  },


  "Acrobat Adobe Reader": {
    easy: [
      {
    "question": "How do you open a file in Adobe Acrobat Reader?",
    "options": ["Ctrl + O", "Ctrl + N", "Ctrl + F", "Ctrl + P"],
    "correctAnswer": "Ctrl + O"
  },
  {
    "question": "What shortcut saves the current PDF file?",
    "options": ["Ctrl + S", "Ctrl + Shift + S", "Alt + S", "Ctrl + W"],
    "correctAnswer": "Ctrl + S"
  },
  {
    "question": "How do you print the current document?",
    "options": ["Ctrl + P", "Ctrl + F", "Ctrl + Shift + P", "Alt + P"],
    "correctAnswer": "Ctrl + P"
  },
  {
    "question": "Which shortcut finds text within the PDF?",
    "options": ["Ctrl + F", "Ctrl + H", "Ctrl + T", "Alt + F"],
    "correctAnswer": "Ctrl + F"
  },
  {
    "question": "What shortcut opens the \"Find Next\" result in search?",
    "options": ["F3", "Ctrl + G", "Ctrl + N", "F5"],
    "correctAnswer": "F3"
  },
  {
    "question": "How do you zoom in on the PDF?",
    "options": ["Ctrl + +", "Ctrl + ↑", "Ctrl + Z", "Alt + ="],
    "correctAnswer": "Ctrl + +"
  },
  {
    "question": "How do you zoom out of the PDF?",
    "options": ["Ctrl + -", "Ctrl + ↓", "Ctrl + Shift + -", "Alt + -"],
    "correctAnswer": "Ctrl + -"
  },
  {
    "question": "Which shortcut fits the page to the window?",
    "options": ["Ctrl + 0", "Ctrl + 1", "Ctrl + 2", "Ctrl + Shift + 0"],
    "correctAnswer": "Ctrl + 0"
  },
  {
    "question": "How do you toggle the full-screen reading mode?",
    "options": ["Ctrl + L", "F11", "Shift + F11", "Ctrl + F"],
    "correctAnswer": "Ctrl + L"
  },
  {
    "question": "What key exits full-screen mode?",
    "options": ["Esc", "Ctrl + L", "F12", "Alt + F4"],
    "correctAnswer": "Esc"
  },
  {
    "question": "What shortcut opens the navigation pane?",
    "options": ["F4", "F2", "Ctrl + N", "Shift + F4"],
    "correctAnswer": "F4"
  },
  {
    "question": "Which key lets you go to the next page?",
    "options": ["Right Arrow", "N", "Ctrl + →", "Shift + N"],
    "correctAnswer": "Right Arrow"
  },
  {
    "question": "What shortcut moves to the previous page?",
    "options": ["Left Arrow", "Ctrl + ←", "P", "Shift + P"],
    "correctAnswer": "Left Arrow"
  },
  {
    "question": "How do you go to a specific page number?",
    "options": ["Ctrl + Shift + N", "Ctrl + G", "Alt + P", "Shift + G"],
    "correctAnswer": "Ctrl + Shift + N"
  },
  {
    "question": "Which key opens the \"Preferences\" dialog box?",
    "options": ["Ctrl + K", "Ctrl + P", "Ctrl + Alt + K", "Ctrl + Shift + K"],
    "correctAnswer": "Ctrl + K"
  },
  {
    "question": "What shortcut toggles the comment pane?",
    "options": ["Shift + Ctrl + C", "Ctrl + Shift + M", "Alt + C", "Ctrl + Alt + M"],
    "correctAnswer": "Shift + Ctrl + C"
  },
  {
    "question": "What shortcut toggles the bookmarks pane?",
    "options": ["Ctrl + B", "Alt + B", "Shift + B", "Ctrl + Shift + B"],
    "correctAnswer": "Ctrl + B"
  },
  {
    "question": "Which key lets you close the current tab/document?",
    "options": ["Ctrl + W", "Ctrl + Q", "Alt + F4", "Ctrl + Alt + W"],
    "correctAnswer": "Ctrl + W"
  },
  {
    "question": "What shortcut opens the help menu?",
    "options": ["F1", "F10", "Ctrl + H", "Shift + F1"],
    "correctAnswer": "F1"
  },
  {
    "question": "Which shortcut opens the hand tool for panning?",
    "options": ["H", "Shift + H", "Ctrl + H", "Alt + H"],
    "correctAnswer": "H"
  },
  {
    "question": "How do you select text?",
    "options": ["Ctrl + Shift + T", "V", "Ctrl + T", "Select Tool icon or press V"],
    "correctAnswer": "Select Tool icon or press V"
  },
  {
    "question": "What key switches to the snapshot tool?",
    "options": ["G", "C", "S", "No default shortcut (manual selection)"],
    "correctAnswer": "No default shortcut (manual selection)"
  },
  {
    "question": "What is the shortcut to rotate the page clockwise?",
    "options": ["Shift + Ctrl + +", "Ctrl + Shift + Plus", "Shift + Ctrl + R", "Ctrl + Shift + L"],
    "correctAnswer": "Shift + Ctrl + R"
  },
  {
    "question": "What is the shortcut to rotate the page counterclockwise?",
    "options": ["Shift + Ctrl + L", "Ctrl + Alt + L", "Ctrl + Shift + -", "Shift + R"],
    "correctAnswer": "Shift + Ctrl + L"
  },
  {
    "question": "How do you open the Sign panel?",
    "options": ["Ctrl + Shift + Y", "Alt + S", "Ctrl + Y", "Manually (no shortcut)"],
    "correctAnswer": "Manually (no shortcut)"
  },
  {
    "question": "What shortcut is used to open the Tools pane?",
    "options": ["Shift + F4", "Ctrl + F4", "F8", "Alt + T"],
    "correctAnswer": "Shift + F4"
  },
  {
    "question": "How do you open the \"Organize Pages\" tool?",
    "options": ["Shift + Ctrl + O", "No shortcut; use Tools manually", "Alt + Shift + O", "Ctrl + O"],
    "correctAnswer": "No shortcut; use Tools manually"
  },
  {
    "question": "Which shortcut refreshes/reloads the PDF file?",
    "options": ["Ctrl + R", "F5", "Alt + R", "No shortcut (must re-open manually)"],
    "correctAnswer": "No shortcut (must re-open manually)"
  },
  {
    "question": "What shortcut shows/hides the ruler?",
    "options": ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "F6"],
    "correctAnswer": "Ctrl + R"
  },
  {
    "question": "How do you toggle the Read Out Loud feature?",
    "options": ["Ctrl + Shift + Y", "Alt + Shift + R", "Ctrl + Shift + V", "Shift + V"],
    "correctAnswer": "Ctrl + Shift + Y"
  },
  {
    "question": "How do you open the Attachments panel?",
    "options": ["Ctrl + Shift + A", "Alt + A", "No default shortcut", "Shift + A"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "What shortcut do you use to undo an action?",
    "options": ["Ctrl + Z", "Ctrl + U", "Alt + Z", "Ctrl + Alt + Z"],
    "correctAnswer": "Ctrl + Z"
  },
  {
    "question": "What is the shortcut to redo an action?",
    "options": ["Ctrl + Y", "Ctrl + Shift + Z", "Alt + Y", "Shift + Y"],
    "correctAnswer": "Ctrl + Y"
  },
  {
    "question": "How do you open the Properties bar (for selected text/comments)?",
    "options": ["Ctrl + E", "Ctrl + P", "Shift + E", "Alt + Enter"],
    "correctAnswer": "Ctrl + E"
  },
  {
    "question": "Which shortcut hides/shows menu bar?",
    "options": ["F9", "F10", "Ctrl + M", "Shift + F9"],
    "correctAnswer": "F9"
  },
  {
    "question": "Which key combination toggles the toolbar visibility?",
    "options": ["F8", "F10", "F11", "Ctrl + F8"],
    "correctAnswer": "F8"
  },
  {
    "question": "How do you open the Page Thumbnails panel?",
    "options": ["Ctrl + T", "Alt + T", "No default shortcut", "Ctrl + Shift + T"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "What is the shortcut for creating a sticky note comment?",
    "options": ["Ctrl + 6", "Ctrl + 7", "Ctrl + Shift + 6", "Manually (no default shortcut)"],
    "correctAnswer": "Manually (no default shortcut)"
  },
  {
    "question": "How do you activate the Highlighter tool?",
    "options": ["Ctrl + H", "H", "Manually via Comment Tool", "Shift + H"],
    "correctAnswer": "Manually via Comment Tool"
  },
  {
    "question": "What key is used to pan around the document?",
    "options": ["Spacebar (while holding mouse click)", "Ctrl", "Alt", "Enter"],
    "correctAnswer": "Spacebar (while holding mouse click)"
  },
  {
    "question": "Which shortcut key enables text-to-speech (Read Out Loud)?",
    "options": ["Ctrl + Shift + Y", "Alt + Y", "Ctrl + Alt + Y", "Ctrl + Shift + L"],
    "correctAnswer": "Ctrl + Shift + Y"
  },
  {
    "question": "What shortcut goes to the beginning of the document?",
    "options": ["Home", "Ctrl + Home", "Alt + ↑", "Ctrl + ↑"],
    "correctAnswer": "Ctrl + Home"
  },
  {
    "question": "What shortcut goes to the end of the document?",
    "options": ["Ctrl + End", "End", "Alt + ↓", "Ctrl + ↓"],
    "correctAnswer": "Ctrl + End"
  },
  {
    "question": "How do you hide the navigation pane?",
    "options": ["F4", "Alt + F4", "F8", "Ctrl + F4"],
    "correctAnswer": "F4"
  },
  {
    "question": "How do you open the Tools Center?",
    "options": ["Shift + F4", "Ctrl + Shift + T", "Alt + F4", "Tools must be opened manually"],
    "correctAnswer": "Shift + F4"
  },
  {
    "question": "Which shortcut switches to the Select Tool?",
    "options": ["V", "S", "A", "M"],
    "correctAnswer": "V"
  },
  {
    "question": "How do you switch to the Hand Tool?",
    "options": ["H", "Ctrl + H", "Alt + H", "Shift + H"],
    "correctAnswer": "H"
  },
  {
    "question": "What shortcut opens the Page Navigation toolbar?",
    "options": ["Right-click toolbar > Show Page Navigation", "Ctrl + N", "Alt + Page Up", "No default shortcut"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "What shortcut quickly closes the application?",
    "options": ["Alt + F4", "Ctrl + W", "Ctrl + Q", "Ctrl + Alt + W"],
    "correctAnswer": "Alt + F4"
  },
  {
    "question": "What key combination activates \"Read Out Loud - Read This Page Only\"?",
    "options": ["Shift + Ctrl + V", "Ctrl + Shift + R", "Ctrl + Shift + T", "Alt + R"],
    "correctAnswer": "Shift + Ctrl + V"
  },
  {
    "question": "What shortcut toggles Read Mode?",
    "options": ["Ctrl + H", "Ctrl + L", "F11", "Alt + L"],
    "correctAnswer": "Ctrl + H"
  },
  {
    "question": "How do you start Read Out Loud from the beginning of the document?",
    "options": ["Shift + Ctrl + B", "Shift + B", "Alt + B", "Ctrl + B"],
    "correctAnswer": "Shift + Ctrl + B"
  },
  {
    "question": "What shortcut key highlights selected text?",
    "options": ["Ctrl + H (after selecting)", "Right-click > Highlight", "Both", "Alt + H"],
    "correctAnswer": "Both"
  },
  {
    "question": "How do you delete a comment?",
    "options": ["Delete", "Ctrl + D", "Backspace", "Right-click > Delete"],
    "correctAnswer": "Delete"
  },
  {
    "question": "What is the shortcut to switch between open tabs?",
    "options": ["Ctrl + Tab", "Alt + Tab", "Ctrl + Shift + Tab", "A or C"],
    "correctAnswer": "A or C"
  },
  {
    "question": "What shortcut key adds a text comment box?",
    "options": ["No default shortcut (manual via Comment Tool)", "Ctrl + T", "Shift + T", "Alt + T"],
    "correctAnswer": "No default shortcut (manual via Comment Tool)"
  },
  {
    "question": "What key toggles between the Document and Comment pane?",
    "options": ["F6", "Tab", "Shift + Tab", "Ctrl + Tab"],
    "correctAnswer": "F6"
  },
  {
    "question": "What shortcut is used to open Page Setup?",
    "options": ["Ctrl + Shift + P", "Alt + P", "Ctrl + Alt + P", "Ctrl + P"],
    "correctAnswer": "Ctrl + Shift + P"
  },
  {
    "question": "What is the shortcut to highlight form fields?",
    "options": ["Ctrl + Shift + H", "Ctrl + H", "Shift + H", "No default shortcut"],
    "correctAnswer": "Ctrl + Shift + H"
  },
  {
    "question": "What shortcut lets you select all text on a page?",
    "options": ["Ctrl + A", "Ctrl + Shift + A", "Alt + A", "Shift + T"],
    "correctAnswer": "Ctrl + A"
  }
    ],
    medium: [
     {
    question: "How do you open the Comment tool in Adobe Acrobat Reader?",
    options: ["Ctrl + Shift + C", "Ctrl + 6", "Shift + C", "Alt + C"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "How do you create a text box comment?",
    options: ["Ctrl + T", "Ctrl + B", "Ctrl + Shift + T", "Ctrl + 7"],
    correctAnswer: "Ctrl + 7"
  },
  {
    question: "What is the shortcut for Hand Tool?",
    options: ["H", "Shift + H", "Alt + H", "Ctrl + H"],
    correctAnswer: "H"
  },
  {
    question: "How do you open the Search panel?",
    options: ["Ctrl + F", "Shift + Ctrl + F", "Alt + F", "F3"],
    correctAnswer: "Shift + Ctrl + F"
  },
  {
    question: "Shortcut to show/hide the navigation pane?",
    options: ["F4", "Ctrl + F4", "Alt + 4", "F8"],
    correctAnswer: "F4"
  },
  {
    question: "How do you rotate the page clockwise?",
    options: ["Ctrl + Shift + R", "Ctrl + R", "Ctrl + Shift + C", "Alt + R"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "Shortcut to take a snapshot of the current view?",
    options: ["Ctrl + Shift + S", "G", "Alt + S", "None (must use Edit > Take a Snapshot)"],
    correctAnswer: "None (must use Edit > Take a Snapshot)"
  },
  {
    question: "Shortcut to sign a document digitally?",
    options: ["Ctrl + 9", "Ctrl + Shift + S", "Ctrl + Shift + 9", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "How do you open the Layers panel?",
    options: ["Ctrl + L", "F8", "Alt + F8", "Shift + F4"],
    correctAnswer: "Shift + F4"
  },
  {
    question: "Shortcut to toggle full screen mode?",
    options: ["Ctrl + Enter", "Ctrl + L", "Shift + Ctrl + L", "F11"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How do you open the Sign tool?",
    options: ["Ctrl + 9", "Alt + 9", "Shift + 9", "Ctrl + Shift + 9"],
    correctAnswer: "Ctrl + 9"
  },
  {
    question: "What shortcut lets you underline selected text?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Ctrl + Alt + U", "Ctrl + 2"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Shortcut to highlight selected text?",
    options: ["Ctrl + Shift + H", "Ctrl + H", "Ctrl + 3", "None (must use highlight tool from toolbar)"],
    correctAnswer: "None (must use highlight tool from toolbar)"
  },
  {
    question: "How do you toggle between open PDFs?",
    options: ["Ctrl + Tab", "Alt + Tab", "Ctrl + F6", "Ctrl + Shift + Tab"],
    correctAnswer: "Ctrl + F6"
  },
  {
    question: "Shortcut to zoom to 100%?",
    options: ["Ctrl + 1", "Ctrl + 0", "Alt + 1", "Shift + Ctrl + 1"],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "How do you switch to the Pan & Zoom window?",
    options: ["Ctrl + 7", "Alt + Z", "Ctrl + Shift + Z", "Shift + F6"],
    correctAnswer: "Shift + F6"
  },
  {
    question: "Shortcut to show or hide the toolbar?",
    options: ["F8", "Shift + F8", "Alt + F8", "Ctrl + F8"],
    correctAnswer: "F8"
  },
  {
    question: "How do you open the Print Production panel?",
    options: ["Ctrl + P", "Shift + Ctrl + P", "Ctrl + Shift + Y", "There is no default shortcut"],
    correctAnswer: "There is no default shortcut"
  },
  {
    question: "Shortcut for Marquee Zoom tool?",
    options: ["Z", "Shift + Z", "Ctrl + Z", "Alt + Z"],
    correctAnswer: "Z"
  },
  {
    question: "Shortcut for Text Callout Tool?",
    options: ["U", "Ctrl + 8", "Shift + U", "There is no default shortcut"],
    correctAnswer: "There is no default shortcut"
  },
  {
    question: "How do you open the Preflight tool?",
    options: ["Shift + Ctrl + P", "Ctrl + Shift + F", "Alt + F4", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to switch between tools in the same group?",
    options: ["Shift + Tab", "Right-click + arrow", "Hold tool and press Shift", "Click and hold tool icon"],
    correctAnswer: "Click and hold tool icon"
  },
  {
    question: "How do you activate the Select tool?",
    options: ["V", "Shift + V", "Ctrl + V", "Alt + V"],
    correctAnswer: "V"
  },
  {
    question: "Shortcut to create a sticky note?",
    options: ["Ctrl + 6", "Ctrl + 7", "Ctrl + 8", "None by default"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "Shortcut to open the Tags panel?",
    options: ["Shift + Ctrl + T", "Alt + T", "Ctrl + T", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open Attachments panel?",
    options: ["Ctrl + 5", "Alt + 5", "Shift + 5", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you go to the previous view?",
    options: ["Alt + Left Arrow", "Ctrl + Left Arrow", "Shift + Left Arrow", "Ctrl + Page Up"],
    correctAnswer: "Alt + Left Arrow"
  },
  {
    question: "How do you go to the next view?",
    options: ["Alt + Right Arrow", "Ctrl + Right Arrow", "Shift + Right Arrow", "Ctrl + Page Down"],
    correctAnswer: "Alt + Right Arrow"
  },
  {
    question: "Shortcut to show document properties?",
    options: ["Ctrl + D", "Alt + Enter", "Shift + D", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Shortcut to add a stamp?",
    options: ["Ctrl + T", "Ctrl + Alt + T", "No default shortcut", "Ctrl + Shift + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Reading Mode?",
    options: ["Ctrl + H", "Alt + R", "Shift + H", "Ctrl + R"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "Shortcut to toggle Full Screen mode?",
    options: ["Ctrl + L", "F11", "Alt + F11", "Shift + F11"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How do you rotate the page clockwise?",
    options: ["Ctrl + Shift + +", "Ctrl + Shift + + (plus key)", "Ctrl + Shift + ]", "Ctrl + R"],
    correctAnswer: "Ctrl + Shift + ]"
  },
  {
    question: "How do you rotate the page counterclockwise?",
    options: ["Ctrl + Shift + [", "Ctrl + Shift + -", "Ctrl + Shift + (minus key)", "Ctrl + L"],
    correctAnswer: "Ctrl + Shift + ["
  },
  {
    question: "Shortcut to open the Comments pane?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Alt + J", "Shift + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "Shortcut to switch between Single Page and Continuous View?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "How do you open the Snapshot tool?",
    options: ["Ctrl + Shift + S", "Alt + Shift + S", "Ctrl + Shift + C", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to increase the font size of comments?",
    options: ["Ctrl + Shift + >", "Ctrl + Shift + <", "Ctrl + +", "Ctrl + >"],
    correctAnswer: "Ctrl + Shift + >"
  },
  {
    question: "Shortcut to decrease font size of comments?",
    options: ["Ctrl + Shift + <", "Ctrl + Shift + >", "Ctrl + -", "Ctrl + <"],
    correctAnswer: "Ctrl + Shift + <"
  },
  {
    question: "How to toggle the navigation pane?",
    options: ["F4", "Shift + F4", "Ctrl + F4", "Alt + F4"],
    correctAnswer: "F4"
  },
  {
    question: "Shortcut to select the Hand tool?",
    options: ["H", "S", "P", "R"],
    correctAnswer: "H"
  },
  {
    question: "How do you open the Layers panel?",
    options: ["Shift + Ctrl + L", "Alt + L", "Ctrl + L", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the JavaScript Console?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Ctrl + Alt + J", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Attach File tool?",
    options: ["Ctrl + Shift + A", "Ctrl + A", "Shift + A", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to save a copy as a different file?",
    options: ["Shift + Ctrl + S", "Ctrl + Shift + S", "Ctrl + Alt + S", "Shift + Alt + S"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "Shortcut to open the Find toolbar?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you find the next instance of a search?",
    options: ["Ctrl + G", "F3", "Both A & B", "Alt + G"],
    correctAnswer: "Both A & B"
  },
  {
    question: "Shortcut to find the previous instance?",
    options: ["Shift + Ctrl + G", "Shift + F3", "Both A & B", "Alt + Shift + G"],
    correctAnswer: "Both A & B"
  },
  {
    question: "How to open the Zoom tool?",
    options: ["Z", "Ctrl + Z", "Shift + Z", "Alt + Z"],
    correctAnswer: "Z"
  },
  {
    question: "Shortcut to open the Measure tool?",
    options: ["Shift + M", "Ctrl + M", "Alt + M", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to create a bookmark?",
    options: ["Ctrl + B", "Alt + B", "Shift + B", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to toggle Read Out Loud?",
    options: ["Ctrl + Shift + Y", "Ctrl + Alt + Y", "Alt + Shift + Y", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Navigation pane with Thumbnails?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Alt + T", "No default shortcut"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "Shortcut to open the Navigation pane with Bookmarks?",
    options: ["Ctrl + B", "Alt + B", "Shift + B", "No default shortcut"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "Shortcut to open the Navigation pane with Attachments?",
    options: ["Ctrl + 6", "Alt + 6", "Shift + 6", "No default shortcut"],
    correctAnswer: "Ctrl + 6"
  },
  {
    question: "How do you add a file attachment comment?",
    options: ["Ctrl + 6", "Ctrl + 7", "Ctrl + 8", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to pan the page (Hand Tool) temporarily?",
    options: ["Spacebar (hold)", "Shift (hold)", "Ctrl (hold)", "Alt (hold)"],
    correctAnswer: "Spacebar (hold)"
  },
  {
    question: "Shortcut to open the Stamp palette?",
    options: ["Shift + S", "Ctrl + S", "Alt + S", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to export PDF to Word?",
    options: ["No default shortcut", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Advanced Search window?",
    options: ["Shift + Ctrl + F", "Ctrl + F", "Alt + F", "No default shortcut"],
    correctAnswer: "Shift + Ctrl + F"
  }
    ],
    hard: [
      {
    question: "How do you quickly add a freehand drawing comment?",
    options: ["Shift + Ctrl + 8", "Ctrl + Shift + D", "No default shortcut", "Ctrl + D"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the JavaScript debugger console?",
    options: ["Ctrl + Shift + J", "No default shortcut", "Alt + J", "Ctrl + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to enable reading order tool?",
    options: ["No default shortcut", "Ctrl + Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to switch between Pan and Zoom tool?",
    options: ["Ctrl + Spacebar", "Shift + Spacebar", "No default shortcut", "Alt + Spacebar"],
    correctAnswer: "Ctrl + Spacebar"
  },
  {
    question: "How do you enable the Touch mode toggle?",
    options: ["No default shortcut", "Ctrl + T", "Shift + T", "Alt + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to add a file attachment annotation?",
    options: ["No default shortcut", "Ctrl + Shift + A", "Alt + A", "Shift + A"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to open the Accessibility Checker?",
    options: ["No default shortcut", "Ctrl + Shift + C", "Alt + C", "Ctrl + C"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the PDF Optimizer?",
    options: ["No default shortcut", "Ctrl + Shift + O", "Alt + O", "Ctrl + O"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to toggle the Protect toolbar?",
    options: ["No default shortcut", "Ctrl + Shift + P", "Alt + P", "Ctrl + P"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Preflight tool?",
    options: ["No default shortcut", "Ctrl + Shift + F", "Alt + F", "Ctrl + F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Send for Review dialog?",
    options: ["No default shortcut", "Ctrl + Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to toggle commenting tools?",
    options: ["No default shortcut", "Ctrl + Shift + C", "Alt + C", "Ctrl + C"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to open the Security Settings?",
    options: ["No default shortcut", "Ctrl + Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to create a custom stamp?",
    options: ["No default shortcut", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the JavaScript console?",
    options: ["No default shortcut", "Ctrl + J", "Alt + J", "Shift + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Send File dialog?",
    options: ["No default shortcut", "Ctrl + Shift + E", "Alt + E", "Ctrl + E"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Attach a File dialog?",
    options: ["No default shortcut", "Ctrl + Shift + F", "Alt + F", "Ctrl + F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to add a sound comment?",
    options: ["No default shortcut", "Ctrl + Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to enable measuring tools panel?",
    options: ["No default shortcut", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Document Properties?",
    options: ["Ctrl + D", "Alt + D", "Shift + D", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How do you open the Export PDF dialog?",
    options: ["No default shortcut", "Ctrl + Shift + E", "Alt + E", "Ctrl + E"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Attach a File tool?",
    options: ["No default shortcut", "Ctrl + Shift + A", "Alt + A", "Ctrl + A"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Edit Text & Images tool?",
    options: ["No default shortcut", "Ctrl + Shift + X", "Alt + X", "Ctrl + X"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Crop Pages tool?",
    options: ["No default shortcut", "Ctrl + Shift + C", "Alt + C", "Ctrl + C"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to toggle the Compare Documents tool?",
    options: ["No default shortcut", "Ctrl + Shift + P", "Alt + P", "Ctrl + P"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Prepare Form tool?",
    options: ["No default shortcut", "Ctrl + Shift + F", "Alt + F", "Ctrl + F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Scan & OCR tool?",
    options: ["No default shortcut", "Ctrl + Shift + O", "Alt + O", "Ctrl + O"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Attach a File tool?",
    options: ["No default shortcut", "Ctrl + Shift + T", "Alt + T", "Ctrl + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to open the Accessibility Setup Assistant?",
    options: ["No default shortcut", "Ctrl + Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Send File tool?",
    options: ["No default shortcut", "Ctrl + Shift + F", "Alt + F", "Ctrl + F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to activate the Content Editing tool?",
    options: ["No default shortcut", "Ctrl + Shift + E", "Alt + E", "Ctrl + E"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to add a file attachment comment?",
    options: ["No default shortcut", "Ctrl + Shift + A", "Alt + A", "Ctrl + A"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the JavaScript console?",
    options: ["No default shortcut", "Ctrl + J", "Alt + J", "Shift + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Attach Audio tool?",
    options: ["No default shortcut", "Ctrl + Shift + U", "Alt + U", "Ctrl + U"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to enable the PDF Review tool?",
    options: ["No default shortcut", "Ctrl + Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Preflight profile manager?",
    options: ["No default shortcut", "Ctrl + Shift + P", "Alt + P", "Ctrl + P"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you open the Combine Files tool?",
    options: ["No default shortcut", "Ctrl + Shift + C", "Alt + C", "Ctrl + C"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Create PDF tool?",
    options: ["No default shortcut", "Ctrl + Shift + N", "Alt + N", "Ctrl + N"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to toggle the Document Compare tool?",
    options: ["No default shortcut", "Ctrl + Shift + M", "Alt + M", "Ctrl + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the JavaScript console window?",
    options: ["No default shortcut", "Ctrl + Shift + J", "Alt + J", "Ctrl + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to toggle the Page Thumbnails panel?",
    options: ["Ctrl + Shift + 5", "Alt + 5", "Ctrl + 5", "No default shortcut"],
    correctAnswer: "Ctrl + 5"
  },
  {
    question: "Shortcut to open the Layers panel?",
    options: ["Ctrl + Shift + L", "Ctrl + L", "No default shortcut", "Alt + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How to open the JavaScript debugger?",
    options: ["No default shortcut", "Ctrl + Shift + J", "Alt + J", "Ctrl + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to quickly zoom in on the document?",
    options: ["Ctrl + =", "Ctrl + +", "Ctrl + Up Arrow", "No default shortcut"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "Shortcut to open the Find text box?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How to open the Sign Document tool?",
    options: ["No default shortcut", "Ctrl + Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Print dialog?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "No default shortcut"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "Shortcut to toggle the bookmarks pane?",
    options: ["Ctrl + B", "Alt + B", "Ctrl + Shift + B", "No default shortcut"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How to open the Properties toolbar for annotations?",
    options: ["No default shortcut", "Ctrl + E", "Alt + E", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "Shortcut to add a highlight annotation?",
    options: ["Ctrl + H", "No default shortcut", "Shift + H", "Alt + H"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to open the Redaction tool?",
    options: ["No default shortcut", "Ctrl + Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to save the current PDF?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "Alt + S", "No default shortcut"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "How to switch to hand tool?",
    options: ["H", "Ctrl + H", "No default shortcut", "Shift + H"],
    correctAnswer: "H"
  },
  {
    question: "Shortcut to switch to select tool?",
    options: ["V", "Ctrl + V", "No default shortcut", "Shift + V"],
    correctAnswer: "V"
  },
  {
    question: "How to rotate the page clockwise?",
    options: ["Ctrl + Shift + +", "Ctrl + Shift + R", "Ctrl + R", "No default shortcut"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "Shortcut to rotate page counterclockwise?",
    options: ["Ctrl + Shift + -", "Ctrl + Shift + L", "No default shortcut", "Ctrl + L"],
    correctAnswer: "Ctrl + Shift + L"
  },
  {
    question: "How to toggle fullscreen mode?",
    options: ["Ctrl + L", "F11", "No default shortcut", "Alt + Enter"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Shortcut to go to next page?",
    options: ["Page Down", "N", "Ctrl + Down Arrow", "No default shortcut"],
    correctAnswer: "Page Down"
  },
  {
    question: "Shortcut to go to previous page?",
    options: ["Page Up", "P", "Ctrl + Up Arrow", "No default shortcut"],
    correctAnswer: "Page Up"
  },
  {
    question: "How to open the Attachments pane?",
    options: ["Ctrl + Shift + A", "Ctrl + A", "No default shortcut", "Alt + A"],
    correctAnswer: "Ctrl + Shift + A"
  }
    ]
  },


  "Adobe Creative Cloud": {
    easy: [
      {
    question: "What shortcut opens the Creative Cloud desktop app on Windows?",
    options: ["Ctrl + Alt + C", "Alt + C", "Shift + C", "Ctrl + Shift + C"],
    correctAnswer: "Ctrl + Alt + C"
  },
  {
    question: "How do you open the Creative Cloud desktop app on Mac?",
    options: ["Command + Option + C", "Command + Shift + C", "Control + Command + C", "Command + C"],
    correctAnswer: "Command + Option + C"
  },
  {
    question: "What shortcut updates all installed Creative Cloud apps?",
    options: ["No shortcut; click \"Update All\"", "Ctrl + U", "Shift + U", "Alt + U"],
    correctAnswer: "No shortcut; click \"Update All\""
  },
  {
    question: "How do you open the Creative Cloud preferences window?",
    options: ["Ctrl + ,", "Alt + ,", "Ctrl + Shift + P", "Command + ,"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "What shortcut lets you search for apps, files, and assets in Creative Cloud?",
    options: ["Ctrl + F", "Ctrl + Space", "Alt + Space", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + Space"
  },
  {
    question: "What does the bell icon in the Creative Cloud app represent?",
    options: ["Notifications", "Audio settings", "Collaboration", "Feedback"],
    correctAnswer: "Notifications"
  },
  {
    question: "What shortcut signs you out of the Creative Cloud app?",
    options: ["File → Sign Out", "Ctrl + Shift + Q", "No direct shortcut", "Alt + F4"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you check for updates manually in Creative Cloud?",
    options: ["Help → Check for Updates", "Click \"Updates\" tab", "Ctrl + U", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "What does the cloud icon indicate next to an app in Creative Cloud?",
    options: ["Installed", "Needs update", "Available to install", "Synced"],
    correctAnswer: "Available to install"
  },
  {
    question: "How do you open Fonts in Creative Cloud?",
    options: ["Click Fonts tab", "Ctrl + F", "Alt + T", "Ctrl + Shift + F"],
    correctAnswer: "Click Fonts tab"
  },
  {
    question: "What shortcut opens your Creative Cloud libraries in the desktop app?",
    options: ["Ctrl + L", "Shift + L", "Click on Libraries tab", "Alt + L"],
    correctAnswer: "Click on Libraries tab"
  },
  {
    question: "What section of Creative Cloud gives access to Behance?",
    options: ["Discover", "Community", "Resources", "Stock"],
    correctAnswer: "Discover"
  },
  {
    question: "What does the \"Files\" tab in Creative Cloud show?",
    options: ["Cloud documents and synced files", "Fonts", "Installed applications", "App history"],
    correctAnswer: "Cloud documents and synced files"
  },
  {
    question: "How do you open the Creative Cloud app from the taskbar?",
    options: ["Click its icon", "Ctrl + Alt + C", "Alt + Tab", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "What color dot on the Creative Cloud icon indicates an update is available?",
    options: ["Blue", "Red", "Yellow", "Orange"],
    correctAnswer: "Orange"
  },
  {
    question: "What does clicking the \"Your Work\" tab in the Creative Cloud app do?",
    options: ["Shows files, libraries, and synced content", "Opens Photoshop", "Shows recent files only", "Opens Adobe Express"],
    correctAnswer: "Shows files, libraries, and synced content"
  },
  {
    question: "How do you install an Adobe app from the Creative Cloud desktop app?",
    options: ["Click \"Install\" next to the app", "Right-click → Install", "Double-click app icon", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the Creative Cloud web version quickly?",
    options: ["Click \"Go to Web\"", "creativecloud.adobe.com", "Ctrl + Shift + W", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "Which tab allows access to tutorials and learning resources?",
    options: ["Learn", "Discover", "Community", "Help"],
    correctAnswer: "Learn"
  },
  {
    question: "Where can you manage your Adobe account settings?",
    options: ["Account icon → Preferences", "Creative Cloud Web", "adobe.com", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which shortcut minimizes the Creative Cloud window on Windows?",
    options: ["Ctrl + M", "Alt + Space → N", "Ctrl + Shift + M", "Esc"],
    correctAnswer: "Alt + Space → N"
  },
  {
    question: "How do you open the help menu from the Creative Cloud desktop app?",
    options: ["Click Help in menu", "F1", "No shortcut", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "What shortcut shows the taskbar menu for the Creative Cloud app?",
    options: ["Right-click taskbar icon", "Ctrl + Shift + Esc", "Alt + Shift + T", "Esc"],
    correctAnswer: "Right-click taskbar icon"
  },
  {
    question: "How do you open \"Creative Cloud Files\" folder?",
    options: ["Click \"Open Folder\" from Files tab", "File Explorer → Creative Cloud Files", "Desktop shortcut", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which shortcut is used to pause all syncing in Creative Cloud?",
    options: ["No shortcut; pause via Files tab", "Ctrl + P", "Alt + S", "Esc"],
    correctAnswer: "No shortcut; pause via Files tab"
  },
  {
    question: "What does the blue checkmark on a file mean?",
    options: ["Synced with cloud", "Needs update", "Draft saved", "Locked"],
    correctAnswer: "Synced with cloud"
  },
  {
    question: "What happens when you click the Creative Cloud icon in the system tray?",
    options: ["Opens Creative Cloud window", "Shows recent activity", "Opens Files", "All of the above"],
    correctAnswer: "Opens Creative Cloud window"
  },
  {
    question: "What is the easiest way to uninstall an Adobe app?",
    options: ["Creative Cloud → Click three dots → Uninstall", "Use Control Panel", "Delete the app folder", "Use Adobe Cleaner Tool"],
    correctAnswer: "Creative Cloud → Click three dots → Uninstall"
  },
  {
    question: "What does the search bar in Creative Cloud help you find?",
    options: ["Apps", "Files", "Fonts and libraries", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the shortcut to open Settings/Preferences in Creative Cloud?",
    options: ["Ctrl + ,", "Command + ,", "Gear icon → Preferences", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Where do you go to view available beta versions of Adobe apps?",
    options: ["Creative Cloud → Beta apps tab", "File menu", "Preferences", "Updates tab"],
    correctAnswer: "Creative Cloud → Beta apps tab"
  },
  {
    question: "How do you switch between the \"Apps\" and \"Your Work\" tabs?",
    options: ["Click tab titles", "Tab key", "Ctrl + →", "Shift + →"],
    correctAnswer: "Click tab titles"
  },
  {
    question: "How do you open Adobe Fonts from the Creative Cloud app?",
    options: ["Click \"Fonts\" tab", "creativecloud.adobe.com/fonts", "Use search bar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does the icon with three dots next to an app do?",
    options: ["Opens app options", "Closes the app", "Minimizes window", "Refreshes app"],
    correctAnswer: "Opens app options"
  },
  {
    question: "What's the icon that looks like a play button used for?",
    options: ["Launching tutorials", "Installing apps", "Sync settings", "Testing beta apps"],
    correctAnswer: "Launching tutorials"
  },
  {
    question: "What's the meaning of the red exclamation icon next to an app?",
    options: ["Error occurred", "Update failed", "Requires attention", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How can you sort apps in the Creative Cloud desktop app?",
    options: ["Alphabetically", "By last updated", "By status (Installed/Not Installed)", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut shows hidden system tray icons on Windows (including Adobe CC)?",
    options: ["Windows + B", "Click up-arrow in system tray", "Ctrl + Alt + S", "Ctrl + Esc"],
    correctAnswer: "Click up-arrow in system tray"
  },
  {
    question: "What does \"Launch\" mean next to an app in the CC app?",
    options: ["Start the installed app", "Open tutorial", "Update the app", "Install it"],
    correctAnswer: "Start the installed app"
  },
  {
    question: "How do you know if Creative Cloud syncing is paused?",
    options: ["Cloud icon shows pause symbol", "Red dot on Files tab", "Files stop updating", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What do Creative Cloud Libraries allow you to store?",
    options: ["Colors, assets, text styles", "Files", "App settings", "Fonts only"],
    correctAnswer: "Colors, assets, text styles"
  },
  {
    question: "What's the easiest way to view your Adobe subscription plan?",
    options: ["Account icon → View Account", "Creative Cloud web → Plans", "adobe.com", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What shortcut accesses the notification panel in CC desktop app?",
    options: ["Click bell icon", "Ctrl + N", "Alt + B", "No shortcut"],
    correctAnswer: "Click bell icon"
  },
  {
    question: "How do you search Adobe Stock directly from the CC app?",
    options: ["Search bar", "Stock tab", "Use Discover tab", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What happens if you uninstall Creative Cloud?",
    options: ["All Adobe apps become inaccessible", "Nothing", "Files are deleted", "Fonts are lost"],
    correctAnswer: "All Adobe apps become inaccessible"
  },
  {
    question: "What shortcut opens the Activity panel in the CC desktop app?",
    options: ["Click bell icon → Activity", "Ctrl + Shift + A", "Alt + A", "No shortcut"],
    correctAnswer: "Click bell icon → Activity"
  },
  {
    question: "What does the \"Your Work\" tab include?",
    options: ["Files", "Libraries", "Cloud documents", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does the update arrow icon next to an app mean?",
    options: ["Update is available", "Installed", "Not installed", "Syncing"],
    correctAnswer: "Update is available"
  },
  {
    question: "How do you manage file syncing in Creative Cloud?",
    options: ["Click Gear icon → Preferences → Syncing", "Control Panel", "CC Web", "Files tab"],
    correctAnswer: "Click Gear icon → Preferences → Syncing"
  },
  {
    question: "What happens when you click \"Install\" next to an app?",
    options: ["Downloads and installs the app", "Just downloads", "Opens the web version", "Opens tutorials"],
    correctAnswer: "Downloads and installs the app"
  },
  {
    question: "What's the easiest way to quit the Creative Cloud app?",
    options: ["Right-click tray icon → Quit", "Alt + F4", "Task Manager", "Any of the above"],
    correctAnswer: "Any of the above"
  },
  {
    question: "How do you access Adobe Express from the CC app?",
    options: ["Click \"Web Apps\" → Adobe Express", "Use Discover tab", "Express tab", "A and B"],
    correctAnswer: "A and B"
  },
  {
    question: "What's the purpose of the Creative Cloud desktop app?",
    options: ["Manage Adobe apps", "Sync files", "Access cloud services", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you remove an installed app using Creative Cloud?",
    options: ["Click three dots → Uninstall", "Control Panel", "Delete folder", "Use cleanup tool"],
    correctAnswer: "Click three dots → Uninstall"
  },
  {
    question: "What happens when you pause sync?",
    options: ["Files stop syncing until resumed", "Files are deleted", "Account is paused", "Sync speed increases"],
    correctAnswer: "Files stop syncing until resumed"
  },
  {
    question: "Which tab shows beta versions of apps?",
    options: ["Beta apps", "Discover", "Updates", "Learn"],
    correctAnswer: "Beta apps"
  },
  {
    question: "Where do you go to download older versions of Adobe apps?",
    options: ["Three dots → Other Versions", "App preferences", "Adobe.com only", "You can't"],
    correctAnswer: "Three dots → Other Versions"
  },
  {
    question: "What file type is synced through \"Creative Cloud Files\"?",
    options: ["Any file type", "Only Adobe app files", ".psd and .ai only", "Documents only"],
    correctAnswer: "Any file type"
  },
  {
    question: "How can you restore deleted cloud files?",
    options: ["CC Web → Deleted → Restore", "Recycle Bin", "You can't", "Preferences"],
    correctAnswer: "CC Web → Deleted → Restore"
  },
  {
    question: "What is the role of the \"gear\" icon in Creative Cloud?",
    options: ["Opens Preferences", "Quits app", "Manages account", "Opens updates"],
    correctAnswer: "Opens Preferences"
  }
    ],
    medium: [
      {
    question: "How do you open 'Other Versions' to install a previous version of an app?",
    options: ["Click 3 dots next to the app → Other Versions", "Ctrl + Alt + V", "Preferences → Apps", "Click 'Install' while holding Alt"],
    correctAnswer: "Click 3 dots next to the app → Other Versions"
  },
  {
    question: "Where can you enable/disable auto-update for individual apps?",
    options: ["Preferences → Apps", "Updates tab", "Sync tab", "Storage settings"],
    correctAnswer: "Preferences → Apps"
  },
  {
    question: "What action does clicking 'Open folder' in the Files tab perform?",
    options: ["Opens Creative Cloud Files in File Explorer/Finder", "Opens Preferences", "Launches web browser", "Resumes syncing"],
    correctAnswer: "Opens Creative Cloud Files in File Explorer/Finder"
  },
  {
    question: "Which section shows synced files across devices?",
    options: ["Files tab", "Libraries", "Home", "Activity"],
    correctAnswer: "Files tab"
  },
  {
    question: "How do you manage collaboration on shared cloud documents?",
    options: ["Click three dots → Manage collaboration", "Preferences", "Sync tab", "There's no collaboration"],
    correctAnswer: "Click three dots → Manage collaboration"
  },
  {
    question: "Which Adobe Creative Cloud tab includes access to Adobe Portfolio?",
    options: ["Web Apps & Services", "Discover", "Learn", "Assets"],
    correctAnswer: "Web Apps & Services"
  },
  {
    question: "What does the lock icon in the Libraries panel indicate?",
    options: ["Read-only access", "Password-protected file", "Inactive", "Expired license"],
    correctAnswer: "Read-only access"
  },
  {
    question: "Which feature allows you to send a library to someone else?",
    options: ["Share Link", "Invite to Library", "Export as .cclib", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does clicking 'More options' (three-dot menu) next to a library item allow?",
    options: ["Rename", "Move", "Delete", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you view Adobe Stock licensed assets?",
    options: ["Libraries → Licensed Assets", "Stock tab", "Discover tab", "Learn tab"],
    correctAnswer: "Libraries → Licensed Assets"
  },
  {
    question: "Where do you manage storage usage in Creative Cloud?",
    options: ["Preferences → Files", "Account menu → Manage Storage", "Creative Cloud Web", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How can you switch to the Beta version of an installed app?",
    options: ["Install it from the 'Beta apps' tab", "Preferences", "Update settings", "You cannot run both versions"],
    correctAnswer: "Install it from the 'Beta apps' tab"
  },
  {
    question: "What does 'Export Library' allow you to do?",
    options: ["Save a copy of a library for backup or sharing", "Print library", "Convert to PDF", "Upload to Portfolio"],
    correctAnswer: "Save a copy of a library for backup or sharing"
  },
  {
    question: "Where do you find Creative Cloud updates history?",
    options: ["Help → Updates → History", "No built-in shortcut; view per app only", "Notification center", "Files tab"],
    correctAnswer: "No built-in shortcut; view per app only"
  },
  {
    question: "How do you open CC web from the desktop app?",
    options: ["Click avatar → Go to Web", "Ctrl + Shift + W", "Web tab", "All of the above"],
    correctAnswer: "Click avatar → Go to Web"
  },
  {
    question: "What's the quickest way to manage Adobe Fonts sync settings?",
    options: ["Preferences → Fonts", "Fonts tab", "Visit fonts.adobe.com", "Account settings"],
    correctAnswer: "Preferences → Fonts"
  },
  {
    question: "Where do Creative Cloud Libraries sync to locally?",
    options: ["Creative Cloud Files folder", "AppData folder", "Documents", "Adobe Shared folder"],
    correctAnswer: "Creative Cloud Files folder"
  },
  {
    question: "What does the green checkmark icon on a synced file mean?",
    options: ["File is fully synced", "File is shared", "Recently edited", "Archived"],
    correctAnswer: "File is fully synced"
  },
  {
    question: "How can you preview a .psd or .ai file directly in Creative Cloud without opening the app?",
    options: ["Click file → Preview", "Hover + click Preview", "Cloud preview only", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which shortcut shows Adobe Stock results from the Discover tab?",
    options: ["Type in search + Enter", "Ctrl + F", "Stock → Filter: Free", "No shortcut"],
    correctAnswer: "Type in search + Enter"
  },
  {
    question: "How do you delete multiple files in the Creative Cloud Files tab?",
    options: ["Ctrl/Cmd + Click to select → Delete", "Use checkboxes", "Shift + Select range → Delete", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is a use of the 'Mark for offline use' option in cloud files?",
    options: ["Saves a local copy for editing without internet", "Converts it to PDF", "Archives the file", "Makes file read-only"],
    correctAnswer: "Saves a local copy for editing without internet"
  },
  {
    question: "What Adobe Creative Cloud feature supports commenting on files?",
    options: ["Shared cloud documents", "Libraries", "Learn panel", "Fonts tab"],
    correctAnswer: "Shared cloud documents"
  },
  {
    question: "Where do you manage file conflict resolution?",
    options: ["Preferences → Files", "Notification tab", "Conflict prompt on sync", "You can't"],
    correctAnswer: "Conflict prompt on sync"
  },
  {
    question: "What is the shortcut to launch the Creative Cloud app from macOS spotlight?",
    options: ["Command + Space → Type 'Creative Cloud'", "Shift + Space", "Ctrl + C", "Option + Command + C"],
    correctAnswer: "Command + Space → Type 'Creative Cloud'"
  },
  {
    question: "How do you open Creative Cloud logs for troubleshooting?",
    options: ["Ctrl + Alt + R (Windows)", "Help → Report Issue", "Preferences → Help → Logs", "Contact Support"],
    correctAnswer: "Ctrl + Alt + R (Windows)"
  },
  {
    question: "What happens if you move a synced file outside the Creative Cloud Files folder?",
    options: ["File is no longer synced", "Duplicate is created", "File is backed up automatically", "Nothing"],
    correctAnswer: "File is no longer synced"
  },
  {
    question: "What are 'Creative Cloud Libraries' mainly used for?",
    options: ["Share design assets across apps", "Store fonts", "Store backup files", "Display recent files only"],
    correctAnswer: "Share design assets across apps"
  },
  {
    question: "What happens when you delete a library?",
    options: ["It is removed from all synced devices", "It moves to trash", "It stays on the web", "Only local copy is removed"],
    correctAnswer: "It is removed from all synced devices"
  },
  {
    question: "What's the benefit of using 'Invite to Edit' in Creative Cloud Files?",
    options: ["Real-time collaboration on design files", "View-only access", "Opens Photoshop", "No benefit"],
    correctAnswer: "Real-time collaboration on design files"
  },
  {
    question: "How can you disable auto-launch of Creative Cloud at system startup?",
    options: ["Preferences → General → Uncheck 'Launch at login'", "Sync Settings", "Adobe Web", "Update Manager"],
    correctAnswer: "Preferences → General → Uncheck 'Launch at login'"
  },
  {
    question: "What is the purpose of the 'Open in Desktop App' option for cloud files?",
    options: ["Opens file in the associated Adobe application", "Opens in browser", "Edits metadata", "Downloads only"],
    correctAnswer: "Opens file in the associated Adobe application"
  },
  {
    question: "What does the sync icon with rotating arrows mean?",
    options: ["File is currently syncing", "File is offline", "File has error", "File is paused"],
    correctAnswer: "File is currently syncing"
  },
  {
    question: "How do you pause Creative Cloud syncing?",
    options: ["Click cloud icon → Pause Syncing", "Ctrl + P", "Settings → Preferences", "You can't"],
    correctAnswer: "Click cloud icon → Pause Syncing"
  },
  {
    question: "How do you enable version history for Creative Cloud documents?",
    options: ["Automatically enabled", "Preferences → Enable History", "Right-click file → Enable history", "Manual snapshots only"],
    correctAnswer: "Automatically enabled"
  },
  {
    question: "Which Creative Cloud app allows editing PDFs directly?",
    options: ["Acrobat", "Photoshop", "Bridge", "Fonts"],
    correctAnswer: "Acrobat"
  },
  {
    question: "Where can you browse Behance projects in the CC Desktop app?",
    options: ["Discover tab", "Learn tab", "Stock", "Assets"],
    correctAnswer: "Discover tab"
  },
  {
    question: "What does 'Shared With You' tab display?",
    options: ["Files or Libraries others have shared with your Adobe account", "Your shared files", "Hidden files", "Licensed assets only"],
    correctAnswer: "Files or Libraries others have shared with your Adobe account"
  },
  {
    question: "How can you sync a new folder with Creative Cloud Files?",
    options: ["Move the folder into Creative Cloud Files directory", "Right-click → Sync with Adobe", "Cloud settings → Add folder", "Use drag & drop only"],
    correctAnswer: "Move the folder into Creative Cloud Files directory"
  },
  {
    question: "What is the Creative Cloud 'Marketplace'?",
    options: ["Section with plugins, extensions, and stock assets", "Font shop", "Cloud subscription plans", "Online Adobe store"],
    correctAnswer: "Section with plugins, extensions, and stock assets"
  },
  {
    question: "What does 'Manage Fonts' in the Preferences panel do?",
    options: ["Opens Adobe Fonts settings", "Opens file manager", "Opens Illustrator", "Launches font editing tool"],
    correctAnswer: "Opens Adobe Fonts settings"
  },
  {
    question: "What icon indicates that a font is from Adobe Fonts?",
    options: ["Cloud with 'f'", "Asterisk", "T with a line", "Lock symbol"],
    correctAnswer: "Cloud with 'f'"
  },
  {
    question: "How do you uninstall an Adobe app through Creative Cloud?",
    options: ["Click three dots next to the app → Uninstall", "Delete manually", "Use Control Panel", "App Settings"],
    correctAnswer: "Click three dots next to the app → Uninstall"
  },
  {
    question: "How do you open preferences in Creative Cloud desktop app?",
    options: ["Click gear icon → Preferences", "Ctrl + P", "Alt + Enter", "There is no Preferences panel"],
    correctAnswer: "Click gear icon → Preferences"
  },
  {
    question: "Where do you find tutorials for Adobe applications?",
    options: ["Learn tab", "Help tab", "Preferences", "Libraries"],
    correctAnswer: "Learn tab"
  },
  {
    question: "What can you do in the 'Discover' tab of Creative Cloud?",
    options: ["Browse tutorials, community posts, and featured content", "Edit files", "Manage billing", "Install apps"],
    correctAnswer: "Browse tutorials, community posts, and featured content"
  },
  {
    question: "How do you report a bug in an Adobe Creative Cloud app?",
    options: ["Help → Report Issue", "Contact Adobe", "Click 'Give Feedback'", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does a gray cloud icon next to a file indicate?",
    options: ["File is pending sync", "File is synced", "File is deleted", "File is shared"],
    correctAnswer: "File is pending sync"
  },
  {
    question: "What does the Creative Cloud 'Beta Apps' section contain?",
    options: ["Early test versions of Adobe apps", "Web plugins", "Extensions", "Deprecated apps"],
    correctAnswer: "Early test versions of Adobe apps"
  },
  {
    question: "How do you rename a file in the Creative Cloud Files tab?",
    options: ["Click three dots → Rename", "Double-click filename", "Right-click → Rename", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which Adobe app is commonly used to organize and batch rename files?",
    options: ["Adobe Bridge", "Lightroom", "InDesign", "Animate"],
    correctAnswer: "Adobe Bridge"
  },
  {
    question: "Where can you activate/deactivate a license for Creative Cloud?",
    options: ["Account settings", "Help → Sign Out", "Preferences → Plans", "License tab"],
    correctAnswer: "Help → Sign Out"
  },
  {
    question: "Which icon indicates a Library asset used in a document?",
    options: ["Chain link or library symbol", "Folder", "Star", "Clock"],
    correctAnswer: "Chain link or library symbol"
  },
  {
    question: "How do you import assets into a Creative Cloud Library?",
    options: ["Drag and drop from app", "Use Library panel menu → Import", "Right-click in Library panel", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the 'Your Work' section used for?",
    options: ["Viewing recently accessed files and synced documents", "Creating new projects", "Accessing tutorials", "Customizing the interface"],
    correctAnswer: "Viewing recently accessed files and synced documents"
  },
  {
    question: "How do you filter only apps with updates in Creative Cloud desktop?",
    options: ["Updates tab", "Sort by 'Needs Update'", "Search bar → 'Update'", "Preferences"],
    correctAnswer: "Updates tab"
  },
  {
    question: "How do you add a plugin to Photoshop from Creative Cloud?",
    options: ["Marketplace → Plugins → Install", "Preferences", "Photoshop Menu", "Use App Store"],
    correctAnswer: "Marketplace → Plugins → Install"
  },
  {
    question: "What does the orange dot next to an app name indicate?",
    options: ["Update available", "App error", "Beta", "Installed"],
    correctAnswer: "Update available"
  },
  {
    question: "How do you monitor cloud storage usage visually?",
    options: ["Files tab → Bottom bar shows usage", "Preferences → Usage", "Home tab", "Fonts tab"],
    correctAnswer: "Files tab → Bottom bar shows usage"
  },
  {
    question: "What does clicking 'Open Web' in Libraries do?",
    options: ["Opens the Library in your browser", "Opens a mobile app", "Creates a PDF", "Shares the library"],
    correctAnswer: "Opens the Library in your browser"
  }
    ],
    hard: [
       {
    question: "What shortcut opens the Liquify filter in Photoshop?",
    options: ["Shift + Ctrl + X", "Alt + Ctrl + X", "Ctrl + F", "Shift + Alt + L"],
    correctAnswer: "Shift + Ctrl + X"
  },
  {
    question: "Which shortcut exports artboards to files in Illustrator?",
    options: ["Alt + Ctrl + E", "Shift + Ctrl + E", "File → Export As (no direct shortcut)", "Ctrl + Alt + S"],
    correctAnswer: "File → Export As (no direct shortcut)"
  },
  {
    question: "What is the shortcut to preview in InDesign without guides?",
    options: ["W (with Selection Tool active)", "Ctrl + Shift + W", "Tab", "Ctrl + ;"],
    correctAnswer: "W (with Selection Tool active)"
  },
  {
    question: "In Premiere Pro, what does the \\ (backslash) key do?",
    options: ["Zoom to fit sequence", "Ripple delete", "Add marker", "Split clip"],
    correctAnswer: "Zoom to fit sequence"
  },
  {
    question: "What shortcut adds a new camera in After Effects?",
    options: ["Ctrl + Alt + Shift + C", "Ctrl + Alt + C", "Ctrl + Shift + C", "Ctrl + K"],
    correctAnswer: "Ctrl + Alt + Shift + C"
  },
  {
    question: "In Lightroom, which shortcut toggles Before/After view?",
    options: ["Y", "Q", "B", "Shift + B"],
    correctAnswer: "Y"
  },
  {
    question: "How do you toggle full-screen preview in Photoshop?",
    options: ["F", "Tab", "Shift + Tab", "Ctrl + Shift + F"],
    correctAnswer: "F"
  },
  {
    question: "What shortcut opens Character panel in Illustrator?",
    options: ["Ctrl + T", "Ctrl + Alt + T", "Ctrl + Shift + C", "Ctrl + Y"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you quickly switch between open documents in Photoshop?",
    options: ["Ctrl + Tab", "Ctrl + 1", "Ctrl + Shift + T", "Alt + ←"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "What shortcut adds a new adjustment layer in Photoshop?",
    options: ["Alt + Ctrl + G", "Ctrl + Alt + Shift + N", "Alt + Ctrl + Shift + E", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you ripple delete a gap in Premiere Pro timeline?",
    options: ["Shift + Delete", "Alt + Delete", "Delete", "Ctrl + Delete"],
    correctAnswer: "Shift + Delete"
  },
  {
    question: "What does pressing UU in After Effects do?",
    options: ["Reveals all modified properties", "Shows timeline", "Zooms in", "Hides all layers"],
    correctAnswer: "Reveals all modified properties"
  },
  {
    question: "How do you reset workspace in most Adobe apps?",
    options: ["Window → Workspace → Reset", "Ctrl + Shift + R", "Alt + F10", "Preferences → Reset"],
    correctAnswer: "Window → Workspace → Reset"
  },
  {
    question: "Which shortcut centers the timeline playhead in Audition?",
    options: ["Ctrl + Shift + Space", "Ctrl + /", "Shift + /", "Ctrl + Alt + M"],
    correctAnswer: "Shift + /"
  },
  {
    question: "What's the shortcut to select all clips on track in Premiere Pro?",
    options: ["Alt + Click", "Alt + Shift + T", "Ctrl + A", "Alt + A"],
    correctAnswer: "Alt + Click"
  },
  {
    question: "In Adobe XD, what does `Ctrl + `` do?",
    options: ["Show layout grid", "Show plugin panel", "Toggle layers", "Show specs"],
    correctAnswer: "Show layout grid"
  },
  {
    question: "What shortcut shows the media browser in Premiere Pro?",
    options: ["Shift + 8", "Ctrl + 8", "Alt + 8", "Ctrl + Shift + 8"],
    correctAnswer: "Ctrl + 8"
  },
  {
    question: "How do you insert a keyframe in After Effects?",
    options: ["Alt + Shift + P/S/R/etc.", "Ctrl + Click", "Stopwatch icon", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What's the shortcut to jump to start of timeline in Audition?",
    options: ["Home", "Ctrl + ←", "Shift + Home", "Alt + ←"],
    correctAnswer: "Home"
  },
  {
    question: "In Illustrator, what shortcut outlines text?",
    options: ["Ctrl + Shift + O", "Alt + O", "Ctrl + O", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "How do you fit artboard in Illustrator view?",
    options: ["Ctrl + 0", "Ctrl + Shift + 0", "Alt + 0", "Ctrl + Space"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "Shortcut to bring layer to front in Photoshop?",
    options: ["Ctrl + Shift + ]", "Ctrl + Alt + ↑", "Ctrl + ]", "Alt + Shift + ↑"],
    correctAnswer: "Ctrl + Shift + ]"
  },
  {
    question: "Shortcut to preview transparency in After Effects?",
    options: ["Alt + Shift + T", "Toggle transparency grid icon (no shortcut)", "Ctrl + Shift + T", "Ctrl + /"],
    correctAnswer: "Toggle transparency grid icon (no shortcut)"
  },
  {
    question: "In InDesign, what shortcut toggles between Normal and Preview?",
    options: ["W (Selection Tool active)", "Tab", "Ctrl + Shift + P", "Ctrl + W"],
    correctAnswer: "W (Selection Tool active)"
  },
  {
    question: "What shortcut opens Brush panel in Illustrator?",
    options: ["F5", "Ctrl + B", "Alt + B", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "Shortcut to duplicate a selected item in After Effects?",
    options: ["Ctrl + D", "Alt + D", "Shift + D", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "What is the shortcut to export a composition in Media Encoder?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "No shortcut; only via Queue"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "Shortcut to delete all empty tracks in Premiere Pro?",
    options: ["Ctrl + Shift + K", "Right-click → Delete Empty Tracks", "No shortcut", "Ctrl + Alt + E"],
    correctAnswer: "No shortcut"
  },
  {
    question: "In Lightroom, what does Ctrl + Shift + E do?",
    options: ["Export selected photo(s)", "Export with watermark", "Edit in Photoshop", "Email"],
    correctAnswer: "Export selected photo(s)"
  },
  {
    question: "Shortcut to nudge a layer by 10 pixels in Photoshop?",
    options: ["Shift + Arrow Key", "Alt + Arrow", "Ctrl + Shift + Arrow", "Alt + Shift"],
    correctAnswer: "Shift + Arrow Key"
  },
  {
    question: "In Premiere Pro, what shortcut enables track targeting for all tracks?",
    options: ["Shift + A", "Ctrl + A", "Alt + Shift + T", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to quickly reveal opacity in After Effects?",
    options: ["T", "O", "Shift + O", "Ctrl + O"],
    correctAnswer: "T"
  },
  {
    question: "What does Ctrl + Shift + Alt + N do in Photoshop?",
    options: ["New layer without dialog", "New document", "New group", "New smart object"],
    correctAnswer: "New layer without dialog"
  },
  {
    question: "Shortcut to unlink audio from video in Premiere Pro?",
    options: ["Ctrl + L", "Alt + L", "U", "Shift + U"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "In Illustrator, how do you switch drawing mode (normal, behind, inside)?",
    options: ["Shift + D", "Alt + D", "Ctrl + D", "Tab"],
    correctAnswer: "Shift + D"
  },
  {
    question: "Shortcut to toggle clip keyframes in Premiere Pro?",
    options: ["Ctrl + Alt + K", "Ctrl + Shift + K", "Alt + K", "Ctrl + Shift + E"],
    correctAnswer: "Alt + K"
  },
  {
    question: "What shortcut enables audio waveform view in After Effects?",
    options: ["LL", "AA", "WW", "RR"],
    correctAnswer: "LL"
  },
  {
    question: "Shortcut to reset bounding box in Illustrator?",
    options: ["Ctrl + Shift + B", "Ctrl + B", "Ctrl + R", "Shift + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "In Lightroom, what shortcut opens Develop module?",
    options: ["D", "Ctrl + D", "Alt + D", "Shift + D"],
    correctAnswer: "D"
  },
  {
    question: "Shortcut to toggle screen modes in Photoshop?",
    options: ["F", "Shift + F", "Tab", "Alt + F"],
    correctAnswer: "Shift + F"
  },
  {
    question: "In Premiere Pro, how do you insert a clip at the playhead position?",
    options: [", (comma key)", ". (period key)", "I", "M"],
    correctAnswer: ", (comma key)"
  },
  {
    question: "Shortcut to split a clip in After Effects?",
    options: ["Ctrl + Shift + D", "Ctrl + D", "Alt + D", "Ctrl + K"],
    correctAnswer: "Ctrl + Shift + D"
  },
  {
    question: "What shortcut collapses all layers in After Effects timeline?",
    options: ["Ctrl + Alt + A", "Ctrl + Shift + C", "Ctrl + `", "Ctrl + \\"],
    correctAnswer: "Ctrl + \\"
  },
  {
    question: "How do you enable snapping in Illustrator?",
    options: ["Shift + Ctrl + \"", "Ctrl + U", "Ctrl + Shift + ;", "Alt + ;"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Shortcut to rasterize type in Photoshop?",
    options: ["Right-click layer → Rasterize", "No default shortcut", "Ctrl + Shift + R", "Alt + Ctrl + Shift + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What shortcut toggles targeted adjustment tool in Lightroom?",
    options: ["Ctrl + Shift + H", "Alt + Ctrl + H", "T", "Shift + T"],
    correctAnswer: "T"
  },
  {
    question: "Shortcut to scale proportionally in Illustrator (from center)?",
    options: ["Shift + Alt + Drag corner", "Ctrl + Drag", "Shift + Ctrl + Alt + S", "Alt + S"],
    correctAnswer: "Shift + Alt + Drag corner"
  },
  {
    question: "Shortcut to enable text wrap in InDesign?",
    options: ["Ctrl + Alt + W", "Alt + Ctrl + T", "Ctrl + Shift + W", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What shortcut creates null object in After Effects?",
    options: ["Ctrl + Alt + Shift + Y", "Ctrl + Y", "Ctrl + Shift + Y", "Ctrl + N"],
    correctAnswer: "Ctrl + Alt + Shift + Y"
  },
  {
    question: "Shortcut to render current comp in After Effects?",
    options: ["Ctrl + M", "Ctrl + Alt + M", "Ctrl + Shift + M", "Ctrl + R"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "Shortcut to trim comp to work area in After Effects?",
    options: ["Ctrl + Shift + X", "Ctrl + Shift + T", "Ctrl + Shift + D", "No shortcut"],
    correctAnswer: "Ctrl + Shift + X"
  },
  {
    question: "In Photoshop, how do you cycle through screen modes?",
    options: ["F", "Shift + F", "Alt + F", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Shortcut to disable snapping in Premiere Pro timeline?",
    options: ["S", "Shift + S", "Alt + S", "Ctrl + S"],
    correctAnswer: "S"
  },
  {
    question: "In Illustrator, what shortcut converts stroke to fill?",
    options: ["Object menu only", "Ctrl + Shift + O", "Ctrl + Alt + C", "Ctrl + 8"],
    correctAnswer: "Object menu only"
  },
  {
    question: "Shortcut to jump between keyframes in After Effects?",
    options: ["J and K", "Alt + J and K", "Page Up / Down", "Ctrl + Shift + J"],
    correctAnswer: "J and K"
  },
  {
    question: "In Premiere Pro, what shortcut opens the Effects panel?",
    options: ["Shift + 7", "Ctrl + 7", "Alt + 7", "F7"],
    correctAnswer: "Shift + 7"
  },
  {
    question: "Shortcut to toggle between vector and pixel preview in Illustrator?",
    options: ["Ctrl + Y", "Alt + Y", "Ctrl + Shift + Y", "Ctrl + 8"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "Shortcut to lock/unlock guides in Photoshop?",
    options: ["Ctrl + Alt + ;", "Ctrl + ;", "Ctrl + Shift + ;", "Alt + ;"],
    correctAnswer: "Ctrl + Shift + ;"
  },
  {
    question: "Shortcut to collapse/expand all layers in Premiere Pro?",
    options: ["Ctrl + ←", "Ctrl + -", "Alt + ←", "Ctrl + Alt + Shift + ←"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "In Lightroom, how do you flag a photo as Pick?",
    options: ["P", "F", "5", "Ctrl + P"],
    correctAnswer: "P"
  }
    ]
  },



  "Audacity": {
    easy: [
     {
    question: "How do you start or stop playback in Audacity?",
    options: ["Space", "Enter", "Ctrl + P", "Tab"],
    correctAnswer: "Space"
  },
  {
    question: "What is the shortcut to stop playback immediately?",
    options: ["Esc", "Space", "Shift + A", "X"],
    correctAnswer: "Shift + A"
  },
  {
    question: "Which shortcut is used to record audio?",
    options: ["R", "Ctrl + R", "Shift + R", "Alt + R"],
    correctAnswer: "R"
  },
  {
    question: "What is the shortcut to pause playback?",
    options: ["P", "Space", "Ctrl + P", "Shift + Space"],
    correctAnswer: "P"
  },
  {
    question: "How do you cut selected audio?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + Z", "Ctrl + A"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "How do you copy selected audio?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + D"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "What is the shortcut to paste audio?",
    options: ["Ctrl + D", "Ctrl + X", "Ctrl + V", "Ctrl + P"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "How do you undo an action?",
    options: ["Ctrl + R", "Ctrl + Z", "Ctrl + U", "Ctrl + Y"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "How do you redo an action?",
    options: ["Ctrl + Y", "Ctrl + R", "Ctrl + Shift + Z", "Alt + Y"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "Shortcut to select all audio?",
    options: ["Ctrl + A", "Ctrl + E", "Ctrl + L", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Shortcut to deselect all audio?",
    options: ["Ctrl + Shift + A", "Ctrl + D", "Esc", "Alt + A"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "What is the shortcut to open a new project?",
    options: ["Ctrl + P", "Ctrl + N", "Ctrl + O", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you open an existing project?",
    options: ["Ctrl + P", "Ctrl + O", "Ctrl + L", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How do you save a project?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + Shift + S", "Ctrl + Alt + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "What is the shortcut to export audio?",
    options: ["Ctrl + Shift + E", "Ctrl + E", "Alt + E", "Ctrl + Alt + E"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "What shortcut toggles the Selection Tool?",
    options: ["F1", "F2", "F3", "F4"],
    correctAnswer: "F1"
  },
  {
    question: "What shortcut activates the Envelope Tool?",
    options: ["F2", "F3", "F4", "F5"],
    correctAnswer: "F2"
  },
  {
    question: "How do you zoom in on the timeline?",
    options: ["Ctrl + 1", "Ctrl + +", "Ctrl + Z", "Alt + ="],
    correctAnswer: "Ctrl + 1"
  },
  {
    question: "What shortcut zooms out of the timeline?",
    options: ["Ctrl + 3", "Ctrl + -", "Ctrl + 2", "Ctrl + Shift + Z"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "What is the shortcut to fit project to window?",
    options: ["Ctrl + F", "Ctrl + Shift + F", "F", "Ctrl + 0"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you mute the selected track?",
    options: ["Shift + U", "U", "Ctrl + U", "Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "What is the shortcut to add a new stereo track?",
    options: ["Ctrl + Shift + N", "Ctrl + T", "Shift + S", "Ctrl + Shift + T"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "What is the shortcut to silence audio?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Shift + Delete"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Shortcut to open Preferences?",
    options: ["Ctrl + P", "Ctrl + Alt + P", "Shift + P", "Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the shortcut to delete selected audio?",
    options: ["Delete", "Backspace", "Ctrl + D", "Ctrl + Delete"],
    correctAnswer: "Delete"
  },
  {
    question: "What shortcut activates the Draw Tool?",
    options: ["F3", "F4", "F5", "F6"],
    correctAnswer: "F3"
  },
  {
    question: "What is the shortcut for the Zoom Tool?",
    options: ["F4", "F5", "F6", "F7"],
    correctAnswer: "F4"
  },
  {
    question: "How do you select the Multi-Tool?",
    options: ["F6", "F7", "F8", "F9"],
    correctAnswer: "F6"
  },
  {
    question: "Shortcut to open metadata editor?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "Ctrl + E"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "What shortcut splits a clip at the selection point?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + B", "Ctrl + K"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "How do you name a label at selection?",
    options: ["Ctrl + B", "Ctrl + N", "Ctrl + L", "Ctrl + M"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "What shortcut is used to move playback to selection start?",
    options: ["Shift + J", "J", "Home", "Ctrl + J"],
    correctAnswer: "Home"
  },
  {
    question: "What is the shortcut to move playback to selection end?",
    options: ["End", "Ctrl + End", "Alt + End", "Shift + End"],
    correctAnswer: "End"
  },
  {
    question: "Shortcut to play from start of project?",
    options: ["Shift + Space", "Home, then Space", "Ctrl + Shift + Space", "P"],
    correctAnswer: "Shift + Space"
  },
  {
    question: "How do you toggle looping of playback?",
    options: ["Shift + L", "L", "Ctrl + L", "Alt + L"],
    correctAnswer: "L"
  },
  {
    question: "What does pressing F5 do in Audacity?",
    options: ["Time Shift Tool", "Envelope Tool", "Select Tool", "None"],
    correctAnswer: "Time Shift Tool"
  },
  {
    question: "What is the shortcut to toggle mute on a focused track?",
    options: ["M", "U", "Shift + U", "Ctrl + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Shortcut to move focus to previous track?",
    options: ["Up arrow", "Shift + ↑", "Ctrl + ↑", "Alt + ↑"],
    correctAnswer: "Up arrow"
  },
  {
    question: "Shortcut to move focus to next track?",
    options: ["Down arrow", "Ctrl + ↓", "Shift + ↓", "Alt + ↓"],
    correctAnswer: "Down arrow"
  },
  {
    question: "How do you enable/disable keyboard focus?",
    options: ["F6", "Alt + F6", "Tab", "Esc"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to apply the most recent effect again?",
    options: ["Ctrl + R", "Ctrl + E", "Shift + E", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "Shortcut to fit selection to window?",
    options: ["Ctrl + E", "Ctrl + Shift + E", "Ctrl + Alt + E", "Ctrl + Shift + W"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "Shortcut to repeat the last command?",
    options: ["Ctrl + R", "F4", "Ctrl + Q", "Ctrl + D"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "What shortcut opens the Effect menu?",
    options: ["Alt + C", "Alt + D", "Alt + E", "Ctrl + E"],
    correctAnswer: "Alt + E"
  },
  {
    question: "How do you open the Help menu using keyboard?",
    options: ["Alt + H", "Ctrl + H", "Shift + H", "F1"],
    correctAnswer: "Alt + H"
  },
  {
    question: "Shortcut to zoom to actual size?",
    options: ["Ctrl + 2", "Ctrl + 0", "Ctrl + 1", "Alt + 2"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "Shortcut to open Track dropdown menu (when focused)?",
    options: ["Enter", "Shift + Enter", "Menu key", "Alt"],
    correctAnswer: "Menu key"
  },
  {
    question: "What shortcut toggles Solo for focused track?",
    options: ["S", "Shift + S", "Ctrl + S", "Alt + S"],
    correctAnswer: "Shift + S"
  },
  {
    question: "Shortcut to open Edit menu?",
    options: ["Alt + E", "Ctrl + E", "Shift + E", "F2"],
    correctAnswer: "Alt + E"
  },
  {
    question: "What is the shortcut to duplicate a selection?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + Alt + D", "Alt + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Shortcut to move the clip left?",
    options: ["Alt + ←", "Shift + ←", "Ctrl + ←", "←"],
    correctAnswer: "Ctrl + ←"
  },
  {
    question: "Shortcut to move the clip right?",
    options: ["Alt + →", "Shift + →", "Ctrl + →", "→"],
    correctAnswer: "Ctrl + →"
  },
  {
    question: "Shortcut to toggle project rate dropdown?",
    options: ["P", "Alt + P", "Tab to focus, then Enter", "Ctrl + Shift + P"],
    correctAnswer: "Tab to focus, then Enter"
  },
  {
    question: "How do you close Audacity?",
    options: ["Alt + F4", "Ctrl + Q", "Ctrl + W", "Alt + Q"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "What is the shortcut to open the Generate menu?",
    options: ["Alt + G", "Ctrl + G", "Shift + G", "F7"],
    correctAnswer: "Alt + G"
  },
  {
    question: "Shortcut to toggle collapsed/expanded view of tracks?",
    options: ["Shift + C", "Ctrl + C", "C", "Alt + C"],
    correctAnswer: "C"
  },
  {
    question: "Shortcut to go to the start of the project?",
    options: ["Home", "Ctrl + ←", "Shift + Home", "Ctrl + Home"],
    correctAnswer: "Home"
  },
  {
    question: "Shortcut to go to the end of the project?",
    options: ["End", "Ctrl + →", "Shift + End", "Ctrl + End"],
    correctAnswer: "End"
  },
  {
    question: "Shortcut to switch between tools?",
    options: ["Keyboard function keys (F1–F6)", "Alt + 1", "Shift + T", "Ctrl + T"],
    correctAnswer: "Keyboard function keys (F1–F6)"
  },
  {
    question: "Shortcut to repeat playback loop?",
    options: ["L", "Shift + Space", "Space", "Ctrl + Shift + Space"],
    correctAnswer: "L"
  }
    ],
    medium: [
     {
    question: "What shortcut toggles between 'Selection Tool' and 'Multi-Tool'?",
    options: ["F1", "F6", "Shift + F6", "Ctrl + F6"],
    correctAnswer: "F6"
  },
  {
    question: "What is the shortcut to apply the 'Fade In' effect?",
    options: ["Ctrl + F", "Alt + I", "No direct shortcut; must use menu", "Ctrl + I"],
    correctAnswer: "No direct shortcut; must use menu"
  },
  {
    question: "Shortcut to open the 'Truncate Silence' effect?",
    options: ["Ctrl + T", "No default shortcut", "Shift + T", "Alt + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What is the shortcut to split and move audio to a new track?",
    options: ["Ctrl + Alt + I", "Ctrl + Shift + I", "No default shortcut", "Ctrl + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What does Ctrl + Shift + F do in Audacity?",
    options: ["Zoom to fit selection", "Export file", "Export selection", "Fit to width"],
    correctAnswer: "Zoom to fit selection"
  },
  {
    question: "How do you access 'Tracks' menu from keyboard?",
    options: ["Alt + R", "Alt + T", "Alt + K", "Alt + A"],
    correctAnswer: "Alt + T"
  },
  {
    question: "Shortcut to generate a tone or noise?",
    options: ["Alt + G", "Ctrl + G", "No shortcut, use menu", "Shift + G"],
    correctAnswer: "Alt + G"
  },
  {
    question: "How do you apply 'Repeat Last Effect' multiple times?",
    options: ["Ctrl + R repeatedly", "Alt + R", "Shift + R", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + R repeatedly"
  },
  {
    question: "What key toggles 'Pinned Playhead'?",
    options: ["P", "Shift + P", "No shortcut", "Alt + P"],
    correctAnswer: "No shortcut"
  },
  {
    question: "What does Ctrl + I do in Audacity?",
    options: ["Import audio", "Split audio", "Invert audio", "Export audio"],
    correctAnswer: "Split audio"
  },
  {
    question: "What is the shortcut to import audio files?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Alt + I", "Ctrl + O"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What does Ctrl + L do in a waveform?",
    options: ["Silences selection", "Locks selection", "Loops selection", "Labels selection"],
    correctAnswer: "Silences selection"
  },
  {
    question: "What shortcut lets you mute/unmute focused track?",
    options: ["U", "Ctrl + U", "Shift + U", "Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "What does the combination Ctrl + Shift + M do?",
    options: ["Mute all tracks", "Open Label Editor", "Import MIDI", "Add label at selection"],
    correctAnswer: "Open Label Editor"
  },
  {
    question: "Shortcut to move playback position forward by 1 second?",
    options: ["→", "Shift + →", "Ctrl + →", "Alt + →"],
    correctAnswer: "→"
  },
  {
    question: "Shortcut to move playback position back by 1 second?",
    options: ["←", "Shift + ←", "Ctrl + ←", "Alt + ←"],
    correctAnswer: "←"
  },
  {
    question: "What does Ctrl + D do?",
    options: ["Duplicate selection", "Delete track", "Deselect all", "Duplicate label"],
    correctAnswer: "Duplicate selection"
  },
  {
    question: "Shortcut to toggle track solo?",
    options: ["Ctrl + S", "Shift + S", "Alt + S", "Ctrl + Shift + S"],
    correctAnswer: "Shift + S"
  },
  {
    question: "What is the shortcut to repeat playback?",
    options: ["R", "Shift + R", "L", "Ctrl + L"],
    correctAnswer: "L"
  },
  {
    question: "What does Ctrl + Shift + T do?",
    options: ["Add mono track", "Add stereo track", "Add label track", "Add MIDI track"],
    correctAnswer: "Add stereo track"
  },
  {
    question: "How do you open the 'Effect' menu using keyboard?",
    options: ["Alt + E", "Alt + F", "Ctrl + E", "Alt + Ctrl + E"],
    correctAnswer: "Alt + E"
  },
  {
    question: "What does the shortcut Ctrl + Shift + Z do?",
    options: ["Zoom in", "Redo", "Reset", "Invert"],
    correctAnswer: "Redo"
  },
  {
    question: "Shortcut to move audio in a clip to the left?",
    options: ["Ctrl + ←", "Shift + ←", "Alt + ←", "Tab"],
    correctAnswer: "Ctrl + ←"
  },
  {
    question: "Shortcut to toggle visibility of meter toolbar?",
    options: ["No shortcut", "F9", "Ctrl + M", "Ctrl + Shift + M"],
    correctAnswer: "No shortcut"
  },
  {
    question: "What tool is activated by pressing F3?",
    options: ["Envelope Tool", "Draw Tool", "Time Shift Tool", "Selection Tool"],
    correctAnswer: "Draw Tool"
  },
  {
    question: "What tool is activated by F5?",
    options: ["Selection Tool", "Envelope Tool", "Time Shift Tool", "Multi-Tool"],
    correctAnswer: "Time Shift Tool"
  },
  {
    question: "What is the shortcut to select audio from current point to start?",
    options: ["Shift + Home", "Ctrl + Home", "Ctrl + Shift + ←", "Alt + Home"],
    correctAnswer: "Shift + Home"
  },
  {
    question: "What is the shortcut to select audio from current point to end?",
    options: ["Shift + End", "Ctrl + End", "Ctrl + Shift + →", "Alt + End"],
    correctAnswer: "Shift + End"
  },
  {
    question: "What does Ctrl + Shift + N do?",
    options: ["New stereo track", "New mono track", "New label track", "New project"],
    correctAnswer: "New mono track"
  },
  {
    question: "What is the shortcut to delete an entire clip?",
    options: ["Delete", "Ctrl + K", "Ctrl + Delete", "Shift + Delete"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What does pressing Ctrl + Shift + E do in Audacity?",
    options: ["Export selection", "Export project", "Export audio as MP3", "Export labels"],
    correctAnswer: "Export selection"
  },
  {
    question: "Shortcut to select the entire track?",
    options: ["Ctrl + A", "Ctrl + T", "Ctrl + Shift + T", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "What is the shortcut to deselect all?",
    options: ["Ctrl + Shift + A", "Ctrl + D", "Ctrl + A, then Esc", "Ctrl + X"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "What does Ctrl + Shift + F do?",
    options: ["Fit selection to window", "Fit project vertically", "Fit all tracks to screen", "Zoom to width"],
    correctAnswer: "Fit selection to window"
  },
  {
    question: "Shortcut to open preferences/settings dialog?",
    options: ["Ctrl + P", "Ctrl + ,", "Ctrl + Shift + P", "Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you activate Envelope Tool via shortcut?",
    options: ["F2", "F4", "F5", "F6"],
    correctAnswer: "F2"
  },
  {
    question: "What does pressing Ctrl + Shift + M do?",
    options: ["Opens label editor", "Mutes all tracks", "Opens metadata editor", "Minimizes windows"],
    correctAnswer: "Opens label editor"
  },
  {
    question: "Shortcut to switch between different tools using keyboard?",
    options: ["F1–F6 keys", "Ctrl + 1 to 6", "Alt + Tool name", "Shift + Tab"],
    correctAnswer: "F1–F6 keys"
  },
  {
    question: "What does pressing Ctrl + Shift + Z accomplish?",
    options: ["Redo an undone action", "Zoom in", "Reset levels", "Undo all"],
    correctAnswer: "Redo an undone action"
  },
  {
    question: "Shortcut to increase playback speed temporarily?",
    options: ["Hold Shift", "Hold Ctrl", "Hold Alt", "Hold Space"],
    correctAnswer: "Hold Shift"
  },
  {
    question: "Shortcut to focus on selection toolbar?",
    options: ["Tab until focus", "Alt + S", "Ctrl + Tab", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "What does Ctrl + Shift + N do in Audacity?",
    options: ["Add new mono track", "Add new stereo track", "Start a new project", "Open noise reduction"],
    correctAnswer: "Add new mono track"
  },
  {
    question: "Shortcut to cycle focus between track components?",
    options: ["Tab", "Ctrl + Tab", "Shift + Tab", "Alt + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to focus the gain slider of a track?",
    options: ["Tab until focused", "No direct shortcut", "G", "Ctrl + G"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "What is the shortcut for 'Cut' in Audacity?",
    options: ["Ctrl + X", "Ctrl + K", "Ctrl + Delete", "Alt + X"],
    correctAnswer: "Ctrl + X"
  },
  {
    question: "What does the shortcut Ctrl + Shift + S do?",
    options: ["Save project as…", "Solo all tracks", "Save current clip", "Export stereo track"],
    correctAnswer: "Save project as…"
  },
  {
    question: "Shortcut to open the Tracks dropdown menu via keyboard?",
    options: ["Alt + T", "Use Menu key", "Ctrl + T", "Alt + K"],
    correctAnswer: "Use Menu key"
  },
  {
    question: "Shortcut to toggle mute on the current track?",
    options: ["Ctrl + U", "M", "Ctrl + M", "Shift + M"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "What is the shortcut to pan left in a stereo track?",
    options: ["Left arrow when Pan control focused", "Ctrl + Left", "Shift + ←", "No direct shortcut"],
    correctAnswer: "Left arrow when Pan control focused"
  },
  {
    question: "What does pressing F6 do?",
    options: ["Select Multi-tool", "Select Time Shift Tool", "Activate label editing", "Switch focus"],
    correctAnswer: "Select Multi-tool"
  },
  {
    question: "Shortcut to redo the last undone operation?",
    options: ["Ctrl + Shift + Z", "Ctrl + Y", "Ctrl + R", "Ctrl + Alt + Z"],
    correctAnswer: "Ctrl + Shift + Z"
  },
  {
    question: "What does the combination Ctrl + Alt + K do?",
    options: ["Opens Keyboard Preferences", "Kills a process", "No effect", "Mutes project"],
    correctAnswer: "Opens Keyboard Preferences"
  },
  {
    question: "Shortcut to open metadata editor?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "No shortcut"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What does pressing Spacebar twice quickly do?",
    options: ["Toggle loop playback", "Restart playback", "No effect", "Plays with reduced latency"],
    correctAnswer: "No effect"
  },
  {
    question: "Shortcut to zoom out fully?",
    options: ["Ctrl + 3", "Ctrl + Shift + 3", "Ctrl + F", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "What does Ctrl + Shift + D do in Audacity?",
    options: ["Duplicate to new track", "Split to new track", "Duplicate with time shift", "Deselect and delete"],
    correctAnswer: "Split to new track"
  },
  {
    question: "Shortcut to quickly start recording at end of track?",
    options: ["Shift + R", "Append Record (Shift + R)", "Ctrl + R", "R"],
    correctAnswer: "Append Record (Shift + R)"
  },
  {
    question: "Shortcut to stop playback or recording?",
    options: ["Spacebar", "Enter", "Esc", "Shift + Space"],
    correctAnswer: "Spacebar"
  },
  {
    question: "Shortcut to open the Analyze menu?",
    options: ["Alt + Z", "Alt + Y", "Alt + A", "Alt + N"],
    correctAnswer: "Alt + A"
  },
  {
    question: "Shortcut to open Generate > Silence effect?",
    options: ["No default shortcut", "Ctrl + Alt + S", "Shift + S", "Alt + Shift + G"],
    correctAnswer: "No default shortcut"
  }
    ],
    hard: [
      {
    question: "What shortcut opens the Keyboard Preferences dialog to customize shortcuts?",
    options: ["Ctrl + Alt + K", "Ctrl + Shift + K", "Alt + Ctrl + P", "Ctrl + K"],
    correctAnswer: "Ctrl + Alt + K"
  },
  {
    question: "How do you quickly export multiple tracks as separate files using shortcuts?",
    options: ["No default shortcut; use Export Multiple menu", "Ctrl + Shift + M", "Alt + E", "Ctrl + E"],
    correctAnswer: "No default shortcut; use Export Multiple menu"
  },
  {
    question: "What shortcut can you use to \"Fit Project Vertically\" in the view?",
    options: ["Ctrl + Shift + F", "Ctrl + Alt + F", "Ctrl + 2", "Ctrl + 1"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "How do you toggle the \"Snap To\" feature using keyboard?",
    options: ["Ctrl + Shift + S", "No default shortcut", "Alt + S", "Shift + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to apply \"Nyquist Prompt\" (custom effect input)?",
    options: ["Ctrl + Alt + N", "Alt + N", "Ctrl + N", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What key combo lets you split clips at the cursor position without creating a new track?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Ctrl + K", "Shift + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "How do you quickly select all clips in all tracks?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "No single shortcut", "Ctrl + Alt + A"],
    correctAnswer: "No single shortcut"
  },
  {
    question: "Shortcut to enable or disable \"Scrub\" playback?",
    options: ["Ctrl + Shift + S", "No default shortcut", "Alt + S", "Shift + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you toggle \"Record Monitoring\" on/off using the keyboard?",
    options: ["Ctrl + M", "No default shortcut", "Alt + R", "Shift + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to set the left or right selection boundary using keyboard?",
    options: ["Shift + Home/End", "Ctrl + Home/End", "Ctrl + Shift + Left/Right Arrow", "Alt + Shift + Left/Right Arrow"],
    correctAnswer: "Shift + Home/End"
  },
  {
    question: "How do you add a new label at the current selection or cursor position?",
    options: ["Ctrl + B", "Ctrl + M", "Ctrl + L", "Alt + L"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "What is the shortcut to toggle the \"Snap To\" option on/off?",
    options: ["No default shortcut", "Ctrl + Shift + S", "Alt + S", "Shift + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you zoom in horizontally centered on the cursor?",
    options: ["Ctrl + 1", "Ctrl + =", "Ctrl + Mouse Wheel Up", "Ctrl + Shift + Z"], 
    correctAnswer: "Ctrl + Mouse Wheel Up"
  },
  {
    question: "Shortcut to change the vertical zoom of all tracks?",
    options: ["Ctrl + Shift + Up/Down Arrow", "Ctrl + Alt + Up/Down Arrow", "Ctrl + Up/Down Arrow", "Shift + Up/Down Arrow"],
    correctAnswer: "Ctrl + Shift + Up/Down Arrow"
  },
  {
    question: "How do you toggle the \"Mixer Board\" window via shortcut?",
    options: ["Ctrl + Shift + M", "Alt + M", "No default shortcut", "Ctrl + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the \"Chain\" dialog for batch processing?",
    options: ["Ctrl + Shift + C", "Alt + C", "Ctrl + C", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you insert a new label track?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "No default shortcut"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "What shortcut moves the cursor to the start of the project?",
    options: ["Ctrl + Home", "Shift + Home", "Home", "Ctrl + Shift + Home"],
    correctAnswer: "Ctrl + Home"
  },
  {
    question: "How to move the cursor to the end of the project?",
    options: ["Ctrl + End", "Shift + End", "End", "Ctrl + Shift + End"],
    correctAnswer: "Ctrl + End"
  },
  {
    question: "How do you cycle through the available tools?",
    options: ["F1 to F6", "Tab key", "Ctrl + Tab", "No shortcut"],
    correctAnswer: "F1 to F6"
  },
  {
    question: "Shortcut for toggling the \"Time Shift\" tool?",
    options: ["F5", "F6", "Ctrl + F5", "Alt + F5"],
    correctAnswer: "F5"
  },
  {
    question: "What shortcut deletes a label at the cursor position?",
    options: ["Ctrl + Shift + K", "Ctrl + K", "Delete key", "Backspace"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "Shortcut to zoom out horizontally?",
    options: ["Ctrl + 3", "Ctrl + -", "Ctrl + Shift + 3", "Ctrl + Shift + -"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "What does Ctrl + Shift + J do?",
    options: ["Join selected clips", "Split clips", "No default shortcut", "Jump to next label"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to \"Normalize\" audio using keyboard?",
    options: ["No default shortcut", "Alt + N", "Ctrl + N", "Shift + N"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What shortcut applies \"Noise Reduction\" effect?",
    options: ["No default shortcut", "Ctrl + Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to toggle the \"Scrub\" tool?",
    options: ["No default shortcut", "Shift + S", "Ctrl + S", "Alt + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to select the entire audio on the track?",
    options: ["Ctrl + A", "Shift + A", "Ctrl + Shift + A", "Alt + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Shortcut to \"Split Delete\" selected audio?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Delete", "Backspace"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "Shortcut to add a new label at playback cursor?",
    options: ["Ctrl + B", "Ctrl + M", "Ctrl + L", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "What shortcut undoes last action?",
    options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + Shift + Z", "Alt + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "Shortcut to redo last undone action?",
    options: ["Ctrl + Shift + Z", "Ctrl + Y", "Ctrl + Z", "Alt + Y"],
    correctAnswer: "Ctrl + Shift + Z"
  },
  {
    question: "What does Ctrl + Shift + P do?",
    options: ["Opens Project Rate settings", "Opens Preferences", "Starts playback", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to toggle Track Control Panel visibility?",
    options: ["No default shortcut", "Ctrl + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to change playback speed temporarily?",
    options: ["Hold Shift while playing", "Hold Ctrl while playing", "Hold Alt while playing", "Hold Space while playing"],
    correctAnswer: "Hold Shift while playing"
  },
  {
    question: "Shortcut to select next label?",
    options: ["Ctrl + Alt + Right Arrow", "Ctrl + Shift + Right Arrow", "Alt + Right Arrow", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to select previous label?",
    options: ["Ctrl + Alt + Left Arrow", "Ctrl + Shift + Left Arrow", "Alt + Left Arrow", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you enable \"Loop Play\" mode via keyboard?",
    options: ["Ctrl + L", "No default shortcut", "Alt + L", "Shift + L"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "What shortcut toggles \"Follow Cursor\" mode?",
    options: ["No default shortcut", "Ctrl + F", "Alt + F", "Shift + F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to split audio at cursor and delete right part?",
    options: ["Ctrl + Shift + K", "Ctrl + K", "Delete", "Backspace"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "Shortcut to enable/disable \"Punch and Roll\" recording?",
    options: ["No default shortcut", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you move playback cursor forward by 5 seconds?",
    options: ["Ctrl + Right Arrow", "Shift + Right Arrow", "Alt + Right Arrow", "No default shortcut"],
    correctAnswer: "Ctrl + Right Arrow"
  },
  {
    question: "How do you move playback cursor backward by 5 seconds?",
    options: ["Ctrl + Left Arrow", "Shift + Left Arrow", "Alt + Left Arrow", "No default shortcut"],
    correctAnswer: "Ctrl + Left Arrow"
  },
  {
    question: "Shortcut to add a new stereo track?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + Shift + N", "Ctrl + N"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "How to toggle \"Mixer Toolbar\" visibility?",
    options: ["No default shortcut", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to toggle \"Spectrogram\" view for a track?",
    options: ["Right-click > Spectrogram (no shortcut)", "Alt + S", "Ctrl + Alt + S", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to reset zoom to default?",
    options: ["Ctrl + 1", "Ctrl + F", "Ctrl + Shift + F", "Ctrl + 0"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "Shortcut to open the \"Effects\" menu?",
    options: ["Alt + E", "Ctrl + E", "Ctrl + Alt + E", "Shift + E"],
    correctAnswer: "Alt + E"
  },
  {
    question: "Shortcut to pause playback?",
    options: ["Spacebar", "P", "Ctrl + Space", "No pause function (space toggles play/stop)"],
    correctAnswer: "No pause function (space toggles play/stop)"
  },
  {
    question: "Shortcut to add a label at the current playback position?",
    options: ["Ctrl + M", "Ctrl + B", "Ctrl + L", "Alt + M"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "Shortcut to close the current project?",
    options: ["Ctrl + W", "Ctrl + Shift + W", "Alt + F4", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to toggle the \"Time Track\" display?",
    options: ["No default shortcut", "Ctrl + T", "Alt + T", "Shift + T"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to export audio as WAV?",
    options: ["Ctrl + Shift + E (then select WAV)", "Ctrl + E", "Alt + E", "Ctrl + W"],
    correctAnswer: "Ctrl + Shift + E (then select WAV)"
  },
  {
    question: "Shortcut to export audio as MP3?",
    options: ["Ctrl + Shift + E (then select MP3)", "Ctrl + E", "Alt + E", "Ctrl + M"],
    correctAnswer: "Ctrl + Shift + E (then select MP3)"
  },
  {
    question: "Shortcut to insert silence?",
    options: ["No default shortcut", "Ctrl + I", "Alt + I", "Shift + I"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to toggle \"Multi-Tool\" mode?",
    options: ["F6", "F5", "F4", "F3"],
    correctAnswer: "F6"
  },
  {
    question: "Shortcut to mute all tracks except selected one?",
    options: ["No default shortcut", "Ctrl + Shift + M", "Alt + M", "Shift + M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to solo a track?",
    options: ["Ctrl + U", "Alt + U", "Shift + U", "No default shortcut"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Shortcut to toggle \"Spectral Selection\" mode?",
    options: ["No default shortcut", "Ctrl + Alt + S", "Alt + S", "Shift + S"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to reset all preferences to default?",
    options: ["No default shortcut", "Ctrl + Alt + R", "Shift + Ctrl + R", "Alt + R"],
    correctAnswer: "No default shortcut"
  }
    ]
  },



  "VLC Media Player": {
    easy: [
      {
    question: "How do you play or pause the video?",
    options: ["Spacebar", "P", "Enter", "Ctrl + P"],
    correctAnswer: "Spacebar"
  },
  {
    question: "How do you stop the video?",
    options: ["S", "Q", "Spacebar", "Ctrl + S"],
    correctAnswer: "S"
  },
  {
    question: "How do you mute or unmute the audio?",
    options: ["M", "Ctrl + M", "U", "A"],
    correctAnswer: "M"
  },
  {
    question: "How do you increase the volume?",
    options: ["Up Arrow", "Ctrl + Up Arrow", "Shift + Up Arrow", "Alt + Up Arrow"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you decrease the volume?",
    options: ["Down Arrow", "Ctrl + Down Arrow", "Shift + Down Arrow", "Alt + Down Arrow"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "How to go to the next media in the playlist?",
    options: ["N", "Ctrl + N", "P", "Ctrl + P"],
    correctAnswer: "N"
  },
  {
    question: "How to go to the previous media in the playlist?",
    options: ["P", "Ctrl + P", "N", "Ctrl + N"],
    correctAnswer: "P"
  },
  {
    question: "How to increase playback speed?",
    options: ["+ (Plus)", "Ctrl + +", "Shift + +", "Alt + +"],
    correctAnswer: "+ (Plus)"
  },
  {
    question: "How to decrease playback speed?",
    options: ["- (Minus)", "Ctrl + -", "Shift + -", "Alt + -"],
    correctAnswer: "- (Minus)"
  },
  {
    question: "How to toggle fullscreen mode?",
    options: ["F", "Ctrl + F", "Alt + F", "Shift + F"],
    correctAnswer: "F"
  },
  {
    question: "How to toggle subtitles on or off?",
    options: ["V", "S", "Ctrl + S", "U"],
    correctAnswer: "V"
  },
  {
    question: "How to take a snapshot of the current video frame?",
    options: ["Shift + S", "Ctrl + S", "Alt + S", "S"],
    correctAnswer: "Shift + S"
  },
  {
    question: "How to open a file?",
    options: ["Ctrl + O", "Ctrl + F", "Ctrl + N", "Alt + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How to toggle loop mode?",
    options: ["L", "Ctrl + L", "Shift + L", "Alt + L"],
    correctAnswer: "L"
  },
  {
    question: "How to toggle random (shuffle) playback?",
    options: ["R", "Ctrl + R", "Shift + R", "Alt + R"],
    correctAnswer: "R"
  },
  {
    question: "How to jump forward 10 seconds?",
    options: ["Ctrl + Right Arrow", "Alt + Right Arrow", "Right Arrow", "Shift + Right Arrow"],
    correctAnswer: "Right Arrow"
  },
  {
    question: "How to jump backward 10 seconds?",
    options: ["Left Arrow", "Ctrl + Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
    correctAnswer: "Left Arrow"
  },
  {
    question: "How to increase subtitle delay?",
    options: ["H", "G", "J", "K"],
    correctAnswer: "H"
  },
  {
    question: "How to decrease subtitle delay?",
    options: ["G", "H", "J", "K"],
    correctAnswer: "G"
  },
  {
    question: "How to toggle the playlist window?",
    options: ["Ctrl + L", "Ctrl + P", "Alt + L", "Shift + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How to show the media information window?",
    options: ["Ctrl + I", "Ctrl + M", "Alt + I", "Shift + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "How to open the media conversion window?",
    options: ["Ctrl + R", "Ctrl + C", "Alt + C", "Shift + C"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How to increase audio delay?",
    options: ["K", "J", "L", "H"],
    correctAnswer: "K"
  },
  {
    question: "How to decrease audio delay?",
    options: ["J", "K", "L", "H"],
    correctAnswer: "J"
  },
  {
    question: "How to show or hide the time display?",
    options: ["T", "Ctrl + T", "Shift + T", "Alt + T"],
    correctAnswer: "T"
  },
  {
    question: "How to toggle the status bar?",
    options: ["Ctrl + B", "Ctrl + S", "Alt + B", "Shift + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How to mute audio temporarily?",
    options: ["M", "Ctrl + M", "Shift + M", "Alt + M"],
    correctAnswer: "M"
  },
  {
    question: "How to increase volume by 5%?",
    options: ["Ctrl + Up Arrow", "Up Arrow", "Shift + Up Arrow", "Alt + Up Arrow"],
    correctAnswer: "Ctrl + Up Arrow"
  },
  {
    question: "How to decrease volume by 5%?",
    options: ["Ctrl + Down Arrow", "Down Arrow", "Shift + Down Arrow", "Alt + Down Arrow"],
    correctAnswer: "Ctrl + Down Arrow"
  },
  {
    question: "How to reset playback speed to normal?",
    options: ["= (Equal)", "0 (Zero)", "N", "R"],
    correctAnswer: "= (Equal)"
  },
  {
    question: "How to show or hide controls?",
    options: ["Ctrl + H", "H", "Alt + H", "Shift + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How to open the Extended Settings window?",
    options: ["Ctrl + E", "Ctrl + S", "Alt + E", "Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How to toggle the Equalizer window?",
    options: ["Ctrl + Shift + E", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "How to decrease playback rate?",
    options: ["- (Minus)", "Ctrl + -", "Shift + -", "Alt + -"],
    correctAnswer: "- (Minus)"
  },
  {
    question: "How to increase playback rate?",
    options: ["+ (Plus)", "Ctrl + +", "Shift + +", "Alt + +"],
    correctAnswer: "+ (Plus)"
  },
  {
    question: "How to jump forward 1 minute?",
    options: ["Ctrl + Right Arrow", "Shift + Right Arrow", "Alt + Right Arrow", "Right Arrow"],
    correctAnswer: "Ctrl + Right Arrow"
  },
  {
    question: "How to jump backward 1 minute?",
    options: ["Ctrl + Left Arrow", "Shift + Left Arrow", "Alt + Left Arrow", "Left Arrow"],
    correctAnswer: "Ctrl + Left Arrow"
  },
  {
    question: "How to jump to a specific time?",
    options: ["Ctrl + T", "Ctrl + G", "Alt + T", "Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How to cycle audio tracks?",
    options: ["B", "A", "C", "D"],
    correctAnswer: "B"
  },
  {
    question: "How to cycle subtitle tracks?",
    options: ["V", "S", "U", "T"],
    correctAnswer: "V"
  },
  {
    question: "How to switch aspect ratio?",
    options: ["A", "S", "R", "F"],
    correctAnswer: "A"
  },
  {
    question: "How to zoom video?",
    options: ["Z", "Ctrl + Z", "Shift + Z", "Alt + Z"],
    correctAnswer: "Z"
  },
  {
    question: "How to crop video?",
    options: ["Shift + C", "Ctrl + C", "Alt + C", "C"],
    correctAnswer: "Shift + C"
  },
  {
    question: "How to record the current media?",
    options: ["Shift + R", "Ctrl + R", "Alt + R", "R"],
    correctAnswer: "Shift + R"
  },
  {
    question: "How to pause during recording?",
    options: ["Shift + P", "Ctrl + P", "Alt + P", "P"],
    correctAnswer: "Shift + P"
  },
  {
    question: "How to stop recording?",
    options: ["Shift + S", "Ctrl + S", "Alt + S", "S"],
    correctAnswer: "Shift + S"
  },
  {
    question: "How to toggle loop from playlist?",
    options: ["Ctrl + L", "L", "Shift + L", "Alt + L"],
    correctAnswer: "L"
  },
  {
    question: "How to open network stream?",
    options: ["Ctrl + N", "Ctrl + O", "Alt + N", "Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How to toggle subtitles delay faster?",
    options: ["H", "G", "J", "K"],
    correctAnswer: "H"
  },
  {
    question: "How to toggle subtitles delay slower?",
    options: ["G", "H", "J", "K"],
    correctAnswer: "G"
  },
  {
    question: "How to toggle interface between minimal and full?",
    options: ["Ctrl + H", "H", "Alt + H", "Shift + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How to open playlist window?",
    options: ["Ctrl + L", "Ctrl + P", "Alt + L", "Shift + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How to switch subtitle track forward?",
    options: ["V", "S", "U", "T"],
    correctAnswer: "V"
  },
  {
    question: "How to switch audio track forward?",
    options: ["B", "A", "C", "D"],
    correctAnswer: "B"
  },
  {
    question: "How to toggle always on top?",
    options: ["Ctrl + T", "Alt + T", "Shift + T", "T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How to toggle minimal interface?",
    options: ["Ctrl + H", "Alt + H", "Shift + H", "Ctrl + I"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How to show/hide the equalizer quickly?",
    options: ["Ctrl + Shift + E", "Ctrl + E", "Alt + E", "E"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "What is the shortcut to open the \"Open Disc\" window?",
    options: ["Ctrl + D", "Ctrl + O", "Alt + D", "Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "What is the shortcut to open the \"Open Capture Device\" window?",
    options: ["Ctrl + C", "Ctrl + D", "Ctrl + V", "Alt + C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "What is the shortcut to quit VLC Media Player?",
    options: ["Ctrl + Q", "Alt + F4", "Q", "Ctrl + W"],
    correctAnswer: "Ctrl + Q"
  }
    ],
    medium: [
      {
    question: "How do you open the messages (debug) window?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the shortcut to toggle full-screen mode in VLC?",
    options: ["F", "Alt + Enter", "Ctrl + F", "Ctrl + Shift + F"],
    correctAnswer: "F"
  },
  {
    question: "How do you play the next media in the playlist?",
    options: ["Ctrl + N", "N", "Alt + Right Arrow", "Shift + N"],
    correctAnswer: "N"
  },
  {
    question: "What is the shortcut to open preferences/settings in VLC?",
    options: ["Ctrl + P", "Alt + P", "Ctrl + ,", "Ctrl + S"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What key do you press to open the Extended Settings (Audio/Video Effects)?",
    options: ["Ctrl + E", "E", "Alt + E", "Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you cycle through the audio tracks?",
    options: ["B", "A", "T", "Ctrl + B"],
    correctAnswer: "B"
  },
  {
    question: "How do you toggle between audio devices?",
    options: ["Ctrl + Shift + A", "A", "Ctrl + A", "Shift + A"],
    correctAnswer: "A"
  },
  {
    question: "How do you show or hide the playlist sidebar?",
    options: ["Ctrl + L", "P", "Shift + P", "Alt + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "What key plays the previous media in the playlist?",
    options: ["P", "Ctrl + P", "Alt + Left Arrow", "Shift + P"],
    correctAnswer: "P"
  },
  {
    question: "How do you jump 10 seconds forward in a video?",
    options: ["Shift + Right Arrow", "Alt + Right Arrow", "Ctrl + Right Arrow", "Right Arrow"],
    correctAnswer: "Shift + Right Arrow"
  },
  {
    question: "How do you increase playback speed slightly?",
    options: ["+", "=", ">", "]"],
    correctAnswer: "+"
  },
  {
    question: "How do you decrease playback speed slightly?",
    options: ["-", "_", "<", "["],
    correctAnswer: "-"
  },
  {
    question: "What is the shortcut for slower (fine) playback speed control?",
    options: ["Shift + -", "Shift + [", "Shift + <", "None of the above"],
    correctAnswer: "Shift + ["
  },
  {
    question: "How do you toggle the video fullscreen interface?",
    options: ["Ctrl + F", "F", "Shift + F", "Alt + F"],
    correctAnswer: "F"
  },
  {
    question: "How do you increase volume by a small increment?",
    options: ["Ctrl + Up Arrow", "Up Arrow", "Shift + Up Arrow", "+"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you decrease volume by a small increment?",
    options: ["Ctrl + Down Arrow", "Down Arrow", "Shift + Down Arrow", "-"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "How do you mute/unmute audio?",
    options: ["M", "Ctrl + M", "Alt + M", "Q"],
    correctAnswer: "M"
  },
  {
    question: "How do you loop the currently playing item?",
    options: ["L", "Ctrl + L", "Shift + L", "Alt + L"],
    correctAnswer: "L"
  },
  {
    question: "What is the shortcut to toggle subtitles on/off?",
    options: ["V", "S", "T", "U"],
    correctAnswer: "V"
  },
  {
    question: "How do you delay subtitles forward (increase sync delay)?",
    options: ["H", "G", "J", "K"],
    correctAnswer: "H"
  },
  {
    question: "How do you delay subtitles backward (decrease sync delay)?",
    options: ["G", "J", "K", "H"],
    correctAnswer: "G"
  },
  {
    question: "How do you increase audio delay?",
    options: ["K", "J", "L", "O"],
    correctAnswer: "K"
  },
  {
    question: "How do you decrease audio delay?",
    options: ["J", "K", "I", "L"],
    correctAnswer: "J"
  },
  {
    question: "How do you cycle through subtitle tracks?",
    options: ["J", "V", "T", "Shift + S"],
    correctAnswer: "V"
  },
  {
    question: "How do you toggle always-on-top window mode?",
    options: ["Ctrl + T", "Ctrl + Shift + T", "T", "Shift + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "What is the shortcut to toggle Advanced Controls in VLC?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "A", "Alt + A"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "How do you switch video to wallpaper mode?",
    options: ["Ctrl + W", "W", "Shift + W", "Alt + W"],
    correctAnswer: "Ctrl + W"
  },
  {
    question: "How do you jump to a specific time in a video?",
    options: ["Ctrl + T", "Shift + T", "Alt + T", "T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "What is the shortcut to hide/show the controller in fullscreen?",
    options: ["Ctrl + H", "H", "F", "None"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How do you open the \"Open Network Stream\" window?",
    options: ["Ctrl + N", "Ctrl + Shift + N", "Alt + N", "N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you open the \"Media Information\" window in VLC?",
    options: ["Ctrl + I", "Ctrl + Shift + I", "Alt + I", "Shift + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "How do you open codec information in VLC?",
    options: ["Ctrl + J", "J", "Alt + J", "Shift + J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "What shortcut is used to take a snapshot (screenshot) of the video?",
    options: ["Shift + S", "Ctrl + S", "Alt + S", "S"],
    correctAnswer: "Shift + S"
  },
  {
    question: "How do you toggle random playback?",
    options: ["R", "Ctrl + R", "Shift + R", "Alt + R"],
    correctAnswer: "R"
  },
  {
    question: "What shortcut opens the Audio menu?",
    options: ["Alt + A", "Ctrl + A", "Shift + A", "A"],
    correctAnswer: "Alt + A"
  },
  {
    question: "What shortcut opens the Video menu?",
    options: ["Alt + V", "Ctrl + V", "V", "Shift + V"],
    correctAnswer: "Alt + V"
  },
  {
    question: "What shortcut opens the Subtitles menu?",
    options: ["Alt + S", "Ctrl + S", "S", "Shift + S"],
    correctAnswer: "Alt + S"
  },
  {
    question: "What is the shortcut to toggle the minimal interface (no controls)?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "H", "F11"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How do you go forward 3 seconds in a video?",
    options: ["Right Arrow", "Shift + Right Arrow", "Ctrl + Right Arrow", "Alt + Right Arrow"],
    correctAnswer: "Right Arrow"
  },
  {
    question: "How do you rewind 3 seconds in a video?",
    options: ["Left Arrow", "Ctrl + Left Arrow", "Shift + Left Arrow", "Alt + Left Arrow"],
    correctAnswer: "Left Arrow"
  },
  {
    question: "How do you move forward 1 minute in a video?",
    options: ["Ctrl + Right Arrow", "Alt + Right Arrow", "Shift + Right Arrow", "Page Down"],
    correctAnswer: "Ctrl + Right Arrow"
  },
  {
    question: "How do you move backward 1 minute in a video?",
    options: ["Ctrl + Left Arrow", "Shift + Left Arrow", "Page Up", "Alt + Left Arrow"],
    correctAnswer: "Ctrl + Left Arrow"
  },
  {
    question: "How do you open the Open File dialog box?",
    options: ["Ctrl + O", "Ctrl + F", "Alt + O", "Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "What key toggles the Deinterlace option during playback?",
    options: ["D", "Shift + D", "Ctrl + D", "Alt + D"],
    correctAnswer: "D"
  },
  {
    question: "What key displays the elapsed time as a marquee overlay?",
    options: ["T", "Y", "Shift + T", "Ctrl + T"],
    correctAnswer: "T"
  },
  {
    question: "How do you zoom into the video using keyboard shortcut?",
    options: ["Z", "Ctrl + Z", "Shift + Z", "Alt + Z"],
    correctAnswer: "Z"
  },
  {
    question: "How do you open the Capture Device window?",
    options: ["Ctrl + C", "Alt + C", "Shift + C", "C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you open the Convert/Save dialog?",
    options: ["Ctrl + R", "Alt + R", "Shift + R", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "How do you open a disk (DVD/CD) in VLC?",
    options: ["Ctrl + D", "Alt + D", "Shift + D", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "What key do you press to quit VLC?",
    options: ["Ctrl + Q", "Q", "Alt + F4", "Ctrl + W"],
    correctAnswer: "Ctrl + Q"
  },
  {
    question: "What shortcut toggles playback (pause/play)?",
    options: ["Spacebar", "Enter", "P", "Ctrl + Space"],
    correctAnswer: "Spacebar"
  },
  {
    question: "What is the shortcut to toggle the playlist view?",
    options: ["Ctrl + L", "Alt + P", "Shift + L", "P"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How do you toggle the equalizer window?",
    options: ["Ctrl + E", "Shift + E", "Alt + E", "E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "What shortcut reopens the last closed VLC media file?",
    options: ["There is no such shortcut", "Ctrl + Shift + T", "Ctrl + Shift + R", "Alt + T"],
    correctAnswer: "There is no such shortcut"
  },
  {
    question: "What key shows the audio effects menu in VLC?",
    options: ["Ctrl + E", "A", "Alt + E", "Ctrl + A"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you view media statistics during playback?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Alt + I", "Shift + S"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What is the shortcut to jump forward 5 minutes?",
    options: ["Ctrl + Alt + Right Arrow", "Alt + Right Arrow", "Ctrl + Page Down", "Page Down"],
    correctAnswer: "Ctrl + Page Down"
  },
  {
    question: "What is the shortcut to jump backward 5 minutes?",
    options: ["Ctrl + Page Up", "Alt + Page Up", "Page Up", "Ctrl + Left Arrow"],
    correctAnswer: "Ctrl + Page Up"
  },
  {
    question: "What key toggles the time display mode (elapsed/remaining)?",
    options: ["T", "O", "Y", "Shift + T"],
    correctAnswer: "T"
  },
  {
    question: "What is the shortcut for toggling record function (after enabling advanced controls)?",
    options: ["R", "Shift + R", "Alt + R", "Ctrl + R"],
    correctAnswer: "R"
  }
    ],
    hard: [
      {
    question: "How do you toggle the Deinterlace mode?",
    options: ["D", "Shift + D", "Ctrl + D", "Alt + D"],
    correctAnswer: "Shift + D"
  },
  {
    question: "How do you show extended settings (adjust video/audio effects)?",
    options: ["Ctrl + E", "Alt + E", "Ctrl + Alt + E", "Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you jump 10 seconds forward in a video?",
    options: ["Right Arrow", "Shift + Right Arrow", "Alt + Right Arrow", "Ctrl + Right Arrow"],
    correctAnswer: "Shift + Right Arrow"
  },
  {
    question: "How do you jump 10 seconds backward in a video?",
    options: ["Shift + Left Arrow", "Alt + Left Arrow", "Ctrl + Left Arrow", "Left Arrow"],
    correctAnswer: "Shift + Left Arrow"
  },
  {
    question: "How do you show the bookmarks menu in VLC?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Alt + B", "Shift + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "How do you take a snapshot of the current frame?",
    options: ["Shift + S", "Ctrl + Alt + S", "S", "Ctrl + Shift + S"],
    correctAnswer: "Shift + S"
  },
  {
    question: "How do you open the messages/debug log window?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Ctrl + Alt + M", "Alt + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the shortcut to record currently playing media?",
    options: ["Shift + R", "Ctrl + R", "Alt + R", "Ctrl + Shift + R"],
    correctAnswer: "Shift + R"
  },
  {
    question: "How do you toggle between full screen and window mode?",
    options: ["F11", "F", "Ctrl + F", "Alt + Enter"],
    correctAnswer: "F"
  },
  {
    question: "How do you toggle subtitles on/off?",
    options: ["V", "S", "T", "U"],
    correctAnswer: "V"
  },
  {
    question: "How do you delay subtitles forward?",
    options: ["H", "G", "J", "K"],
    correctAnswer: "H"
  },
  {
    question: "How do you delay subtitles backward?",
    options: ["G", "H", "K", "J"],
    correctAnswer: "G"
  },
  {
    question: "What key shows media information (codec details, metadata)?",
    options: ["Ctrl + I", "Ctrl + Alt + I", "Alt + M", "Shift + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What key opens the streaming wizard?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "Alt + S", "Ctrl + Alt + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "What shortcut increases playback speed?",
    options: ["=", "+", "Ctrl + Up", "]"],
    correctAnswer: "+"
  },
  {
    question: "What shortcut decreases playback speed?",
    options: ["-", "[", "Ctrl + Down", "Shift + -"],
    correctAnswer: "-"
  },
  {
    question: "How do you reset playback speed to normal?",
    options: ["=", "0", "Shift + =", "Spacebar"],
    correctAnswer: "Shift + ="
  },
  {
    question: "How do you cycle through audio tracks?",
    options: ["B", "A", "L", "K"],
    correctAnswer: "B"
  },
  {
    question: "Which shortcut enables frame-by-frame playback?",
    options: ["E", "F", "V", "X"],
    correctAnswer: "E"
  },
  {
    question: "Which key disables/enables audio?",
    options: ["M", "N", "Ctrl + M", "Shift + M"],
    correctAnswer: "M"
  },
  {
    question: "What shortcut opens the equalizer?",
    options: ["Ctrl + E", "Shift + E", "Alt + E", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you toggle minimal interface mode?",
    options: ["Ctrl + H", "Ctrl + M", "F11", "Alt + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "What key toggles the playlist view?",
    options: ["Ctrl + L", "P", "Alt + P", "Ctrl + Shift + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "What shortcut switches to advanced controls?",
    options: ["View → Advanced Controls", "Ctrl + A", "Ctrl + Shift + C", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Which shortcut shows VLC preferences?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Ctrl + Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you open network stream directly?",
    options: ["Ctrl + N", "Alt + N", "Ctrl + Shift + N", "Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "What is the shortcut for volume up by 5%?",
    options: ["Ctrl + Up", "Up Arrow", "+", "Shift + Up"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "What is the shortcut for volume down by 5%?",
    options: ["Down Arrow", "Ctrl + Down", "-", "Shift + Down"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "How do you move forward 3 seconds?",
    options: ["Right Arrow", "Shift + Right Arrow", "Ctrl + Right Arrow", "Alt + Right Arrow"],
    correctAnswer: "Right Arrow"
  },
  {
    question: "How do you move backward 3 seconds?",
    options: ["Left Arrow", "Shift + Left Arrow", "Ctrl + Left Arrow", "Alt + Left Arrow"],
    correctAnswer: "Left Arrow"
  },
  {
    question: "How do you toggle audio visualizations?",
    options: ["V", "Ctrl + V", "No direct shortcut", "Shift + V"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you loop a section (A-B loop)?",
    options: ["Shift + L", "L", "No direct shortcut", "Alt + L"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you open media folder for playback?",
    options: ["Ctrl + F", "Ctrl + Shift + F", "Ctrl + Alt + F", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How do you stop playback immediately?",
    options: ["S", "Ctrl + S", "Alt + S", "Shift + S"],
    correctAnswer: "S"
  },
  {
    question: "How do you pause or resume playback?",
    options: ["Spacebar", "P", "Enter", "Ctrl + Space"],
    correctAnswer: "Spacebar"
  },
  {
    question: "Which key cycles through subtitle tracks?",
    options: ["V", "T", "S", "L"],
    correctAnswer: "S"
  },
  {
    question: "How do you mute/unmute audio in VLC?",
    options: ["M", "Ctrl + M", "Shift + M", "Alt + M"],
    correctAnswer: "M"
  },
  {
    question: "How do you view the VLC log file (Messages)?",
    options: ["Ctrl + M", "Ctrl + Shift + M", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the shortcut to jump to a specific time?",
    options: ["Ctrl + T", "Alt + T", "Shift + T", "T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "How do you change the aspect ratio?",
    options: ["A", "R", "Alt + A", "Ctrl + A"],
    correctAnswer: "A"
  },
  {
    question: "Which shortcut cycles through zoom modes?",
    options: ["Z", "Ctrl + Z", "Alt + Z", "Shift + Z"],
    correctAnswer: "Z"
  },
  {
    question: "How do you rotate video orientation?",
    options: ["Extended Settings only", "R", "Ctrl + R", "Alt + R"],
    correctAnswer: "Extended Settings only"
  },
  {
    question: "How do you enable synchronization settings?",
    options: ["Ctrl + I", "Ctrl + E", "Tools → Track Synchronization", "Ctrl + T"],
    correctAnswer: "Tools → Track Synchronization"
  },
  {
    question: "Which shortcut toggles fullscreen?",
    options: ["F", "F11", "Alt + Enter", "Ctrl + F"],
    correctAnswer: "F"
  },
  {
    question: "How do you go to the next media in the playlist?",
    options: ["N", "Ctrl + N", "Shift + N", "Alt + N"],
    correctAnswer: "N"
  },
  {
    question: "How do you go to the previous media in the playlist?",
    options: ["P", "Ctrl + P", "Shift + P", "Alt + P"],
    correctAnswer: "P"
  },
  {
    question: "What is the shortcut to loop the currently playing item?",
    options: ["L", "Ctrl + L", "Shift + L", "Alt + L"],
    correctAnswer: "L"
  },
  {
    question: "How do you display subtitles delay in milliseconds?",
    options: ["Tools → Track Sync", "G / H keys", "Ctrl + Alt + G", "Ctrl + Shift + H"],
    correctAnswer: "G / H keys"
  },
  {
    question: "How do you adjust audio delay?",
    options: ["J / K", "H / G", "L / ;", "Shift + J / K"],
    correctAnswer: "J / K"
  },
  {
    question: "What is the shortcut to quit VLC?",
    options: ["Ctrl + Q", "Alt + F4", "Ctrl + W", "Q"],
    correctAnswer: "Ctrl + Q"
  }
    ]
  },


  "Trello": {
    easy: [
      {
    question: "How do you open the board menu in Trello?",
    options: ["B", "M", "W", "Q"],
    correctAnswer: "B"
  },
  {
    question: "What shortcut opens the card details for a selected card?",
    options: ["Enter", "Space", "D", "C"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you add a new card to a list quickly?",
    options: ["N", "C", "A", "L"],
    correctAnswer: "N"
  },
  {
    question: "Shortcut to archive a card?",
    options: ["C", "A", "Q", "X"],
    correctAnswer: "C"
  },
  {
    question: "How to open the search bar?",
    options: ["F", "S", "/", "Q"],
    correctAnswer: "/"
  },
  {
    question: "What shortcut lets you assign yourself to a card?",
    options: ["Space", "M", "A", "S"],
    correctAnswer: "Space"
  },
  {
    question: "How do you open the \"Add Members\" window?",
    options: ["M", "A", "U", "E"],
    correctAnswer: "M"
  },
  {
    question: "Shortcut to open the boards page?",
    options: ["B", "W", "Q", "L"],
    correctAnswer: "W"
  },
  {
    question: "How to open the calendar power-up?",
    options: ["Y", "K", "C", "T"],
    correctAnswer: "Y"
  },
  {
    question: "Shortcut to open the activity feed?",
    options: ["G then A", "F then A", "A then G", "Shift + A"],
    correctAnswer: "G then A"
  },
  {
    question: "How to collapse or expand the board menu?",
    options: ["B", "W", "M", "N"],
    correctAnswer: "W"
  },
  {
    question: "Shortcut to move a card?",
    options: ["V", "M", "L", "S"],
    correctAnswer: "V"
  },
  {
    question: "How to add a new checklist to a card?",
    options: ["K", "C", "L", "A"],
    correctAnswer: "L"
  },
  {
    question: "Shortcut to add a due date?",
    options: ["D", "T", "U", "E"],
    correctAnswer: "D"
  },
  {
    question: "How to quickly open a card's labels menu?",
    options: ["L", "C", "M", "V"],
    correctAnswer: "L"
  },
  {
    question: "Shortcut to copy a card?",
    options: ["Ctrl + C", "C then C", "Shift + C", "No default shortcut"],
    correctAnswer: "C then C"
  },
  {
    question: "How do you open the card's description editor?",
    options: ["E", "D", "R", "T"],
    correctAnswer: "E"
  },
  {
    question: "Shortcut to open the comment box on a card?",
    options: ["R", "C", "M", "L"],
    correctAnswer: "R"
  },
  {
    question: "How do you open the labels manager?",
    options: ["L", "C", "M", "V"],
    correctAnswer: "L"
  },
  {
    question: "Shortcut to filter cards assigned to you?",
    options: ["Q", "A", "F", "U"],
    correctAnswer: "Q"
  },
  {
    question: "How do you open the card's move menu?",
    options: ["V", "M", "L", "S"],
    correctAnswer: "V"
  },
  {
    question: "Shortcut to assign someone to a card?",
    options: ["M", "A", "S", "U"],
    correctAnswer: "M"
  },
  {
    question: "How to open the board's settings?",
    options: ["B then S", "W then S", "G then B", "No default shortcut"],
    correctAnswer: "G then B"
  },
  {
    question: "Shortcut to undo the last action?",
    options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "No default shortcut"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "How do you open the \"Create new board\" dialog?",
    options: ["B then N", "G then N", "W then N", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to archive a list?",
    options: ["No default shortcut", "L then A", "Alt + A", "Shift + A"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you toggle the sidebar on/off?",
    options: ["W", "B", "M", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Power-Ups menu?",
    options: ["P", "U", "L", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you move a card up or down in a list?",
    options: ["Drag and drop only", "Ctrl + Up/Down", "Alt + Up/Down", "No default shortcut"],
    correctAnswer: "Drag and drop only"
  },
  {
    question: "Shortcut to create a new list?",
    options: ["No default shortcut", "L then N", "Ctrl + N", "Shift + N"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to archive a card from the keyboard?",
    options: ["C", "A", "X", "D"],
    correctAnswer: "C"
  },
  {
    question: "Shortcut to open the board's activity feed?",
    options: ["G then A", "F then A", "Shift + A", "Ctrl + A"],
    correctAnswer: "G then A"
  },
  {
    question: "How do you open the members pane?",
    options: ["M", "L", "N", "W"],
    correctAnswer: "M"
  },
  {
    question: "Shortcut to open the card's attachments menu?",
    options: ["F", "A", "T", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How do you archive completed cards in a list?",
    options: ["No default shortcut", "Right-click and select archive", "Use archive button in menu", "Both B and C"],
    correctAnswer: "Both B and C"
  },
  {
    question: "Shortcut to open the board's labels manager?",
    options: ["L", "G then L", "No default shortcut", "Ctrl + L"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to search cards assigned to others?",
    options: ["Use Search bar (/) and filters", "No default shortcut", "G then S", "M then S"],
    correctAnswer: "Use Search bar (/) and filters"
  },
  {
    question: "Shortcut to assign a due date to a card?",
    options: ["D", "T", "U", "E"],
    correctAnswer: "D"
  },
  {
    question: "How do you quickly open the notifications?",
    options: ["N", "Alt + N", "Ctrl + N", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open card's labels window?",
    options: ["L", "C", "M", "V"],
    correctAnswer: "L"
  },
  {
    question: "How to create a new card below the current one?",
    options: ["N", "C", "A", "L"],
    correctAnswer: "N"
  },
  {
    question: "Shortcut to archive the current card?",
    options: ["C", "A", "X", "D"],
    correctAnswer: "C"
  },
  {
    question: "How do you open the card's comments section?",
    options: ["R", "C", "M", "L"],
    correctAnswer: "R"
  },
  {
    question: "Shortcut to toggle the sidebar visibility?",
    options: ["No default shortcut", "W", "B", "M"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "How to assign a member to a card?",
    options: ["M", "A", "S", "U"],
    correctAnswer: "M"
  },
  {
    question: "Shortcut to open board's search filters?",
    options: ["F", "/", "S", "Q"],
    correctAnswer: "/"
  }
    ],
    medium: [
      {
    question: "How do you open the quick card edit menu?",
    options: ["Hover + E", "Click + E", "Ctrl + E", "Double-click card"],
    correctAnswer: "Hover + E"
  },
  {
    question: "What's the keyboard shortcut to open a board from the boards menu?",
    options: ["B then number key (1–9)", "Ctrl + B", "W then number", "G then number"],
    correctAnswer: "B then number key (1–9)"
  },
  {
    question: "Shortcut to open a card in a new tab?",
    options: ["Ctrl + Click", "Shift + Click", "Alt + Click", "Double-click"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "How do you assign multiple members using keyboard only?",
    options: ["M then select", "Use mouse", "M then Shift + click", "No keyboard-only option"],
    correctAnswer: "M then select"
  },
  {
    question: "What keyboard key lets you cycle through cards?",
    options: ["Up/Down arrows", "Tab", "Space", "L"],
    correctAnswer: "Up/Down arrows"
  },
  {
    question: "How to open a card in edit mode from the board view?",
    options: ["Hover + E", "Double-click", "Ctrl + Enter", "Shift + Enter"],
    correctAnswer: "Hover + E"
  },
  {
    question: "Shortcut to remove yourself from a card?",
    options: ["Space again", "M + Uncheck", "Esc + R", "No direct shortcut"],
    correctAnswer: "Space again"
  },
  {
    question: "What's the shortcut to filter cards by label?",
    options: ["F + label", "L", "/ + label", "Q"],
    correctAnswer: "F + label"
  },
  {
    question: "Shortcut to quickly open the \"Move card\" dialog?",
    options: ["V", "M", "Shift + M", "L"],
    correctAnswer: "V"
  },
  {
    question: "Shortcut to add a label to a card using keyboard?",
    options: ["Hover + L + number key", "L then click", "F + label", "Q"],
    correctAnswer: "Hover + L + number key"
  },
  {
    question: "Shortcut to open your starred boards list?",
    options: ["B", "G then S", "W", "Ctrl + B"],
    correctAnswer: "G then S"
  },
  {
    question: "Shortcut to apply the first label to a card?",
    options: ["Hover + L + 1", "F + 1", "L then 1", "Ctrl + 1"],
    correctAnswer: "Hover + L + 1"
  },
  {
    question: "How do you quickly archive a card from the card view?",
    options: ["C", "Hover + C", "Shortcut not supported", "Click archive"],
    correctAnswer: "C"
  },
  {
    question: "Shortcut to assign a due date using keyboard only?",
    options: ["Hover + D", "Click due date", "/ then \"due\"", "L then D"],
    correctAnswer: "Hover + D"
  },
  {
    question: "What's the fastest way to open a new board?",
    options: ["B then click \"Create new board\"", "W", "G then N", "No shortcut"],
    correctAnswer: "B then click \"Create new board\""
  },
  {
    question: "Shortcut to scroll horizontally between lists?",
    options: ["Shift + Scroll wheel", "Arrow keys", "Ctrl + Arrow", "Tab"],
    correctAnswer: "Shift + Scroll wheel"
  },
  {
    question: "Shortcut to open quick edit menu on a card without mouse?",
    options: ["Navigate with arrow keys + E", "Click + E", "Shift + E", "Ctrl + E"],
    correctAnswer: "Navigate with arrow keys + E"
  },
  {
    question: "Shortcut to remove a due date from a card?",
    options: ["D then clear", "Ctrl + D", "Hover + D", "L + D"],
    correctAnswer: "D then clear"
  },
  {
    question: "Shortcut to open Trello search results in new tab?",
    options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Not supported"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "Shortcut to search for a board?",
    options: ["/ then type board name", "B", "Ctrl + F", "Q"],
    correctAnswer: "/ then type board name"
  },
  {
    question: "Shortcut to access \"More\" board settings?",
    options: ["B then M", "G then B", "Click menu, then More", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How do you label a card with multiple labels using keys?",
    options: ["Hover + L + multiple number keys", "L then select", "Shift + L", "F + label"],
    correctAnswer: "Hover + L + multiple number keys"
  },
  {
    question: "Shortcut to view your notifications panel?",
    options: ["No shortcut, must click bell icon", "N", "Shift + N", "G then N"],
    correctAnswer: "No shortcut, must click bell icon"
  },
  {
    question: "Shortcut to navigate between boards quickly?",
    options: ["B then number", "Ctrl + Tab", "G then B", "Q"],
    correctAnswer: "B then number"
  },
  {
    question: "Shortcut to open the menu in board view?",
    options: ["M", "B", "W", "Click sidebar"],
    correctAnswer: "W"
  },
  {
    question: "How do you use the keyboard to move a card up or down within a list?",
    options: ["Drag only", "Hover + Shift + Up/Down", "No direct keyboard shortcut", "Alt + Up/Down"],
    correctAnswer: "No direct keyboard shortcut"
  },
  {
    question: "What is the shortcut to open the card filter options?",
    options: ["F", "Q", "Shift + F", "Ctrl + F"],
    correctAnswer: "F"
  },
  {
    question: "How can you close an open card using the keyboard?",
    options: ["Esc", "Ctrl + W", "Alt + Esc", "Backspace"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to assign yourself to a card?",
    options: ["Spacebar", "M", "Ctrl + M", "Enter"],
    correctAnswer: "Spacebar"
  },
  {
    question: "How do you open the card actions menu?",
    options: [". (period key)", "Ctrl + .", "Alt + A", "Shift + M"],
    correctAnswer: ". (period key)"
  },
  {
    question: "Shortcut to open the archive menu of a list?",
    options: ["Mouse only", ". then select archive", "Q", "Shift + A"],
    correctAnswer: ". then select archive"
  },
  {
    question: "What does the \"Q\" shortcut do?",
    options: ["Filters cards assigned to you", "Opens quick edit", "Quiet mode", "Quick move"],
    correctAnswer: "Filters cards assigned to you"
  },
  {
    question: "How do you copy a card using the keyboard?",
    options: ["Hover + C + Enter", ". then Copy", "Ctrl + C", "Shift + C"],
    correctAnswer: ". then Copy"
  },
  {
    question: "Shortcut to create a new list using the keyboard?",
    options: ["Mouse only", "Tab then Enter", "Click only", "No shortcut available"],
    correctAnswer: "No shortcut available"
  },
  {
    question: "How to move a card to another board using keyboard?",
    options: [". then Move", "V", "Ctrl + V", "Shift + M"],
    correctAnswer: ". then Move"
  },
  {
    question: "Shortcut to quickly open archived items?",
    options: ["More > Archived Items (No shortcut)", "G then A", "A", "Shift + A"],
    correctAnswer: "More > Archived Items (No shortcut)"
  },
  {
    question: "Shortcut to toggle full screen on a card?",
    options: ["F11", "Ctrl + Enter", "Not supported", "Alt + Enter"],
    correctAnswer: "Not supported"
  },
  {
    question: "Shortcut to start typing a card title in a list?",
    options: ["Click + T", "N", "T", "Double-click"],
    correctAnswer: "N"
  },
  {
    question: "How do you open the activity log on a card?",
    options: ["Scroll down", "Alt + A", "Ctrl + Shift + A", "No shortcut"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Shortcut to remove a member from a card?",
    options: ["M + deselect", "Hover + M", "Click + M", "Hover + Esc"],
    correctAnswer: "M + deselect"
  },
  {
    question: "Shortcut to save a new card title after typing?",
    options: ["Enter", "Ctrl + S", "Esc", "Tab"],
    correctAnswer: "Enter"
  },
  {
    question: "Shortcut to open help/settings in Trello?",
    options: ["?", "H", "Alt + H", "Ctrl + H"],
    correctAnswer: "?"
  },
  {
    question: "How do you change the background using keyboard shortcuts?",
    options: ["Not supported", "? then navigate", "G then B", "Esc + B"],
    correctAnswer: "Not supported"
  },
  {
    question: "Shortcut to jump to Home?",
    options: ["G then H", "B", "G then D", "Shift + H"],
    correctAnswer: "G then H"
  },
  {
    question: "Shortcut to go directly to Trello templates?",
    options: ["G then T", "Ctrl + T", "Shift + T", "B + Templates"],
    correctAnswer: "G then T"
  },
  {
    question: "How do you favorite/unfavorite a board from board view?",
    options: ["Click only", "No shortcut available", ". then S", "Shift + S"],
    correctAnswer: "No shortcut available"
  },
  {
    question: "Shortcut to archive a list?",
    options: [". then archive list", "L then archive", "Alt + C", "Esc + A"],
    correctAnswer: ". then archive list"
  },
  {
    question: "Shortcut to open Power-Ups?",
    options: ["G then U", ". then Power-Ups", "No direct shortcut", "Shift + P"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to create a checklist in a card?",
    options: [". then Add Checklist", "Alt + C", "Ctrl + Shift + C", "Shift + L"],
    correctAnswer: ". then Add Checklist"
  },
  {
    question: "Shortcut to attach a file?",
    options: ["Hover + A", "Click only", ". then Attachment", "Ctrl + A"],
    correctAnswer: ". then Attachment"
  },
  {
    question: "Shortcut to edit card description directly?",
    options: ["Click description or Tab", "Hover + D", "Enter", ". then Edit"],
    correctAnswer: "Click description or Tab"
  },
  {
    question: "Shortcut to open the board menu with keyboard only?",
    options: ["W", "Ctrl + M", "Alt + M", "M"],
    correctAnswer: "W"
  },
  {
    question: "Shortcut to switch Trello workspaces?",
    options: ["G then W", "B then W", "Alt + W", "Ctrl + Shift + W"],
    correctAnswer: "G then W"
  },
  {
    question: "Shortcut to go to keyboard shortcuts help?",
    options: ["?", "Shift + /", "H", "Ctrl + K"],
    correctAnswer: "?"
  },
  {
    question: "Shortcut to hide completed checklist items?",
    options: ["Click only", ". then toggle", "Not supported", "Ctrl + Shift + H"],
    correctAnswer: "Not supported"
  },
  {
    question: "Shortcut to add a cover to a card?",
    options: [". then Cover", "Hover + C", "Ctrl + Shift + C", "Shift + L"],
    correctAnswer: ". then Cover"
  },
  {
    question: "Shortcut to open the label selector in a card?",
    options: ["L", "Hover + L", ". then Labels", "Shift + L"],
    correctAnswer: ". then Labels"
  },
  {
    question: "Shortcut to add emoji to a comment?",
    options: [":emoji:", "Use emoji picker manually", "No shortcut", "Shift + :"],
    correctAnswer: ":emoji:"
  },
  {
    question: "Shortcut to open workspace view?",
    options: ["G then W", "B then W", "Ctrl + W", "Shift + W"],
    correctAnswer: "G then W"
  },
  {
    question: "Shortcut to archive a card from board view?",
    options: ["Hover + C", ". then Archive", "M + Delete", "C"],
    correctAnswer: "Hover + C"
  }
    ],
    hard: [
      {
    question: "What keyboard shortcut lets you open the 'Move card' dialog from a selected card?",
    options: ["V", "M", ". then Move", "Ctrl + Shift + M"],
    correctAnswer: "V"
  },
  {
    question: "How do you quickly add a label using only the keyboard?",
    options: ["Hover + L + Number Key", "Shift + L", "Ctrl + L", "L + Enter"],
    correctAnswer: "Hover + L + Number Key"
  },
  {
    question: "What is the fastest way to assign yourself to a card using the keyboard only?",
    options: ["Hover + Spacebar", "Ctrl + M", "Alt + S", "Q"],
    correctAnswer: "Hover + Spacebar"
  },
  {
    question: "What does the period (.) key do when pressed on a card?",
    options: ["Opens card action menu", "Archives the card", "Opens label picker", "Edits card title"],
    correctAnswer: "Opens card action menu"
  },
  {
    question: "How do you open the card filtering tool to see only cards assigned to you?",
    options: ["Q", "M", "F", "/"],
    correctAnswer: "Q"
  },
  {
    question: "How do you archive a list using shortcuts?",
    options: [". then Archive This List", "L then A", "Alt + Delete", "Ctrl + Shift + L"],
    correctAnswer: ". then Archive This List"
  },
  {
    question: "Shortcut to open the labels menu while hovering over a card?",
    options: ["L", "Hover + L", ". then Label", "Shift + L"],
    correctAnswer: "Hover + L"
  },
  {
    question: "How do you jump to the Home dashboard using keyboard shortcuts?",
    options: ["G then H", "Ctrl + H", "H", "W"],
    correctAnswer: "G then H"
  },
  {
    question: "Shortcut to open the notification panel in Trello?",
    options: ["No direct keyboard shortcut", "Ctrl + N", "G then N", "Alt + N"],
    correctAnswer: "No direct keyboard shortcut"
  },
  {
    question: "What is the keyboard shortcut to create a new card from a list using the keyboard?",
    options: ["N", "C", "Enter", "Ctrl + N"],
    correctAnswer: "N"
  },
  {
    question: "How do you open the Power-Ups window for a board?",
    options: ["No shortcut; must use mouse", "G then P", "Ctrl + Shift + U", "P"],
    correctAnswer: "No shortcut; must use mouse"
  },
  {
    question: "What is the shortcut to open the card actions popup menu?",
    options: [". (period key)", "Shift + M", "Ctrl + A", "L"],
    correctAnswer: ". (period key)"
  },
  {
    question: "What happens if you press 'Q' on the board screen?",
    options: ["Filters cards assigned to you", "Quits board", "Opens quick add", "Jumps to card"],
    correctAnswer: "Filters cards assigned to you"
  },
  {
    question: "What key opens Trello's keyboard shortcuts help panel?",
    options: ["?", "Shift + /", "Ctrl + H", "H"],
    correctAnswer: "?"
  },
  {
    question: "Which key lets you navigate through cards vertically in a list?",
    options: ["Up/Down arrows", "Tab", "Shift + Tab", "L/R Arrows"],
    correctAnswer: "Up/Down arrows"
  },
  {
    question: "Shortcut to open the due date picker while hovering on a card?",
    options: ["Hover + D", "Ctrl + D", "M", "Shift + D"],
    correctAnswer: "Hover + D"
  },
  {
    question: "What does the 'F' key do on a board?",
    options: ["Opens filter/search bar", "Opens Favorites", "Opens File Attachment", "Opens Feedback"],
    correctAnswer: "Opens filter/search bar"
  },
  {
    question: "Shortcut to add a checklist to a card?",
    options: [". then Add Checklist", "Ctrl + L", "Shift + C", "L"],
    correctAnswer: ". then Add Checklist"
  },
  {
    question: "Shortcut to toggle star on a board?",
    options: ["No shortcut available", ". then Star", "S", "Shift + S"],
    correctAnswer: "No shortcut available"
  },
  {
    question: "What does the 'B' key do on Trello?",
    options: ["Opens board selector", "Goes back to previous board", "Opens background settings", "Moves board"],
    correctAnswer: "Opens board selector"
  },
  {
    question: "Shortcut to focus the board menu using only the keyboard?",
    options: ["W", "M", "G", "Ctrl + M"],
    correctAnswer: "W"
  },
  {
    question: "What shortcut opens the label selection dialog from card view?",
    options: ["L", "Ctrl + L", "Shift + L", "Alt + L"],
    correctAnswer: "L"
  },
  {
    question: "Shortcut to copy a card?",
    options: [". then Copy", "Ctrl + C", "Shift + C", "Alt + C"],
    correctAnswer: ". then Copy"
  },
  {
    question: "Shortcut to remove yourself from a card using the keyboard?",
    options: ["Press Space again", "Hover + Esc", "Ctrl + M", ". then Unassign"],
    correctAnswer: "Press Space again"
  },
  {
    question: "Shortcut to move card to a different board?",
    options: ["V", ". then Move", "Ctrl + Shift + M", "G then M"],
    correctAnswer: ". then Move"
  },
  {
    question: "How do you open the 'Archive' option for a card using only the keyboard?",
    options: ["Hover over card + press C", ". then Archive", "M", "Hover + Backspace"],
    correctAnswer: "Hover over card + press C"
  },
  {
    question: "How can you open the 'Move list' dialog using a shortcut?",
    options: ["No direct shortcut available", ". then Move List", "Shift + M", "Ctrl + L"],
    correctAnswer: "No direct shortcut available"
  },
  {
    question: "Shortcut to open the 'Templates' section in Trello?",
    options: ["G then T", "Ctrl + T", "Shift + T", "T"],
    correctAnswer: "G then T"
  },
  {
    question: "Shortcut to open the workspace switcher?",
    options: ["G then W", "Shift + W", "Ctrl + W", "Alt + W"],
    correctAnswer: "G then W"
  },
  {
    question: "Shortcut to bring focus to the search bar?",
    options: ["/", "Ctrl + F", "F", "Shift + /"],
    correctAnswer: "/"
  },
  {
    question: "What does pressing 'C' while hovering over a card do?",
    options: ["Archives the card", "Closes it", "Adds a comment", "Copies the card"],
    correctAnswer: "Archives the card"
  },
  {
    question: "How do you toggle filtering cards assigned to you?",
    options: ["Q", "F + M", "Alt + M", "Shift + Q"],
    correctAnswer: "Q"
  },
  {
    question: "Shortcut to quickly edit a card title?",
    options: ["Hover + Enter", "Hover + T", "Double-click", "Shift + E"],
    correctAnswer: "Hover + Enter"
  },
  {
    question: "Shortcut to exit from card view?",
    options: ["Esc", "Ctrl + W", "Alt + ←", "X"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to add a member using keyboard only?",
    options: ["M", "Ctrl + M", "Hover + M", "M then Enter"],
    correctAnswer: "M"
  },
  {
    question: "Shortcut to bring focus to the 'Add a card' text box?",
    options: ["N", "A", "Enter", "Ctrl + N"],
    correctAnswer: "N"
  },
  {
    question: "Shortcut to open the Calendar Power-Up (if enabled)?",
    options: ["G then C", "Click only", "Alt + C", "Ctrl + Shift + C"],
    correctAnswer: "Click only"
  },
  {
    question: "What shortcut opens the keyboard shortcuts cheat sheet?",
    options: ["?", "Ctrl + /", "H", "F1"],
    correctAnswer: "?"
  },
  {
    question: "What happens when you press 'Enter' after typing in the 'Add a card' field?",
    options: ["Adds the card", "Opens description", "Assigns you", "Nothing"],
    correctAnswer: "Adds the card"
  },
  {
    question: "How do you open the attachment menu from a card?",
    options: [". then Attachment", "Ctrl + A", "Shift + A", "Hover + A"],
    correctAnswer: ". then Attachment"
  },
  {
    question: "Shortcut to hide/show completed checklist items?",
    options: ["Manual toggle only", "Ctrl + H", "Shift + H", ". then Checklist"],
    correctAnswer: "Manual toggle only"
  },
  {
    question: "Shortcut to rename a board?",
    options: ["Click title (no shortcut)", "Ctrl + R", ". then Rename", "Alt + R"],
    correctAnswer: "Click title (no shortcut)"
  },
  {
    question: "Shortcut to start writing a comment on a card?",
    options: ["Click comment box (no direct shortcut)", "C", "Ctrl + C", "Tab"],
    correctAnswer: "Click comment box (no direct shortcut)"
  },
  {
    question: "Shortcut to enable dark mode in Trello?",
    options: ["Change via account settings", "Ctrl + D", "Shift + D", "Alt + B"],
    correctAnswer: "Change via account settings"
  },
  {
    question: "Shortcut to open the 'Watch' toggle on a card?",
    options: [". then Watch", "Ctrl + W", "Shift + W", "Alt + W"],
    correctAnswer: ". then Watch"
  },
  {
    question: "Shortcut to go directly to Notifications page?",
    options: ["No keyboard shortcut", "Ctrl + N", "G then N", "Alt + N"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to jump to recently visited boards?",
    options: ["B", "Ctrl + B", "G then B", "Tab"],
    correctAnswer: "B"
  },
  {
    question: "Shortcut to change background using keyboard?",
    options: ["No shortcut; must use mouse", "Ctrl + Shift + B", ". then Background", "Alt + B"],
    correctAnswer: "No shortcut; must use mouse"
  },
  {
    question: "Shortcut to add a cover to a card?",
    options: [". then Cover", "Ctrl + C", "Shift + L", "Hover + C"],
    correctAnswer: ". then Cover"
  },
  {
    question: "Shortcut to archive a card from inside the card view?",
    options: [". then Archive", "C", "Esc", "Click only"],
    correctAnswer: ". then Archive"
  },
  {
    question: "Shortcut to add a card above the current card?",
    options: ["Not supported via keyboard", "Shift + N", "Ctrl + Up + N", "Enter + Shift"],
    correctAnswer: "Not supported via keyboard"
  },
  {
    question: "How do you jump to the Activity Log of a card using a shortcut?",
    options: ["No direct shortcut", "Alt + A", "Ctrl + Shift + A", "A"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to go back to board view from card view?",
    options: ["Esc", "Ctrl + ←", "Alt + ←", "Backspace"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you rename a list using only the keyboard?",
    options: ["No direct shortcut", "Double-click the name", ". then Rename", "Shift + R"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to remove a label using keyboard?",
    options: ["L + Number Key again", "Delete", "Alt + L", "M"],
    correctAnswer: "L + Number Key again"
  },
  {
    question: "Shortcut to jump between cards inside a list?",
    options: ["Up/Down arrow keys", "Tab", "L/R arrows", "Enter"],
    correctAnswer: "Up/Down arrow keys"
  },
  {
    question: "How do you quickly archive multiple cards?",
    options: ["Hover + C repeatedly", "No batch shortcut", "Ctrl + A then C", "Drag to Archive list"],
    correctAnswer: "Hover + C repeatedly"
  },
  {
    question: "How to copy a checklist item using keyboard?",
    options: ["No direct shortcut", "Ctrl + C", "Alt + Shift + C", ". then Copy Item"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to pin a board to your sidebar?",
    options: ["Use mouse only", "G then P", ". then Pin", "Alt + S"],
    correctAnswer: "Use mouse only"
  },
  {
    question: "Shortcut to see all members assigned to a card using keyboard?",
    options: ["Hover + M", "Open card", ". then Members", "No direct keyboard-only method"],
    correctAnswer: "No direct keyboard-only method"
  }
    ]
  },



  "Spotify": {
    easy: [
      {
    question: "What is the shortcut to play or pause the current track?",
    options: ["Spacebar", "P", "Ctrl + P", "Enter"],
    correctAnswer: "Spacebar"
  },
  {
    question: "Which shortcut skips to the next track?",
    options: ["Ctrl + →", "N", "Alt + →", "→"],
    correctAnswer: "Ctrl + →"
  },
  {
    question: "What keyboard shortcut plays the previous track?",
    options: ["Ctrl + ←", "B", "←", "Alt + ←"],
    correctAnswer: "Ctrl + ←"
  },
  {
    question: "How do you increase volume?",
    options: ["Ctrl + ↑", "Alt + ↑", "↑", "Shift + ↑"],
    correctAnswer: "Ctrl + ↑"
  },
  {
    question: "Shortcut to decrease the volume?",
    options: ["Ctrl + ↓", "↓", "Alt + ↓", "Shift + ↓"],
    correctAnswer: "Ctrl + ↓"
  },
  {
    question: "What shortcut toggles shuffle mode?",
    options: ["Ctrl + S", "S", "Shift + S", "Alt + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "What does Ctrl + L do in Spotify?",
    options: ["Focuses search bar", "Likes the current song", "Logs out", "Loads playlist"],
    correctAnswer: "Focuses search bar"
  },
  {
    question: "Shortcut to like a song?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Ctrl + Alt + L", "L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How to mute audio quickly?",
    options: ["Ctrl + Shift + ↓", "M", "Ctrl + M", "Alt + M"],
    correctAnswer: "M"
  },
  {
    question: "How to open the settings menu?",
    options: ["Ctrl + P", "Alt + S", "S", "Ctrl + S"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "Shortcut to open the search field?",
    options: ["Ctrl + L", "Ctrl + F", "/", "Alt + S"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How to go to the Home page?",
    options: ["Alt + H", "Ctrl + H", "Home", "No shortcut"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Shortcut to toggle repeat mode?",
    options: ["Ctrl + R", "R", "Alt + R", "Shift + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "Shortcut to open the queue?",
    options: ["Ctrl + Q", "Alt + Q", "Q", "No shortcut"],
    correctAnswer: "Q"
  },
  {
    question: "Shortcut to skip 15 seconds forward (on podcasts)?",
    options: ["Ctrl + Alt + →", "Ctrl + Shift + →", "Shift + →", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to go back 15 seconds (on podcasts)?",
    options: ["Shift + ←", "Ctrl + Shift + ←", "Alt + ←", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Which key resumes playback after pause?",
    options: ["Spacebar", "P", "Enter", "Ctrl + R"],
    correctAnswer: "Spacebar"
  },
  {
    question: "How do you skip to the next album/playlist?",
    options: ["No direct shortcut", "Ctrl + →", "Shift + N", "Ctrl + Shift + →"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to open the current song's menu?",
    options: ["Right-click", "Ctrl + M", "Alt + M", "No keyboard shortcut"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to log out?",
    options: ["No direct shortcut", "Ctrl + Shift + L", "Ctrl + Q", "Ctrl + Shift + Q"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to open your Library?",
    options: ["Ctrl + A", "Ctrl + Shift + Y", "Alt + L", "No keyboard shortcut"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "What key toggles full-screen mode?",
    options: ["F11", "Alt + Enter", "F", "Ctrl + Shift + F"],
    correctAnswer: "F11"
  },
  {
    question: "Shortcut to minimize the Spotify window?",
    options: ["Ctrl + M", "Alt + ↓", "Windows + Down", "No specific shortcut"],
    correctAnswer: "No specific shortcut"
  },
  {
    question: "Shortcut to create a new playlist?",
    options: ["Ctrl + N", "Alt + P", "Ctrl + Shift + N", "N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "Shortcut to remove a song from a playlist?",
    options: ["Delete", "Ctrl + D", "Ctrl + R", "Backspace"],
    correctAnswer: "Delete"
  },
  {
    question: "Shortcut to go to the next section in the sidebar?",
    options: ["Tab", "Ctrl + Tab", "Shift + Tab", "Alt + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to go to the previous sidebar section?",
    options: ["Shift + Tab", "Alt + Tab", "Ctrl + Shift + Tab", "Ctrl + Tab"],
    correctAnswer: "Shift + Tab"
  },
  {
    question: "What shortcut toggles visibility of the sidebar?",
    options: ["No shortcut available", "Alt + S", "Ctrl + S", "F1"],
    correctAnswer: "No shortcut available"
  },
  {
    question: "Shortcut to open a selected playlist?",
    options: ["Enter", "Spacebar", "Ctrl + O", "Alt + O"],
    correctAnswer: "Enter"
  },
  {
    question: "What shortcut jumps to the currently playing song?",
    options: ["Ctrl + J", "Ctrl + Shift + P", "Ctrl + .", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the Help window?",
    options: ["F1", "Ctrl + /", "Ctrl + H", "Shift + H"],
    correctAnswer: "F1"
  },
  {
    question: "Shortcut to jump to search without a mouse?",
    options: ["Ctrl + L", "Ctrl + F", "/", "Shift + S"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Shortcut to show playback bar focus?",
    options: ["Tab until focused", "Ctrl + P", "Ctrl + Shift + P", "Alt + P"],
    correctAnswer: "Tab until focused"
  },
  {
    question: "How do you open the context menu for a song using keyboard?",
    options: ["No direct shortcut", "Shift + F10", "Ctrl + M", "Alt + Enter"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "Shortcut to play the next track without using your mouse?",
    options: ["Ctrl + →", "Alt + N", "Ctrl + Alt + N", "Shift + N"],
    correctAnswer: "Ctrl + →"
  },
  {
    question: "Shortcut to pause and play when in a playlist view?",
    options: ["Spacebar", "P", "Ctrl + P", "Shift + Spacebar"],
    correctAnswer: "Spacebar"
  },
  {
    question: "Shortcut to open the \"Friend Activity\" sidebar?",
    options: ["No default shortcut", "Ctrl + F", "Alt + F", "F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to jump to the top of the current playlist?",
    options: ["Home", "Ctrl + Home", "Shift + Home", "Alt + ↑"],
    correctAnswer: "Home"
  },
  {
    question: "Shortcut to go to the bottom of a playlist?",
    options: ["End", "Ctrl + End", "Alt + ↓", "Shift + End"],
    correctAnswer: "End"
  },
  {
    question: "Shortcut to delete a playlist (after selecting it)?",
    options: ["Delete", "Ctrl + D", "Backspace", "No shortcut"],
    correctAnswer: "Delete"
  },
  {
    question: "Shortcut to select multiple songs in a playlist?",
    options: ["Ctrl + Click", "Ctrl + A", "Shift + Arrow keys", "Ctrl + Shift"],
    correctAnswer: "Shift + Arrow keys"
  },
  {
    question: "Shortcut to select all songs in a playlist?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "Alt + A", "Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Shortcut to copy selected song(s)?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Alt + C", "C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "Shortcut to paste song(s) into another playlist?",
    options: ["Ctrl + V", "Alt + V", "Shift + V", "P"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "Shortcut to undo removing a song from a playlist?",
    options: ["Ctrl + Z", "Alt + Z", "Shift + Z", "No shortcut"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "Shortcut to move a song up in a custom playlist (via keyboard)?",
    options: ["Drag with mouse only", "Ctrl + ↑", "Alt + ↑", "No keyboard shortcut"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to rename a playlist?",
    options: ["F2", "No default shortcut", "Ctrl + R", "Alt + R"],
    correctAnswer: "F2"
  },
  {
    question: "Shortcut to toggle like/unlike on a song?",
    options: ["Ctrl + L", "Alt + L", "L", "Shift + L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Shortcut to go back to previous screen/view?",
    options: ["Alt + ←", "Backspace", "Ctrl + ←", "Esc"],
    correctAnswer: "Alt + ←"
  },
  {
    question: "Shortcut to go forward to next screen/view?",
    options: ["Alt + →", "Shift + →", "Ctrl + →", "Enter"],
    correctAnswer: "Alt + →"
  },
  {
    question: "Shortcut to toggle lyrics (if supported)?",
    options: ["No shortcut; click icon", "Ctrl + L", "Shift + L", "Alt + L"],
    correctAnswer: "No shortcut; click icon"
  },
  {
    question: "Shortcut to open artist page from now-playing track?",
    options: ["Enter on artist name", "No keyboard shortcut", "Ctrl + Enter", "Alt + A"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to toggle between playlists and main view?",
    options: ["Tab", "Ctrl + Tab", "No direct shortcut", "Shift + Tab"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to drag and reorder songs using keyboard?",
    options: ["No keyboard shortcut", "Alt + ↑/↓", "Ctrl + ↑/↓", "Shift + ↑/↓"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to maximize Spotify window?",
    options: ["Windows + ↑", "Ctrl + ↑", "Alt + ↑", "No app-specific shortcut"],
    correctAnswer: "Windows + ↑"
  },
  {
    question: "Shortcut to show/hide volume slider?",
    options: ["Hover with mouse only", "Ctrl + V", "Alt + V", "V"],
    correctAnswer: "Hover with mouse only"
  },
  {
    question: "Shortcut to exit full screen?",
    options: ["F11", "Esc", "Alt + Enter", "Ctrl + Shift + Esc"],
    correctAnswer: "F11"
  },
  {
    question: "Shortcut to queue a song (after selecting it)?",
    options: ["Right-click → \"Add to Queue\"", "Ctrl + Q", "Q", "No keyboard shortcut"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "Shortcut to toggle crossfade settings?",
    options: ["Ctrl + P (then manually toggle)", "Ctrl + Shift + C", "Alt + C", "No direct shortcut"],
    correctAnswer: "Ctrl + P (then manually toggle)"
  },
  {
    question: "Shortcut to toggle offline mode?",
    options: ["File → Offline Mode", "Ctrl + O", "Ctrl + Shift + O", "No default shortcut"],
    correctAnswer: "No default shortcut"
  }
    ],
    medium: [
      {
    question: "What is the keyboard shortcut to jump to the search bar in Spotify?",
    options: ["Ctrl + F", "Ctrl + L", "Shift + S", "Alt + S"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "How can you play the selected song without double-clicking it?",
    options: ["Enter", "Ctrl + Enter", "Spacebar", "P"],
    correctAnswer: "Enter"
  },
  {
    question: "What shortcut increases the volume incrementally in Spotify?",
    options: ["Ctrl + ↑", "Alt + ↑", "Shift + ↑", "↑"],
    correctAnswer: "Ctrl + ↑"
  },
  {
    question: "What shortcut moves to the previous track in a playlist or album?",
    options: ["Ctrl + ←", "Alt + ←", "Shift + ←", "←"],
    correctAnswer: "Ctrl + ←"
  },
  {
    question: "What shortcut toggles the repeat function in Spotify?",
    options: ["Ctrl + R", "Alt + R", "Shift + R", "R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "Which shortcut toggles shuffle mode?",
    options: ["Ctrl + S", "Alt + S", "Shift + S", "S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "What shortcut will like the currently playing song?",
    options: ["Ctrl + L", "Alt + L", "Shift + L", "L"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Which shortcut pauses or resumes playback?",
    options: ["Spacebar", "Enter", "Ctrl + Space", "P"],
    correctAnswer: "Spacebar"
  },
  {
    question: "Which key opens the context menu for a selected track without using the mouse?",
    options: ["Shift + F10", "Ctrl + M", "Alt + Enter", "No keyboard shortcut"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "What shortcut plays the next track in the queue?",
    options: ["Ctrl + →", "Shift + →", "Alt + →", "N"],
    correctAnswer: "Ctrl + →"
  },
  {
    question: "How do you move to the beginning of a playlist using keyboard only?",
    options: ["Home", "Ctrl + Home", "Alt + Home", "Shift + ↑"],
    correctAnswer: "Home"
  },
  {
    question: "How do you jump to the end of a playlist?",
    options: ["End", "Ctrl + End", "Alt + ↓", "Shift + ↓"],
    correctAnswer: "End"
  },
  {
    question: "Shortcut to open Spotify settings directly?",
    options: ["Ctrl + P", "Alt + P", "S", "Ctrl + ,"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the keyboard shortcut to delete a selected playlist or song from playlist?",
    options: ["Delete", "Ctrl + D", "Backspace", "Ctrl + Backspace"],
    correctAnswer: "Delete"
  },
  {
    question: "Shortcut to undo an accidental deletion of a song from playlist?",
    options: ["Ctrl + Z", "Alt + Z", "Shift + Z", "U"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "How do you select multiple adjacent songs using keyboard?",
    options: ["Shift + ↑ or ↓", "Ctrl + ↑ or ↓", "Alt + ↑ or ↓", "Tab"],
    correctAnswer: "Shift + ↑ or ↓"
  },
  {
    question: "What shortcut selects all songs in a playlist?",
    options: ["Ctrl + A", "Shift + A", "Alt + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "What key toggles full-screen mode?",
    options: ["F11", "Alt + Enter", "Ctrl + F", "F"],
    correctAnswer: "F11"
  },
  {
    question: "How do you copy selected song(s) for pasting elsewhere?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Alt + C", "No shortcut"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "How do you paste the copied song(s) into another playlist?",
    options: ["Ctrl + V", "Ctrl + Shift + V", "Alt + V", "Shift + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "Shortcut to open the lyrics panel in supported versions?",
    options: ["No shortcut", "L", "Ctrl + L", "Alt + L"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Shortcut to forward 15 seconds in a podcast?",
    options: ["No default shortcut", "Shift + →", "Ctrl + →", "F"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to rewind 15 seconds in a podcast?",
    options: ["No default shortcut", "Shift + ←", "Ctrl + ←", "R"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to open the playback queue view?",
    options: ["Q", "Ctrl + Q", "Shift + Q", "Alt + Q"],
    correctAnswer: "Q"
  },
  {
    question: "Shortcut to toggle mute (if supported)?",
    options: ["M", "Ctrl + M", "Alt + M", "No default shortcut"],
    correctAnswer: "M"
  },
  {
    question: "Shortcut to minimize the Spotify window (OS-dependent)?",
    options: ["Windows + ↓", "Ctrl + M", "Alt + ↓", "Ctrl + ↓"],
    correctAnswer: "Windows + ↓"
  },
  {
    question: "Shortcut to close Spotify window (Windows)?",
    options: ["Alt + F4", "Ctrl + W", "Ctrl + Q", "Shift + Esc"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "Shortcut to restart the current track?",
    options: ["Ctrl + ← (if song just started)", "R", "Spacebar", "No shortcut"],
    correctAnswer: "Ctrl + ← (if song just started)"
  },
  {
    question: "What key opens the now-playing view if not already focused?",
    options: ["Tab multiple times", "Ctrl + .", "Ctrl + Shift + N", "No fixed shortcut"],
    correctAnswer: "Tab multiple times"
  },
  {
    question: "Shortcut to go to the previous page/view?",
    options: ["Alt + ←", "Ctrl + ←", "Esc", "Backspace"],
    correctAnswer: "Alt + ←"
  },
  {
    question: "Shortcut to go forward to the next page/view in Spotify?",
    options: ["Alt + →", "Ctrl + →", "Shift + →", "Page Down"],
    correctAnswer: "Alt + →"
  },
  {
    question: "How can you focus on the playlist list (on the left sidebar)?",
    options: ["Tab navigation", "Ctrl + Tab", "Ctrl + Shift + Tab", "Shift + Tab"],
    correctAnswer: "Tab navigation"
  },
  {
    question: "Shortcut to rename a playlist once selected?",
    options: ["F2", "Ctrl + R", "Alt + R", "No shortcut"],
    correctAnswer: "F2"
  },
  {
    question: "Shortcut to quickly scroll to the currently playing song in a playlist?",
    options: ["Ctrl + J", "Ctrl + .", "No default shortcut", "Ctrl + Shift + J"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to log out of Spotify?",
    options: ["File → Log Out", "Ctrl + Shift + L", "Ctrl + Q", "No shortcut"],
    correctAnswer: "File → Log Out"
  },
  {
    question: "Shortcut to open the File menu (Windows)?",
    options: ["Alt + F", "Ctrl + F", "Shift + F", "F10"],
    correctAnswer: "Alt + F"
  },
  {
    question: "Shortcut to access Spotify's Help menu?",
    options: ["Alt + H", "F1", "Ctrl + H", "Shift + H"],
    correctAnswer: "F1"
  },
  {
    question: "Shortcut to search within your Library only?",
    options: ["Ctrl + L", "Ctrl + F", "/", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How can you start a radio based on a song or artist (with keyboard only)?",
    options: ["Use context menu (Shift + F10) and navigate", "Ctrl + R", "R", "Ctrl + Shift + R"],
    correctAnswer: "Use context menu (Shift + F10) and navigate"
  },
  {
    question: "Shortcut to play from the top of a playlist?",
    options: ["Home → Enter", "Ctrl + Enter", "Alt + P", "Ctrl + ↑"],
    correctAnswer: "Home → Enter"
  },
  {
    question: "Shortcut to hide/show Friend Activity (if supported)?",
    options: ["No default shortcut", "Ctrl + F", "Alt + F", "F4"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to refresh Spotify interface (like a soft reload)?",
    options: ["Ctrl + R", "F5", "Alt + R", "No official shortcut"],
    correctAnswer: "No official shortcut"
  },
  {
    question: "Shortcut to open a song's album page?",
    options: ["Enter on album name", "Ctrl + Click", "Alt + A", "No fixed shortcut"],
    correctAnswer: "Enter on album name"
  },
  {
    question: "Shortcut to open a song's artist page?",
    options: ["Enter on artist name", "Ctrl + Shift + A", "Alt + A", "No shortcut"],
    correctAnswer: "Enter on artist name"
  },
  {
    question: "Shortcut to reorder playlists in the sidebar using keyboard?",
    options: ["No shortcut available", "Ctrl + ↑ / ↓", "Alt + ↑ / ↓", "Shift + ↑ / ↓"],
    correctAnswer: "No shortcut available"
  },
  {
    question: "How do you focus on album art using only keyboard?",
    options: ["Tab navigation", "Ctrl + Shift + Tab", "Ctrl + A", "No shortcut"],
    correctAnswer: "Tab navigation"
  },
  {
    question: "Shortcut to mute Spotify in Windows (system-wide)?",
    options: ["Windows + Down x2", "M", "Ctrl + M", "No Spotify-specific shortcut"],
    correctAnswer: "No Spotify-specific shortcut"
  },
  {
    question: "Shortcut to switch between Home, Search, and Your Library tabs?",
    options: ["Ctrl + Tab", "Tab navigation", "Alt + ← / →", "No fixed shortcut"],
    correctAnswer: "Tab navigation"
  },
  {
    question: "Shortcut to bring Spotify to the front if it's open?",
    options: ["Alt + Tab", "Ctrl + Tab", "Alt + Shift + Tab", "F10"],
    correctAnswer: "Alt + Tab"
  },
  {
    question: "Shortcut to scroll horizontally in playlists (when overflow)?",
    options: ["Shift + Scroll wheel", "Ctrl + →", "Alt + →", "No shortcut"],
    correctAnswer: "Shift + Scroll wheel"
  },
  {
    question: "Shortcut to select multiple non-adjacent tracks?",
    options: ["Ctrl + Click (mouse required)", "Shift + Click", "Ctrl + Shift", "Ctrl + Shift + Click"],
    correctAnswer: "Ctrl + Click (mouse required)"
  },
  {
    question: "Shortcut to go to album from currently playing song using mouse and keyboard?",
    options: ["Shift + F10 → Album", "Ctrl + Shift + A", "Alt + A", "Tab → Enter"],
    correctAnswer: "Shift + F10 → Album"
  },
  {
    question: "Shortcut to clear the play queue?",
    options: ["No shortcut", "Ctrl + Q", "Shift + Q", "Esc"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Shortcut to enable high-quality streaming?",
    options: ["Ctrl + P → Quality", "Ctrl + Q", "Shift + H", "Alt + H"],
    correctAnswer: "Ctrl + P → Quality"
  },
  {
    question: "Shortcut to toggle crossfade playback setting?",
    options: ["Ctrl + P → Crossfade", "Alt + X", "Ctrl + X", "Shift + X"],
    correctAnswer: "Ctrl + P → Crossfade"
  },
  {
    question: "Shortcut to report a bug or send feedback?",
    options: ["Help → Report", "Ctrl + Shift + F", "No direct shortcut", "Ctrl + Alt + R"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to add a song to a specific playlist using keyboard?",
    options: ["Shift + F10 → \"Add to Playlist\"", "Ctrl + A", "Alt + P", "Ctrl + Shift + P"],
    correctAnswer: "Shift + F10 → \"Add to Playlist\""
  },
  {
    question: "Shortcut to launch Spotify from command line (Windows)?",
    options: ["Run: spotify", "Ctrl + R", "Start → Type \"spotify\"", "No actual shortcut"],
    correctAnswer: "Run: spotify"
  },
  {
    question: "Shortcut to close the lyrics panel?",
    options: ["Escape", "F1", "Alt + L", "No shortcut"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Shortcut to start a private session (with mouse + keyboard)?",
    options: ["Ctrl + P → Private Session", "Ctrl + Shift + S", "Alt + S", "No keyboard-only shortcut"],
    correctAnswer: "Ctrl + P → Private Session"
  }
    ],
    hard: [
      {
    question: "How can you open Spotify's install directory from the app on Windows?",
    options: ["Right-click desktop icon → Open file location", "Ctrl + Shift + I", "Alt + D", "No keyboard shortcut"],
    correctAnswer: "No keyboard shortcut"
  },
  {
    question: "What command opens Spotify in the command line on Linux systems?",
    options: ["spotify", "open spotify", "start spotify", "run spotify"],
    correctAnswer: "spotify"
  },
  {
    question: "In Developer Tools, what shortcut opens the console on a web-based Spotify app?",
    options: ["Ctrl + Shift + J", "Ctrl + J", "F10", "Alt + Shift + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "What shortcut in Windows allows jumping to the system tray icon of Spotify?",
    options: ["Win + B → Arrow Keys", "Alt + Tab", "Ctrl + Shift + Tab", "Ctrl + Alt + B"],
    correctAnswer: "Win + B → Arrow Keys"
  },
  {
    question: "How do you stream Spotify audio through Discord on Windows?",
    options: ["Alt + Tab → Discord → Start Activity", "No Spotify-specific shortcut", "Win + G", "Ctrl + Shift + D"],
    correctAnswer: "No Spotify-specific shortcut"
  },
  {
    question: "What's the shortcut to navigate playlist folders in Spotify (legacy feature)?",
    options: ["Arrow Keys + Enter", "Tab + Enter", "Ctrl + Shift + F", "No shortcut (deprecated)"],
    correctAnswer: "No shortcut (deprecated)"
  },
  {
    question: "Shortcut to mute Spotify tab in browser (Chrome)?",
    options: ["Ctrl + M", "Alt + M", "Ctrl + W", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + M"
  },
  {
    question: "What is the system-wide Mac shortcut to switch to Spotify if it's open?",
    options: ["Cmd + Tab", "Cmd + Shift + Tab", "Cmd + ~", "Cmd + Esc"],
    correctAnswer: "Cmd + Tab"
  },
  {
    question: "How to open Spotify Web Player via URL quickly?",
    options: ["open.spotify.com", "spotify.com/web", "spotifyplayer.com", "go.spotify.com/web"],
    correctAnswer: "open.spotify.com"
  },
  {
    question: "Shortcut to start Spotify minimized on Windows (via shortcut properties)?",
    options: ["No shortcut; set in Properties > Run: Minimized", "Ctrl + Shift + M", "Alt + M", "Win + M"],
    correctAnswer: "No shortcut; set in Properties > Run: Minimized"
  },
  {
    question: "What keyboard method allows you to reorder a playlist using Spotify Desktop + Accessibility features?",
    options: ["Use screen reader + keyboard focus", "Ctrl + Shift + ↑ / ↓", "Alt + Shift + R", "None"],
    correctAnswer: "Use screen reader + keyboard focus"
  },
  {
    question: "What browser shortcut opens Spotify's progressive web app install dialog (Chrome)?",
    options: ["Ctrl + Shift + J", "Alt + Shift + I", "Install from address bar", "Ctrl + D"],
    correctAnswer: "Install from address bar"
  },
  {
    question: "Shortcut to open Spotify using Spotlight Search (Mac)?",
    options: ["Cmd + Space → Type \"Spotify\"", "Ctrl + Space", "Cmd + Shift + S", "Option + S"],
    correctAnswer: "Cmd + Space → Type \"Spotify\""
  },
  {
    question: "Shortcut to open Spotify from Run dialog on Windows?",
    options: ["Win + R → spotify", "Ctrl + R", "Alt + S", "Cmd + R"],
    correctAnswer: "Win + R → spotify"
  },
  {
    question: "Shortcut to see system-wide audio mixer in Windows to control Spotify volume?",
    options: ["Win + R → sndvol", "Ctrl + M", "Win + S", "Alt + Shift + V"],
    correctAnswer: "Win + R → sndvol"
  },
  {
    question: "What command in Windows PowerShell forces Spotify to close?",
    options: ["Stop-Process -Name Spotify", "kill spotify", "exit spotify", "taskkill /spotify"],
    correctAnswer: "Stop-Process -Name Spotify"
  },
  {
    question: "In macOS, how can you force quit Spotify using keyboard only?",
    options: ["Cmd + Option + Esc", "Cmd + Q", "Ctrl + Option + Delete", "Cmd + Esc"],
    correctAnswer: "Cmd + Option + Esc"
  },
  {
    question: "What's the command to open Spotify's configuration folder on Windows?",
    options: ["Win + R → %appdata%\\Spotify", "Ctrl + R", "Win + S → Settings", "Alt + Shift + C"],
    correctAnswer: "Win + R → %appdata%\\Spotify"
  },
  {
    question: "What keyboard method can you use to copy a playlist link on Desktop app?",
    options: ["Shift + F10 → Share → Copy Link", "Ctrl + L", "Alt + S", "Ctrl + C"],
    correctAnswer: "Shift + F10 → Share → Copy Link"
  },
  {
    question: "Shortcut to move selected track(s) to top of playlist using keyboard only?",
    options: ["Not available", "Ctrl + Shift + ↑", "Alt + ↑", "Ctrl + Home"],
    correctAnswer: "Not available"
  },
  {
    question: "In Spotify Web, what shortcut opens Developer Tools for inspecting elements?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "F10", "Alt + Shift + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What is the native Spotify protocol link to open an artist page?",
    options: ["spotify:artist:<id>", "spotify.com/artist/<id>", "artist:spotify:<id>", "play:artist:<id>"],
    correctAnswer: "spotify:artist:<id>"
  },
  {
    question: "Shortcut to scroll long playlist horizontally using trackpad on macOS?",
    options: ["Two-finger swipe", "Cmd + ← / →", "Ctrl + Scroll", "Alt + H"],
    correctAnswer: "Two-finger swipe"
  },
  {
    question: "Shortcut to jump directly to the mini player (in Premium version)?",
    options: ["No global shortcut", "Alt + M", "Ctrl + Shift + M", "F10"],
    correctAnswer: "No global shortcut"
  },
  {
    question: "Shortcut to enable lyrics via keyboard?",
    options: ["Tab → Lyrics → Enter", "Alt + L", "Ctrl + Shift + L", "Cmd + L"],
    correctAnswer: "Tab → Lyrics → Enter"
  },
  {
    question: "Shortcut to check Spotify system log on desktop (requires manual step)?",
    options: ["No shortcut – view via %appdata%\\Spotify\\Logs", "Ctrl + Shift + L", "F12", "Ctrl + Alt + S"],
    correctAnswer: "No shortcut – view via %appdata%\\Spotify\\Logs"
  },
  {
    question: "Shortcut to move between multiple Spotify windows on macOS?",
    options: ["Cmd + (backtick)", "Cmd + Shift + Tab", "Cmd + Tab", "Control + Tab"],
    correctAnswer: "Cmd + (backtick)"
  },
  {
    question: "How to trigger refresh of the Spotify Desktop app via keyboard?",
    options: ["Ctrl + R (not always effective)", "F5", "Shift + F5", "No shortcut"],
    correctAnswer: "Ctrl + R (not always effective)"
  },
  {
    question: "Keyboard-only way to delete a local file added in Spotify?",
    options: ["Tab to the song → Shift + F10 → Remove", "Delete", "Backspace", "Alt + Delete"],
    correctAnswer: "Tab to the song → Shift + F10 → Remove"
  },
  {
    question: "Shortcut to open the \"Equalizer\" settings (Mobile Only, advanced)?",
    options: ["No desktop shortcut", "Ctrl + Shift + E", "F4", "Alt + Q"],
    correctAnswer: "No desktop shortcut"
  },
  {
    question: "How can you show/hide playback bar using keyboard?",
    options: ["Tab to player area", "Alt + P", "Ctrl + Shift + P", "Ctrl + Tab"],
    correctAnswer: "Tab to player area"
  },
  {
    question: "Shortcut to create a Spotify playlist folder (legacy feature)?",
    options: ["Ctrl + Shift + N", "Ctrl + Alt + N", "No longer supported", "Alt + Shift + N"],
    correctAnswer: "No longer supported"
  },
  {
    question: "How to copy song URI (not link) from Spotify?",
    options: ["Shift + F10 → Share → Copy Spotify URI", "Ctrl + C", "Alt + Shift + C", "No option"],
    correctAnswer: "Shift + F10 → Share → Copy Spotify URI"
  },
  {
    question: "Shortcut to pause playback with global media keys?",
    options: ["Media Play/Pause Key", "Ctrl + Space", "Alt + P", "Cmd + P"],
    correctAnswer: "Media Play/Pause Key"
  },
  {
    question: "Shortcut to open current song in a web browser?",
    options: ["Shift + F10 → Share → Open in browser", "Ctrl + B", "Alt + W", "Ctrl + Shift + W"],
    correctAnswer: "Shift + F10 → Share → Open in browser"
  },
  {
    question: "Shortcut to perform an accessibility action in Spotify?",
    options: ["Windows Narrator: Ctrl + Windows + Enter", "Ctrl + Shift + A", "Alt + Shift + A", "None"],
    correctAnswer: "Windows Narrator: Ctrl + Windows + Enter"
  },
  {
    question: "Keyboard method to favorite a song using Spotify's screen reader mode?",
    options: ["Tab to Heart Icon → Enter", "Ctrl + F", "Shift + H", "Alt + H"],
    correctAnswer: "Tab to Heart Icon → Enter"
  },
  {
    question: "Which command-line tool lets you control Spotify via terminal on Linux?",
    options: ["playerctl", "spotctl", "sp-control", "spotify-cli"],
    correctAnswer: "playerctl"
  },
  {
    question: "What keyboard setting enables high contrast for Spotify (Windows)?",
    options: ["Left Alt + Left Shift + Print Screen", "Ctrl + Shift + H", "Win + C", "Ctrl + Alt + H"],
    correctAnswer: "Left Alt + Left Shift + Print Screen"
  },
  {
    question: "Shortcut to open the context menu on a song with no mouse?",
    options: ["Shift + F10", "Alt + Enter", "Ctrl + F10", "Ctrl + Shift + M"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "What tool allows Spotify playback control via keyboard for scripting?",
    options: ["AppleScript / AutoHotKey", "Win + R", "Bash + Node", "Spotify Sync"],
    correctAnswer: "AppleScript / AutoHotKey"
  },
  {
    question: "Shortcut to scroll to top of a playlist quickly?",
    options: ["Home", "Ctrl + ↑", "Shift + T", "Alt + Home"],
    correctAnswer: "Home"
  },
  {
    question: "What command toggles global shuffle mode via keyboard + scripting?",
    options: ["Via Spotify API script", "Ctrl + S", "F3", "Cmd + Shift + S"],
    correctAnswer: "Via Spotify API script"
  },
  {
    question: "Method to automate Spotify login on desktop?",
    options: ["Password manager + auto-type shortcut", "Ctrl + L", "Alt + Enter", "Not possible"],
    correctAnswer: "Password manager + auto-type shortcut"
  },
  {
    question: "Shortcut to add song to queue using keyboard alone?",
    options: ["Shift + F10 → Add to queue", "Alt + Q", "Ctrl + Q", "Ctrl + Shift + Q"],
    correctAnswer: "Shift + F10 → Add to queue"
  },
  {
    question: "Spotify CLI for Linux/Mac to search and play songs?",
    options: ["spotify-tui", "music-search", "cmd-spotify", "spotify-ctrl"],
    correctAnswer: "spotify-tui"
  },
  {
    question: "What tool lets you bind global Spotify hotkeys on Windows?",
    options: ["AutoHotKey", "PowerToys", "WinScript", "KeyMan"],
    correctAnswer: "AutoHotKey"
  },
  {
    question: "How can you rate a song with keyboard in old Spotify versions?",
    options: ["Thumbs up/down on Discover Weekly", "Ctrl + L", "Alt + U", "Shift + L"],
    correctAnswer: "Thumbs up/down on Discover Weekly"
  },
  {
    question: "Shortcut to quickly switch to lyrics view when it's docked?",
    options: ["Tab + Enter", "Alt + L", "Ctrl + Shift + L", "No native shortcut"],
    correctAnswer: "No native shortcut"
  },
  {
    question: "Which Spotify protocol plays a track via URI?",
    options: ["spotify:track:<id>", "spotify:play:<id>", "spotify:play-track:<id>", "spotify:uri:<id>"],
    correctAnswer: "spotify:track:<id>"
  },
  {
    question: "Shortcut to bring focus to the currently playing album art?",
    options: ["Tab repeatedly", "Ctrl + Shift + A", "Alt + P", "No shortcut"],
    correctAnswer: "Tab repeatedly"
  },
  {
    question: "Method to programmatically skip tracks on Spotify?",
    options: ["Spotify Web API", "Ctrl + →", "Cmd + →", "Shift + N"],
    correctAnswer: "Spotify Web API"
  },
  {
    question: "How can you open Spotify's data folder using keyboard?",
    options: ["Win + R → %localappdata%\\Spotify", "Ctrl + D", "Ctrl + Shift + S", "Alt + S"],
    correctAnswer: "Win + R → %localappdata%\\Spotify"
  },
  {
    question: "What advanced utility allows Spotify control via shell scripts?",
    options: ["DBus", "CronTab", "VLC", "gmusicbrowser"],
    correctAnswer: "DBus"
  },
  {
    question: "Shortcut to exit full-screen mode in Spotify Desktop?",
    options: ["Esc", "F11", "Alt + Enter", "Ctrl + F"],
    correctAnswer: "Esc"
  },
  {
    question: "Keyboard method to jump to currently playing song in album view?",
    options: ["Tab + Enter", "Alt + Enter", "Ctrl + J", "None"],
    correctAnswer: "None"
  },
  {
    question: "What is the URL to trigger Spotify's Web Playback SDK?",
    options: ["developer.spotify.com", "open.spotify.com/webplayer", "sdk.spotify.com", "websdk.spotify.com"],
    correctAnswer: "developer.spotify.com"
  },
  {
    question: "In accessibility mode, how can you label Spotify controls for screen readers?",
    options: ["Use Narrator/VoiceOver with Tab and Arrow keys", "Shift + L", "Ctrl + Alt", "Alt + A"],
    correctAnswer: "Use Narrator/VoiceOver with Tab and Arrow keys"
  },
  {
    question: "What API endpoint allows skipping to the next track?",
    options: ["POST /v1/me/player/next", "GET /v1/next", "PUT /v1/track/next", "PATCH /me/next"],
    correctAnswer: "POST /v1/me/player/next"
  },
  {
    question: "What command plays a track using spotify-tui CLI?",
    options: ["Press Enter after selecting", "Press P", "Ctrl + P", "Alt + Enter"],
    correctAnswer: "Press Enter after selecting"
  }
    ]
  },


  "WinRAR": {
    easy: [
      {
    question: "What is the shortcut to open the selected archive?",
    options: ["Ctrl + O", "Enter", "Ctrl + Enter", "Alt + O"],
    correctAnswer: "Enter"
  },
  {
    question: "What is the shortcut to extract files from an archive?",
    options: ["Alt + E", "Ctrl + E", "Alt + E + X", "Alt + E + T"],
    correctAnswer: "Alt + E"
  },
  {
    question: "What key do you press to test the integrity of an archive?",
    options: ["Alt + T", "T", "Ctrl + T", "Shift + T"],
    correctAnswer: "Alt + T"
  },
  {
    question: "What is the shortcut for the Help menu in WinRAR?",
    options: ["F1", "Alt + H", "Ctrl + H", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "Which key deletes the selected archive file(s)?",
    options: ["Delete", "Ctrl + D", "Shift + Delete", "Alt + Del"],
    correctAnswer: "Delete"
  },
  {
    question: "Shortcut to add files to a new archive?",
    options: ["Alt + A", "Ctrl + A", "Alt + F5", "F5"],
    correctAnswer: "Alt + A"
  },
  {
    question: "What is the shortcut to move to the parent directory?",
    options: ["Backspace", "Ctrl + Up", "Alt + ↑", "F7"],
    correctAnswer: "Backspace"
  },
  {
    question: "How do you refresh the current file list?",
    options: ["F5", "Ctrl + R", "Alt + R", "F2"],
    correctAnswer: "F5"
  },
  {
    question: "Shortcut to rename a selected file?",
    options: ["F2", "Ctrl + M", "R", "Alt + R"],
    correctAnswer: "F2"
  },
  {
    question: "What is the shortcut for 'Extract To' dialog?",
    options: ["Alt + E", "Alt + E + T", "Alt + E + D", "Alt + E + E"],
    correctAnswer: "Alt + E + T"
  },
  {
    question: "What shortcut opens archive comments?",
    options: ["Alt + C", "Ctrl + C", "Alt + I", "Alt + M"],
    correctAnswer: "Alt + M"
  },
  {
    question: "Shortcut for creating a self-extracting archive?",
    options: ["Alt + S", "Ctrl + S", "Alt + Z", "Shift + S"],
    correctAnswer: "Alt + Z"
  },
  {
    question: "What key selects all files in the current view?",
    options: ["Ctrl + A", "Alt + A", "Shift + A", "F7"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Shortcut to view archive properties?",
    options: ["Alt + I", "Alt + Enter", "Ctrl + I", "Shift + I"],
    correctAnswer: "Alt + I"
  },
  {
    question: "Shortcut to close WinRAR window?",
    options: ["Alt + F4", "Ctrl + W", "Ctrl + Q", "Alt + W"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "What key displays the About dialog box?",
    options: ["Alt + H → A", "Help → About", "Ctrl + A", "Alt + A"],
    correctAnswer: "Alt + H → A"
  },
  {
    question: "How to quickly open the context menu?",
    options: ["Shift + F10", "Right Click", "Alt + Space", "Ctrl + M"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "What is the shortcut to create a new folder?",
    options: ["F7", "Ctrl + N", "Shift + F7", "Alt + N"],
    correctAnswer: "F7"
  },
  {
    question: "Which key opens the Repair Archive tool?",
    options: ["Alt + R", "Ctrl + R", "Alt + F", "Alt + H"],
    correctAnswer: "Alt + R"
  },
  {
    question: "Shortcut to browse to a specific path?",
    options: ["Ctrl + D", "Alt + B", "Ctrl + P", "Alt + P"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Shortcut to change file view style?",
    options: ["Ctrl + 1 to Ctrl + 4", "F11", "Shift + V", "Alt + V"],
    correctAnswer: "Ctrl + 1 to Ctrl + 4"
  },
  {
    question: "What does Ctrl + C do in WinRAR?",
    options: ["Copies selected files", "Opens Comment", "Cancels operation", "Opens Console"],
    correctAnswer: "Copies selected files"
  },
  {
    question: "What key navigates to the next pane or area?",
    options: ["Tab", "Enter", "Shift", "Ctrl + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to extract and open destination folder?",
    options: ["Alt + E → O", "Alt + E → X", "Alt + E → D", "Alt + E → F"],
    correctAnswer: "Alt + E → D"
  },
  {
    question: "How do you initiate a benchmark test?",
    options: ["Alt + B", "Ctrl + B", "Tools → Benchmark", "No easy shortcut"],
    correctAnswer: "Alt + B"
  },
  {
    question: "What is the shortcut to view files in an archive?",
    options: ["F3", "Alt + V", "Ctrl + V", "F4"],
    correctAnswer: "F3"
  },
  {
    question: "How do you edit a file in the archive directly?",
    options: ["F4", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "F4"
  },
  {
    question: "What key opens the 'Find files' dialog?",
    options: ["Alt + F", "Ctrl + F", "F3", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to add the selected file(s) to favorites?",
    options: ["Ctrl + F9", "Ctrl + D", "Alt + F3", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Shortcut to open the folder where the archive is saved?",
    options: ["Ctrl + P", "Alt + O", "Alt + F3", "Shift + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the shortcut for scanning for viruses?",
    options: ["Alt + S", "Ctrl + V", "Alt + V", "No default shortcut"],
    correctAnswer: "No default shortcut"
  },
  {
    question: "Shortcut to switch between flat and hierarchical view?",
    options: ["Ctrl + H", "Alt + H", "F6", "Shift + H"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "Which shortcut is used to select a range of files?",
    options: ["Shift + Click", "Alt + S", "Ctrl + S", "Ctrl + R"],
    correctAnswer: "Shift + Click"
  },
  {
    question: "What key allows renaming folders in the archive?",
    options: ["F2", "Ctrl + R", "Alt + N", "F9"],
    correctAnswer: "F2"
  },
  {
    question: "How do you quickly exit WinRAR?",
    options: ["Alt + F4", "Esc", "Ctrl + Q", "Alt + Q"],
    correctAnswer: "Esc"
  },
  {
    question: "Shortcut to display file information?",
    options: ["Alt + I", "Ctrl + I", "Shift + I", "Ctrl + F1"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What does F9 do in WinRAR?",
    options: ["Maximizes window", "Starts archiving", "Switches to command line", "Full-screen toggle"],
    correctAnswer: "Maximizes window"
  },
  {
    question: "What key restores window size?",
    options: ["Alt + F5", "F10", "Ctrl + F5", "Win + Down"],
    correctAnswer: "Ctrl + F5"
  },
  {
    question: "Shortcut to create a recovery record?",
    options: ["Alt + R", "Ctrl + R", "Within Add dialog", "Shift + R"],
    correctAnswer: "Within Add dialog"
  },
  {
    question: "How do you check for software updates?",
    options: ["Help → Check for Updates", "Alt + U", "Ctrl + U", "F11"],
    correctAnswer: "Help → Check for Updates"
  },
  {
    question: "What is the shortcut for copying the full file path?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Alt + C", "Right Click → Copy Path"],
    correctAnswer: "Right Click → Copy Path"
  },
  {
    question: "Shortcut to cancel an ongoing archive operation?",
    options: ["Esc", "Ctrl + C", "Alt + X", "Shift + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you navigate to the address bar quickly?",
    options: ["Alt + D", "F4", "Tab", "Ctrl + L"],
    correctAnswer: "Alt + D"
  },
  {
    question: "Shortcut to minimize WinRAR window?",
    options: ["Alt + Space → N", "Ctrl + Down", "Ctrl + M", "Win + M"],
    correctAnswer: "Alt + Space → N"
  },
  {
    question: "What key opens the options/settings window?",
    options: ["Ctrl + S", "Alt + S", "Alt + O", "Options → Settings"],
    correctAnswer: "Options → Settings"
  },
  {
    question: "What does Shift + Delete do in WinRAR?",
    options: ["Deletes permanently", "Archives files", "Skips Recycle Bin", "Cancels extraction"],
    correctAnswer: "Deletes permanently"
  },
  {
    question: "Shortcut to quickly switch between files?",
    options: ["Tab", "Ctrl + Tab", "Alt + ← / →", "None"],
    correctAnswer: "Alt + ← / →"
  },
  {
    question: "How do you sort by name in the file list?",
    options: ["Click on \"Name\"", "Ctrl + N", "Alt + N", "Right Click → Sort"],
    correctAnswer: "Click on \"Name\""
  },
  {
    question: "What shortcut allows you to lock/unlock archive for editing?",
    options: ["Alt + L", "No shortcut", "Ctrl + L", "Shift + L"],
    correctAnswer: "No shortcut"
  },
  {
    question: "Shortcut to directly open a previously used path?",
    options: ["Ctrl + B", "Alt + ↓", "Ctrl + ↑", "Alt + P"],
    correctAnswer: "Alt + ↓"
  },
  {
    question: "Shortcut to toggle menu bar?",
    options: ["F10", "Alt", "Ctrl + M", "None"],
    correctAnswer: "F10"
  },
  {
    question: "What key selects the next file?",
    options: ["↓ Arrow", "Tab", "Ctrl + ↓", "Page Down"],
    correctAnswer: "↓ Arrow"
  },
  {
    question: "What is the shortcut to deselect files?",
    options: ["Ctrl + Click", "Shift + D", "Ctrl + D", "Alt + D"],
    correctAnswer: "Ctrl + Click"
  },
  {
    question: "What is the function of Alt + F3?",
    options: ["Opens viewer", "Switches view mode", "Opens shell", "No shortcut"],
    correctAnswer: "Opens viewer"
  },
  {
    question: "Shortcut to switch to full screen in WinRAR?",
    options: ["Alt + Enter", "F11", "Ctrl + Enter", "No shortcut"],
    correctAnswer: "F11"
  },
  {
    question: "What key selects previous file?",
    options: ["↑ Arrow", "Page Up", "Shift + ↑", "Ctrl + ↑"],
    correctAnswer: "↑ Arrow"
  },
  {
    question: "How to move a file to another archive?",
    options: ["Drag and Drop", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "Drag and Drop"
  },
  {
    question: "What key expands all folders in archive view?",
    options: ["* (Asterisk)", "Ctrl + *", "Shift + *", "Alt + *"],
    correctAnswer: "* (Asterisk)"
  },
  {
    question: "What shortcut initiates the archive wizard?",
    options: ["Alt + W", "Tools → Wizard", "Ctrl + W", "F6"],
    correctAnswer: "Tools → Wizard"
  },
  {
    question: "How do you toggle toolbar visibility?",
    options: ["Alt + T", "View → Toolbar", "Ctrl + T", "Shift + T"],
    correctAnswer: "View → Toolbar"
  }
    ],
    medium: [
      {
    "question": "How do you extract files from a selected archive using the default path?",
    "options": ["Ctrl + E", "Alt + E", "Ctrl + X", "Alt + X"],
    "correctAnswer": "Ctrl + E"
  },
  {
    "question": "How do you open the \"Add to Archive\" dialog quickly?",
    "options": ["Ctrl + A", "Alt + A", "F5", "Ctrl + P"],
    "correctAnswer": "Alt + A"
  },
  {
    "question": "What is the shortcut to repair a damaged archive in WinRAR?",
    "options": ["Alt + R", "Ctrl + R", "Shift + R", "F12"],
    "correctAnswer": "Alt + R"
  },
  {
    "question": "Which shortcut allows you to test the integrity of the selected archive?",
    "options": ["Ctrl + T", "Alt + T", "Shift + T", "Ctrl + I"],
    "correctAnswer": "Ctrl + T"
  },
  {
    "question": "How do you add selected files to an existing archive?",
    "options": ["Ctrl + A", "Alt + A", "F4", "Shift + A"],
    "correctAnswer": "F4"
  },
  {
    "question": "How do you delete selected files from an archive?",
    "options": ["Del", "Shift + D", "Alt + D", "Ctrl + Del"],
    "correctAnswer": "Del"
  },
  {
    "question": "What shortcut do you use to rename a file inside the archive?",
    "options": ["F2", "F4", "Shift + R", "Ctrl + M"],
    "correctAnswer": "F2"
  },
  {
    "question": "How do you refresh the WinRAR file list?",
    "options": ["F5", "F3", "Ctrl + R", "Alt + R"],
    "correctAnswer": "F5"
  },
  {
    "question": "What is the shortcut to view archive information?",
    "options": ["Alt + I", "Ctrl + I", "Shift + I", "F6"],
    "correctAnswer": "Ctrl + I"
  },
  {
    "question": "How do you split archives into volumes?",
    "options": ["Alt + V", "Ctrl + S", "Via \"Add to Archive\" → Set volume size (no direct shortcut)", "Shift + V"],
    "correctAnswer": "Via \"Add to Archive\" → Set volume size (no direct shortcut)"
  },
  {
    "question": "How do you select all files inside an archive?",
    "options": ["Ctrl + A", "Alt + A", "Shift + A", "Ctrl + Shift + A"],
    "correctAnswer": "Ctrl + A"
  },
  {
    "question": "What is the shortcut to deselect all selected files?",
    "options": ["Esc", "Ctrl + D", "Ctrl + Shift + D", "Alt + D"],
    "correctAnswer": "Esc"
  },
  {
    "question": "How do you view files in the internal viewer?",
    "options": ["F3", "F4", "Alt + V", "Ctrl + V"],
    "correctAnswer": "F3"
  },
  {
    "question": "How do you open a file for editing directly from the archive?",
    "options": ["F4", "F2", "Alt + E", "Ctrl + E"],
    "correctAnswer": "F4"
  },
  {
    "question": "What shortcut closes the currently open archive window?",
    "options": ["Alt + F4", "Ctrl + W", "Esc", "Ctrl + Q"],
    "correctAnswer": "Alt + F4"
  },
  {
    "question": "How do you access WinRAR's settings/preferences window?",
    "options": ["Ctrl + P", "Alt + S", "F9", "No direct shortcut"],
    "correctAnswer": "No direct shortcut"
  },
  {
    "question": "Which key is used to navigate to the parent folder?",
    "options": ["Backspace", "Alt + Left", "Ctrl + Up", "Esc"],
    "correctAnswer": "Backspace"
  },
  {
    "question": "How do you quickly go to the root directory of the archive view?",
    "options": ["Ctrl + Home", "Alt + Home", "Ctrl + R", "F7"],
    "correctAnswer": "Ctrl + Home"
  },
  {
    "question": "Which shortcut allows you to view archive comments?",
    "options": ["Alt + C", "Ctrl + C", "Alt + I", "Alt + M"],
    "correctAnswer": "Alt + C"
  },
  {
    "question": "How do you view archive contents as a flat list?",
    "options": ["Ctrl + W", "F6", "No default shortcut", "Alt + L"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "How do you access the search feature in WinRAR?",
    "options": ["Alt + F", "Ctrl + F", "Shift + F", "F7"],
    "correctAnswer": "F7"
  },
  {
    "question": "How do you exit WinRAR?",
    "options": ["Alt + F4", "Ctrl + Q", "Esc", "Ctrl + F4"],
    "correctAnswer": "Alt + F4"
  },
  {
    "question": "How do you select multiple files non-consecutively?",
    "options": ["Ctrl + Click", "Shift + Click", "Alt + Click", "Ctrl + Alt + Click"],
    "correctAnswer": "Ctrl + Click"
  },
  {
    "question": "How do you toggle between files and folder view?",
    "options": ["No default shortcut", "F10", "Alt + V", "Ctrl + V"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "What is the shortcut to delete an archive file permanently?",
    "options": ["Shift + Del", "Del", "Alt + Del", "Ctrl + Del"],
    "correctAnswer": "Shift + Del" 
  },
  {
    "question": "How do you change the compression method while adding files?",
    "options": ["In dialog, no direct shortcut", "Alt + C", "Ctrl + M", "F8"],
    "correctAnswer": "In dialog, no direct shortcut"
  },
  {
    "question": "How do you select a range of files in a list?",
    "options": ["Shift + Click", "Ctrl + Shift", "Alt + Click", "Shift + Enter"],
    "correctAnswer": "Shift + Click"
  },
  {
    "question": "How do you manually refresh the file list?",
    "options": ["F5", "Ctrl + R", "Alt + R", "F2"],
    "correctAnswer": "F5"
  },
  {
    "question": "What is the function of F1 in WinRAR?",
    "options": ["Opens Help", "Extract Files", "Add to Archive", "Rename"],
    "correctAnswer": "Opens Help"
  },
  {
    "question": "How do you open WinRAR's built-in help window?",
    "options": ["F1", "Alt + H", "Ctrl + H", "Shift + F1"],
    "correctAnswer": "F1"
  },
  {
    "question": "How do you browse to a specific path quickly?",
    "options": ["Ctrl + O", "F9", "No shortcut", "Ctrl + B"],
    "correctAnswer": "No shortcut"
  },
  {
    "question": "Which shortcut toggles between archive and extract mode?",
    "options": ["No default shortcut", "Ctrl + Tab", "Alt + Tab", "Ctrl + Shift + E"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "How do you copy files from an archive to clipboard?",
    "options": ["Ctrl + C", "Alt + C", "Shift + C", "Ctrl + Alt + C"],
    "correctAnswer": "Ctrl + C"
  },
  {
    "question": "How do you paste files into an archive?",
    "options": ["Ctrl + V", "Shift + V", "Alt + V", "You cannot paste directly into archives"],
    "correctAnswer": "You cannot paste directly into archives"
  },
  {
    "question": "How do you compress and email a file quickly?",
    "options": ["Right-click context menu", "No shortcut in main UI", "Shift + M", "Alt + E"],
    "correctAnswer": "No shortcut in main UI"
  },
  {
    "question": "What does the F9 key do in WinRAR?",
    "options": ["Opens \"Options\" menu", "Shows drive list", "Opens Windows Explorer", "Opens configuration"],
    "correctAnswer": "Shows drive list"
  },
  {
    "question": "How do you quickly jump to a specific drive?",
    "options": ["F9", "Ctrl + G", "Alt + D", "Shift + G"],
    "correctAnswer": "F9"
  },
  {
    "question": "What does pressing Backspace do in an open archive view?",
    "options": ["Goes to the parent folder", "Deletes file", "Exits", "Opens previous archive"],
    "correctAnswer": "Goes to the parent folder"
  },
  {
    "question": "Which key do you press to cancel an operation?",
    "options": ["Esc", "Ctrl + X", "Ctrl + C", "Backspace"],
    "correctAnswer": "Esc"
  },
  {
    "question": "How do you jump to the end of a file list?",
    "options": ["Ctrl + End", "End", "Shift + End", "Ctrl + Shift + End"],
    "correctAnswer": "End"
  },
  {
    "question": "How do you jump to the top of the file list?",
    "options": ["Home", "Ctrl + Home", "Alt + Home", "Shift + Home"],
    "correctAnswer": "Home"
  },
  {
    "question": "What does Ctrl + E do in WinRAR?",
    "options": ["Opens extract dialog", "Opens editor for a file", "Nothing by default", "Enables encryption"],
    "correctAnswer": "Nothing by default"
  },
  {
    "question": "How do you rename a file in WinRAR?",
    "options": ["F2", "Ctrl + R", "Alt + R", "Shift + R"],
    "correctAnswer": "F2"
  },
  {
    "question": "What key toggles the checkboxes for file selection (if available)?",
    "options": ["Spacebar", "Tab", "Enter", "Ctrl + Space"],
    "correctAnswer": "Spacebar"
  },
  {
    "question": "How do you refresh the archive content display?",
    "options": ["F5", "F6", "Ctrl + R", "Shift + F5"],
    "correctAnswer": "F5"
  },
  {
    "question": "Which key can you use to cancel an active extraction process?",
    "options": ["Esc", "Ctrl + Break", "Alt + F4", "Ctrl + C"],
    "correctAnswer": "Esc"
  },
  {
    "question": "How do you go back to the previous folder in navigation?",
    "options": ["Alt + Left Arrow", "Backspace", "Ctrl + Left", "Shift + Tab"],
    "correctAnswer": "Alt + Left Arrow"
  },
  {
    "question": "How do you go forward to the next folder in navigation?",
    "options": ["Alt + Right Arrow", "Ctrl + Right Arrow", "Shift + Right Arrow", "Tab"],
    "correctAnswer": "Alt + Right Arrow"
  },
  {
    "question": "How do you close all WinRAR windows at once?",
    "options": ["Ctrl + Shift + W", "Alt + F4 repeatedly", "Right-click > Close All", "No shortcut"],
    "correctAnswer": "No shortcut"
  },
  {
    "question": "How do you archive files with password protection?",
    "options": ["Use GUI > Set Password", "Alt + P", "No direct shortcut", "Ctrl + Shift + P"],
    "correctAnswer": "No direct shortcut"
  },
  {
    "question": "What does Shift + Del do in archive view?",
    "options": ["Permanently delete file", "Move file to Recycle Bin", "Rename", "Extract"],
    "correctAnswer": "Permanently delete file"
  },
  {
    "question": "How do you sort files in the archive by date?",
    "options": ["Click column header (no shortcut)", "Alt + D", "Ctrl + D", "F11"],
    "correctAnswer": "Click column header (no shortcut)"
  },
  {
    "question": "What does the F8 key do in WinRAR?",
    "options": ["Opens test archive dialog", "Opens delete confirmation", "Opens Add to Archive dialog", "Tests integrity of files"],
    "correctAnswer": "Tests integrity of files"
  },
  {
    "question": "How do you toggle file details view in the archive pane?",
    "options": ["No shortcut", "F4", "Ctrl + 1", "Ctrl + 2"],
    "correctAnswer": "No shortcut"
  },
  {
    "question": "How do you move selected files within an archive?",
    "options": ["Not supported", "Drag and drop", "Ctrl + M", "Alt + Shift + M"],
    "correctAnswer": "Not supported"
  },
  {
    "question": "How do you close only the current tab or archive window?",
    "options": ["Ctrl + W", "Alt + F4", "Ctrl + F4", "Esc"],
    "correctAnswer": "Ctrl + F4"
  },
  {
    "question": "What does the Enter key do when a file is selected in an archive?",
    "options": ["Opens file", "Extracts file", "Renames file", "Deletes file"],
    "correctAnswer": "Opens file"
  },
  {
    "question": "How do you initiate the \"Add to Archive\" dialog for selected files?",
    "options": ["Alt + A", "Ctrl + A", "F5", "No default shortcut"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "Which key displays the current file's properties?",
    "options": ["Alt + Enter", "Ctrl + I", "Alt + I", "No default shortcut"],
    "correctAnswer": "No default shortcut"
  },
  {
    "question": "What happens when you press Esc in the main interface?",
    "options": ["Closes current window", "Deselects files", "Cancels operation or navigation", "All of the above"],
    "correctAnswer": "All of the above"
  }
    ],
    hard: [
      {
    question: "How do you set a recovery record for an archive?",
    options: ["Alt + R", "Ctrl + R", "Alt + Shift + R", "Ctrl + Shift + R"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "How do you split a file into multiple volumes?",
    options: ["Alt + V", "Ctrl + V", "Alt + S", "Ctrl + S"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How do you test the integrity of an archive?",
    options: ["Alt + T", "Ctrl + T", "Alt + Q", "Shift + T"],
    correctAnswer: "Alt + T"
  },
  {
    question: "What is the shortcut to view archive properties?",
    options: ["Alt + Enter", "Ctrl + I", "Shift + P", "Alt + P"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "Which shortcut opens the comment dialog for an archive?",
    options: ["Ctrl + C", "Alt + C", "Alt + M", "Ctrl + M"],
    correctAnswer: "Alt + C"
  },
  {
    question: "How do you protect an archive with a password during compression?",
    options: ["Ctrl + P", "Alt + P", "Shift + P", "Alt + S"],
    correctAnswer: "Alt + P"
  },
  {
    question: "Which key combo lets you add files to an archive from the command-line dialog?",
    options: ["Ctrl + A", "Alt + F", "Ctrl + Shift + A", "Alt + A"],
    correctAnswer: "Alt + A"
  },
  {
    question: "What's the shortcut to update an archive with changed files?",
    options: ["Alt + U", "Ctrl + U", "Shift + U", "Ctrl + Shift + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you rename files inside an archive?",
    options: ["Ctrl + M", "Alt + R", "Shift + M", "F2"],
    correctAnswer: "F2"
  },
  {
    question: "How do you select all files in the current archive?",
    options: ["Ctrl + A", "Alt + A", "Shift + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you view the file list as a table?",
    options: ["Alt + L", "Ctrl + Shift + T", "Ctrl + L", "Shift + V"],
    correctAnswer: "Ctrl + L"
  },
  {
    question: "Which shortcut allows you to change the compression method before archiving?",
    options: ["Alt + C", "Ctrl + M", "Alt + M", "Shift + C"],
    correctAnswer: "Alt + M"
  },
  {
    question: "How do you immediately open the extract-to dialog?",
    options: ["Alt + E", "Ctrl + E", "Alt + X", "Ctrl + X"],
    correctAnswer: "Alt + E"
  },
  {
    question: "How do you move selected files within the archive?",
    options: ["F6", "Shift + F6", "Alt + F6", "Ctrl + M"],
    correctAnswer: "F6"
  },
  {
    question: "How do you delete files from inside an archive?",
    options: ["Del", "Shift + Delete", "Alt + Delete", "Ctrl + D"],
    correctAnswer: "Del"
  },
  {
    question: "What is the shortcut to switch to the next tab in WinRAR?",
    options: ["Ctrl + Tab", "Shift + Tab", "Ctrl + Shift + Tab", "Alt + Tab"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "How do you open the 'Set Default Password' dialog?",
    options: ["Ctrl + Alt + P", "Alt + P", "Ctrl + P", "Shift + P"],
    correctAnswer: "Ctrl + Alt + P"
  },
  {
    question: "How do you lock an archive?",
    options: ["Ctrl + L", "Alt + L", "Shift + L", "Ctrl + Shift + L"],
    correctAnswer: "Alt + L"
  },
  {
    question: "Which key refreshes the archive view?",
    options: ["F5", "F6", "Ctrl + R", "Alt + R"],
    correctAnswer: "F5"
  },
  {
    question: "Which shortcut is used to convert an archive format?",
    options: ["Alt + O", "Ctrl + O", "Shift + O", "Alt + C"],
    correctAnswer: "Alt + O"
  },
  {
    question: "How do you open the archive settings/preferences?",
    options: ["Ctrl + S", "Alt + S", "Ctrl + P", "Alt + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the shortcut to show/hide file extensions?",
    options: ["Ctrl + E", "Ctrl + H", "Alt + H", "Shift + E"],
    correctAnswer: "Ctrl + H"
  },
  {
    question: "How do you directly go to a specific path inside the archive?",
    options: ["Ctrl + G", "Alt + G", "Ctrl + Shift + G", "G"],
    correctAnswer: "Ctrl + G"
  },
  {
    question: "Shortcut for displaying CRC checksums?",
    options: ["Ctrl + C", "Alt + C", "Shift + C", "Ctrl + Shift + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "What's the shortcut to extract without confirmation?",
    options: ["Ctrl + E", "Alt + W", "Shift + E", "E"],
    correctAnswer: "Shift + E"
  },
  {
    question: "Shortcut to close WinRAR application quickly?",
    options: ["Alt + F4", "Ctrl + Q", "Shift + Q", "Ctrl + F4"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "How do you run WinRAR as administrator using a shortcut?",
    options: ["Ctrl + Shift + Enter", "Alt + Enter", "Ctrl + Alt + Enter", "Shift + Enter"],
    correctAnswer: "Ctrl + Shift + Enter"
  },
  {
    question: "Shortcut to toggle between navigation pane and file list?",
    options: ["Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you check for archive updates?",
    options: ["Ctrl + U", "Alt + U", "Shift + U", "F10"],
    correctAnswer: "Shift + U"
  },
  {
    question: "How do you view WinRAR version and license info?",
    options: ["Alt + H", "F1", "Ctrl + H", "Help → About"],
    correctAnswer: "Help → About"
  },
  {
    question: "Shortcut to create a self-extracting (SFX) archive?",
    options: ["Alt + S", "Ctrl + S", "Alt + X", "Ctrl + X"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How do you add WinRAR to context menu using keyboard?",
    options: ["Ctrl + Shift + M", "Alt + Shift + C", "Ctrl + M", "Ctrl + Alt + C"],
    correctAnswer: "Alt + Shift + C"
  },
  {
    question: "Shortcut for enabling solid archive?",
    options: ["Alt + D", "Shift + S", "Alt + S", "Ctrl + Shift + A"],
    correctAnswer: "Alt + S"
  },
  {
    question: "How do you create multi-part volumes with recovery?",
    options: ["Alt + R then V", "Alt + S then R", "Ctrl + R then S", "Alt + V then R"],
    correctAnswer: "Alt + R then V"
  },
  {
    question: "How do you quickly switch to favorites?",
    options: ["Ctrl + F", "Alt + F", "Shift + F", "F4"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to stop extraction in progress?",
    options: ["Esc", "Ctrl + Break", "Ctrl + C", "Alt + Esc"],
    correctAnswer: "Esc"
  },
  {
    question: "How do you open a console window from WinRAR?",
    options: ["Alt + T", "Ctrl + ~", "Ctrl + Alt + T", "Shift + T"],
    correctAnswer: "Ctrl + Alt + T"
  },
  {
    question: "Shortcut to compress and email selected files?",
    options: ["Ctrl + E", "Ctrl + M", "Alt + M", "Shift + E"],
    correctAnswer: "Ctrl + E"
  },
  {
    question: "How do you set archive time/date attributes?",
    options: ["Alt + D", "Ctrl + T", "Ctrl + D", "Alt + T"],
    correctAnswer: "Alt + T"
  },
  {
    question: "Shortcut to switch between archive formats (RAR/ZIP)?",
    options: ["Ctrl + F", "Alt + F", "Alt + Z", "Ctrl + Shift + Z"],
    correctAnswer: "Alt + Z"
  },
  {
    question: "How to display file names in hexadecimal mode?",
    options: ["Alt + H", "Ctrl + Alt + X", "Shift + X", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + Shift + H"
  },
  {
    question: "Shortcut to select all archives in folder?",
    options: ["Ctrl + A", "Ctrl + Shift + A", "Alt + A", "Shift + A"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "Shortcut to clear archive history?",
    options: ["Ctrl + H", "Alt + H", "Ctrl + Shift + Del", "Alt + Del"],
    correctAnswer: "Ctrl + Shift + Del"
  },
  {
    question: "How to set file exclusion rules quickly?",
    options: ["Alt + E", "Ctrl + E", "Shift + E", "Ctrl + Shift + E"],
    correctAnswer: "Ctrl + Shift + E"
  },
  {
    question: "Shortcut for secure file deletion (wipe)?",
    options: ["Alt + W", "Shift + Delete", "Ctrl + W", "Ctrl + D"],
    correctAnswer: "Shift + Delete"
  },
  {
    question: "Shortcut to rename archive file?",
    options: ["Ctrl + N", "F2", "Alt + R", "Shift + R"],
    correctAnswer: "F2"
  },
  {
    question: "How do you open archive without file associations?",
    options: ["Ctrl + O", "Shift + O", "Alt + O", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "Shortcut to select files by mask?",
    options: ["Ctrl + F3", "Alt + F3", "Ctrl + M", "Shift + F3"],
    correctAnswer: "Ctrl + F3"
  },
  {
    question: "How to re-compress existing archive?",
    options: ["Ctrl + R", "Alt + Shift + R", "Ctrl + Shift + C", "Alt + R"],
    correctAnswer: "Alt + Shift + R"
  },
  {
    question: "Shortcut to open help manual directly?",
    options: ["F1", "Ctrl + H", "Shift + F1", "Alt + F1"],
    correctAnswer: "F1"
  }
    ]
  },


  "7-Zip": {
    easy: [
      {
    question: "How do you open 7-Zip File Manager?",
    options: ["Ctrl + Alt + Z", "Win + Z", "From Start Menu or Desktop icon", "Ctrl + Shift + Z"],
    correctAnswer: "From Start Menu or Desktop icon"
  },
  {
    question: "Shortcut to open the context menu for files to compress with 7-Zip?",
    options: ["Right-click on file", "Ctrl + C", "Shift + F10", "Alt + Enter"],
    correctAnswer: "Right-click on file"
  },
  {
    question: "Which shortcut opens the \"Add to archive\" window after selecting files?",
    options: ["Alt + A", "Ctrl + A", "Shift + A", "No shortcut, use right-click menu"],
    correctAnswer: "No shortcut, use right-click menu"
  },
  {
    question: "What is the shortcut to extract files to the current folder in 7-Zip?",
    options: ["Ctrl + E", "Alt + E", "Right-click → Extract Here", "Ctrl + X"],
    correctAnswer: "Right-click → Extract Here"
  },
  {
    question: "How can you select all files inside 7-Zip File Manager?",
    options: ["Ctrl + A", "Shift + A", "Alt + A", "Ctrl + S"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "Shortcut to open the properties window of a selected file?",
    options: ["Alt + Enter", "Ctrl + P", "Shift + P", "F2"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How do you refresh the file list in 7-Zip File Manager?",
    options: ["F5", "Ctrl + R", "Alt + R", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "How do you rename a selected file inside 7-Zip File Manager?",
    options: ["F2", "Ctrl + R", "Alt + N", "Shift + R"],
    correctAnswer: "F2"
  },
  {
    question: "Shortcut to open the Help menu in 7-Zip?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How do you close the 7-Zip File Manager window?",
    options: ["Alt + F4", "Ctrl + W", "Ctrl + Q", "Shift + F4"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "How to copy a selected file to clipboard in 7-Zip File Manager?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Shift + C"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "Shortcut to paste files inside 7-Zip File Manager?",
    options: ["Ctrl + V", "Ctrl + P", "Alt + V", "Shift + V"],
    correctAnswer: "Ctrl + V"
  },
  {
    question: "How to open a file inside 7-Zip without extracting?",
    options: ["Enter", "Ctrl + O", "Alt + O", "Shift + O"],
    correctAnswer: "Enter"
  },
  {
    question: "Shortcut to go up one folder level inside 7-Zip File Manager?",
    options: ["Backspace", "Alt + Up Arrow", "Ctrl + Up Arrow", "Shift + Backspace"],
    correctAnswer: "Backspace"
  },
  {
    question: "How to select multiple files using keyboard inside 7-Zip?",
    options: ["Shift + Arrow keys", "Ctrl + Arrow keys", "Alt + Arrow keys", "Ctrl + Shift + Arrow keys"],
    correctAnswer: "Shift + Arrow keys"
  },
  {
    question: "How do you start a search for files inside 7-Zip File Manager?",
    options: ["Ctrl + F", "Ctrl + S", "F3", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to show the toolbar menu in 7-Zip?",
    options: ["Alt", "F10", "Ctrl + T", "Shift + T"],
    correctAnswer: "Alt"
  },
  {
    question: "How to toggle the status bar visibility?",
    options: ["No shortcut, use View menu", "Ctrl + B", "Alt + S", "F11"],
    correctAnswer: "No shortcut, use View menu"
  },
  {
    question: "Shortcut to view extracted files in Windows Explorer after extraction?",
    options: ["No direct shortcut", "Ctrl + E", "Alt + V", "Ctrl + Shift + E"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to open 7-Zip Options from the File Manager?",
    options: ["Tools → Options", "Alt + T → O", "Ctrl + O", "F12"],
    correctAnswer: "Tools → Options"
  },
  {
    question: "Shortcut to copy the path of a selected file?",
    options: ["Shift + Ctrl + C", "Ctrl + C", "Alt + C", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to open a compressed archive using 7-Zip?",
    options: ["Double-click archive file", "Ctrl + O", "Right-click → Open with → 7-Zip", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "Shortcut to extract files to a specified folder?",
    options: ["Alt + E", "Ctrl + E", "Right-click → Extract to...", "Shift + E"],
    correctAnswer: "Right-click → Extract to..."
  },
  {
    question: "How to open the \"Copy To\" dialog?",
    options: ["F5", "Ctrl + C", "Shift + F5", "Alt + C"],
    correctAnswer: "F5"
  },
  {
    question: "Shortcut to open the \"Move To\" dialog?",
    options: ["F6", "Ctrl + M", "Shift + F6", "Alt + M"],
    correctAnswer: "F6"
  },
  {
    question: "How do you select no files (clear selection)?",
    options: ["Ctrl + D", "Ctrl + A", "Shift + D", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "Shortcut to refresh the current directory?",
    options: ["F5", "Ctrl + R", "Alt + F5", "Shift + R"],
    correctAnswer: "F5"
  },
  {
    question: "How to display hidden files and folders?",
    options: ["Use Options dialog", "Ctrl + H", "Alt + H", "No shortcut"],
    correctAnswer: "Use Options dialog"
  },
  {
    question: "Shortcut to open a selected archive file?",
    options: ["Enter", "Ctrl + O", "Alt + O", "Shift + O"],
    correctAnswer: "Enter"
  },
  {
    question: "How to add files to an archive without compression?",
    options: ["Set compression method to \"Store\" in Add dialog", "Ctrl + S", "Alt + S", "No shortcut"],
    correctAnswer: "Set compression method to \"Store\" in Add dialog"
  },
  {
    question: "Shortcut to display the help for a selected function?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How to minimize 7-Zip File Manager window?",
    options: ["Alt + Space → N", "Ctrl + M", "Alt + M", "Win + Down Arrow"],
    correctAnswer: "Alt + Space → N"
  },
  {
    question: "Shortcut to toggle between details and list view?",
    options: ["No direct shortcut", "Ctrl + D", "Alt + V", "Shift + V"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to select the next file in the list?",
    options: ["Down Arrow", "Ctrl + Down", "Alt + Down", "Shift + Down"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "Shortcut to select the previous file?",
    options: ["Up Arrow", "Ctrl + Up", "Alt + Up", "Shift + Up"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How do you copy a file path to clipboard in Windows (outside 7-Zip)?",
    options: ["Shift + Right-click → Copy as path", "Ctrl + C", "Alt + C", "Ctrl + Shift + C"],
    correctAnswer: "Shift + Right-click → Copy as path"
  },
  {
    question: "Shortcut to open the command prompt in a directory (Windows Explorer)?",
    options: ["Shift + Right-click → Open command window here", "Ctrl + R", "Alt + R", "Win + R"],
    correctAnswer: "Shift + Right-click → Open command window here"
  },
  {
    question: "How to create a new folder inside 7-Zip File Manager?",
    options: ["F7", "Ctrl + N", "Alt + N", "Shift + N"],
    correctAnswer: "F7"
  },
  {
    question: "How to sort files by name?",
    options: ["Click the \"Name\" column header", "Ctrl + N", "Alt + N", "No shortcut"],
    correctAnswer: "Click the \"Name\" column header"
  },
  {
    question: "Shortcut to toggle the file preview pane?",
    options: ["No direct shortcut", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to move selected files to another folder inside 7-Zip?",
    options: ["F6", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "F6"
  },
  {
    question: "Shortcut to delete a selected file inside 7-Zip?",
    options: ["Delete", "Ctrl + D", "Alt + Delete", "Shift + Delete"],
    correctAnswer: "Delete"
  },
  {
    question: "How to open multiple archives at once in 7-Zip?",
    options: ["Select files → Enter", "Ctrl + Enter", "No direct shortcut, open individually", "Shift + Enter"],
    correctAnswer: "Select files → Enter"
  },
  {
    question: "How to change the extraction path in \"Extract to\" dialog?",
    options: ["Manually type or browse", "Ctrl + P", "Alt + P", "No shortcut"],
    correctAnswer: "Manually type or browse"
  },
  {
    question: "Shortcut to open the folder containing the archive after extraction?",
    options: ["No direct shortcut", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to open the 7-Zip file manager as administrator?",
    options: ["Right-click → Run as administrator", "Ctrl + Shift + Enter", "Alt + Enter", "No shortcut"],
    correctAnswer: "Right-click → Run as administrator"
  },
  {
    question: "Shortcut to open the last accessed folder in 7-Zip?",
    options: ["No direct shortcut", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to compress a file using the default compression settings?",
    options: ["Right-click file → Add to archive", "Right-click file → Add to \"filename.7z\"", "Ctrl + A", "Shift + A"],
    correctAnswer: "Right-click file → Add to \"filename.7z\""
  },
  {
    question: "Shortcut to select the first file in the list?",
    options: ["Home", "Ctrl + Home", "Alt + Home", "Shift + Home"],
    correctAnswer: "Home"
  },
  {
    question: "Shortcut to select the last file in the list?",
    options: ["End", "Ctrl + End", "Alt + End", "Shift + End"],
    correctAnswer: "End"
  },
  {
    question: "How to switch between panes in 7-Zip File Manager?",
    options: ["Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "Shortcut to toggle full screen in 7-Zip File Manager?",
    options: ["No direct shortcut", "F11", "Ctrl + F11", "Alt + F11"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to view the file properties quickly?",
    options: ["Alt + Enter", "Ctrl + I", "Shift + P", "F2"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How to exit 7-Zip?",
    options: ["Alt + F4", "Ctrl + Q", "Ctrl + W", "Shift + F4"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "Shortcut to open the folder tree pane?",
    options: ["No direct shortcut", "Ctrl + T", "Alt + T", "Shift + T"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to select files by extension in 7-Zip?",
    options: ["No direct shortcut", "Use search", "Ctrl + F", "Shift + F"],
    correctAnswer: "Use search"
  },
  {
    question: "Shortcut to open the \"Extract here\" option from context menu?",
    options: ["No direct keyboard shortcut", "Shift + E", "Alt + E", "Ctrl + E"],
    correctAnswer: "No direct keyboard shortcut"
  },
  {
    question: "Shortcut to close an open archive inside 7-Zip File Manager?",
    options: ["Ctrl + W", "Ctrl + F4", "Alt + F4", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to change the language of the 7-Zip interface?",
    options: ["Options → Language", "Alt + L", "Ctrl + L", "No shortcut"],
    correctAnswer: "Options → Language"
  },
  {
    question: "How to update 7-Zip to a newer version?",
    options: ["Download and install new version manually", "Auto-update in software", "Use Ctrl + U", "No update available"],
    correctAnswer: "Download and install new version manually"
  }
    ],
    medium: [
      {
    question: "How do you open the \"Add to archive\" dialog using keyboard shortcuts after selecting files in 7-Zip File Manager?",
    options: ["Alt + A", "Ctrl + Shift + A", "No direct shortcut, use right-click menu", "Shift + A"],
    correctAnswer: "No direct shortcut, use right-click menu"
  },
  {
    question: "Which shortcut lets you switch between the two panes in the 7-Zip File Manager?",
    options: ["Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    correctAnswer: "Tab"
  },
  {
    question: "How do you extract files to a specific folder using 7-Zip with keyboard only?",
    options: ["Select files → press F5 → enter folder path", "Select files → press F6 → enter folder path", "No keyboard shortcut, use mouse", "Ctrl + E → choose folder"],
    correctAnswer: "Select files → press F5 → enter folder path"
  },
  {
    question: "How can you toggle the \"Show hidden files\" option inside 7-Zip?",
    options: ["No shortcut, use Options dialog", "Ctrl + H", "Alt + H", "Shift + H"],
    correctAnswer: "No shortcut, use Options dialog"
  },
  {
    question: "What keyboard shortcut lets you open the \"Move To\" dialog in 7-Zip File Manager?",
    options: ["F6", "Ctrl + M", "Shift + M", "Alt + M"],
    correctAnswer: "F6"
  },
  {
    question: "How do you rename a selected file inside 7-Zip File Manager using the keyboard?",
    options: ["F2", "Ctrl + R", "Alt + R", "Shift + R"],
    correctAnswer: "F2"
  },
  {
    question: "Shortcut to open the \"Copy To\" dialog box?",
    options: ["F5", "Ctrl + C", "Alt + C", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "Which shortcut lets you select all files inside the current folder in 7-Zip File Manager?",
    options: ["Ctrl + A", "Shift + A", "Alt + A", "Ctrl + S"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you deselect all files using a keyboard shortcut?",
    options: ["Ctrl + D", "Ctrl + A", "Shift + D", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "How to refresh the file list in 7-Zip?",
    options: ["F5", "Ctrl + R", "Alt + R", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "How do you display the properties of a selected file?",
    options: ["Alt + Enter", "Ctrl + P", "Shift + P", "F2"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "Which shortcut opens the Help menu?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + F1"],
    correctAnswer: "F1"
  },
  {
    question: "How to open a file or folder inside 7-Zip File Manager?",
    options: ["Enter", "Ctrl + O", "Alt + O", "Shift + O"],
    correctAnswer: "Enter"
  },
  {
    question: "How do you delete a selected file or folder?",
    options: ["Delete", "Ctrl + D", "Alt + Delete", "Shift + Delete"],
    correctAnswer: "Delete"
  },
  {
    question: "How do you create a new folder inside 7-Zip?",
    options: ["F7", "Ctrl + N", "Alt + N", "Shift + N"],
    correctAnswer: "F7"
  },
  {
    question: "Shortcut to go up one folder level in 7-Zip File Manager?",
    options: ["Backspace", "Alt + Up Arrow", "Ctrl + Up Arrow", "Shift + Backspace"],
    correctAnswer: "Backspace"
  },
  {
    question: "How do you sort files by different columns?",
    options: ["Click column headers (no shortcut)", "Ctrl + S", "Alt + S", "Shift + S"],
    correctAnswer: "Click column headers (no shortcut)"
  },
  {
    question: "Which shortcut opens the context menu in 7-Zip File Manager?",
    options: ["Shift + F10", "Ctrl + M", "Alt + M", "F12"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How do you copy the path of the selected file to the clipboard?",
    options: ["No direct shortcut", "Ctrl + C", "Shift + Ctrl + C", "Alt + C"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to switch the view mode between Details and List?",
    options: ["No direct shortcut, use View menu", "Ctrl + D", "Alt + D", "Shift + D"],
    correctAnswer: "No direct shortcut, use View menu"
  },
  {
    question: "How do you extract selected files to the current folder?",
    options: ["Right-click → Extract Here (no shortcut)", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "Right-click → Extract Here (no shortcut)"
  },
  {
    question: "How to extract files to a folder named after the archive?",
    options: ["Right-click → Extract to \"foldername\" (no shortcut)", "Ctrl + Shift + E", "Alt + E", "Shift + E"],
    correctAnswer: "Right-click → Extract to \"foldername\" (no shortcut)"
  },
  {
    question: "Shortcut to open the 7-Zip Options window?",
    options: ["Tools → Options (no direct shortcut)", "Alt + T, then O", "Ctrl + O", "F12"],
    correctAnswer: "Tools → Options (no direct shortcut)"
  },
  {
    question: "How to select the first file in the list?",
    options: ["Home", "Ctrl + Home", "Alt + Home", "Shift + Home"],
    correctAnswer: "Home"
  },
  {
    question: "Shortcut to select the last file in the list?",
    options: ["End", "Ctrl + End", "Alt + End", "Shift + End"],
    correctAnswer: "End"
  },
  {
    question: "How do you close the current archive window?",
    options: ["Ctrl + W or Ctrl + F4", "Alt + F4", "Ctrl + Q", "Shift + F4"],
    correctAnswer: "Ctrl + W or Ctrl + F4"
  },
  {
    question: "How to move selected files to another folder?",
    options: ["F6", "Ctrl + M", "Alt + M", "Shift + M"],
    correctAnswer: "F6"
  },
  {
    question: "How to copy selected files to another folder?",
    options: ["F5", "Ctrl + C", "Alt + C", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "Shortcut to rename the selected file?",
    options: ["F2", "Ctrl + R", "Alt + R", "Shift + R"],
    correctAnswer: "F2"
  },
  {
    question: "How to display the toolbar menu temporarily?",
    options: ["Press Alt", "Ctrl + T", "F10", "Shift + T"],
    correctAnswer: "Press Alt"
  },
  {
    question: "How do you open multiple archives at once?",
    options: ["Select multiple archives → Enter", "Ctrl + Enter", "Shift + Enter", "No direct shortcut"],
    correctAnswer: "Select multiple archives → Enter"
  },
  {
    question: "Shortcut to select next file?",
    options: ["Down Arrow", "Ctrl + Down", "Alt + Down", "Shift + Down"],
    correctAnswer: "Down Arrow"
  },
  {
    question: "Shortcut to select previous file?",
    options: ["Up Arrow", "Ctrl + Up", "Alt + Up", "Shift + Up"],
    correctAnswer: "Up Arrow"
  },
  {
    question: "How to minimize 7-Zip window?",
    options: ["Alt + Space, then N", "Ctrl + M", "Win + Down Arrow", "Shift + M"],
    correctAnswer: "Alt + Space, then N"
  },
  {
    question: "Shortcut to open file in default application from 7-Zip?",
    options: ["Enter", "Ctrl + O", "Alt + O", "Shift + O"],
    correctAnswer: "Enter"
  },
  {
    question: "Shortcut to open the \"Extract\" menu?",
    options: ["Alt + E", "Ctrl + E", "Shift + E", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to add files to an archive without compression?",
    options: ["Set compression method to \"Store\" in Add dialog", "Ctrl + S", "Alt + S", "No shortcut"],
    correctAnswer: "Set compression method to \"Store\" in Add dialog"
  },
  {
    question: "Shortcut to toggle full screen mode?",
    options: ["No direct shortcut", "F11", "Ctrl + F11", "Alt + F11"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to view the file preview pane?",
    options: ["No direct shortcut", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Shortcut to open the \"Extract Here\" option from the context menu?",
    options: ["No direct shortcut", "Shift + E", "Alt + E", "Ctrl + E"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to copy a file path in Windows (outside 7-Zip)?",
    options: ["Shift + Right-click → Copy as path", "Ctrl + C", "Alt + C", "Ctrl + Shift + C"],
    correctAnswer: "Shift + Right-click → Copy as path"
  },
  {
    question: "How to open command prompt in the folder from Windows Explorer?",
    options: ["Shift + Right-click → Open command window here", "Ctrl + R", "Alt + R", "Win + R"],
    correctAnswer: "Shift + Right-click → Open command window here"
  },
  {
    question: "How to switch language in 7-Zip?",
    options: ["Options → Language (no shortcut)", "Alt + L", "Ctrl + L", "No shortcut"],
    correctAnswer: "Options → Language (no shortcut)"
  },
  {
    question: "Shortcut to update 7-Zip software?",
    options: ["Download manually, no built-in shortcut", "Ctrl + U", "Alt + U", "No update available"],
    correctAnswer: "Download manually, no built-in shortcut"
  },
  {
    question: "How to open 7-Zip File Manager as Administrator?",
    options: ["Right-click → Run as administrator", "Ctrl + Shift + Enter", "Alt + Enter", "No shortcut"],
    correctAnswer: "Right-click → Run as administrator"
  },
  {
    question: "How to toggle the status bar visibility?",
    options: ["No direct shortcut, use View menu", "Ctrl + B", "Alt + S", "F11"],
    correctAnswer: "No direct shortcut, use View menu"
  },
  {
    question: "How to select files by extension?",
    options: ["Use Search feature", "Ctrl + F", "Alt + F", "No shortcut"],
    correctAnswer: "Use Search feature"
  },
  {
    question: "Shortcut to close the 7-Zip File Manager window?",
    options: ["Alt + F4", "Ctrl + Q", "Ctrl + W", "Shift + F4"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "How to select files using Shift + Arrow keys?",
    options: ["Selects multiple files one by one", "Selects all files", "Deselects files", "No effect"],
    correctAnswer: "Selects multiple files one by one"
  },
  {
    question: "How to quickly jump to the search box in 7-Zip?",
    options: ["Ctrl + F", "Alt + F", "Shift + F", "No direct shortcut"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How to toggle the file tree pane?",
    options: ["No direct shortcut", "Ctrl + T", "Alt + T", "Shift + T"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to select multiple files non-consecutively?",
    options: ["Hold Ctrl + click each file", "Shift + click", "Alt + click", "No selection possible"],
    correctAnswer: "Hold Ctrl + click each file"
  },
  {
    question: "How to move the 7-Zip window using keyboard?",
    options: ["Alt + Space → M, then arrow keys", "Ctrl + M", "Shift + M", "No shortcut"],
    correctAnswer: "Alt + Space → M, then arrow keys"
  },
  {
    question: "How to resize the 7-Zip window using keyboard?",
    options: ["Alt + Space → S, then arrow keys", "Ctrl + S", "Shift + S", "No shortcut"],
    correctAnswer: "Alt + Space → S, then arrow keys"
  },
  {
    question: "Shortcut to open the Extract dialog box?",
    options: ["F5", "Ctrl + E", "Alt + E", "No direct shortcut"],
    correctAnswer: "F5"
  },
  {
    question: "How to select the last accessed folder?",
    options: ["No shortcut, navigate manually", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "No shortcut, navigate manually"
  },
  {
    question: "Shortcut to display the file extension?",
    options: ["No shortcut in 7-Zip, managed by OS", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "No shortcut in 7-Zip, managed by OS"
  },
  {
    question: "How to toggle display of hidden/system files?",
    options: ["Use Options menu", "Ctrl + H", "Alt + H", "No shortcut"],
    correctAnswer: "Use Options menu"
  },
  {
    question: "How to open 7-Zip Help documentation?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + F1"],
    correctAnswer: "F1"
  }
    ],
    hard: [
      {
    question: "Which shortcut combination allows you to run 7-Zip File Manager as administrator using keyboard only?",
    options: ["Ctrl + Shift + Enter (after selecting the shortcut)", "Alt + Ctrl + Enter", "Shift + F10 then A", "No direct shortcut"],
    correctAnswer: "Ctrl + Shift + Enter (after selecting the shortcut)"
  },
  {
    question: "How can you quickly create a self-extracting archive from selected files using keyboard shortcuts?",
    options: ["Use Add to archive dialog and select SFX option manually", "Ctrl + Shift + S", "Alt + S", "No direct shortcut, only through menu"],
    correctAnswer: "Use Add to archive dialog and select SFX option manually"
  },
  {
    question: "What shortcut opens the compression settings dialog in 7-Zip's \"Add to archive\" window?",
    options: ["Alt + C", "Ctrl + C", "No direct shortcut, must use mouse", "Shift + C"],
    correctAnswer: "No direct shortcut, must use mouse"
  },
  {
    question: "How do you change the compression level without opening the Add dialog?",
    options: ["No shortcut available, only manual selection", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "No shortcut available, only manual selection"
  },
  {
    question: "How to open the \"Test archive\" option with a shortcut in 7-Zip File Manager?",
    options: ["No direct shortcut, must right-click or use menu", "Ctrl + T", "Alt + T", "Shift + T"],
    correctAnswer: "No direct shortcut, must right-click or use menu"
  },
  {
    question: "Which shortcut enables you to select files by specific file attributes in 7-Zip?",
    options: ["No direct shortcut, use Search or manual selection", "Ctrl + F", "Alt + A", "Shift + S"],
    correctAnswer: "No direct shortcut, use Search or manual selection"
  },
  {
    question: "How can you open the \"Open Archive\" dialog box directly from 7-Zip File Manager?",
    options: ["Ctrl + O", "Alt + O", "No direct shortcut", "Shift + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "How to move to the root folder in 7-Zip using keyboard?",
    options: ["Ctrl + Home", "Alt + Home", "No direct shortcut, use mouse", "Shift + Home"],
    correctAnswer: "Ctrl + Home"
  },
  {
    question: "What is the shortcut to open the \"Properties\" window of the 7-Zip executable file?",
    options: ["Shift + F10 then P", "Ctrl + P", "Alt + Enter", "No shortcut"],
    correctAnswer: "Shift + F10 then P"
  },
  {
    question: "How to create a new archive format profile for compression in 7-Zip?",
    options: ["No shortcut, use Options menu", "Alt + N", "Ctrl + N", "Shift + N"],
    correctAnswer: "No shortcut, use Options menu"
  },
  {
    question: "How do you quickly switch to the parent folder in 7-Zip File Manager using keyboard?",
    options: ["Backspace", "Alt + Up Arrow", "Ctrl + Up Arrow", "No shortcut"],
    correctAnswer: "Backspace"
  },
  {
    question: "Which shortcut lets you toggle the navigation pane (folder tree) in 7-Zip?",
    options: ["No direct shortcut", "Ctrl + T", "Alt + T", "Shift + T"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "How to extract files directly from the command line interface of 7-Zip?",
    options: ["Use 7z x archive.zip command", "Ctrl + X", "Alt + X", "Shift + X"],
    correctAnswer: "Use 7z x archive.zip command"
  },
  {
    question: "What command line parameter allows setting a password for archive extraction?",
    options: ["-pPASSWORD", "-password PASSWORD", "-pass PASSWORD", "-key PASSWORD"],
    correctAnswer: "-pPASSWORD"
  },
  {
    question: "How to add files to an existing archive without extracting using the command line?",
    options: ["Use 7z u archive.zip files", "7z a archive.zip files", "7z x archive.zip files", "7z t archive.zip files"],
    correctAnswer: "Use 7z u archive.zip files"
  },
  {
    question: "Which shortcut in 7-Zip opens the \"Extract to\" dialog pre-filled with the archive name?",
    options: ["No direct shortcut, done via context menu", "Ctrl + Shift + E", "Alt + E", "Shift + E"],
    correctAnswer: "No direct shortcut, done via context menu"
  },
  {
    question: "How can you toggle the checksum calculation in 7-Zip archives?",
    options: ["No direct shortcut, done via Add to archive dialog", "Ctrl + K", "Alt + K", "Shift + K"],
    correctAnswer: "No direct shortcut, done via Add to archive dialog"
  },
  {
    question: "How to open the 7-Zip console in Windows directly?",
    options: ["Press Win + R, then type cmd and run 7z command", "Ctrl + Alt + 7", "Alt + 7", "No shortcut"],
    correctAnswer: "Press Win + R, then type cmd and run 7z command"
  },
  {
    question: "How to configure automatic updates for 7-Zip?",
    options: ["No automatic update feature; manual download only", "Options → Updates → Auto-check", "Alt + U", "Ctrl + U"],
    correctAnswer: "No automatic update feature; manual download only"
  },
  {
    question: "How to create a recovery record inside an archive using 7-Zip?",
    options: ["Set in Add to archive dialog → Recovery record field", "Ctrl + R", "Alt + R", "No shortcut"],
    correctAnswer: "Set in Add to archive dialog → Recovery record field"
  },
  {
    question: "What is the keyboard shortcut to open the \"Advanced\" tab in the Add to archive dialog?",
    options: ["No direct shortcut, use mouse/tab key", "Alt + V", "Ctrl + V", "Shift + V"],
    correctAnswer: "No direct shortcut, use mouse/tab key"
  },
  {
    question: "How do you quickly add comments to an archive?",
    options: ["Use Add to archive → Comments box", "Ctrl + M", "Alt + M", "No shortcut"],
    correctAnswer: "Use Add to archive → Comments box"
  },
  {
    question: "How to extract a password-protected archive in 7-Zip?",
    options: ["Select archive → Extract → enter password when prompted", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "Select archive → Extract → enter password when prompted"
  },
  {
    question: "How to set the compression dictionary size?",
    options: ["In Add to archive dialog, Advanced tab", "Ctrl + D", "Alt + D", "No shortcut"],
    correctAnswer: "In Add to archive dialog, Advanced tab"
  },
  {
    question: "How to open the 7-Zip log file if enabled?",
    options: ["No direct shortcut, open manually in file system", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "No direct shortcut, open manually in file system"
  },
  {
    question: "How to test archive integrity from the command line?",
    options: ["7z t archive.zip", "7z x archive.zip", "7z a archive.zip", "7z l archive.zip"],
    correctAnswer: "7z t archive.zip"
  },
  {
    question: "How to list contents of an archive using command line?",
    options: ["7z l archive.zip", "7z t archive.zip", "7z x archive.zip", "7z a archive.zip"],
    correctAnswer: "7z l archive.zip"
  },
  {
    question: "How to use solid compression mode via command line?",
    options: ["7z a -ms=on archive.7z files", "7z a -mso archive.7z files", "7z a -m solid archive.7z files", "No such option"],
    correctAnswer: "7z a -ms=on archive.7z files"
  },
  {
    question: "How to exclude files with specific extensions using command line?",
    options: ["7z a archive.7z * -xr!*.ext", "7z a archive.7z * -x!*.ext", "7z a archive.7z * -ex!*.ext", "No such option"],
    correctAnswer: "7z a archive.7z * -xr!*.ext"
  },
  {
    question: "What does the command 7z u archive.zip files do?",
    options: ["Updates the existing archive with new files", "Extracts files", "Tests archive", "Lists archive content"],
    correctAnswer: "Updates the existing archive with new files"
  },
  {
    question: "How to create multi-volume archives from the command line?",
    options: ["Use -v switch, e.g. 7z a -v5m archive.7z files", "Use -m switch", "Use -multi switch", "No support"],
    correctAnswer: "Use -v switch, e.g. 7z a -v5m archive.7z files"
  },
  {
    question: "How to set a different compression method via command line?",
    options: ["7z a -mx=9 archive.7z files", "7z a -cm=zip archive.zip files", "7z a -cm=7z archive.7z files", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "How to encrypt file names in an archive?",
    options: ["Use -mhe=on switch in command line", "Use -enc switch", "No option", "Use -encrypt switch"],
    correctAnswer: "Use -mhe=on switch in command line"
  },
  {
    question: "How to suppress overwrite confirmation prompts during extraction?",
    options: ["Use -y switch", "Use -s switch", "Use -n switch", "No such switch"],
    correctAnswer: "Use -y switch"
  },
  {
    question: "How to extract files with full path restoration via command line?",
    options: ["7z x archive.zip -oOutputFolder", "7z e archive.zip", "7z t archive.zip", "No option"],
    correctAnswer: "7z x archive.zip -oOutputFolder"
  },
  {
    question: "How to use 7-Zip's GUI to check archive encryption status?",
    options: ["Open archive → right-click → Properties", "No direct option", "Use Info dialog", "Use Help menu"],
    correctAnswer: "Open archive → right-click → Properties"
  },
  {
    question: "What shortcut keys allow navigating the address bar in 7-Zip File Manager?",
    options: ["Alt + D or Ctrl + L", "Ctrl + D", "Shift + D", "No shortcut"],
    correctAnswer: "Alt + D or Ctrl + L"
  },
  {
    question: "How to quickly close the 7-Zip File Manager window?",
    options: ["Ctrl + W or Alt + F4", "Ctrl + Q", "Shift + F4", "No shortcut"],
    correctAnswer: "Ctrl + W or Alt + F4"
  },
  {
    question: "How to open the recent archives list in 7-Zip?",
    options: ["No shortcut, use File menu", "Ctrl + R", "Alt + R", "Shift + R"],
    correctAnswer: "No shortcut, use File menu"
  },
  {
    question: "How to refresh the file list in 7-Zip File Manager?",
    options: ["F5", "Ctrl + R", "Alt + R", "No shortcut"],
    correctAnswer: "F5"
  },
  {
    question: "How to quickly select all files in 7-Zip File Manager?",
    options: ["Ctrl + A", "Ctrl + S", "Alt + A", "Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "What shortcut deselects all selected files?",
    options: ["Ctrl + D", "Ctrl + A", "Shift + D", "No shortcut"],
    correctAnswer: "No shortcut"
  },
  {
    question: "How to open 7-Zip Options dialog from keyboard?",
    options: ["No direct shortcut, use menu", "Ctrl + O", "Alt + O", "Shift + O"],
    correctAnswer: "No direct shortcut, use menu"
  },
  {
    question: "How to search for files inside an archive in 7-Zip?",
    options: ["Ctrl + F", "Alt + F", "Shift + F", "No shortcut"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "How to maximize the 7-Zip window using keyboard?",
    options: ["Alt + Space then X", "Ctrl + M", "Shift + M", "No shortcut"],
    correctAnswer: "Alt + Space then X"
  },
  {
    question: "How to minimize 7-Zip window via keyboard?",
    options: ["Alt + Space then N", "Ctrl + N", "Shift + N", "No shortcut"],
    correctAnswer: "Alt + Space then N"
  },
  {
    question: "How to toggle the status bar in 7-Zip File Manager?",
    options: ["No shortcut, manual toggle via View menu", "Ctrl + S", "Alt + S", "Shift + S"],
    correctAnswer: "No shortcut, manual toggle via View menu"
  },
  {
    question: "How to open the 7-Zip File Manager from a command prompt?",
    options: ["Run 7zFM.exe", "Run 7z.exe", "Run 7zip.exe", "No command"],
    correctAnswer: "Run 7zFM.exe"
  },
  {
    question: "What is the keyboard shortcut to rename a file in 7-Zip?",
    options: ["F2", "Ctrl + R", "Alt + R", "No shortcut"],
    correctAnswer: "F2"
  },
  {
    question: "How to open the context menu for a selected file using keyboard?",
    options: ["Shift + F10", "Ctrl + F10", "Alt + F10", "No shortcut"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "How to compress files using the Ultra compression level by default?",
    options: ["Set in Add to archive dialog → Compression level dropdown", "Ctrl + U", "Alt + U", "No shortcut"],
    correctAnswer: "Set in Add to archive dialog → Compression level dropdown"
  },
  {
    question: "How to quickly open the Extract Here command?",
    options: ["No direct shortcut, use context menu", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "No direct shortcut, use context menu"
  },
  {
    question: "How to enable or disable file overwriting prompt?",
    options: ["Use -y or -aos switches in command line", "Ctrl + Y", "Alt + Y", "No shortcut"],
    correctAnswer: "Use -y or -aos switches in command line"
  },
  {
    question: "How to open the \"Add to archive\" window from command line?",
    options: ["No, must use GUI for this dialog", "7z a command", "7z add command", "7z new command"],
    correctAnswer: "No, must use GUI for this dialog"
  },
  {
    question: "How to force 7-Zip to overwrite read-only files?",
    options: ["No direct option, manual deletion recommended", "Use -aoa switch", "Use -overwrite switch", "No option"],
    correctAnswer: "Use -aoa switch"
  },
  {
    question: "How to extract archives with full paths in the GUI?",
    options: ["Use \"Extract to\" and select folder, default preserves paths", "Use \"Extract Here\" option", "Ctrl + X", "No shortcut"],
    correctAnswer: "Use \"Extract to\" and select folder, default preserves paths"
  },
  {
    question: "How to enable \"Show hidden files\" in 7-Zip?",
    options: ["Managed by OS, not 7-Zip itself", "Ctrl + H", "Alt + H", "Shift + H"],
    correctAnswer: "Managed by OS, not 7-Zip itself"
  },
  {
    question: "How to open the 7-Zip executable properties window?",
    options: ["Shift + F10 on 7z.exe → Properties", "Ctrl + P on 7z.exe", "Alt + P on 7z.exe", "No shortcut"],
    correctAnswer: "Shift + F10 on 7z.exe → Properties"
  },
  {
    question: "How to enable or disable solid compression in GUI?",
    options: ["Add to archive → Compression settings", "Ctrl + S", "Alt + S", "No shortcut"],
    correctAnswer: "Add to archive → Compression settings"
  },
  {
    question: "How to use multi-threading options in 7-Zip?",
    options: ["Set number of CPU threads in Add to archive → Options", "Ctrl + M", "Alt + M", "No shortcut"],
    correctAnswer: "Set number of CPU threads in Add to archive → Options"
  }
    ]
  },


  "Windows 11": {
    easy: [
      {
    "question": "What shortcut opens the Start Menu in Windows 11?",
    "options": ["Ctrl + S", "Win", "Alt + S", "Shift + S"],
    "correctAnswer": "Win"
  },
  {
    "question": "Which shortcut opens the Settings app?",
    "options": ["Win + I", "Win + S", "Ctrl + I", "Alt + I"],
    "correctAnswer": "Win + I"
  },
  {
    "question": "How do you lock your PC quickly?",
    "options": ["Win + L", "Ctrl + L", "Alt + L", "Shift + L"],
    "correctAnswer": "Win + L"
  },
  {
    "question": "Which shortcut opens File Explorer?",
    "options": ["Win + E", "Ctrl + E", "Alt + E", "Shift + E"],
    "correctAnswer": "Win + E"
  },
  {
    "question": "How to open the notification center?",
    "options": ["Win + N", "Ctrl + N", "Alt + N", "Shift + N"],
    "correctAnswer": "Win + N"
  },
  {
    "question": "Which keys open the Quick Settings panel?",
    "options": ["Win + A", "Ctrl + A", "Alt + A", "Shift + A"],
    "correctAnswer": "Win + A"
  },
  {
    "question": "How to open the Action Center?",
    "options": ["Win + W", "Ctrl + W", "Alt + W", "Shift + W"],
    "correctAnswer": "Win + W"
  },
  {
    "question": "What shortcut snaps a window to the left half of the screen?",
    "options": ["Win + Left Arrow", "Ctrl + Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
    "correctAnswer": "Win + Left Arrow"
  },
  {
    "question": "How do you open the Task View?",
    "options": ["Win + Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Tab"],
    "correctAnswer": "Win + Tab"
  },
  {
    "question": "Which shortcut switches between open apps?",
    "options": ["Alt + Tab", "Ctrl + Tab", "Win + Tab", "Shift + Tab"],
    "correctAnswer": "Alt + Tab"
  },
  {
    "question": "How to minimize all windows and show the desktop?",
    "options": ["Win + D", "Ctrl + D", "Alt + D", "Shift + D"],
    "correctAnswer": "Win + D"
  },
  {
    "question": "Which shortcut opens the Run dialog box?",
    "options": ["Win + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "correctAnswer": "Win + R"
  },
  {
    "question": "How to open the Clipboard history?",
    "options": ["Win + V", "Ctrl + V", "Alt + V", "Shift + V"],
    "correctAnswer": "Win + V"
  },
  {
    "question": "How do you open the Search bar?",
    "options": ["Win + S", "Ctrl + S", "Alt + S", "Shift + S"],
    "correctAnswer": "Win + S"
  },
  {
    "question": "What shortcut takes a screenshot of the entire screen and saves it?",
    "options": ["Win + PrtSc", "Ctrl + PrtSc", "Alt + PrtSc", "Shift + PrtSc"],
    "correctAnswer": "Win + PrtSc"
  },
  {
    "question": "How to open the Task Manager?",
    "options": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Win + Esc", "Alt + Esc"],
    "correctAnswer": "Ctrl + Shift + Esc"
  },
  {
    "question": "Which shortcut opens the emoji panel?",
    "options": ["Win + . (period)", "Ctrl + .", "Alt + .", "Shift + ."],
    "correctAnswer": "Win + . (period)"
  },
  {
    "question": "How do you switch keyboard input language?",
    "options": ["Win + Space", "Ctrl + Space", "Alt + Space", "Shift + Space"],
    "correctAnswer": "Win + Space"
  },
  {
    "question": "How to open the context menu for a selected item using keyboard?",
    "options": ["Shift + F10", "Ctrl + F10", "Alt + F10", "Win + F10"],
    "correctAnswer": "Shift + F10"
  },
  {
    "question": "Which shortcut increases the size of the desktop icons?",
    "options": ["Ctrl + Scroll Mouse Wheel Up", "Ctrl + Scroll Mouse Wheel Down", "Ctrl + Plus (+)", "Ctrl + Minus (-)"],
    "correctAnswer": "Ctrl + Scroll Mouse Wheel Up"
  },
  {
    "question": "How do you create a new folder in File Explorer?",
    "options": ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "Win + N"],
    "correctAnswer": "Ctrl + Shift + N"
  },
  {
    "question": "What shortcut toggles the Taskbar visibility on tablet mode?",
    "options": ["Win + T", "Ctrl + T", "Alt + T", "Shift + T"],
    "correctAnswer": "Win + T"
  },
  {
    "question": "How to open the \"Run as administrator\" option for an app?",
    "options": ["Select app, then Ctrl + Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Shift + Enter"],
    "correctAnswer": "Select app, then Ctrl + Shift + Enter"
  },
  {
    "question": "Which shortcut opens the Snipping Tool for screenshots?",
    "options": ["Win + Shift + S", "Ctrl + Shift + S", "Alt + Shift + S", "Shift + S"],
    "correctAnswer": "Win + Shift + S"
  },
  {
    "question": "How do you open the Windows Security (Defender) app?",
    "options": ["Win + I then type \"Security\" and Enter", "Win + S then type \"Security\"", "Ctrl + Alt + S", "No direct shortcut"],
    "correctAnswer": "No direct shortcut"
  },
  {
    "question": "How to cycle through the Taskbar apps using keyboard?",
    "options": ["Win + T then arrow keys", "Ctrl + Tab", "Alt + Tab", "Win + Tab"],
    "correctAnswer": "Win + T then arrow keys"
  },
  {
    "question": "What shortcut opens the Clipboard panel?",
    "options": ["Win + V", "Ctrl + V", "Alt + V", "Shift + V"],
    "correctAnswer": "Win + V"
  },
  {
    "question": "How do you open the \"Connect\" panel for wireless displays and audio devices?",
    "options": ["Win + K", "Ctrl + K", "Alt + K", "Shift + K"],
    "correctAnswer": "Win + K"
  },
  {
    "question": "Which shortcut shows the desktop Peek (hover preview)?",
    "options": ["Win + , (comma)", "Ctrl + ,", "Alt + ,", "Shift + ,"],
    "correctAnswer": "Win + , (comma)"
  },
  {
    "question": "How do you open the \"Project\" options for multiple displays?",
    "options": ["Win + P", "Ctrl + P", "Alt + P", "Shift + P"],
    "correctAnswer": "Win + P"
  },
  {
    "question": "Which shortcut opens the Magnifier tool?",
    "options": ["Win + Plus (+)", "Ctrl + Plus (+)", "Alt + Plus (+)", "Shift + Plus (+)"],
    "correctAnswer": "Win + Plus (+)"
  },
  {
    "question": "How to toggle the Narrator?",
    "options": ["Win + Ctrl + Enter", "Ctrl + Enter", "Alt + Enter", "Shift + Enter"],
    "correctAnswer": "Win + Ctrl + Enter"
  },
  {
    "question": "What shortcut moves the active window to the next monitor?",
    "options": ["Win + Shift + Right Arrow", "Win + Right Arrow", "Ctrl + Shift + Right Arrow", "Alt + Shift + Right Arrow"],
    "correctAnswer": "Win + Shift + Right Arrow"
  },
  {
    "question": "How to open the \"Settings > Network & Internet\" quickly?",
    "options": ["Win + I then select Network", "Win + N", "No direct shortcut", "Ctrl + N"],
    "correctAnswer": "No direct shortcut"
  },
  {
    "question": "Which shortcut opens Task Manager directly?",
    "options": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Win + Esc", "Alt + Esc"],
    "correctAnswer": "Ctrl + Shift + Esc"
  },
  {
    "question": "How to rename a selected file or folder?",
    "options": ["F2", "Ctrl + R", "Alt + R", "Shift + R"],
    "correctAnswer": "F2"
  },
  {
    "question": "How do you open the Windows Terminal from Start?",
    "options": ["Win + X then press I", "Win + T", "Ctrl + T", "Alt + T"],
    "correctAnswer": "Win + X then press I"
  },
  {
    "question": "How to open Quick Link menu?",
    "options": ["Win + X", "Ctrl + X", "Alt + X", "Shift + X"],
    "correctAnswer": "Win + X"
  },
  {
    "question": "What shortcut pastes clipboard contents?",
    "options": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "correctAnswer": "Ctrl + V"
  },
  {
    "question": "How to undo an action?",
    "options": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
    "correctAnswer": "Ctrl + Z"
  },
  {
    "question": "How to redo an action?",
    "options": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
    "correctAnswer": "Ctrl + Y"
  },
  {
    "question": "How to cut selected item?",
    "options": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "correctAnswer": "Ctrl + X"
  },
  {
    "question": "How to copy selected item?",
    "options": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
    "correctAnswer": "Ctrl + C"
  },
  {
    "question": "How to select all items in a window?",
    "options": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + E"],
    "correctAnswer": "Ctrl + A"
  },
  {
    "question": "How to close the active window?",
    "options": ["Alt + F4", "Ctrl + F4", "Win + F4", "Shift + F4"],
    "correctAnswer": "Alt + F4"
  },
  {
    "question": "How to open the context menu of the taskbar?",
    "options": ["Shift + Right-click taskbar", "Ctrl + Right-click taskbar", "Alt + Right-click taskbar", "Win + Right-click taskbar"],
    "correctAnswer": "Shift + Right-click taskbar"
  },
  {
    "question": "How do you take a screenshot of just the active window?",
    "options": ["Alt + PrtSc", "Win + PrtSc", "Ctrl + PrtSc", "Shift + PrtSc"],
    "correctAnswer": "Alt + PrtSc"
  },
  {
    "question": "How to open File Explorer's search bar?",
    "options": ["Ctrl + F", "Ctrl + S", "Alt + F", "Win + F"],
    "correctAnswer": "Ctrl + F"
  },
  {
    "question": "How do you toggle dark mode quickly?",
    "options": ["No direct shortcut, use Settings", "Win + D", "Ctrl + D", "Alt + D"],
    "correctAnswer": "No direct shortcut, use Settings"
  },
  {
    "question": "Which shortcut opens the Windows Help and Support?",
    "options": ["F1", "Ctrl + H", "Alt + H", "Win + H"],
    "correctAnswer": "F1"
  },
  {
    "question": "How to zoom in the desktop using Magnifier?",
    "options": ["Win + Plus (+)", "Ctrl + Plus (+)", "Alt + Plus (+)", "Shift + Plus (+)"],
    "correctAnswer": "Win + Plus (+)"
  },
  {
    "question": "How to zoom out the desktop using Magnifier?",
    "options": ["Win + Minus (-)", "Ctrl + Minus (-)", "Alt + Minus (-)", "Shift + Minus (-)"],
    "correctAnswer": "Win + Minus (-)"
  },
  {
    "question": "How to open Narrator settings?",
    "options": ["Win + Ctrl + N", "Ctrl + N", "Alt + N", "Shift + N"],
    "correctAnswer": "Win + Ctrl + N"
  },
  {
    "question": "Which shortcut switches virtual desktops?",
    "options": ["Win + Ctrl + Left/Right Arrow", "Ctrl + Alt + Left/Right Arrow", "Alt + Shift + Left/Right Arrow", "Win + Shift + Left/Right Arrow"],
    "correctAnswer": "Win + Ctrl + Left/Right Arrow"
  },
  {
    "question": "How do you create a new virtual desktop?",
    "options": ["Win + Ctrl + D", "Win + D", "Ctrl + D", "Alt + D"],
    "correctAnswer": "Win + Ctrl + D"
  },
  {
    "question": "How do you close the current virtual desktop?",
    "options": ["Win + Ctrl + F4", "Win + Ctrl + D", "Ctrl + F4", "Alt + F4"],
    "correctAnswer": "Win + Ctrl + F4"
  },
  {
    "question": "How to open Windows File Explorer Properties?",
    "options": ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Win + Enter"],
    "correctAnswer": "Alt + Enter"
  },
  {
    "question": "How to cycle through open windows of the same app?",
    "options": ["Ctrl + Win + Tab", "Alt + Tab", "Ctrl + Tab", "Win + Tab"],
    "correctAnswer": "Ctrl + Win + Tab"
  },
  {
    "question": "Which shortcut launches the Search bar for apps?",
    "options": ["Win + Q", "Win + S", "Ctrl + Q", "Alt + Q"],
    "correctAnswer": "Win + Q"
  },
  {
    "question": "How to open the Emoji panel?",
    "options": ["Win + . (period)", "Ctrl + .", "Alt + .", "Shift + ."],
    "correctAnswer": "Win + . (period)"
  }
    ],
    medium: [
      {
    question: "Which shortcut opens the Windows Settings and directly focuses the \"System\" section?",
    options: ["Win + I, then Tab + Enter on System", "Win + S, type System", "Win + R, then ms-settings:System", "Win + X, then S"],
    correctAnswer: "Win + R, then ms-settings:System"
  },
  {
    question: "How do you open the Windows Power User menu?",
    options: ["Win + X", "Ctrl + X", "Alt + X", "Shift + X"],
    correctAnswer: "Win + X"
  },
  {
    question: "What shortcut opens the Device Manager?",
    options: ["Win + X then press M", "Win + R then type devmgmt.msc", "Win + S then type Device Manager", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you toggle Tablet mode on/off using a shortcut?",
    options: ["No direct shortcut; use Quick Settings", "Win + T", "Ctrl + T", "Alt + T"],
    correctAnswer: "No direct shortcut; use Quick Settings"
  },
  {
    question: "How to open the Windows Clipboard history and paste an item?",
    options: ["Win + V, then use arrow keys and Enter", "Ctrl + V, then arrow keys", "Win + C", "Ctrl + C"],
    correctAnswer: "Win + V, then use arrow keys and Enter"
  },
  {
    question: "Which shortcut opens the Magnifier and zooms in?",
    options: ["Win + Plus (+)", "Ctrl + Plus (+)", "Alt + Plus (+)", "Shift + Plus (+)"],
    correctAnswer: "Win + Plus (+)"
  },
  {
    question: "How to zoom out using Magnifier?",
    options: ["Win + Minus (-)", "Ctrl + Minus (-)", "Alt + Minus (-)", "Shift + Minus (-)"],
    correctAnswer: "Win + Minus (-)"
  },
  {
    question: "What shortcut opens the Quick Assist tool?",
    options: ["Win + Ctrl + Q", "Win + Q", "Ctrl + Q", "Alt + Q"],
    correctAnswer: "Win + Ctrl + Q"
  },
  {
    question: "How do you open the Windows Terminal as Administrator from Start menu?",
    options: ["Win + X then A", "Win + X then T", "Win + T then Ctrl + Shift", "Win + R then terminal"],
    correctAnswer: "Win + X then A"
  },
  {
    question: "How to open the \"Network Connections\" panel?",
    options: ["Win + R, then type ncpa.cpl", "Win + I then Network & Internet", "Win + S, then Network Connections", "Ctrl + N"],
    correctAnswer: "Win + R, then type ncpa.cpl"
  },
  {
    question: "Which shortcut opens the \"Disk Management\" utility?",
    options: ["Win + X then K", "Win + R, then diskmgmt.msc", "Win + S then Disk Management", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Windows Security\" app quickly?",
    options: ["Win + I, then search Security", "Win + S, then type Windows Security", "Win + X then W", "No direct shortcut"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "What shortcut toggles the Windows Ink Workspace?",
    options: ["Win + W", "Win + I", "Win + U", "Win + K"],
    correctAnswer: "Win + W"
  },
  {
    question: "How do you open the \"Emoji Panel\"?",
    options: ["Win + . (period)", "Win + ; (semicolon)", "Both A and B", "Win + E"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to cycle through open windows in Task View?",
    options: ["Win + Tab then arrow keys", "Ctrl + Tab", "Alt + Tab", "Win + Shift + Tab"],
    correctAnswer: "Win + Tab then arrow keys"
  },
  {
    question: "Which shortcut allows you to create a new virtual desktop?",
    options: ["Win + Ctrl + D", "Win + D", "Ctrl + N", "Alt + N"],
    correctAnswer: "Win + Ctrl + D"
  },
  {
    question: "How to switch between virtual desktops?",
    options: ["Win + Ctrl + Left/Right Arrow", "Ctrl + Tab", "Alt + Tab", "Win + Shift + Tab"],
    correctAnswer: "Win + Ctrl + Left/Right Arrow"
  },
  {
    question: "How do you close the current virtual desktop?",
    options: ["Win + Ctrl + F4", "Alt + F4", "Ctrl + F4", "Win + F4"],
    correctAnswer: "Win + Ctrl + F4"
  },
  {
    question: "How to open Task Manager with keyboard?",
    options: ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete then select Task Manager", "Win + X then T", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens the Snap Layouts menu on Windows 11?",
    options: ["Hover over Maximize button or Win + Z", "Win + S", "Ctrl + S", "Alt + S"],
    correctAnswer: "Hover over Maximize button or Win + Z"
  },
  {
    question: "How to switch keyboard layout or language?",
    options: ["Win + Space", "Ctrl + Space", "Alt + Space", "Shift + Space"],
    correctAnswer: "Win + Space"
  },
  {
    question: "How to open the Windows Search bar with focus on text input?",
    options: ["Win + S", "Win + Q", "Ctrl + F", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open the \"Game Bar\" overlay?",
    options: ["Win + G", "Win + R", "Ctrl + G", "Alt + G"],
    correctAnswer: "Win + G"
  },
  {
    question: "How to mute/unmute microphone during a call?",
    options: ["Win + Alt + K", "Ctrl + M", "Alt + M", "Win + M"],
    correctAnswer: "Win + Alt + K"
  },
  {
    question: "Which shortcut opens the Clipboard history panel?",
    options: ["Win + V", "Ctrl + V", "Alt + V", "Shift + V"],
    correctAnswer: "Win + V"
  },
  {
    question: "How to open File Explorer's address bar?",
    options: ["Alt + D", "Ctrl + D", "Win + D", "Shift + D"],
    correctAnswer: "Alt + D"
  },
  {
    question: "How to move the active window to the left monitor (in multi-monitor setup)?",
    options: ["Win + Shift + Left Arrow", "Win + Left Arrow", "Ctrl + Left Arrow", "Alt + Left Arrow"],
    correctAnswer: "Win + Shift + Left Arrow"
  },
  {
    question: "How to open Quick Settings panel?",
    options: ["Win + A", "Win + Q", "Ctrl + A", "Alt + A"],
    correctAnswer: "Win + A"
  },
  {
    question: "Which shortcut opens the Notification Center?",
    options: ["Win + N", "Win + C", "Ctrl + N", "Alt + N"],
    correctAnswer: "Win + N"
  },
  {
    question: "How do you launch the \"Run\" dialog box?",
    options: ["Win + R", "Ctrl + R", "Alt + R", "Shift + R"],
    correctAnswer: "Win + R"
  },
  {
    question: "How to open \"Control Panel\"?",
    options: ["Win + R, then type control", "Win + S, then type control panel", "Both A and B", "Win + X then C"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Power Options\"?",
    options: ["Win + X then O", "Win + R then powercfg.cpl", "Both A and B", "Win + P"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Task Scheduler\"?",
    options: ["Win + R then taskschd.msc", "Win + X then T", "Both A and B", "Ctrl + T"],
    correctAnswer: "Win + R then taskschd.msc"
  },
  {
    question: "Which shortcut opens the \"Snipping Tool\"?",
    options: ["Win + Shift + S", "Win + S", "Ctrl + Shift + S", "Alt + S"],
    correctAnswer: "Win + Shift + S"
  },
  {
    question: "How to open \"System Information\"?",
    options: ["Win + R then msinfo32", "Win + S then type System Information", "Both A and B", "Ctrl + I"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open Windows Update settings?",
    options: ["Win + I then Update & Security", "Win + R then ms-settings:windowsupdate", "Both A and B", "Ctrl + U"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens the \"Accessibility\" settings?",
    options: ["Win + U", "Win + I then Accessibility", "Both A and B", "Ctrl + U"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Performance Monitor\"?",
    options: ["Win + R then perfmon", "Win + S then Performance Monitor", "Both A and B", "Ctrl + P"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens \"System Configuration\" (msconfig)?",
    options: ["Win + R then msconfig", "Win + S then msconfig", "Both A and B", "Ctrl + M"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Windows Defender Firewall\"?",
    options: ["Win + R then firewall.cpl", "Win + S then firewall", "Both A and B", "Ctrl + F"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Device and Printers\"?",
    options: ["Win + R then control printers", "Win + S then Printers", "Both A and B", "Ctrl + P"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens the \"Disk Cleanup\" utility?",
    options: ["Win + R then cleanmgr", "Win + S then Disk Cleanup", "Both A and B", "Ctrl + D"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Resource Monitor\"?",
    options: ["Win + R then resmon", "Win + S then Resource Monitor", "Both A and B", "Ctrl + R"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens \"Event Viewer\"?",
    options: ["Win + R then eventvwr", "Win + S then Event Viewer", "Both A and B", "Ctrl + E"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Local Group Policy Editor\"?",
    options: ["Win + R then gpedit.msc", "Win + S then gpedit", "Both A and B", "Ctrl + G"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"PowerShell\" quickly?",
    options: ["Win + X then I", "Win + S then PowerShell", "Both A and B", "Ctrl + P"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens the \"System Properties\" dialog?",
    options: ["Win + Pause/Break", "Ctrl + Pause", "Alt + Pause", "Shift + Pause"],
    correctAnswer: "Win + Pause/Break"
  },
  {
    question: "How do you open \"Performance Options\" for visual effects?",
    options: ["Win + R then SystemPropertiesPerformance.exe", "Through Control Panel > System > Advanced System Settings", "Both A and B", "Win + P"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Accessibility Keyboard\"?",
    options: ["Win + Ctrl + O", "Win + O", "Ctrl + O", "Alt + O"],
    correctAnswer: "Win + Ctrl + O"
  },
  {
    question: "Which shortcut locks your PC and shows the lock screen?",
    options: ["Win + L", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "Win + L"
  },
  {
    question: "How to open \"Storage Settings\"?",
    options: ["Win + I then Storage", "Win + R then ms-settings:storagesense", "Both A and B", "Ctrl + S"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Backup Settings\"?",
    options: ["Win + I then Update & Security > Backup", "Win + R then ms-settings:backup", "Both A and B", "Ctrl + B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Nearby Sharing\" settings?",
    options: ["Win + I then System > Nearby sharing", "Win + R then ms-settings:nearbysharing", "Both A and B", "Ctrl + N"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Project\" quick menu?",
    options: ["Win + P", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "Win + P"
  },
  {
    question: "How do you open \"Accessibility Narrator\"?",
    options: ["Win + Ctrl + Enter", "Win + Enter", "Ctrl + Enter", "Alt + Enter"],
    correctAnswer: "Win + Ctrl + Enter"
  },
  {
    question: "How to open the \"Focus Assist\" settings?",
    options: ["Win + A then click Focus Assist", "Win + I then System > Focus Assist", "Both A and B", "Ctrl + F"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Task View\" and create a new desktop?",
    options: ["Win + Tab then New Desktop button", "Win + Ctrl + D", "Both A and B", "Ctrl + Tab"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Windows Firewall & Network Protection\"?",
    options: ["Win + I then Privacy & Security", "Win + R then firewall.cpl", "Both A and B", "Ctrl + F"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Bluetooth & Devices\" settings?",
    options: ["Win + I then Bluetooth & Devices", "Win + R then ms-settings:bluetooth", "Both A and B", "Ctrl + B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Date and Time\" settings?",
    options: ["Win + I then Time & Language > Date & Time", "Win + R then timedate.cpl", "Both A and B", "Ctrl + T"],
    correctAnswer: "Both A and B"
  }
    ],
    hard: [
     {
    question: "Which shortcut opens the Windows Terminal with Administrator privileges directly from the desktop?",
    options: ["Win + X then A", "Win + Ctrl + Enter", "Win + Shift + Enter", "Win + R then wt -Admin"],
    correctAnswer: "Win + X then A"
  },
  {
    question: "How do you launch the \"System Configuration\" (msconfig) utility via keyboard?",
    options: ["Win + R then msconfig", "Win + X then S", "Win + I then System", "Win + S then msconfig"],
    correctAnswer: "Win + R then msconfig"
  },
  {
    question: "Which command runs the \"Local Group Policy Editor\"?",
    options: ["Win + R then gpedit.msc", "Win + I then Group Policy", "Win + X then G", "Win + S then gpedit"],
    correctAnswer: "Win + R then gpedit.msc"
  },
  {
    question: "How do you open the \"Performance Monitor\" tool?",
    options: ["Win + R then perfmon", "Win + X then P", "Win + I then Performance", "Win + S then Performance Monitor"],
    correctAnswer: "Win + R then perfmon"
  },
  {
    question: "What shortcut opens the \"Resource Monitor\"?",
    options: ["Win + R then resmon", "Win + X then R", "Win + I then Resource Monitor", "Win + S then Resource Monitor"],
    correctAnswer: "Win + R then resmon"
  },
  {
    question: "How do you open \"Event Viewer\" quickly?",
    options: ["Win + R then eventvwr", "Win + X then E", "Win + I then Event Viewer", "Win + S then event viewer"],
    correctAnswer: "Win + R then eventvwr"
  },
  {
    question: "Which shortcut opens \"Disk Cleanup\"?",
    options: ["Win + R then cleanmgr", "Win + X then C", "Win + I then Storage", "Win + S then Disk Cleanup"],
    correctAnswer: "Win + R then cleanmgr"
  },
  {
    question: "How do you open \"System Information\"?",
    options: ["Win + R then msinfo32", "Win + X then I", "Win + I then About", "Win + S then System Information"],
    correctAnswer: "Win + R then msinfo32"
  },
  {
    question: "How to launch \"Device Manager\" using Run?",
    options: ["Win + R then devmgmt.msc", "Win + X then M", "Win + I then Device Manager", "Win + S then Device Manager"],
    correctAnswer: "Win + R then devmgmt.msc"
  },
  {
    question: "How do you access \"Disk Management\"?",
    options: ["Win + X then K", "Win + R then diskmgmt.msc", "Both A and B", "Win + S then Disk Management"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens \"Windows Defender Firewall\" settings?",
    options: ["Win + R then firewall.cpl", "Win + I then Privacy & Security", "Win + X then F", "Win + S then Firewall"],
    correctAnswer: "Win + R then firewall.cpl"
  },
  {
    question: "How do you launch the \"Task Scheduler\"?",
    options: ["Win + R then taskschd.msc", "Win + X then T", "Win + I then Task Scheduler", "Win + S then Task Scheduler"],
    correctAnswer: "Win + R then taskschd.msc"
  },
  {
    question: "How to open \"Windows Security\" app directly?",
    options: ["Win + I then Privacy & Security > Windows Security", "Win + S then Windows Security", "No direct shortcut", "Win + X then W"],
    correctAnswer: "No direct shortcut"
  },
  {
    question: "Which shortcut opens the \"Snipping Tool\" for screen capture?",
    options: ["Win + Shift + S", "Win + S then Snipping Tool", "Win + R then snippingtool", "Win + X then N"],
    correctAnswer: "Win + Shift + S"
  },
  {
    question: "How do you open \"Power Options\"?",
    options: ["Win + X then O", "Win + R then powercfg.cpl", "Both A and B", "Win + S then Power Options"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens the \"Storage Settings\"?",
    options: ["Win + I then System > Storage", "Win + R then ms-settings:storagesense", "Both A and B", "Win + S then Storage"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Accessibility\" options quickly?",
    options: ["Win + U", "Win + I then Accessibility", "Both A and B", "Win + S then Accessibility"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut launches the \"Accessibility Keyboard\"?",
    options: ["Win + Ctrl + O", "Win + O", "Ctrl + O", "Alt + O"],
    correctAnswer: "Win + Ctrl + O"
  },
  {
    question: "How to open \"Focus Assist\" settings from Quick Settings?",
    options: ["Win + A then Focus Assist", "Win + I then System > Focus Assist", "Both A and B", "Win + S then Focus Assist"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut locks the PC?",
    options: ["Win + L", "Ctrl + L", "Alt + L", "Shift + L"],
    correctAnswer: "Win + L"
  },
  {
    question: "How do you open \"Bluetooth & Devices\" settings quickly?",
    options: ["Win + I then Bluetooth & Devices", "Win + R then ms-settings:bluetooth", "Both A and B", "Win + S then Bluetooth"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What shortcut opens the \"Project\" quick menu to connect to external displays?",
    options: ["Win + P", "Ctrl + P", "Alt + P", "Shift + P"],
    correctAnswer: "Win + P"
  },
  {
    question: "How to open the \"Game Bar\"?",
    options: ["Win + G", "Win + R then gamebar", "Ctrl + G", "Win + I then Gaming"],
    correctAnswer: "Win + G"
  },
  {
    question: "How to open the \"Clipboard History\"?",
    options: ["Win + V", "Ctrl + V", "Alt + V", "Shift + V"],
    correctAnswer: "Win + V"
  },
  {
    question: "Which shortcut opens the \"Quick Assist\" app?",
    options: ["Win + Ctrl + Q", "Win + Q", "Ctrl + Q", "Win + A then Q"],
    correctAnswer: "Win + Ctrl + Q"
  },
  {
    question: "How do you open the \"Windows Terminal\" from the Run dialog?",
    options: ["Win + R then wt", "Win + X then T", "Win + S then Terminal", "Win + I then Terminal"],
    correctAnswer: "Win + R then wt"
  },
  {
    question: "How to switch keyboard input language?",
    options: ["Win + Space", "Ctrl + Space", "Alt + Space", "Win + Shift"],
    correctAnswer: "Win + Space"
  },
  {
    question: "How do you open \"Network Connections\" panel?",
    options: ["Win + R then ncpa.cpl", "Win + X then N", "Win + I then Network & Internet", "Win + S then Network Connections"],
    correctAnswer: "Win + R then ncpa.cpl"
  },
  {
    question: "How to open the \"Windows Update\" settings?",
    options: ["Win + I then Update & Security > Windows Update", "Win + R then ms-settings:windowsupdate", "Both A and B", "Win + S then Update"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open the \"Date and Time\" settings?",
    options: ["Win + I then Time & Language > Date & Time", "Win + R then timedate.cpl", "Both A and B", "Win + S then Date & Time"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open the \"PowerShell\" as Administrator?",
    options: ["Win + X then I", "Win + R then powershell -Admin", "Win + S then PowerShell then Ctrl + Shift + Enter", "Win + I then Terminal"],
    correctAnswer: "Win + X then I"
  },
  {
    question: "How to open \"System Properties\"?",
    options: ["Win + Pause/Break", "Win + I then About", "Win + R then sysdm.cpl", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "Which shortcut opens the \"Windows Mobility Center\"?",
    options: ["Win + X then M", "Win + R then mblctr", "Both A and B", "Win + S then Mobility Center"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Remote Desktop\" quick settings?",
    options: ["Win + R then mstsc", "Win + I then Remote Desktop", "Both A and B", "Win + S then Remote Desktop"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open the \"System Restore\" dialog?",
    options: ["Win + R then rstrui", "Win + I then System Protection", "Both A and B", "Win + S then System Restore"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open the \"Windows Features\" dialog?",
    options: ["Win + R then optionalfeatures", "Win + I then Programs & Features", "Both A and B", "Win + S then Windows Features"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Windows Firewall with Advanced Security\"?",
    options: ["Win + R then wf.msc", "Win + X then F", "Both A and B", "Win + S then Firewall"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens \"Credential Manager\"?",
    options: ["Win + R then control /name Microsoft.CredentialManager", "Win + S then Credential Manager", "Both A and B", "Win + I then Accounts"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"System Restore\"?",
    options: ["Win + R then rstrui", "Win + I then Recovery", "Both A and B", "Win + S then System Restore"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Windows Event Log\"?",
    options: ["Win + R then eventvwr", "Win + X then E", "Both A and B", "Win + S then Event Viewer"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Windows Task Manager\" in the Details tab?",
    options: ["Ctrl + Shift + Esc then click Details tab", "Win + X then T then Details tab", "Ctrl + Alt + Del then Task Manager then Details tab", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you open the \"Windows Update History\"?",
    options: ["Win + I then Windows Update > Update History", "Win + R then ms-settings:windowsupdate-history", "Both A and B", "Win + S then Update History"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens \"Device Installation Settings\"?",
    options: ["Win + R then sysdm.cpl then Hardware tab > Device Installation Settings", "Win + I then Device Manager > Settings", "Win + S then Device Installation Settings", "No direct shortcut"],
    correctAnswer: "Win + R then sysdm.cpl then Hardware tab > Device Installation Settings"
  },
  {
    question: "How do you open \"Windows Security Firewall & Network Protection\"?",
    options: ["Win + I then Privacy & Security > Firewall & Network Protection", "Win + R then firewall.cpl", "Both A and B", "Win + S then Firewall"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Storage Sense\" settings?",
    options: ["Win + I then System > Storage > Storage Sense", "Win + R then ms-settings:storagesense", "Both A and B", "Win + S then Storage Sense"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Windows Insider Program\" settings?",
    options: ["Win + I then Update & Security > Windows Insider Program", "Win + R then ms-settings:windowsinsider", "Both A and B", "Win + S then Windows Insider"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Windows Hello\" settings?",
    options: ["Win + I then Accounts > Sign-in options", "Win + R then ms-settings:signinoptions", "Both A and B", "Win + S then Windows Hello"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens \"BitLocker Drive Encryption\"?",
    options: ["Win + R then control /name Microsoft.BitLockerDriveEncryption", "Win + S then BitLocker", "Both A and B", "Win + I then Device Encryption"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Windows Recovery Environment\"?",
    options: ["Win + I then Update & Security > Recovery", "Win + R then ms-settings:recovery", "Both A and B", "No direct shortcut"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Windows Backup\" settings?",
    options: ["Win + I then Update & Security > Backup", "Win + R then ms-settings:backup", "Both A and B", "Win + S then Backup"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open the \"Windows Activation\" settings?",
    options: ["Win + I then Update & Security > Activation", "Win + R then ms-settings:activation", "Both A and B", "Win + S then Activation"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which shortcut opens \"Windows Defender Antivirus\" settings?",
    options: ["Win + I then Privacy & Security > Windows Security", "Win + R then windowsdefender:", "Both A and B", "No direct shortcut"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How to open \"Windows Family Safety\"?",
    options: ["Win + I then Accounts > Family & Other Users", "Win + R then ms-settings:family", "Both A and B", "Win + S then Family Safety"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Windows Update Troubleshooter\"?",
    options: ["Win + I then Troubleshoot > Other troubleshooters > Windows Update", "Win + R then msdt.exe /id WindowsUpdateDiagnostic", "Both A and B", "Win + S then Windows Update Troubleshooter"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Windows Activation Troubleshooter\"?",
    options: ["Win + I then Update & Security > Activation > Troubleshoot", "Win + R then ms-settings:activation-troubleshoot", "Both A and B", "Win + S then Activation Troubleshooter"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Windows Defender Firewall with Advanced Security\"?",
    options: ["Win + R then wf.msc", "Win + X then F then A", "Both A and B", "Win + S then Firewall"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Windows Security Device Performance & Health\"?",
    options: ["Win + I then Privacy & Security > Windows Security > Device Performance & Health", "Win + S then Device Performance & Health", "No direct shortcut", "Win + R then ms-settings:deviceperformance"],
    correctAnswer: "Win + I then Privacy & Security > Windows Security > Device Performance & Health"
  },
  {
    question: "How to open \"Windows Defender Exploit Guard\" settings?",
    options: ["Win + I then Privacy & Security > Windows Security > App & Browser Control", "Win + R then ms-settings:appbrowsercontrol", "Both A and B", "No direct shortcut"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open \"Windows Update Delivery Optimization\" settings?",
    options: ["Win + I then Update & Security > Delivery Optimization", "Win + R then ms-settings:deliveryoptimization", "Both A and B", "Win + S then Delivery Optimization"],
    correctAnswer: "Both A and B"
  },
  {
    question: "How do you open the \"Windows Event Viewer\" and filter by Error events?",
    options: ["Win + R then eventvwr > Custom Views > Administrative Events", "Win + S then Event Viewer and apply filter", "Both A and B", "No direct shortcut"],
    correctAnswer: "Both A and B"
  }
    ]
  },

"Mozilla ThunderBird": {
     easy: [
      {
    question: "What is the keyboard shortcut to compose a new message?",
    options: ["Ctrl + N", "Ctrl + M", "Ctrl + C", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "What is the keyboard shortcut to reply to a message?",
    options: ["Ctrl + R", "Ctrl + E", "Ctrl + Shift + R", "Alt + R"],
    correctAnswer: "Ctrl + R"
  },
  {
    question: "What is the keyboard shortcut to forward a message?",
    options: ["Ctrl + L", "Ctrl + F", "Ctrl + D", "Ctrl + Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "What is the keyboard shortcut to send the current message?",
    options: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "What is the keyboard shortcut to open the address book?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Alt + B", "Ctrl + A"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "What is the keyboard shortcut to search messages?",
    options: ["Ctrl + K", "Ctrl + F", "Ctrl + S", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "What is the keyboard shortcut to check for new mail?",
    options: ["Ctrl + T", "F5", "Ctrl + Shift + T", "Shift + F5"],
    correctAnswer: "F5"
  },
  {
    question: "What is the keyboard shortcut to open Inbox?",
    options: ["Ctrl + I", "Ctrl + M", "Ctrl + N", "Alt + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What is the keyboard shortcut to move to next unread message?",
    options: ["N", "U", "Ctrl + N", "M"],
    correctAnswer: "N"
  },
  {
    question: "What is the keyboard shortcut to move to previous unread message?",
    options: ["P", "Shift + N", "Ctrl + P", "B"],
    correctAnswer: "P"
  },
  {
    question: "What is the keyboard shortcut to select all messages?",
    options: ["Ctrl + A", "Alt + A", "Shift + A", "Ctrl + Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "What is the keyboard shortcut to delete a message?",
    options: ["Delete", "Ctrl + D", "Backspace", "Shift + X"],
    correctAnswer: "Delete"
  },
  {
    question: "What is the keyboard shortcut to open message in new tab?",
    options: ["Enter", "Ctrl + O", "Ctrl + Enter", "Ctrl + Shift + O"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "What is the keyboard shortcut to mark as read?",
    options: ["M", "R", "K", "Q"],
    correctAnswer: "K"
  },
  {
    question: "What is the keyboard shortcut to print a message?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "What is the keyboard shortcut to switch to next tab?",
    options: ["Ctrl + Tab", "Alt + →", "Shift + Tab", "Ctrl + →"],
    correctAnswer: "Ctrl + Tab"
  },
  {
    question: "What is the keyboard shortcut to switch to previous tab?",
    options: ["Ctrl + Shift + Tab", "Alt + ←", "Ctrl + ←", "Ctrl + Shift + ←"],
    correctAnswer: "Ctrl + Shift + Tab"
  },
  {
    question: "What is the keyboard shortcut to open junk folder?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Alt + J", "J"],
    correctAnswer: "Ctrl + J"
  },
  {
    question: "What is the keyboard shortcut to start a new chat?",
    options: ["Ctrl + Shift + C", "Ctrl + C", "Ctrl + N", "Alt + C"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "What is the keyboard shortcut to open settings/preferences?",
    options: ["Ctrl + ,", "Ctrl + Shift + P", "Ctrl + Alt + S", "Alt + P"],
    correctAnswer: "Ctrl + ,"
  },
  {
    question: "What is the keyboard shortcut to open calendar?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + L", "Alt + C", "Ctrl + L"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "What is the keyboard shortcut to open tasks?",
    options: ["Ctrl + Shift + D", "Ctrl + Shift + K", "Ctrl + Shift + T", "Ctrl + Alt + D"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "What is the keyboard shortcut to zoom in message?",
    options: ["Ctrl + +", "Ctrl + =", "Alt + +", "Shift + ="],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "What is the keyboard shortcut to zoom out message?",
    options: ["Ctrl + -", "Alt + -", "Shift + -", "Ctrl + Shift + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "What is the keyboard shortcut to reset zoom?",
    options: ["Ctrl + 0", "Ctrl + Shift + 0", "Alt + 0", "Ctrl + Alt + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "What is the keyboard shortcut to toggle quick filter toolbar?",
    options: ["Ctrl + Shift + K", "Ctrl + K", "Alt + K", "Shift + K"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "What is the keyboard shortcut to search all messages?",
    options: ["Ctrl + Shift + F", "Ctrl + Shift + S", "Alt + F", "Ctrl + H"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "What is the keyboard shortcut to archive a message?",
    options: ["A", "Ctrl + A", "Shift + A", "Alt + A"],
    correctAnswer: "A"
  },
  {
    question: "What is the keyboard shortcut to move message to folder?",
    options: ["M", "Ctrl + M", "Shift + M", "Alt + M"],
    correctAnswer: "M"
  },
  {
    question: "What is the keyboard shortcut to tag a message?",
    options: ["T", "Ctrl + T", "Shift + T", "Alt + T"],
    correctAnswer: "T"
  },
  {
    question: "What is the keyboard shortcut to open help?",
    options: ["F1", "Ctrl + H", "Alt + H", "Shift + H"],
    correctAnswer: "F1"
  },
  {
    question: "What is the keyboard shortcut to insert hyperlink in compose?",
    options: ["Ctrl + K", "Ctrl + H", "Alt + L", "Ctrl + L"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What is the keyboard shortcut to bold text in composer?",
    options: ["Ctrl + B", "Alt + B", "Shift + B", "Ctrl + Shift + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "What is the keyboard shortcut to italicize text in composer?",
    options: ["Ctrl + I", "Alt + I", "Shift + I", "Ctrl + Shift + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "What is the keyboard shortcut to underline text in composer?",
    options: ["Ctrl + U", "Alt + U", "Shift + U", "Ctrl + Shift + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "What is the keyboard shortcut to select font size in composer?",
    options: ["Ctrl + Shift + >", "Ctrl + Shift + F", "Ctrl + Shift + <", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + Shift + >"
  },
  {
    question: "What is the keyboard shortcut to go to next message?",
    options: ["Ctrl + →", "N", "→", "Ctrl + N"],
    correctAnswer: "N"
  },
  {
    question: "What is the keyboard shortcut to go to previous message?",
    options: ["Ctrl + ←", "P", "←", "Ctrl + P"],
    correctAnswer: "P"
  },
  {
    question: "What is the keyboard shortcut to add new contact from email?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + A", "Alt + Shift + C", "Ctrl + Alt + C"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "What is the keyboard shortcut to open message source?",
    options: ["Ctrl + U", "Alt + U", "Shift + U", "Ctrl + Shift + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "What is the keyboard shortcut to go to folder pane?",
    options: ["F6", "Tab", "Shift + Tab", "F7"],
    correctAnswer: "F6"
  },
  {
    question: "What is the keyboard shortcut to mark all messages as read?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + K", "Ctrl + Shift + R", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "What is the keyboard shortcut to open activity manager?",
    options: ["Ctrl + Shift + A", "Ctrl + Shift + Y", "Ctrl + Shift + J", "Ctrl + Shift + H"],
    correctAnswer: "Ctrl + Shift + Y"
  },
  {
    question: "What is the keyboard shortcut to quick reply?",
    options: ["Ctrl + Shift + R", "Ctrl + R", "Alt + R", "R"],
    correctAnswer: "R"
  },
  {
    question: "What is the keyboard shortcut to mark message as junk?",
    options: ["J", "Ctrl + J", "Alt + J", "Shift + J"],
    correctAnswer: "J"
  },
  {
    question: "What is the keyboard shortcut to toggle favorite folder view?",
    options: ["Ctrl + Shift + B", "Ctrl + Shift + F", "Ctrl + Shift + V", "Alt + Shift + F"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "What is the keyboard shortcut to open Add-ons Manager?",
    options: ["Ctrl + Shift + A", "Ctrl + A", "Alt + A", "Ctrl + Shift + X"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "What is the keyboard shortcut to open error console?",
    options: ["Ctrl + Shift + J", "Ctrl + Alt + J", "Shift + J", "Alt + Shift + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "What is the keyboard shortcut to show folder properties?",
    options: ["Ctrl + I", "Alt + Enter", "Alt + I", "Ctrl + Enter"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "What is the keyboard shortcut to open saved drafts?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Alt + D", "Ctrl + Alt + D"],
    correctAnswer: "Ctrl + D"
  },
  {
    question: "What is the keyboard shortcut to insert image in composer?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Alt + I", "Ctrl + Alt + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What is the keyboard shortcut to insert link in composer?",
    options: ["Ctrl + K", "Ctrl + L", "Ctrl + H", "Ctrl + Shift + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "What is the keyboard shortcut to switch between accounts?",
    options: ["F6", "Ctrl + →", "Tab", "Shift + Tab"],
    correctAnswer: "F6"
  },
  {
    question: "What is the keyboard shortcut to undo action?",
    options: ["Ctrl + Z", "Alt + Z", "Shift + Z", "Ctrl + Shift + Z"],
    correctAnswer: "Ctrl + Z"
  },
  {
    question: "What is the keyboard shortcut to redo action?",
    options: ["Ctrl + Y", "Ctrl + Shift + Z", "Alt + Y", "Shift + Y"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "What is the keyboard shortcut to insert horizontal line in composer?",
    options: ["Ctrl + Shift + H", "Ctrl + H", "Shift + H", "Alt + H"],
    correctAnswer: "Ctrl + Shift + H"
  },
  {
    question: "What is the keyboard shortcut to open Thunderbird in Troubleshooting Mode?",
    options: ["Hold Shift while launching", "Hold Ctrl while launching", "Alt + Launch", "Ctrl + Alt + Shift"],
    correctAnswer: "Hold Shift while launching"
  },
  {
    question: "What is the keyboard shortcut to open developer tools?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "Alt + Shift + I", "Ctrl + Shift + D"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "What is the keyboard shortcut to open filters dialog?",
    options: ["Ctrl + Shift + F", "Alt + F", "Shift + F", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "What is the keyboard shortcut to minimize Thunderbird?",
    options: ["Ctrl + M", "Alt + Space → N", "Ctrl + W", "Ctrl + Alt + M"],
    correctAnswer: "Alt + Space → N"
  }
    ],
    medium: [
      {
    question: "How do you open the Address Book in Thunderbird?",
    options: ["Ctrl + B", "Ctrl + Shift + B", "Alt + A", "Ctrl + A"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "What is the shortcut to create a new folder?",
    options: ["Ctrl + Shift + F", "Shift + F10", "Ctrl + Shift + N", "Ctrl + E"],
    correctAnswer: "Ctrl + Shift + N"
  },
  {
    question: "Which shortcut opens the Quick Filter bar?",
    options: ["Ctrl + F", "Ctrl + Shift + K", "Alt + K", "Ctrl + Q"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "How do you toggle the folder pane?",
    options: ["F5", "F8", "Alt + F8", "Ctrl + F8"],
    correctAnswer: "F8"
  },
  {
    question: "What is the shortcut to select all messages in a folder?",
    options: ["Ctrl + A", "Ctrl + M", "Alt + A", "Shift + A"],
    correctAnswer: "Ctrl + A"
  },
  {
    question: "How do you mark a message as junk?",
    options: ["Ctrl + J", "Shift + J", "Ctrl + Shift + J", "J"],
    correctAnswer: "J"
  },
  {
    question: "How do you mark a message as read?",
    options: ["Ctrl + R", "Shift + R", "M", "Ctrl + M"],
    correctAnswer: "M"
  },
  {
    question: "What is the shortcut for 'Reply All'?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Shift + A"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "Which shortcut sends a message?",
    options: ["Alt + S", "Ctrl + Enter", "Shift + S", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Enter"
  },
  {
    question: "How do you print a selected message?",
    options: ["Ctrl + P", "Alt + P", "Shift + P", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you go to the next unread message?",
    options: ["N", "U", "Ctrl + →", "Shift + U"],
    correctAnswer: "N"
  },
  {
    question: "How do you go to the previous unread message?",
    options: ["P", "Shift + N", "Ctrl + U", "Alt + N"],
    correctAnswer: "Shift + N"
  },
  {
    question: "What is the shortcut for composing a new message?",
    options: ["Ctrl + M", "Ctrl + N", "Ctrl + Shift + C", "Alt + M"],
    correctAnswer: "Ctrl + N"
  },
  {
    question: "How do you forward a message inline?",
    options: ["Ctrl + L", "Ctrl + F", "Alt + F", "Shift + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "What is the shortcut to toggle message pane on or off?",
    options: ["F8", "F9", "F10", "F6"],
    correctAnswer: "F8"
  },
  {
    question: "How do you flag a message?",
    options: ["F", "Ctrl + F", "Shift + F", "Alt + F"],
    correctAnswer: "F"
  },
  {
    question: "Shortcut to open the message source?",
    options: ["Ctrl + U", "Alt + U", "Shift + U", "Ctrl + Shift + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "How do you view full headers of a message?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "Shift + Ctrl + H", "Ctrl + Alt + H"],
    correctAnswer: "Ctrl + Shift + H"
  },
  {
    question: "Shortcut to open Add-ons Manager?",
    options: ["Ctrl + Shift + A", "Alt + A", "Ctrl + A", "Shift + A"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "How to open the chat tab?",
    options: ["Ctrl + 2", "Alt + C", "Ctrl + Shift + C", "Ctrl + 3"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "Shortcut to go to the calendar tab?",
    options: ["Ctrl + 4", "Ctrl + Shift + C", "Ctrl + 3", "Ctrl + Alt + C"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "How do you open the tasks tab?",
    options: ["Ctrl + 4", "Ctrl + T", "Shift + 4", "Alt + T"],
    correctAnswer: "Ctrl + 4"
  },
  {
    question: "Shortcut to move to next pane?",
    options: ["F6", "Tab", "Ctrl + Tab", "Ctrl + →"],
    correctAnswer: "F6"
  },
  {
    question: "Shortcut to go to the previous pane?",
    options: ["Shift + F6", "Shift + Tab", "Ctrl + Shift + Tab", "Alt + F6"],
    correctAnswer: "Shift + F6"
  },
  {
    question: "Shortcut to add an attachment to the message?",
    options: ["Ctrl + Shift + A", "Ctrl + H", "Ctrl + Alt + A", "Alt + Shift + A"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "Shortcut to open Tools menu?",
    options: ["Alt + T", "Ctrl + T", "Shift + T", "Ctrl + Shift + T"],
    correctAnswer: "Alt + T"
  },
  {
    question: "Shortcut to save the current message as a draft?",
    options: ["Ctrl + S", "Alt + S", "Shift + S", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "Shortcut to toggle between 3-pane and wide view?",
    options: ["F8", "F10", "F9", "F11"],
    correctAnswer: "F9"
  },
  {
    question: "Shortcut to show activity manager?",
    options: ["Ctrl + Shift + M", "Alt + M", "Ctrl + M", "Shift + A"],
    correctAnswer: "Ctrl + Shift + M"
  },
  {
    question: "Shortcut to open the Saved Search dialog?",
    options: ["Ctrl + Shift + F", "Ctrl + F", "Alt + S", "Ctrl + Alt + F"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "Shortcut to toggle Tag menu?",
    options: ["T", "Shift + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "T"
  },
  {
    question: "How do you open the error console?",
    options: ["Ctrl + Shift + J", "Ctrl + J", "Shift + J", "Alt + J"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "Shortcut to download flagged headers?",
    options: ["Shift + C", "Alt + D", "Ctrl + Shift + C", "Ctrl + D"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "How do you open File menu using keyboard?",
    options: ["Alt + F", "Ctrl + F", "Shift + F", "Alt + Enter"],
    correctAnswer: "Alt + F"
  },
  {
    question: "Shortcut to insert link in email body?",
    options: ["Ctrl + K", "Ctrl + Shift + K", "Alt + K", "Ctrl + Alt + K"],
    correctAnswer: "Ctrl + K"
  },
  {
    question: "Shortcut to redo last action in compose?",
    options: ["Ctrl + Y", "Ctrl + Shift + Z", "Ctrl + Z", "Ctrl + Alt + Y"],
    correctAnswer: "Ctrl + Y"
  },
  {
    question: "Shortcut to bold selected text in compose window?",
    options: ["Ctrl + B", "Alt + B", "Ctrl + Shift + B", "Ctrl + Alt + B"],
    correctAnswer: "Ctrl + B"
  },
  {
    question: "Shortcut to italicize selected text?",
    options: ["Ctrl + I", "Alt + I", "Ctrl + Shift + I", "Shift + I"],
    correctAnswer: "Ctrl + I"
  },
  {
    question: "Shortcut to underline text in email?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "Ctrl + Alt + U"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Shortcut to check for new mail manually?",
    options: ["Ctrl + T", "Shift + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "Ctrl + T"
  },
  {
    question: "Shortcut to insert bullet list in compose?",
    options: ["Ctrl + Shift + 8", "Ctrl + .", "Ctrl + Shift + L", "Ctrl + Alt + B"],
    correctAnswer: "Ctrl + Shift + 8"
  },
  {
    question: "Shortcut to insert numbered list?",
    options: ["Ctrl + Shift + 7", "Ctrl + /", "Ctrl + Shift + N", "Ctrl + Alt + 7"],
    correctAnswer: "Ctrl + Shift + 7"
  },
  {
    question: "Shortcut to open 'Account Settings'?",
    options: ["Alt + T > A", "Ctrl + Shift + S", "Alt + A", "Ctrl + A"],
    correctAnswer: "Alt + T > A"
  },
  {
    question: "Shortcut to toggle Threaded view in message list?",
    options: ["Ctrl + Shift + O", "Shift + V", "T", "Alt + T"],
    correctAnswer: "T"
  },
  {
    question: "Shortcut to zoom in on text?",
    options: ["Ctrl + +", "Ctrl + Shift + =", "Ctrl + Alt + +", "Shift + ="],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "Shortcut to zoom out on text?",
    options: ["Ctrl + -", "Ctrl + Shift + -", "Alt + -", "Ctrl + _"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "Shortcut to reset zoom level?",
    options: ["Ctrl + 0", "Alt + 0", "Ctrl + Shift + 0", "Ctrl + R"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "Shortcut to jump to inbox quickly?",
    options: ["Ctrl + Shift + I", "Ctrl + 1", "Alt + I", "Ctrl + Alt + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "Shortcut to jump to sent folder?",
    options: ["Ctrl + Shift + S", "Ctrl + 5", "Ctrl + Alt + S", "Ctrl + Shift + 5"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "Shortcut to move selected messages to Archive?",
    options: ["A", "Shift + A", "Ctrl + A", "Alt + A"],
    correctAnswer: "A"
  }
    ],
    hard: [
      {
    question: "How do you move selected messages to a custom folder quickly?",
    options: ["Ctrl + Shift + M", "Ctrl + Shift + V", "Alt + M", "Shift + M"],
    correctAnswer: "Ctrl + Shift + V"
  },
  {
    question: "How do you search across all mail folders?",
    options: ["Ctrl + Shift + S", "Ctrl + K", "Ctrl + Shift + F", "Ctrl + Shift + Q"],
    correctAnswer: "Ctrl + Shift + F"
  },
  {
    question: "What is the shortcut to open the Error Console?",
    options: ["Ctrl + Shift + J", "Alt + Shift + E", "F12", "Ctrl + E"],
    correctAnswer: "Ctrl + Shift + J"
  },
  {
    question: "Which shortcut selects all messages in a thread?",
    options: ["Ctrl + Shift + A", "Ctrl + .", "Ctrl + Shift + .", "Ctrl + Alt + T"],
    correctAnswer: "Ctrl + Shift + ."
  },
  {
    question: "How do you open message source in a separate window?",
    options: ["Ctrl + U", "Alt + M", "Ctrl + Alt + S", "Shift + S"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "What shortcut opens the add-ons manager?",
    options: ["Ctrl + Shift + A", "Alt + A", "Shift + F9", "Ctrl + F5"],
    correctAnswer: "Ctrl + Shift + A"
  },
  {
    question: "Shortcut to jump to next unread thread?",
    options: ["N", "T", "Ctrl + Shift + N", "Alt + U"],
    correctAnswer: "N"
  },
  {
    question: "Shortcut to quickly toggle message pane visibility?",
    options: ["F8", "F6", "F12", "Ctrl + Shift + P"],
    correctAnswer: "F8"
  },
  {
    question: "How do you access folder properties?",
    options: ["Ctrl + Shift + E", "Alt + Enter", "Alt + D", "Alt + Enter"],
    correctAnswer: "Alt + Enter"
  },
  {
    question: "How do you toggle quick filter bar?",
    options: ["Ctrl + Shift + K", "Ctrl + Alt + Q", "Alt + Q", "Ctrl + Q"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "How do you mark all messages in a folder as read?",
    options: ["Ctrl + Shift + R", "Ctrl + Shift + C", "Shift + M", "Ctrl + Shift + M"],
    correctAnswer: "Ctrl + Shift + C"
  },
  {
    question: "Shortcut to go directly to the Archive folder?",
    options: ["A", "Ctrl + A", "Shift + A", "Ctrl + Shift + A"],
    correctAnswer: "A"
  },
  {
    question: "Which shortcut flags or unflags a message?",
    options: ["Insert", "F", "Ctrl + F", "Alt + F"],
    correctAnswer: "Insert"
  },
  {
    question: "How do you open the chat tab in Thunderbird?",
    options: ["Ctrl + 2", "Ctrl + 3", "Ctrl + 5", "Ctrl + Shift + 3"],
    correctAnswer: "Ctrl + 2"
  },
  {
    question: "Shortcut to go to the Address Book?",
    options: ["Ctrl + Shift + B", "Alt + B", "Ctrl + B", "Shift + B"],
    correctAnswer: "Ctrl + Shift + B"
  },
  {
    question: "Which key selects the next unread message in the same folder?",
    options: ["N", "Ctrl + Down Arrow", "Shift + N", "Alt + N"],
    correctAnswer: "N"
  },
  {
    question: "What's the shortcut to reply to all recipients?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Shift + R"],
    correctAnswer: "Ctrl + Shift + R"
  },
  {
    question: "How do you go to the Tag menu for a message?",
    options: ["T", "Shift + T", "Ctrl + Shift + T", "Alt + T"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "What's the shortcut to print a selected message?",
    options: ["Ctrl + P", "Alt + P", "Shift + P", "Ctrl + Shift + P"],
    correctAnswer: "Ctrl + P"
  },
  {
    question: "How do you open the developer tools?",
    options: ["Ctrl + Shift + I", "Ctrl + I", "F12", "Alt + I"],
    correctAnswer: "Ctrl + Shift + I"
  },
  {
    question: "How do you switch to Calendar tab?",
    options: ["Ctrl + 4", "Ctrl + 5", "Ctrl + 3", "Ctrl + Shift + 3"],
    correctAnswer: "Ctrl + 3"
  },
  {
    question: "Shortcut to open Tasks tab?",
    options: ["Ctrl + 4", "Ctrl + Shift + T", "Ctrl + Alt + T", "Alt + 4"],
    correctAnswer: "Ctrl + 4"
  },
  {
    question: "How to view message source of an email?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + U", "F12"],
    correctAnswer: "Ctrl + U"
  },
  {
    question: "Shortcut to access \"Activity Manager\"?",
    options: ["Ctrl + Shift + T", "Ctrl + Shift + M", "Ctrl + Shift + B", "Alt + M"],
    correctAnswer: "Ctrl + Shift + T"
  },
  {
    question: "How do you open the message context menu with keyboard?",
    options: ["Shift + F10", "Alt + M", "Ctrl + M", "Ctrl + Shift + M"],
    correctAnswer: "Shift + F10"
  },
  {
    question: "Shortcut to open the global inbox folder?",
    options: ["Ctrl + Shift + G", "Ctrl + G", "Alt + G", "Shift + G"],
    correctAnswer: "Ctrl + Shift + G"
  },
  {
    question: "Shortcut to forward a message inline?",
    options: ["Ctrl + L", "Ctrl + F", "Ctrl + Shift + F", "Alt + F"],
    correctAnswer: "Ctrl + F"
  },
  {
    question: "Shortcut to toggle full screen view?",
    options: ["F11", "Ctrl + F11", "Shift + F11", "Alt + Enter"],
    correctAnswer: "F11"
  },
  {
    question: "How do you mark a message as junk using keyboard?",
    options: ["J", "Ctrl + J", "Alt + J", "Ctrl + Shift + J"],
    correctAnswer: "J"
  },
  {
    question: "Shortcut to go to the previous unread message?",
    options: ["P", "Ctrl + P", "Shift + N", "Alt + Up"],
    correctAnswer: "P"
  },
  {
    question: "Shortcut to open a saved draft for editing?",
    options: ["Ctrl + D", "Ctrl + O", "Ctrl + Shift + O", "Alt + D"],
    correctAnswer: "Ctrl + Shift + O"
  },
  {
    question: "Shortcut to open Quick Filter bar?",
    options: ["Ctrl + Shift + K", "Ctrl + F", "Shift + K", "Alt + K"],
    correctAnswer: "Ctrl + Shift + K"
  },
  {
    question: "Shortcut to create a new tag?",
    options: ["Ctrl + 9", "Ctrl + Shift + 9", "Alt + 9", "Shift + 9"],
    correctAnswer: "Ctrl + Shift + 9"
  },
  {
    question: "Shortcut to empty trash folder?",
    options: ["Shift + Delete", "Ctrl + Shift + Delete", "Alt + Delete", "Ctrl + Delete"],
    correctAnswer: "Ctrl + Shift + Delete"
  },
  {
    question: "Shortcut to rename folder?",
    options: ["F2", "Ctrl + R", "Shift + F2", "Alt + F2"],
    correctAnswer: "F2"
  },
  {
    question: "Shortcut to sort messages by subject?",
    options: ["Ctrl + Shift + S", "Ctrl + Alt + S", "S", "Shift + S"],
    correctAnswer: "S"
  },
  {
    question: "Shortcut to tag with red label?",
    options: ["1", "Ctrl + 1", "Alt + 1", "Shift + 1"],
    correctAnswer: "1"
  },
  {
    question: "Shortcut to tag with green label?",
    options: ["2", "Ctrl + 2", "Alt + 2", "Shift + 2"],
    correctAnswer: "2"
  },
  {
    question: "Shortcut to tag with blue label?",
    options: ["3", "Ctrl + 3", "Alt + 3", "Shift + 3"],
    correctAnswer: "3"
  },
  {
    question: "Shortcut to open Saved Searches?",
    options: ["Ctrl + Shift + S", "Ctrl + S", "Alt + S", "Shift + F"],
    correctAnswer: "Ctrl + Shift + S"
  },
  {
    question: "Shortcut to select message thread?",
    options: ["Ctrl + Shift + .", "Ctrl + Shift + L", "Ctrl + Alt + T", "Shift + T"],
    correctAnswer: "Ctrl + Shift + ."
  },
  {
    question: "Shortcut to toggle column visibility in list?",
    options: ["Shift + F10 → Select columns", "Alt + C", "Ctrl + Alt + C", "Ctrl + F10"],
    correctAnswer: "Shift + F10 → Select columns"
  },
  {
    question: "Shortcut to collapse all threads in message list?",
    options: ["* (asterisk on number pad)", "Ctrl + *", "Alt + *", "Shift + *"],
    correctAnswer: "* (asterisk on number pad)"
  },
  {
    question: "Shortcut to expand all threads in message list?",
    options: ["\\ (backslash)", "Ctrl + \\", "Shift + \\", "Ctrl + Shift + \\"],
    correctAnswer: "\\ (backslash)"
  },
  {
    question: "Shortcut to view source of selected folder?",
    options: ["Ctrl + U", "Ctrl + Shift + U", "Alt + Shift + U", "Ctrl + Shift + S"],
    correctAnswer: "Ctrl + Shift + U"
  },
  {
    question: "Shortcut to zoom in the email content?",
    options: ["Ctrl + +", "Ctrl + Shift + =", "Alt + +", "Shift + +"],
    correctAnswer: "Ctrl + +"
  },
  {
    question: "Shortcut to zoom out the email content?",
    options: ["Ctrl + -", "Ctrl + Shift + -", "Alt + -", "Shift + -"],
    correctAnswer: "Ctrl + -"
  },
  {
    question: "Shortcut to reset zoom level to default?",
    options: ["Ctrl + 0", "Ctrl + Shift + 0", "Alt + 0", "Shift + 0"],
    correctAnswer: "Ctrl + 0"
  },
  {
    question: "Shortcut to close Thunderbird window?",
    options: ["Ctrl + W", "Alt + F4", "Ctrl + Q", "Shift + W"],
    correctAnswer: "Alt + F4"
  },
  {
    question: "Shortcut to completely quit Thunderbird?",
    options: ["Ctrl + Q", "Alt + Q", "Shift + Q", "Ctrl + Alt + Q"],
    correctAnswer: "Ctrl + Q"
  }
    ]
  },

  "HTML Cheat Sheet": {
     easy: [
       {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyperlink Text Mark Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "What tag is used to define a paragraph in HTML?",
    options: ["<para>", "<paragraph>", "<p>", "<pg>"],
    correctAnswer: "<p>"
  },
  {
    question: "Which tag is used to display the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correctAnswer: "<h1>"
  },
  {
    question: "What does the <br> tag do?",
    options: ["Starts a new section", "Creates a bold text", "Inserts a line break", "Begins a paragraph"],
    correctAnswer: "Inserts a line break"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: ["<a>http://example.com</a>", "<link>http://example.com</link>", "<a href=\"http://example.com\">Visit</a>", "<url src=\"http://example.com\">"],
    correctAnswer: "<a href=\"http://example.com\">Visit</a>"
  },
  {
    question: "What HTML tag is used to display an image?",
    options: ["<pic>", "<image>", "<img>", "<src>"],
    correctAnswer: "<img>"
  },
  {
    question: "What attribute is used in <img> to define the source file?",
    options: ["href", "src", "link", "file"],
    correctAnswer: "src"
  },
  {
    question: "Which tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: "<ul>"
  },
  {
    question: "Which tag is used to define a list item?",
    options: ["<list>", "<ul>", "<ol>", "<li>"],
    correctAnswer: "<li>"
  },
  {
    question: "What tag defines the HTML document's title?",
    options: ["<heading>", "<meta>", "<title>", "<head>"],
    correctAnswer: "<title>"
  },
  {
    question: "Where does the <title> tag go?",
    options: ["Inside <body>", "Outside the HTML document", "Inside <head>", "Anywhere"],
    correctAnswer: "Inside <head>"
  },
  {
    question: "Which tag is used for inserting a comment in HTML?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "<comment>"],
    correctAnswer: "<!-- comment -->"
  },
  {
    question: "Which HTML tag makes text bold?",
    options: ["<strong>", "<b>", "Both A and B", "<bold>"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which HTML tag makes text italic?",
    options: ["<em>", "<i>", "Both A and B", "<italic>"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which tag creates a line across the webpage?",
    options: ["<line>", "<hr>", "<br>", "<div>"],
    correctAnswer: "<hr>"
  },
  {
    question: "Which tag defines a table?",
    options: ["<td>", "<tr>", "<th>", "<table>"],
    correctAnswer: "<table>"
  },
  {
    question: "What does <td> stand for?",
    options: ["Table Design", "Table Division", "Table Data", "Table Description"],
    correctAnswer: "Table Data"
  },
  {
    question: "What tag is used to define a table row?",
    options: ["<row>", "<tr>", "<td>", "<th>"],
    correctAnswer: "<tr>"
  },
  {
    question: "Which tag is used for table headers?",
    options: ["<hd>", "<thead>", "<head>", "<th>"],
    correctAnswer: "<th>"
  },
  {
    question: "Which attribute sets the background color?",
    options: ["bgcolor", "background", "color", "style"],
    correctAnswer: "bgcolor"
  },
  {
    question: "Which tag is used to create a form in HTML?",
    options: ["<input>", "<form>", "<forms>", "<fieldset>"],
    correctAnswer: "<form>"
  },
  {
    question: "Which HTML tag is used for a text input field?",
    options: ["<textbox>", "<input type=\"text\">", "<text>", "<inputbox>"],
    correctAnswer: "<input type=\"text\">"
  },
  {
    question: "How do you create a checkbox?",
    options: ["<input type=\"checkbox\">", "<check>", "<input type=\"check\">", "<input type=\"tick\">"],
    correctAnswer: "<input type=\"checkbox\">"
  },
  {
    question: "How to create a radio button in HTML?",
    options: ["<input type=\"radio\">", "<radio>", "<input type=\"circle\">", "<input type=\"option\">"],
    correctAnswer: "<input type=\"radio\">"
  },
  {
    question: "What is the tag for dropdowns?",
    options: ["<select>", "<dropdown>", "<list>", "<option>"],
    correctAnswer: "<select>"
  },
  {
    question: "Which tag is used to define a block section in HTML?",
    options: ["<section>", "<div>", "<span>", "<block>"],
    correctAnswer: "<div>"
  },
  {
    question: "Which tag is used for inline elements?",
    options: ["<div>", "<section>", "<span>", "<block>"],
    correctAnswer: "<span>"
  },
  {
    question: "What is the correct syntax to add a background color in inline CSS?",
    options: ["<p style=\"color=red\">", "<p style=\"bg-color:red;\">", "<p style=\"background-color:red;\">", "<p color:red>"],
    correctAnswer: "<p style=\"background-color:red;\">"
  },
  {
    question: "Which tag defines emphasized text?",
    options: ["<strong>", "<b>", "<i>", "<em>"],
    correctAnswer: "<em>"
  },
  {
    question: "What is the default alignment of a paragraph?",
    options: ["Left", "Center", "Right", "Justify"],
    correctAnswer: "Left"
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<end>", "<section>"],
    correctAnswer: "<footer>"
  },
  {
    question: "Which tag defines navigation links?",
    options: ["<navigation>", "<nav>", "<link>", "<href>"],
    correctAnswer: "<nav>"
  },
  {
    question: "What tag is used to group header content?",
    options: ["<header>", "<top>", "<head>", "<title>"],
    correctAnswer: "<header>"
  },
  {
    question: "What is the purpose of the <meta> tag?",
    options: ["Defines links", "Adds metadata", "Adds style", "Creates spacing"],
    correctAnswer: "Adds metadata"
  },
  {
    question: "Which tag is used to play video files in HTML5?",
    options: ["<vid>", "<media>", "<video>", "<mp4>"],
    correctAnswer: "<video>"
  },
  {
    question: "What tag is used to embed audio?",
    options: ["<sound>", "<audio>", "<music>", "<mp3>"],
    correctAnswer: "<audio>"
  },
  {
    question: "How do you create an email link in HTML?",
    options: ["<a href=\"email.com\">", "<email href=\"mailto:someone@example.com\">", "<a href=\"mailto:someone@example.com\">", "<mail>"],
    correctAnswer: "<a href=\"mailto:someone@example.com\">"
  },
  {
    question: "What tag is used to insert a horizontal space?",
    options: ["<tab>", "<space>", "No direct tag", "<gap>"],
    correctAnswer: "No direct tag"
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["/", "\\", "*", "!"],
    correctAnswer: "/"
  },
  {
    question: "HTML files are saved with what extension?",
    options: [".htm or .html", ".doc", ".xml", ".css"],
    correctAnswer: ".htm or .html"
  },
  {
    question: "Which tag is used to create a numbered list?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    correctAnswer: "<ol>"
  },
  {
    question: "What attribute is used to provide an alternate text for an image?",
    options: ["alt", "title", "text", "description"],
    correctAnswer: "alt"
  },
  {
    question: "How do you specify a default text in an input field?",
    options: ["value", "placeholder", "label", "name"],
    correctAnswer: "placeholder"
  },
  {
    question: "Which tag is used to define a label for an input element?",
    options: ["<label>", "<inputlabel>", "<formlabel>", "<name>"],
    correctAnswer: "<label>"
  },
  {
    question: "Which tag creates a button in a form?",
    options: ["<formbutton>", "<input type=\"button\">", "<btn>", "<click>"],
    correctAnswer: "<input type=\"button\">"
  },
  {
    question: "How do you add a tooltip to a tag?",
    options: ["title", "hover", "alt", "tooltip"],
    correctAnswer: "title"
  },
  {
    question: "What tag is used to define a clickable area in an image map?",
    options: ["<area>", "<map>", "<section>", "<clickzone>"],
    correctAnswer: "<area>"
  },
  {
    question: "Which tag is used to define the structure of an HTML document?",
    options: ["<html>", "<doc>", "<document>", "<structure>"],
    correctAnswer: "<html>"
  },
  {
    question: "Which attribute in a link opens the hyperlink in a new tab?",
    options: ["open", "target=\"_blank\"", "newtab=\"true\"", "rel=\"new\""],
    correctAnswer: "target=\"_blank\""
  },
  {
    question: "What does the <link> tag do?",
    options: ["Connects JavaScript", "Links CSS files", "Creates a hyperlink", "Adds meta data"],
    correctAnswer: "Links CSS files"
  },
  {
    question: "Which tag adds structure and semantic meaning to content blocks?",
    options: ["<div>", "<section>", "<body>", "<span>"],
    correctAnswer: "<section>"
  },
  {
    question: "What does the <iframe> tag do?",
    options: ["Creates an input field", "Inserts a frame inside the page", "Links to a form", "Adds styling"],
    correctAnswer: "Inserts a frame inside the page"
  },
  {
    question: "What is the use of <fieldset> in HTML?",
    options: ["Groups form elements", "Sets form style", "Validates input", "Hides form"],
    correctAnswer: "Groups form elements"
  },
  {
    question: "Which tag is used to add a caption to a table?",
    options: ["<cap>", "<title>", "<caption>", "<heading>"],
    correctAnswer: "<caption>"
  },
  {
    question: "What is the purpose of the <noscript> tag?",
    options: ["Disables JS", "Runs PHP", "Provides fallback for no JavaScript", "Adds scripts"],
    correctAnswer: "Provides fallback for no JavaScript"
  },
  {
    question: "What does &nbsp; represent in HTML?",
    options: ["A paragraph", "A space", "A line break", "A bold character"],
    correctAnswer: "A space"
  },
  {
    question: "What is the root element of any HTML document?",
    options: ["<root>", "<html>", "<document>", "<main>"],
    correctAnswer: "<html>"
  },
  {
    question: "Which tag is used to create a line break in text?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correctAnswer: "<br>"
  },
  {
    question: "Which HTML tag defines the main content of a document?",
    options: ["<main>", "<body>", "<section>", "<div>"],
    correctAnswer: "<main>"
  },
  {
    question: "What is the purpose of the <style> tag?",
    options: ["Embeds CSS inside HTML", "Adds font", "Links external style", "Adds JavaScript"],
    correctAnswer: "Embeds CSS inside HTML"
  }
    ],
    medium: [
      {
        question: "What does the target=\"_blank\" attribute do in an anchor tag?",
        options: ["Opens the link in the same window", "Opens the link in a new tab", "Downloads the file", "Refreshes the page"],
        correctAnswer: "Opens the link in a new tab"
      },
      {
        question: "What is the correct way to comment in HTML?",
        options: ["<!-- Comment -->", "## Comment ##", "// Comment", "/* Comment */"],
        correctAnswer: "<!-- Comment -->"
      },
      {
        question: "Which tag is used for inserting preformatted text?",
        options: ["<text>", "<pre>", "<code>", "<format>"],
        correctAnswer: "<pre>"
      },
      {
        question: "What is the use of the <datalist> element?",
        options: ["Creates a drop-down", "Defines selectable options for input", "Groups form data", "None of the above"],
        correctAnswer: "Defines selectable options for input"
      },
      {
        question: "Which tag is used to display a progress bar?",
        options: ["<meter>", "<range>", "<progress>", "<bar>"],
        correctAnswer: "<progress>"
      },
      {
        question: "What is the default method of a <form>?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: "GET"
      },
      {
        question: "How do you group options in a drop-down list?",
        options: ["<optiongroup>", "<label>", "<fieldset>", "<optgroup>"],
        correctAnswer: "<optgroup>"
      },
      {
        question: "What does the autocomplete=\"off\" attribute do in a form?",
        options: ["Turns off spell check", "Disables input", "Prevents browser from suggesting input", "Clears the form"],
        correctAnswer: "Prevents browser from suggesting input"
      },
      {
        question: "How do you set a checkbox to be checked by default?",
        options: ["checked=\"true\"", "default=\"checked\"", "value=\"checked\"", "checked"],
        correctAnswer: "checked"
      },
      {
        question: "Which tag defines a short quote?",
        options: ["<quote>", "<q>", "<blockquote>", "<cite>"],
        correctAnswer: "<q>"
      },
      {
        question: "What tag do you use to indicate text insertion?",
        options: ["<ins>", "<add>", "<insert>", "<u>"],
        correctAnswer: "<ins>"
      },
      {
        question: "What does the rel attribute in a <link> tag define?",
        options: ["Position", "Relation between current doc and linked file", "Font size", "Margin"],
        correctAnswer: "Relation between current doc and linked file"
      },
      {
        question: "Which HTML5 element is used to define self-contained content?",
        options: ["<aside>", "<article>", "<main>", "<div>"],
        correctAnswer: "<article>"
      },
      {
        question: "What does the <mark> tag do?",
        options: ["Highlights text", "Comments code", "Inserts a link", "Styles text"],
        correctAnswer: "Highlights text"
      },
      {
        question: "What's the difference between <section> and <div>?",
        options: ["<div> is semantic", "<section> is semantic", "Both are semantic", "Neither are semantic"],
        correctAnswer: "<section> is semantic"
      },
      {
        question: "Which tag is used to define a variable in HTML?",
        options: ["<var>", "<value>", "<code>", "<span>"],
        correctAnswer: "<var>"
      },
      {
        question: "What tag displays computer code?",
        options: ["<text>", "<kbd>", "<code>", "<cmd>"],
        correctAnswer: "<code>"
      },
      {
        question: "Which HTML tag is used to define a client-side script?",
        options: ["<script>", "<client>", "<javascript>", "<js>"],
        correctAnswer: "<script>"
      },
      {
        question: "What does the type attribute in <script> specify?",
        options: ["Programming language", "Script version", "File name", "MIME type"],
        correctAnswer: "MIME type"
      },
      {
        question: "Which HTML tag is used to define an abbreviation or acronym?",
        options: ["<abbr>", "<acronym>", "<short>", "<def>"],
        correctAnswer: "<abbr>"
      },
      {
        question: "What does the <details> tag do in HTML5?",
        options: ["Adds tooltips", "Defines expandable content", "Embeds a video", "Makes text bold"],
        correctAnswer: "Defines expandable content"
      },
      {
        question: "Which tag defines the heading of a table?",
        options: ["<thead>", "<th>", "<tr>", "<tablehead>"],
        correctAnswer: "<thead>"
      },
      {
        question: "Which attribute makes an input field mandatory?",
        options: ["required", "mandatory", "validate", "notnull"],
        correctAnswer: "required"
      },
      {
        question: "What does the <figcaption> tag do?",
        options: ["Labels figures", "Captures form inputs", "Adds captions to tables", "Adds subtitles to audio"],
        correctAnswer: "Labels figures"
      },
      {
        question: "What does the accept attribute in <input type=\"file\"> specify?",
        options: ["Max upload size", "File types allowed", "Upload destination", "Encryption method"],
        correctAnswer: "File types allowed"
      },
      {
        question: "What is the purpose of the <canvas> element?",
        options: ["Video display", "2D drawing", "Table formatting", "CSS styling"],
        correctAnswer: "2D drawing"
      },
      {
        question: "Which input type allows picking a date?",
        options: ["datetime", "calendar", "date", "timestamp"],
        correctAnswer: "date"
      },
      {
        question: "What does <meta charset=\"UTF-8\"> do?",
        options: ["Links a CSS file", "Sets font type", "Declares character encoding", "Adds page keywords"],
        correctAnswer: "Declares character encoding"
      },
      {
        question: "Which tag is used to embed external webpages?",
        options: ["<embed>", "<iframe>", "<object>", "<external>"],
        correctAnswer: "<iframe>"
      },
      {
        question: "What does <noscript> tag do?",
        options: ["Styles scripts", "Displays content if JavaScript is disabled", "Executes fallback scripts", "Creates no-style content"],
        correctAnswer: "Displays content if JavaScript is disabled"
      },
      {
        question: "Which tag is used for defining navigation links?",
        options: ["<navbar>", "<navigation>", "<nav>", "<menu>"],
        correctAnswer: "<nav>"
      },
      {
        question: "What does <output> tag represent?",
        options: ["Final paragraph", "Output from a calculation or script", "Image tag", "None of the above"],
        correctAnswer: "Output from a calculation or script"
      },
      {
        question: "How do you specify inline styles?",
        options: ["class=\"style\"", "id=\"css\"", "style=\"...\"", "css=\"...\""],
        correctAnswer: "style=\"...\""
      },
      {
        question: "Which tag groups elements in a form?",
        options: ["<fieldset>", "<formgroup>", "<formset>", "<label>"],
        correctAnswer: "<fieldset>"
      },
      {
        question: "What tag should be used to emphasize important text?",
        options: ["<em>", "<strong>", "<i>", "<mark>"],
        correctAnswer: "<strong>"
      },
      {
        question: "What is the default display value for <div>?",
        options: ["inline", "inline-block", "block", "flex"],
        correctAnswer: "block"
      },
      {
        question: "Which tag defines a list item?",
        options: ["<li>", "<ul>", "<ol>", "<item>"],
        correctAnswer: "<li>"
      },
      {
        question: "What does the enctype=\"multipart/form-data\" attribute do in a form?",
        options: ["Encodes form into JSON", "Allows file upload", "Encrypts the form", "Splits the form"],
        correctAnswer: "Allows file upload"
      },
      {
        question: "What does the <label> tag do in forms?",
        options: ["Adds a tooltip", "Adds a label to an input field", "Creates a button", "Sets a placeholder"],
        correctAnswer: "Adds a label to an input field"
      },
      {
        question: "What is the correct way to embed a video in HTML5?",
        options: ["<vid>", "<media>", "<video>", "<movie>"],
        correctAnswer: "<video>"
      },
      {
        question: "Which tag is used to create an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: "<ol>"
      },
      {
        question: "What does the <meta> tag provide?",
        options: ["Images", "Metadata like description, author, keywords", "Scripts", "Style"],
        correctAnswer: "Metadata like description, author, keywords"
      },
      {
        question: "What is the use of <summary> tag?",
        options: ["Adds footer summary", "Hides details", "Defines a visible heading for <details>", "Creates a list"],
        correctAnswer: "Defines a visible heading for <details>"
      },
      {
        question: "What does <time> element represent?",
        options: ["System time", "Timer", "Machine-readable date/time", "Timezone"],
        correctAnswer: "Machine-readable date/time"
      },
      {
        question: "What tag defines a contact address?",
        options: ["<location>", "<footer>", "<contact>", "<address>"],
        correctAnswer: "<address>"
      },
      {
        question: "Which tag is used for audio playback?",
        options: ["<mp3>", "<sound>", "<audio>", "<media>"],
        correctAnswer: "<audio>"
      },
      {
        question: "What's the function of the readonly attribute?",
        options: ["Hides an input", "Disables the form", "Makes the input uneditable", "Prevents validation"],
        correctAnswer: "Makes the input uneditable"
      },
      {
        question: "What is the use of the <base> tag?",
        options: ["Sets base URL for all relative links", "Defines the root tag", "Loads default CSS", "Loads a script"],
        correctAnswer: "Sets base URL for all relative links"
      },
      {
        question: "What's the use of hidden attribute?",
        options: ["Deletes an element", "Collapses text", "Hides element from view", "Makes element transparent"],
        correctAnswer: "Hides element from view"
      },
      {
        question: "Which input type creates a slider?",
        options: ["type=\"range\"", "type=\"slider\"", "type=\"scroll\"", "type=\"drag\""],
        correctAnswer: "type=\"range\""
      },
      {
        question: "What's the use of <template> tag?",
        options: ["Creates a form layout", "Defines reusable content not rendered immediately", "Builds table structure", "Defines script structure"],
        correctAnswer: "Defines reusable content not rendered immediately"
      },
      {
        question: "Which element is best for defining mathematical formulas?",
        options: ["<math>", "<code>", "<equation>", "<var>"],
        correctAnswer: "<math>"
      },
      {
        question: "What is the use of the download attribute in <a> tag?",
        options: ["Opens file in browser", "Streams file", "Prompts download of the linked file", "Saves in cache"],
        correctAnswer: "Prompts download of the linked file"
      },
      {
        question: "Which tag is used to draw graphics via scripting?",
        options: ["<draw>", "<canvas>", "<graphic>", "<svg>"],
        correctAnswer: "<canvas>"
      },
      {
        question: "What does the spellcheck=\"true\" attribute do?",
        options: ["Enables spell check on text fields", "Corrects spelling", "Highlights incorrect tags", "Fixes typos automatically"],
        correctAnswer: "Enables spell check on text fields"
      },
      {
        question: "What's the use of <kbd> element?",
        options: ["Adds code", "Represents keyboard input", "Defines keyframe", "Defines a database field"],
        correctAnswer: "Represents keyboard input"
      },
      {
        question: "What does <bdo dir=\"rtl\"> do?",
        options: ["Changes text font", "Reverses text direction", "Makes text bold", "Adds formatting"],
        correctAnswer: "Reverses text direction"
      },
      {
        question: "What does the contenteditable attribute allow?",
        options: ["Encrypts content", "Makes content editable", "Deletes content", "Styles content"],
        correctAnswer: "Makes content editable"
      },
      {
        question: "Which attribute specifies an image alternative text?",
        options: ["src", "text", "alt", "value"],
        correctAnswer: "alt"
      },
      {
        question: "Which tag defines a caption for a <figure> element?",
        options: ["<figcaption>", "<caption>", "<describe>", "<legend>"],
        correctAnswer: "<figcaption>"
      }
    ],
    hard: [
     {
        question: "What does the target=\"_blank\" attribute do in an anchor tag?",
        options: ["Opens the link in the same window", "Opens the link in a new tab", "Downloads the file", "Refreshes the page"],
        correctAnswer: "Opens the link in a new tab"
      },
      {
        question: "What is the correct way to comment in HTML?",
        options: ["<!-- Comment -->", "## Comment ##", "// Comment", "/* Comment */"],
        correctAnswer: "<!-- Comment -->"
      },
      {
        question: "Which tag is used for inserting preformatted text?",
        options: ["<text>", "<pre>", "<code>", "<format>"],
        correctAnswer: "<pre>"
      },
      {
        question: "What is the use of the <datalist> element?",
        options: ["Creates a drop-down", "Defines selectable options for input", "Groups form data", "None of the above"],
        correctAnswer: "Defines selectable options for input"
      },
      {
        question: "Which tag is used to display a progress bar?",
        options: ["<meter>", "<range>", "<progress>", "<bar>"],
        correctAnswer: "<progress>"
      },
      {
        question: "What is the default method of a <form>?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: "GET"
      },
      {
        question: "How do you group options in a drop-down list?",
        options: ["<optiongroup>", "<label>", "<fieldset>", "<optgroup>"],
        correctAnswer: "<optgroup>"
      },
      {
        question: "What does the autocomplete=\"off\" attribute do in a form?",
        options: ["Turns off spell check", "Disables input", "Prevents browser from suggesting input", "Clears the form"],
        correctAnswer: "Prevents browser from suggesting input"
      },
      {
        question: "How do you set a checkbox to be checked by default?",
        options: ["checked=\"true\"", "default=\"checked\"", "value=\"checked\"", "checked"],
        correctAnswer: "checked"
      },
      {
        question: "Which tag defines a short quote?",
        options: ["<quote>", "<q>", "<blockquote>", "<cite>"],
        correctAnswer: "<q>"
      },
      {
        question: "What tag do you use to indicate text insertion?",
        options: ["<ins>", "<add>", "<insert>", "<u>"],
        correctAnswer: "<ins>"
      },
      {
        question: "What does the rel attribute in a <link> tag define?",
        options: ["Position", "Relation between current doc and linked file", "Font size", "Margin"],
        correctAnswer: "Relation between current doc and linked file"
      },
      {
        question: "Which HTML5 element is used to define self-contained content?",
        options: ["<aside>", "<article>", "<main>", "<div>"],
        correctAnswer: "<article>"
      },
      {
        question: "What does the <mark> tag do?",
        options: ["Highlights text", "Comments code", "Inserts a link", "Styles text"],
        correctAnswer: "Highlights text"
      },
      {
        question: "What's the difference between <section> and <div>?",
        options: ["<div> is semantic", "<section> is semantic", "Both are semantic", "Neither are semantic"],
        correctAnswer: "<section> is semantic"
      },
      {
        question: "Which tag is used to define a variable in HTML?",
        options: ["<var>", "<value>", "<code>", "<span>"],
        correctAnswer: "<var>"
      },
      {
        question: "What tag displays computer code?",
        options: ["<text>", "<kbd>", "<code>", "<cmd>"],
        correctAnswer: "<code>"
      },
      {
        question: "Which HTML tag is used to define a client-side script?",
        options: ["<script>", "<client>", "<javascript>", "<js>"],
        correctAnswer: "<script>"
      },
      {
        question: "What does the type attribute in <script> specify?",
        options: ["Programming language", "Script version", "File name", "MIME type"],
        correctAnswer: "MIME type"
      },
      {
        question: "Which HTML tag is used to define an abbreviation or acronym?",
        options: ["<abbr>", "<acronym>", "<short>", "<def>"],
        correctAnswer: "<abbr>"
      },
      {
        question: "What does the <details> tag do in HTML5?",
        options: ["Adds tooltips", "Defines expandable content", "Embeds a video", "Makes text bold"],
        correctAnswer: "Defines expandable content"
      },
      {
        question: "Which tag defines the heading of a table?",
        options: ["<thead>", "<th>", "<tr>", "<tablehead>"],
        correctAnswer: "<thead>"
      },
      {
        question: "Which attribute makes an input field mandatory?",
        options: ["required", "mandatory", "validate", "notnull"],
        correctAnswer: "required"
      },
      {
        question: "What does the <figcaption> tag do?",
        options: ["Labels figures", "Captures form inputs", "Adds captions to tables", "Adds subtitles to audio"],
        correctAnswer: "Labels figures"
      },
      {
        question: "What does the accept attribute in <input type=\"file\"> specify?",
        options: ["Max upload size", "File types allowed", "Upload destination", "Encryption method"],
        correctAnswer: "File types allowed"
      },
      {
        question: "What is the purpose of the <canvas> element?",
        options: ["Video display", "2D drawing", "Table formatting", "CSS styling"],
        correctAnswer: "2D drawing"
      },
      {
        question: "Which input type allows picking a date?",
        options: ["datetime", "calendar", "date", "timestamp"],
        correctAnswer: "date"
      },
      {
        question: "What does <meta charset=\"UTF-8\"> do?",
        options: ["Links a CSS file", "Sets font type", "Declares character encoding", "Adds page keywords"],
        correctAnswer: "Declares character encoding"
      },
      {
        question: "Which tag is used to embed external webpages?",
        options: ["<embed>", "<iframe>", "<object>", "<external>"],
        correctAnswer: "<iframe>"
      },
      {
        question: "What does <noscript> tag do?",
        options: ["Styles scripts", "Displays content if JavaScript is disabled", "Executes fallback scripts", "Creates no-style content"],
        correctAnswer: "Displays content if JavaScript is disabled"
      },
      {
        question: "Which tag is used for defining navigation links?",
        options: ["<navbar>", "<navigation>", "<nav>", "<menu>"],
        correctAnswer: "<nav>"
      },
      {
        question: "What does <output> tag represent?",
        options: ["Final paragraph", "Output from a calculation or script", "Image tag", "None of the above"],
        correctAnswer: "Output from a calculation or script"
      },
      {
        question: "How do you specify inline styles?",
        options: ["class=\"style\"", "id=\"css\"", "style=\"...\"", "css=\"...\""],
        correctAnswer: "style=\"...\""
      },
      {
        question: "Which tag groups elements in a form?",
        options: ["<fieldset>", "<formgroup>", "<formset>", "<label>"],
        correctAnswer: "<fieldset>"
      },
      {
        question: "What tag should be used to emphasize important text?",
        options: ["<em>", "<strong>", "<i>", "<mark>"],
        correctAnswer: "<strong>"
      },
      {
        question: "What is the default display value for <div>?",
        options: ["inline", "inline-block", "block", "flex"],
        correctAnswer: "block"
      },
      {
        question: "Which tag defines a list item?",
        options: ["<li>", "<ul>", "<ol>", "<item>"],
        correctAnswer: "<li>"
      },
      {
        question: "What does the enctype=\"multipart/form-data\" attribute do in a form?",
        options: ["Encodes form into JSON", "Allows file upload", "Encrypts the form", "Splits the form"],
        correctAnswer: "Allows file upload"
      },
      {
        question: "What does the <label> tag do in forms?",
        options: ["Adds a tooltip", "Adds a label to an input field", "Creates a button", "Sets a placeholder"],
        correctAnswer: "Adds a label to an input field"
      },
      {
        question: "What is the correct way to embed a video in HTML5?",
        options: ["<vid>", "<media>", "<video>", "<movie>"],
        correctAnswer: "<video>"
      },
      {
        question: "Which tag is used to create an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: "<ol>"
      },
      {
        question: "What does the <meta> tag provide?",
        options: ["Images", "Metadata like description, author, keywords", "Scripts", "Style"],
        correctAnswer: "Metadata like description, author, keywords"
      },
      {
        question: "What is the use of <summary> tag?",
        options: ["Adds footer summary", "Hides details", "Defines a visible heading for <details>", "Creates a list"],
        correctAnswer: "Defines a visible heading for <details>"
      },
      {
        question: "What does <time> element represent?",
        options: ["System time", "Timer", "Machine-readable date/time", "Timezone"],
        correctAnswer: "Machine-readable date/time"
      },
      {
        question: "What tag defines a contact address?",
        options: ["<location>", "<footer>", "<contact>", "<address>"],
        correctAnswer: "<address>"
      },
      {
        question: "Which tag is used for audio playback?",
        options: ["<mp3>", "<sound>", "<audio>", "<media>"],
        correctAnswer: "<audio>"
      },
      {
        question: "What's the function of the readonly attribute?",
        options: ["Hides an input", "Disables the form", "Makes the input uneditable", "Prevents validation"],
        correctAnswer: "Makes the input uneditable"
      },
      {
        question: "What is the use of the <base> tag?",
        options: ["Sets base URL for all relative links", "Defines the root tag", "Loads default CSS", "Loads a script"],
        correctAnswer: "Sets base URL for all relative links"
      },
      {
        question: "What's the use of hidden attribute?",
        options: ["Deletes an element", "Collapses text", "Hides element from view", "Makes element transparent"],
        correctAnswer: "Hides element from view"
      },
      {
        question: "Which input type creates a slider?",
        options: ["type=\"range\"", "type=\"slider\"", "type=\"scroll\"", "type=\"drag\""],
        correctAnswer: "type=\"range\""
      },
      {
        question: "What's the use of <template> tag?",
        options: ["Creates a form layout", "Defines reusable content not rendered immediately", "Builds table structure", "Defines script structure"],
        correctAnswer: "Defines reusable content not rendered immediately"
      },
      {
        question: "Which element is best for defining mathematical formulas?",
        options: ["<math>", "<code>", "<equation>", "<var>"],
        correctAnswer: "<math>"
      },
      {
        question: "What is the use of the download attribute in <a> tag?",
        options: ["Opens file in browser", "Streams file", "Prompts download of the linked file", "Saves in cache"],
        correctAnswer: "Prompts download of the linked file"
      },
      {
        question: "Which tag is used to draw graphics via scripting?",
        options: ["<draw>", "<canvas>", "<graphic>", "<svg>"],
        correctAnswer: "<canvas>"
      },
      {
        question: "What does the spellcheck=\"true\" attribute do?",
        options: ["Enables spell check on text fields", "Corrects spelling", "Highlights incorrect tags", "Fixes typos automatically"],
        correctAnswer: "Enables spell check on text fields"
      },
      {
        question: "What's the use of <kbd> element?",
        options: ["Adds code", "Represents keyboard input", "Defines keyframe", "Defines a database field"],
        correctAnswer: "Represents keyboard input"
      },
      {
        question: "What does <bdo dir=\"rtl\"> do?",
        options: ["Changes text font", "Reverses text direction", "Makes text bold", "Adds formatting"],
        correctAnswer: "Reverses text direction"
      },
      {
        question: "What does the contenteditable attribute allow?",
        options: ["Encrypts content", "Makes content editable", "Deletes content", "Styles content"],
        correctAnswer: "Makes content editable"
      },
      {
        question: "Which attribute specifies an image alternative text?",
        options: ["src", "text", "alt", "value"],
        correctAnswer: "alt"
      },
      {
        question: "Which tag defines a caption for a <figure> element?",
        options: ["<figcaption>", "<caption>", "<describe>", "<legend>"],
        correctAnswer: "<figcaption>"
      }
    ]
  },

};

export default QUIZ_DATA;
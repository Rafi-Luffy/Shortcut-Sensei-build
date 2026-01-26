const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('../models/User');

// User data to seed
const users = [
  {"name":"Ramesh Reddy","email":"ramesh.reddy01@gmail.com","password":"Ramesh@921"},
  {"name":"Suresh Reddy","email":"suresh.reddy02@gmail.com","password":"Suresh#882"},
  {"name":"Mahesh Reddy","email":"mahesh.reddy03@gmail.com","password":"Mahesh@447"},
  {"name":"Naresh Reddy","email":"naresh.reddy04@gmail.com","password":"Naresh!309"},
  {"name":"Kiran Reddy","email":"kiran.reddy05@gmail.com","password":"Kiran@764"},
  {"name":"Ravi Teja","email":"raviteja06@gmail.com","password":"Ravi@568"},
  {"name":"Sai Teja","email":"saiteja07@gmail.com","password":"SaiTeja#917"},
  {"name":"Pavan Kumar","email":"pavan.kumar08@gmail.com","password":"Pavan@301"},
  {"name":"Manoj Kumar","email":"manoj.kumar09@gmail.com","password":"Manoj!882"},
  {"name":"Vinay Kumar","email":"vinay.kumar10@gmail.com","password":"Vinay@455"},
  {"name":"Srikanth","email":"srikanth11@gmail.com","password":"Sri@1189"},
  {"name":"Venkatesh","email":"venkatesh12@gmail.com","password":"Venky#742"},
  {"name":"Srinivas","email":"srinivas13@gmail.com","password":"Srini@630"},
  {"name":"Narasimha","email":"narasimha14@gmail.com","password":"Nara!519"},
  {"name":"Anil Kumar","email":"anil.kumar15@gmail.com","password":"Anil@864"},
  {"name":"Sunil Kumar","email":"sunil.kumar16@gmail.com","password":"Sunil#291"},
  {"name":"Raju","email":"raju17@gmail.com","password":"Raju@773"},
  {"name":"Gopi","email":"gopi18@gmail.com","password":"Gopi!614"},
  {"name":"Harsha","email":"harsha19@gmail.com","password":"Harsha@902"},
  {"name":"Praveen","email":"praveen20@gmail.com","password":"Praveen#338"},
  {"name":"Dinesh","email":"dinesh21@gmail.com","password":"Dinesh@741"},
  {"name":"Lokesh","email":"lokesh22@gmail.com","password":"Lokesh!906"},
  {"name":"Nagesh","email":"nagesh23@gmail.com","password":"Nagesh@518"},
  {"name":"Chaitanya","email":"chaitanya24@gmail.com","password":"Chaitu#887"},
  {"name":"Sandeep","email":"sandeep25@gmail.com","password":"Sandeep@432"},
  {"name":"Deepak","email":"deepak26@gmail.com","password":"Deepak!309"},
  {"name":"Ajay","email":"ajay27@gmail.com","password":"Ajay@921"},
  {"name":"Vijay","email":"vijay28@gmail.com","password":"Vijay#774"},
  {"name":"Ashok","email":"ashok29@gmail.com","password":"Ashok@561"},
  {"name":"Satish","email":"satish30@gmail.com","password":"Satish!288"},
  {"name":"Rajesh","email":"rajesh31@gmail.com","password":"Rajesh@493"},
  {"name":"Balaji","email":"balaji32@gmail.com","password":"Balaji#910"},
  {"name":"Vamsi Krishna","email":"vamsi.krishna33@gmail.com","password":"Vamsi@804"},
  {"name":"Sai Krishna","email":"saikrishna34@gmail.com","password":"SaiKrishna#671"},
  {"name":"Rohit","email":"rohit35@gmail.com","password":"Rohit@220"},
  {"name":"Karthik","email":"karthik36@gmail.com","password":"Karthik!589"},
  {"name":"Tarun","email":"tarun37@gmail.com","password":"Tarun@731"},
  {"name":"Tejas","email":"tejas38@gmail.com","password":"Tejas#845"},
  {"name":"Abhishek","email":"abhishek39@gmail.com","password":"Abhi@902"},
  {"name":"Naveen","email":"naveen40@gmail.com","password":"Naveen!614"},
  {"name":"Bharat","email":"bharat41@gmail.com","password":"Bharat@998"},
  {"name":"Madhu","email":"madhu42@gmail.com","password":"Madhu#321"},
  {"name":"Murali","email":"murali43@gmail.com","password":"Murali@557"},
  {"name":"Mohan","email":"mohan44@gmail.com","password":"Mohan!690"},
  {"name":"Prasad","email":"prasad45@gmail.com","password":"Prasad@481"},
  {"name":"Sudheer","email":"sudheer46@gmail.com","password":"Sudheer#730"},
  {"name":"Shankar","email":"shankar47@gmail.com","password":"Shankar@362"},
  {"name":"Sekhar","email":"sekhar48@gmail.com","password":"Sekhar!591"},
  {"name":"Jagadeesh","email":"jagadeesh49@gmail.com","password":"Jaga@849"},
  {"name":"Uday","email":"uday50@gmail.com","password":"Uday#114"},
  {"name":"Lakshmi","email":"lakshmi51@gmail.com","password":"Lakshmi@722"},
  {"name":"Sravani","email":"sravani52@gmail.com","password":"Sravani#509"},
  {"name":"Anusha","email":"anusha53@gmail.com","password":"Anusha@834"},
  {"name":"Kavya","email":"kavya54@gmail.com","password":"Kavya!401"},
  {"name":"Divya","email":"divya55@gmail.com","password":"Divya@963"},
  {"name":"Swathi","email":"swathi56@gmail.com","password":"Swathi#220"},
  {"name":"Pooja","email":"pooja57@gmail.com","password":"Pooja@719"},
  {"name":"Bhavya","email":"bhavya58@gmail.com","password":"Bhavya!802"},
  {"name":"Keerthi","email":"keerthi59@gmail.com","password":"Keerthi@555"},
  {"name":"Nandini","email":"nandini60@gmail.com","password":"Nandini#318"},
  {"name":"Harini","email":"harini61@gmail.com","password":"Harini@742"},
  {"name":"Sindhu","email":"sindhu62@gmail.com","password":"Sindhu!406"},
  {"name":"Sushma","email":"sushma63@gmail.com","password":"Sushma@950"},
  {"name":"Gayathri","email":"gayathri64@gmail.com","password":"Gaya#821"},
  {"name":"Ramya","email":"ramya65@gmail.com","password":"Ramya@330"},
  {"name":"Anjali","email":"anjali66@gmail.com","password":"Anjali!619"},
  {"name":"Meena","email":"meena67@gmail.com","password":"Meena@777"},
  {"name":"Radha","email":"radha68@gmail.com","password":"Radha#482"},
  {"name":"Sandhya","email":"sandhya69@gmail.com","password":"Sandhya@910"},
  {"name":"Ushasri","email":"ushasri70@gmail.com","password":"Usha!604"},
  {"name":"Priyanka","email":"priyanka71@gmail.com","password":"Priya@846"},
  {"name":"Sharmila","email":"sharmila72@gmail.com","password":"Sharmi#591"},
  {"name":"Renuka","email":"renuka73@gmail.com","password":"Renuka@327"},
  {"name":"Padma","email":"padma74@gmail.com","password":"Padma!850"},
  {"name":"Sridevi","email":"sridevi75@gmail.com","password":"Sridevi@991"},
  {"name":"Kalpana","email":"kalpana76@gmail.com","password":"Kalpana#613"},
  {"name":"Sujatha","email":"sujatha77@gmail.com","password":"Sujatha@458"},
  {"name":"Roja","email":"roja78@gmail.com","password":"Roja!270"},
  {"name":"Lalitha","email":"lalitha79@gmail.com","password":"Lalitha@812"},
  {"name":"Manasa","email":"manasa80@gmail.com","password":"Manasa#534"},
  {"name":"Teja","email":"teja81@gmail.com","password":"Teja@701"},
  {"name":"Yaswanth","email":"yaswanth82@gmail.com","password":"Yash@882"},
  {"name":"Akhil","email":"akhil83@gmail.com","password":"Akhil!420"},
  {"name":"Surya","email":"surya84@gmail.com","password":"Surya@999"},
  {"name":"Varun","email":"varun85@gmail.com","password":"Varun#615"},
  {"name":"Aditya","email":"aditya86@gmail.com","password":"Aditya@748"},
  {"name":"Nikhil","email":"nikhil87@gmail.com","password":"Nikhil!332"},
  {"name":"Koushik","email":"koushik88@gmail.com","password":"Koushik@909"},
  {"name":"Rahul","email":"rahul89@gmail.com","password":"Rahul#501"},
  {"name":"Arjun","email":"arjun90@gmail.com","password":"Arjun@618"},
  {"name":"Sai Charan","email":"saicharan91@gmail.com","password":"SaiCharan#771"},
  {"name":"Sai Kiran","email":"saikiran92@gmail.com","password":"SaiKiran@856"},
  {"name":"Sai Prasad","email":"saiprasad93@gmail.com","password":"SaiPrasad!430"},
  {"name":"Sai Ram","email":"sairam94@gmail.com","password":"SaiRam@689"},
  {"name":"Sai Reddy","email":"saireddy95@gmail.com","password":"SaiReddy#902"},
  {"name":"Krishna","email":"krishna96@gmail.com","password":"Krishna@741"},
  {"name":"Govind","email":"govind97@gmail.com","password":"Govind!333"},
  {"name":"Goutham","email":"goutham98@gmail.com","password":"Goutham@824"},
  {"name":"Prithvi","email":"prithvi99@gmail.com","password":"Prithvi#560"},
  {"name":"Yash","email":"yash100@gmail.com","password":"Yash@147"},
  {"name":"Bhanu","email":"bhanu101@gmail.com","password":"Bhanu#899"},
  {"name":"Chandra","email":"chandra102@gmail.com","password":"Chandra@602"},
  {"name":"Ramakrishna","email":"ramakrishna103@gmail.com","password":"Rama@933"},
  {"name":"Subhash","email":"subhash104@gmail.com","password":"Subhash!711"},
  {"name":"Vinod","email":"vinod105@gmail.com","password":"Vinod@488"},
  {"name":"Aravind","email":"aravind106@gmail.com","password":"Aravind#950"},
  {"name":"Sridhar","email":"sridhar107@gmail.com","password":"Sridhar@620"},
  {"name":"Pratap","email":"pratap108@gmail.com","password":"Pratap!387"},
  {"name":"Kalyan","email":"kalyan109@gmail.com","password":"Kalyan@731"},
  {"name":"Rithvik","email":"rithvik110@gmail.com","password":"Rithvik#556"},
  {"name":"Sumanth","email":"sumanth111@gmail.com","password":"Sumanth@901"},
  {"name":"Ajith","email":"ajith112@gmail.com","password":"Ajith@482"},
  {"name":"Satyam","email":"satyam113@gmail.com","password":"Satyam#731"},
  {"name":"Rohan","email":"rohan114@gmail.com","password":"Rohan@619"},
  {"name":"Piyush","email":"piyush115@gmail.com","password":"Piyush!804"},
  {"name":"Hemant","email":"hemant116@gmail.com","password":"Hemant@557"},
  {"name":"Sameer","email":"sameer117@gmail.com","password":"Sameer#392"},
  {"name":"Iqbal","email":"iqbal118@gmail.com","password":"Iqbal@840"},
  {"name":"Salim","email":"salim119@gmail.com","password":"Salim!276"},
  {"name":"Irfan","email":"irfan120@gmail.com","password":"Irfan@915"},
  {"name":"Farooq","email":"farooq121@gmail.com","password":"Farooq#608"},
  {"name":"Ahmed","email":"ahmed122@gmail.com","password":"Ahmed@334"},
  {"name":"Javed","email":"javed123@gmail.com","password":"Javed!790"},
  {"name":"Afsar","email":"afsar124@gmail.com","password":"Afsar@652"},
  {"name":"Nawaz","email":"nawaz125@gmail.com","password":"Nawaz#481"},
  {"name":"Karim","email":"karim126@gmail.com","password":"Karim@903"},
  {"name":"Basheer","email":"basheer127@gmail.com","password":"Basheer!512"},
  {"name":"Salman","email":"salman128@gmail.com","password":"Salman@748"},
  {"name":"Sohail","email":"sohail129@gmail.com","password":"Sohail#630"},
  {"name":"Arif","email":"arif130@gmail.com","password":"Arif@289"},
  {"name":"Fatima","email":"fatima131@gmail.com","password":"Fatima!901"},
  {"name":"Ayesha","email":"ayesha132@gmail.com","password":"Ayesha@446"},
  {"name":"Sana","email":"sana133@gmail.com","password":"Sana#558"},
  {"name":"Nazia","email":"nazia134@gmail.com","password":"Nazia@772"},
  {"name":"Sameera","email":"sameera135@gmail.com","password":"Sameera!319"},
  {"name":"Hina","email":"hina136@gmail.com","password":"Hina@684"},
  {"name":"Rukhsar","email":"rukhsar137@gmail.com","password":"Rukhsar#950"},
  {"name":"Shabana","email":"shabana138@gmail.com","password":"Shabana@407"},
  {"name":"Farzana","email":"farzana139@gmail.com","password":"Farzana!823"},
  {"name":"Salma","email":"salma140@gmail.com","password":"Salma@516"},
  {"name":"Jyothi","email":"jyothi141@gmail.com","password":"Jyothi#734"},
  {"name":"Uday","email":"uday142@gmail.com","password":"Uday@295"},
  {"name":"Shyam","email":"shyam143@gmail.com","password":"Shyam!618"},
  {"name":"Bhaskar","email":"bhaskar144@gmail.com","password":"Bhaskar@702"},
  {"name":"Suresh Babu","email":"sureshbabu145@gmail.com","password":"Suresh@981"},
  {"name":"Ramesh Babu","email":"rameshbabu146@gmail.com","password":"Ramesh!456"},
  {"name":"Mohan Reddy","email":"mohan.reddy147@gmail.com","password":"Mohan@889"},
  {"name":"Anand","email":"anand148@gmail.com","password":"Anand#573"},
  {"name":"Venu","email":"venu149@gmail.com","password":"Venu@311"},
  {"name":"Raghav","email":"raghav150@gmail.com","password":"Raghav!944"},
  {"name":"Charan","email":"charan151@gmail.com","password":"Charan@688"},
  {"name":"Poojitha","email":"poojitha152@gmail.com","password":"Poojitha#742"},
  {"name":"Navya","email":"navya153@gmail.com","password":"Navya@407"},
  {"name":"Ishita","email":"ishita154@gmail.com","password":"Ishita!915"},
  {"name":"Tanvi","email":"tanvi155@gmail.com","password":"Tanvi@558"},
  {"name":"Aditi","email":"aditi156@gmail.com","password":"Aditi#360"},
  {"name":"Rithika","email":"rithika157@gmail.com","password":"Rithika@831"},
  {"name":"Sneha","email":"sneha158@gmail.com","password":"Sneha!624"},
  {"name":"Vaishnavi","email":"vaishnavi159@gmail.com","password":"Vaishu@948"},
  {"name":"Nikitha","email":"nikitha160@gmail.com","password":"Nikitha#511"},
  {"name":"Bhargavi","email":"bhargavi161@gmail.com","password":"Bhargavi@792"},
  {"name":"Srilatha","email":"srilatha162@gmail.com","password":"Srilatha!483"},
  {"name":"Pranavi","email":"pranavi163@gmail.com","password":"Pranavi@620"},
  {"name":"Sahithi","email":"sahithi164@gmail.com","password":"Sahithi#775"},
  {"name":"Lasya","email":"lasya165@gmail.com","password":"Lasya@338"},
  {"name":"Amrutha","email":"amrutha166@gmail.com","password":"Amrutha!909"},
  {"name":"Poojitha Reddy","email":"poojitha.reddy167@gmail.com","password":"Poojitha@557"},
  {"name":"Ananya","email":"ananya168@gmail.com","password":"Ananya#741"},
  {"name":"Aishwarya","email":"aishwarya169@gmail.com","password":"Aish@882"},
  {"name":"Haripriya","email":"haripriya170@gmail.com","password":"Hari@610"},
  {"name":"Venkata","email":"venkata171@gmail.com","password":"Venkata!496"},
  {"name":"Ganesha","email":"ganesha172@gmail.com","password":"Ganesha@733"},
  {"name":"Rukmini","email":"rukmini173@gmail.com","password":"Rukmini#258"},
  {"name":"Sita","email":"sita174@gmail.com","password":"Sita@901"},
  {"name":"Rama","email":"rama175@gmail.com","password":"Rama!420"},
  {"name":"Lakshman","email":"lakshman176@gmail.com","password":"Lakshman@654"},
  {"name":"Hanuman","email":"hanuman177@gmail.com","password":"Hanuman#812"},
  {"name":"Narayana","email":"narayana178@gmail.com","password":"Narayana@339"},
  {"name":"Madhava","email":"madhava179@gmail.com","password":"Madhava!780"},
  {"name":"Kesava","email":"kesava180@gmail.com","password":"Kesava@944"},
  {"name":"Srinidhi","email":"srinidhi181@gmail.com","password":"Srinidhi#517"},
  {"name":"Charitha","email":"charitha182@gmail.com","password":"Charitha@688"},
  {"name":"Jahnavi","email":"jahnavi183@gmail.com","password":"Jahnavi!930"},
  {"name":"Hemanth","email":"hemanth184@gmail.com","password":"Hemanth@604"},
  {"name":"Kousalya","email":"kousalya185@gmail.com","password":"Kousalya#742"},
  {"name":"Bharath Reddy","email":"bharath.reddy186@gmail.com","password":"Bharath@815"},
  {"name":"Pranith","email":"pranith187@gmail.com","password":"Pranith!559"},
  {"name":"Sai Vamsi","email":"saivamsi188@gmail.com","password":"SaiVamsi@907"},
  {"name":"Yuvraj","email":"yuvraj189@gmail.com","password":"Yuvraj#631"},
  {"name":"Nithin","email":"nithin190@gmail.com","password":"Nithin@248"},
  {"name":"Taraka","email":"taraka191@gmail.com","password":"Taraka!779"},
  {"name":"Vinitha","email":"vinitha192@gmail.com","password":"Vinitha@402"},
  {"name":"Shailaja","email":"shailaja193@gmail.com","password":"Shailaja#855"},
  {"name":"Sruthi","email":"sruthi194@gmail.com","password":"Sruthi@690"},
  {"name":"Mounika","email":"mounika195@gmail.com","password":"Mounika!731"},
  {"name":"Bhavani","email":"bhavani196@gmail.com","password":"Bhavani@918"},
  {"name":"Suman","email":"suman197@gmail.com","password":"Suman#574"},
  {"name":"Rithesh","email":"rithesh198@gmail.com","password":"Rithesh@842"},
  {"name":"Kiranmai","email":"kiranmai199@gmail.com","password":"Kiranmai!399"},
  {"name":"Adarsh","email":"adarsh200@gmail.com","password":"Adarsh@615"},
  {"name":"Umesh","email":"umesh201@gmail.com","password":"Umesh#780"},
  {"name":"Sanjay","email":"sanjay202@gmail.com","password":"Sanjay@921"},
  {"name":"Raviteja","email":"raviteja203@gmail.com","password":"Ravi@364"},
  {"name":"Sravan","email":"sravan204@gmail.com","password":"Sravan!509"},
  {"name":"Kishore","email":"kishore205@gmail.com","password":"Kishore@842"},
  {"name":"Naidu","email":"naidu206@gmail.com","password":"Naidu#615"},
  {"name":"Rakesh","email":"rakesh207@gmail.com","password":"Rakesh@391"},
  {"name":"Shiva","email":"shiva208@gmail.com","password":"Shiva!784"},
  {"name":"Mahendra","email":"mahendra209@gmail.com","password":"Mahendra@650"},
  {"name":"Prakash","email":"prakash210@gmail.com","password":"Prakash#902"},
  {"name":"Vijetha","email":"vijetha211@gmail.com","password":"Vijetha@438"},
  {"name":"Ranjith","email":"ranjith212@gmail.com","password":"Ranjith!571"},
  {"name":"Satya","email":"satya213@gmail.com","password":"Satya@889"},
  {"name":"Anvesh","email":"anvesh214@gmail.com","password":"Anvesh#630"},
  {"name":"Karthika","email":"karthika215@gmail.com","password":"Karthika@745"},
  {"name":"Sowmya","email":"sowmya216@gmail.com","password":"Sowmya!508"},
  {"name":"Pavani","email":"pavani217@gmail.com","password":"Pavani@961"},
  {"name":"Bindu","email":"bindu218@gmail.com","password":"Bindu#384"},
  {"name":"Haritha","email":"haritha219@gmail.com","password":"Haritha@703"},
  {"name":"Chandana","email":"chandana220@gmail.com","password":"Chandana!855"},
  {"name":"Tejaswini","email":"tejaswini221@gmail.com","password":"Teju@642"},
  {"name":"Srinika","email":"srinika222@gmail.com","password":"Srinika#918"},
  {"name":"Sairam","email":"sairam223@gmail.com","password":"SaiRam@742"},
  {"name":"Vijay Kumar","email":"vijay.kumar224@gmail.com","password":"Vijay@816"},
  {"name":"Rajkumar","email":"rajkumar225@gmail.com","password":"Raj@593"},
  {"name":"Loknath","email":"loknath226@gmail.com","password":"Loknath#704"},
  {"name":"Harikrishna","email":"harikrishna227@gmail.com","password":"Hari@882"},
  {"name":"Nagendra","email":"nagendra228@gmail.com","password":"Nagendra!619"},
  {"name":"Ravindra","email":"ravindra229@gmail.com","password":"Ravi@457"},
  {"name":"Shivaram","email":"shivaram230@gmail.com","password":"Shiva@930"},
  {"name":"Pranay","email":"pranay231@gmail.com","password":"Pranay#506"},
  {"name":"Siddharth","email":"siddharth232@gmail.com","password":"Sid@748"},
  {"name":"Akash","email":"akash233@gmail.com","password":"Akash!391"},
  {"name":"Kalyani","email":"kalyani234@gmail.com","password":"Kalyani@604"},
  {"name":"Srujana","email":"srujana235@gmail.com","password":"Srujana#889"},
  {"name":"Sirisha","email":"sirisha236@gmail.com","password":"Sirisha@472"},
  {"name":"Likitha","email":"likitha237@gmail.com","password":"Likitha!718"},
  {"name":"Yamini","email":"yamini238@gmail.com","password":"Yamini@955"},
  {"name":"Harshitha","email":"harshitha239@gmail.com","password":"Harshi#641"},
  {"name":"Sowjanya","email":"sowjanya240@gmail.com","password":"Sowjanya@803"},
  {"name":"Revathi","email":"revathi241@gmail.com","password":"Revathi!529"},
  {"name":"Sunitha","email":"sunitha242@gmail.com","password":"Sunitha@690"},
  {"name":"Anupama","email":"anupama243@gmail.com","password":"Anu@914"},
  {"name":"Sailaja","email":"sailaja244@gmail.com","password":"Sailaja#558"},
  {"name":"Prathyusha","email":"prathyusha245@gmail.com","password":"Prathyusha@731"},
  {"name":"Deepthi","email":"deepthi246@gmail.com","password":"Deepthi!402"},
  {"name":"Kavitha","email":"kavitha247@gmail.com","password":"Kavitha@876"},
  {"name":"Surekha","email":"surekha248@gmail.com","password":"Surekha#619"},
  {"name":"Rajalakshmi","email":"rajalakshmi249@gmail.com","password":"Raja@955"},
  {"name":"Hemalatha","email":"hemalatha250@gmail.com","password":"Hema!704"},
  {"name":"Padmavathi","email":"padmavathi251@gmail.com","password":"Padma@833"},
  {"name":"Bhavitha","email":"bhavitha252@gmail.com","password":"Bhavi#566"},
  {"name":"Narasimha Reddy","email":"narasimha.reddy253@gmail.com","password":"Narasimha@492"},
  {"name":"Chandra Sekhar","email":"chandrasekhar254@gmail.com","password":"Chandra#781"},
  {"name":"Venkata Sai","email":"venkatasai255@gmail.com","password":"Venkata@650"},
  {"name":"Gopi Krishna","email":"gopikrishna256@gmail.com","password":"Gopi@818"},
  {"name":"Ravi Kiran","email":"ravikiran257@gmail.com","password":"RaviKiran#503"},
  {"name":"Sai Sandeep","email":"saisandeep258@gmail.com","password":"SaiSan@924"},
  {"name":"Pavan Teja","email":"pavanteja259@gmail.com","password":"Pavan@739"},
  {"name":"Vamshi","email":"vamshi260@gmail.com","password":"Vamshi!412"},
  {"name":"Sravanthi","email":"sravanthi261@gmail.com","password":"Sravanthi@880"},
  {"name":"Keerthana","email":"keerthana262@gmail.com","password":"Keerthana#627"},
  {"name":"Bhargav","email":"bhargav263@gmail.com","password":"Bhargav@515"},
  {"name":"Rohini","email":"rohini264@gmail.com","password":"Rohini!908"},
  {"name":"Shreya","email":"shreya265@gmail.com","password":"Shreya@744"},
  {"name":"Tanmay","email":"tanmay266@gmail.com","password":"Tanmay#601"},
  {"name":"Aman","email":"aman267@gmail.com","password":"Aman@839"},
  {"name":"Kunal","email":"kunal268@gmail.com","password":"Kunal!472"},
  {"name":"Neha","email":"neha269@gmail.com","password":"Neha@906"},
  {"name":"Pallavi","email":"pallavi270@gmail.com","password":"Pallavi#583"},
  {"name":"Ritika","email":"ritika271@gmail.com","password":"Ritika@760"},
  {"name":"Saketh","email":"saketh272@gmail.com","password":"Saketh!428"},
  {"name":"Anirudh","email":"anirudh273@gmail.com","password":"Ani@914"},
  {"name":"Naveena","email":"naveena274@gmail.com","password":"Naveena#635"},
  {"name":"Siddhi","email":"siddhi275@gmail.com","password":"Siddhi@701"},
  {"name":"Varshini","email":"varshini276@gmail.com","password":"Varshini!842"},
  {"name":"Sanjana","email":"sanjana277@gmail.com","password":"Sanjana@599"},
  {"name":"Tejasvi","email":"tejasvi278@gmail.com","password":"Tejasvi#781"},
  {"name":"Adithya","email":"adithya279@gmail.com","password":"Adithya@468"},
  {"name":"Ritesh","email":"ritesh280@gmail.com","password":"Ritesh!932"},
  {"name":"Praveena","email":"praveena281@gmail.com","password":"Praveena@614"},
  {"name":"Monika","email":"monika282@gmail.com","password":"Monika#750"},
  {"name":"Kishan","email":"kishan283@gmail.com","password":"Kishan@881"},
  {"name":"Sumanth Reddy","email":"sumanth.reddy284@gmail.com","password":"Sumanth@406"},
  {"name":"Anusha Reddy","email":"anusha.reddy285@gmail.com","password":"Anusha#739"},
  {"name":"Tejashree","email":"tejashree286@gmail.com","password":"Tejashree@902"},
  {"name":"Harsha Vardhan","email":"harshavardhan287@gmail.com","password":"Harsha@618"},
  {"name":"Vishal","email":"vishal288@gmail.com","password":"Vishal!744"},
  {"name":"Keshav","email":"keshav289@gmail.com","password":"Keshav@533"},
  {"name":"Naveed","email":"naveed290@gmail.com","password":"Naveed#890"},
  {"name":"Areeb","email":"areeb291@gmail.com","password":"Areeb@651"},
  {"name":"Zoya","email":"zoya292@gmail.com","password":"Zoya!417"},
  {"name":"Ishaan","email":"ishaan293@gmail.com","password":"Ishaan@972"},
  {"name":"Rumana","email":"rumana294@gmail.com","password":"Rumana#528"},
  {"name":"Faizan","email":"faizan295@gmail.com","password":"Faizan@684"},
  {"name":"Saniya","email":"saniya296@gmail.com","password":"Saniya!840"},
  {"name":"Muzammil","email":"muzammil297@gmail.com","password":"Muzammil@709"},
  {"name":"Aarav","email":"aarav298@gmail.com","password":"Aarav#955"},
  {"name":"Vihaan","email":"vihaan299@gmail.com","password":"Vihaan@612"},
  {"name":"Ira","email":"ira300@gmail.com","password":"Ira!483"},
  {"name":"Dev","email":"dev301@gmail.com","password":"Dev@701"},
  {"name":"Riya","email":"riya302@gmail.com","password":"Riya#864"},
  {"name":"Arnav","email":"arnav303@gmail.com","password":"Arnav@599"},
  {"name":"Mythri","email":"mythri304@gmail.com","password":"Mythri!742"},
  {"name":"Suhas","email":"suhas305@gmail.com","password":"Suhas@831"},
  {"name":"Tanush","email":"tanush306@gmail.com","password":"Tanush#490"},
  {"name":"Ishika","email":"ishika307@gmail.com","password":"Ishika@976"},
  {"name":"Raghuram","email":"raghuram308@gmail.com","password":"Raghu!615"},
  {"name":"Venkateswara Rao","email":"venkateswararao309@gmail.com","password":"Venkatesh@748"},
  {"name":"Subrahmanyam","email":"subrahmanyam310@gmail.com","password":"Subrah@903"},
  {"name":"Satyanarayana","email":"satyanarayana311@gmail.com","password":"Satya@612"},
  {"name":"Lakshminarayana","email":"lakshminarayana312@gmail.com","password":"Lakshmi@781"},
  {"name":"Srinivasa Rao","email":"srinivasarao313@gmail.com","password":"Srinivasa#459"},
  {"name":"Chiranjeevi","email":"chiranjeevi314@gmail.com","password":"Chiru@990"},
  {"name":"Nagababu","email":"nagababu315@gmail.com","password":"Naga@533"},
  {"name":"Pawan Kalyan","email":"pawankalyan316@gmail.com","password":"Pawan@817"},
  {"name":"Allu Arjun","email":"allu.arjun317@gmail.com","password":"Allu@906"},
  {"name":"Ram Charan","email":"ram.charan318@gmail.com","password":"RamCharan#742"},
  {"name":"Nani","email":"nani319@gmail.com","password":"Nani@681"},
  {"name":"Vijay Deverakonda","email":"vijay.deverakonda320@gmail.com","password":"Vijay@950"},
  {"name":"Satyadev","email":"satyadev321@gmail.com","password":"SatyaDev#708"},
  {"name":"Adivi Sesh","email":"adivi.sesh322@gmail.com","password":"Sesh@614"},
  {"name":"Sudheer Babu","email":"sudheer.babu323@gmail.com","password":"Sudheer@889"},
  {"name":"Naveen Polishetty","email":"naveen.polishetty324@gmail.com","password":"Naveen@772"},
  {"name":"Sharwanand","email":"sharwanand325@gmail.com","password":"Sharwanand#603"},
  {"name":"Karthi","email":"karthi326@gmail.com","password":"Karthi@917"},
  {"name":"Suriya","email":"suriya327@gmail.com","password":"Suriya!488"},
  {"name":"Dulquer Salmaan","email":"dulquer.salmaan328@gmail.com","password":"Dulquer@756"},
  {"name":"Fahadh Faasil","email":"fahadh.faasil329@gmail.com","password":"Fahadh#842"},
  {"name":"Vikram","email":"vikram330@gmail.com","password":"Vikram@901"},
  {"name":"Prabhas","email":"prabhas331@gmail.com","password":"Prabhas#777"},
  {"name":"Mahesh Babu","email":"mahesh.babu332@gmail.com","password":"Mahesh@888"},
  {"name":"Adarsh","email":"adarsh333@gmail.com","password":"Adarsh@615"}
];

// Generate random date within past 3 months
function getRandomDateInPast3Months() {
  const now = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(now.getMonth() - 3);
  
  const randomTime = threeMonthsAgo.getTime() + Math.random() * (now.getTime() - threeMonthsAgo.getTime());
  return new Date(randomTime);
}

// Generate random streak data
function getRandomStreak() {
  const current = Math.floor(Math.random() * 30);
  const longest = current + Math.floor(Math.random() * 20);
  return {
    current,
    longest,
    lastActivityDate: new Date(Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000)
  };
}

// Seed users
async function seedUsers() {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shortcut-sensei';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Clear existing users (optional - comment out if you want to keep existing users)
    // await User.deleteMany({});
    // console.log('🗑️  Cleared existing users');

    let createdCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const userData of users) {
      try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
          console.log(`⏭️  Skipped ${userData.email} - already exists`);
          skippedCount++;
          continue;
        }

        // Create user with registration date in past 3 months
        const registrationDate = getRandomDateInPast3Months();
        const streak = getRandomStreak();

        const user = new User({
          name: userData.name,
          email: userData.email,
          password: userData.password, // Will be hashed by pre-save hook
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=8B5FBF&color=fff&size=128`,
          isEmailVerified: true, // Auto-verify for seeded users
          createdAt: registrationDate,
          updatedAt: registrationDate,
          learningStreak: streak,
          streak: streak,
          // Add some initial activity
          activityLog: [
            {
              action: 'registered',
              details: 'User registered successfully',
              timestamp: registrationDate
            }
          ]
        });

        await user.save();
        createdCount++;
        console.log(`✅ Created user ${createdCount}/333: ${userData.email}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Error creating ${userData.email}:`, error.message);
      }
    }

    console.log('\n📊 Summary:');
    console.log(`✅ Created: ${createdCount} users`);
    console.log(`⏭️  Skipped: ${skippedCount} users (already exist)`);
    console.log(`❌ Errors: ${errorCount} users`);
    console.log(`📈 Total in database: ${await User.countDocuments()}`);

    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
}

// Run the seeder
seedUsers();

/*
This static array was adopted in instead of fetching data from an API in real time because it is not a very important feature on the website
*/
const bgPictures = [
   'https://images.unsplash.com/photo-1513135065346-a098a63a71ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxfHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyfHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1514986888952-8cd320577b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwzfHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1428515613728-6b4607e44363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHw0fHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHw1fHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1605522469906-3fe226b356bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHw2fHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHw3fHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHw4fHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1606787503066-794bb59c64bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHw5fHxjb29raW5nfGVufDB8MHx8fDE2MjIwNzQzMDU&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1518291344630-4857135fb581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxMHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxMXx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1605522508768-f8697d6e8e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxMnx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1605433247501-698725862cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxM3x8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxNHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1498522271744-cdd435c13f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxNXx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxNnx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1483137140003-ae073b395549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxN3x8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1488992783499-418eb1f62d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxOHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1605522324043-96094fd06c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwxOXx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1470549813517-2fa741d25c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyMHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyMXx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1513135557534-682d53fd7046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyMnx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1516824711718-9c1e683412ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyM3x8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyNHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1605433246995-23f532d1e001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyNXx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyNnx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1509358271058-acd22cc93898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyN3x8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1513135467880-6c41603bbb5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyOHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1523039031846-6b3f39302cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwyOXx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080',
   'https://images.unsplash.com/photo-1576237934915-c716cf54b24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQwMzN8MHwxfHNlYXJjaHwzMHx8Y29va2luZ3xlbnwwfDB8fHwxNjIyMDc0MzA1&ixlib=rb-1.2.1&q=80&w=1080'
 ]

 module.exports = bgPictures
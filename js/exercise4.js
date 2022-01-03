console.log('Create a class liberary')
/*
* Exercise -4
 * create a class liberary and implement the following:
 * constructor must take the book list as an argument
 * getBookList()
 * issueBook(bookname,user)
 * returnBook(bookname)
 */

class book{
    static bookList=['rings','hobbit','nostradamos'];
     constructor(bookname,user) {
         this.bookname=bookname;
         this.user=user;
     }
     
 
     getBookList(){
         return `list of books: ${book.bookList}`;
     }
 
     issueBook(bookname,user){
         return `${bookname} is issued to ${user}`;
     }
 
     returnBook(bookname){
         return `${bookname} was returned back to library`;
     }
 }
 
 class liberary extends book{
    
     constructor(bookname,user,bookList){
         super(bookname,user);
         this.bookList=bookList;
     }
     
 }
 
 let lib=new liberary('LOTR','arjit',liberary.bookList);
 console.log(lib);
 console.log(lib.getBookList());
 console.log(lib.issueBook('LOTR','ajay'));
 console.log(lib.returnBook('LOTR'));
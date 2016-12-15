// anti-spam JavaScript Function is designed to foil Address Harvesting Robots
//    It will help prevent your address from being harvested on your web site.
//    You may use this  script or modify with your own encryption technique.
//    
//    Link to JavaScript file from any XHTML/HTML document by placing 
//    in <head> element the following <script> element.
//       <script type="text/javascript" 
//          src="anti-spam.js"></script>
//
//    Call the anti-spam function in <body> element of XHTML/HTML document
//    The anti-spam function has five parameters that must be strings
//       Tpld = Top level domain in reverse order (instead of ORG use GRO)
//       User = User name in reverse order (instead of THEMAN use NAMEHT
//       Domn = Domain name in reverse (instead of ISLANDMAN use NAMDNALSI)
//       Subj = Subject of email will automatically use this string
//       Hlnk = Text or Element used for hyperlink (if blank will use address)
//    Example: anti-spam("gro", "nameht", "namdnalsi", "Your Web Site", "");

//RevString function reverses the order of characters in a string
function reverse-string(StrIn)
{
   var StrOut= new String("");
   for(var i=StrIn.length-1; i>=0; i--)
      StrOut += StrIn.charAt(i);
   return StrOut;
}

// anti-spam function encodes hyperlinked email address to hide from spammers
function anti-spam(Tpld, User, Domn, Subj, Hlnk)
{
   // <A> Element components
   var AElmt = new Array('<a href=\"ma', '</a>', 'ilto:', '?subject=', '\">');
   // Reverse character order for each component of address
   var At2 = "4;", At1 = "&#6"; // at symbol
   var Addr, LinkObj;
   Addr = reverse-string(User);
   Addr += At1 + At2;
   Addr += reverse-string(Domn);
   Addr += ".";
   Addr += reverse-string(Tpld);
   if(Hlnk=="")
      LinkObj = Addr;
   else
      LinkObj = Hlnk;
   document.writeln(AElmt[0]+AElmt[2]+Addr+AElmt[3]+Subj+AElmt[4]+LinkObj+AElmt[1]);
}

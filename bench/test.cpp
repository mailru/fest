#include <v8.h>
#include <iostream>
#include <sstream>
#include <fstream>

using namespace v8;
using namespace std;

int main(int argc, char* argv[]) {

  // Create a stack-allocated handle scope.
  HandleScope handle_scope;

  // Create a new context.
  Persistent<Context> context = Context::New();
  
  // Enter the created context for compiling and
  // running the hello world script. 
  Context::Scope context_scope(context);
  ostringstream prep;

  ifstream in_tmpl("messagelist.fest.js");
  ostringstream tmpl;

  prep << in_tmpl.rdbuf() << ";";

  in_tmpl.close();

  ifstream in_data("checknew.json");

  prep << "var r, start, total = 0, data = " << in_data.rdbuf() << ";";
  in_data.close();

  const string &p = prep.str();

  // Create a string containing the JavaScript source code.
  Handle<String> source1 = String::New(p.c_str());

  // Compile the source code.
  Handle<Script> script1 = Script::Compile(source1);
  
  // Run the script to get the result.
  //result = script->Run();
  script1->Run();
 
  tmpl << "start = new Date().getTime(); template(data.data); total += (new Date().getTime() - start); total";

  const string &t = tmpl.str();
  
  // Create a string containing the JavaScript source code.
  Handle<String> source = String::New(t.c_str());
  Handle<Value> result;
 
  // Compile the source code.
  Handle<Script> script = Script::Compile(source);
  
  for (int i = 0; i < 1000; ++i) {
     // Compile the source code.
     Handle<Script> script = Script::Compile(source);
  
     // Run the script to get the result.
     result = script->Run();
  }

  

  // Dispose the persistent context.
  context.Dispose();

  // Convert the result to an ASCII string and print it.
  String::AsciiValue ascii(result);
  printf("%s\n", *ascii);
  return 0;
}

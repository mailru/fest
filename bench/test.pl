use JavaScript::V8;
use Benchmark;

  my $context = JavaScript::V8::Context->new();

  $context->bind_function(write => sub { print @_ });

  local $/=undef;

  open FILE, "messagelist.fest.js" or die "Couldn't open file: $!"; 
  my $template =  join("", <FILE>); 
  close FILE;

  open FILE, "checknew.json" or die "Couldn't open file: $!"; 
  my $data =  join("", <FILE>); 
  close FILE;

  $context->eval("var data = " . $data . ", total = 0, start, html;" . $template);
  
  #my $string ="transform(template, " . $data . ").then(write)";
  my $string ="start = new Date().getTime();html = template(data.data);total += (new Date().getTime() - start);";

  my $start = Benchmark->new;
  for ($count = 1000; $count >= 1; $count--) {
    $context->eval($string);
  }
  my $end = Benchmark->new;
  my $diff = timediff( $end, $start );

  $context->eval("write(html + '\\n')");
  $context->eval("write('v8 time: ' + total + '\\n')");
  print "My program took: " . timestr( $diff ) . "\n";


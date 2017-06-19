# opencpu-prcomp-demoapp
##Background
<p>This is an independent package developed using <a href="https://www.opencpu.org/">opencpu</a></p>
##Folder structure
<ul>
<li><bold>inst</bold> folder contains all the html/css/javascript files</li>
<li><bold>R</bold> folder contains the R script will be installed and run on opencpu server</li>
<li>supporting files were auto-generated using devtools package from R</li>
</ul>
##How to test
###local server
<p>The easiest way to run and test the package is to run a local opencpu server.</p>
<p>You will need to install R and it is recommended to RStudio to install the package locally and initiated the local opencpu server.</p>
<code>
  ```//install devtools package for R```
  ```>install.packages('devtools')```
  ```>library(devtools)```
  ```//install the package, this will install the package into your default package folder for R```
  ```>install_local('path/to/package')```
  ```//install opencpu package for R```
  ```>install.packages('opencpu')```
  ```>library(opencpu)```
  ```//initiate the web application through the local server ```
  ```>ocpu_statrt_app('package')```
</code>
###using public server
<a href="">lauch web application</a>
##How to make a request to the server
<p>You can make Ajax call using ocpu.call() function</p>
1.
<code>

</code>

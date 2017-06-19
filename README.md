# opencpu-prcomp-demoapp

## Background
This is an independent package developed using <a href="https://www.opencpu.org/">opencpu</a>

## Folder structure
<ul>
<li><b>inst</b> folder contains all the html/css/javascript files</li>
<li><b>R</b> folder contains the R script will be installed and run on opencpu server</li>
<li>supporting files were auto-generated using devtools package from R</li>
</ul>

## Run our demo web application
<a href="http://34.223.213.252/ocpu/library/prcompdemo">Demo web application</a>

## How to make a request to the server
You can develop your own web application and directly interact with the public server by making Ajax request.

Results will be returned as:

1. File list

2. Array

You can either access the files on server and read out the data OR you can direactly capture the data by calling `getObject()`.
Details about how to make Ajax call can be found in folder `inst/www/main.js`.

## How to develop your own package
If you are interested in developing your own R package, opencpu has detailed <a href="https://www.opencpu.org/api.html">instructions</a> you can follow.

### Setup local server
<p>The easiest way to run and test the package is to run a local opencpu server.</p>
<p>You will need to install R and RStudio to develop locally.</p>
<p>Then you will be able to install packages and initiated the local opencpu server for testing.</p>

```R
#install devtools package for R
install.packages('devtools')
library(devtools)
#install the package, this will install the package into your default package folder for R
install_local('path/to/package')
#install opencpu package for R
install.packages('opencpu')
library(opencpu)
#initiate the web application through the local server
ocpu_statrt_app('package')
```
## Licence
<b>MIT</b>





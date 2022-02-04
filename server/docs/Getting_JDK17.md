# Getting JDK17

So if you don't have a JDK17 you need to get one. There's a couple of links where you can get free OpenJDK builds, or most package managers, including winget, chocolatey and homebrew will have them. Plus the 

If that's the only java on your system, you should be good to go, otherwise open a terminal or other command line and run

### `java -version`

You should see version 17.  If you do not, then you have some troubleshooting to do.  Java is designed to be installer-free, so you can run multiple different versions on a machine, but it can be painful to determine why your environment is choosing one or the other.

Basically, though, whichever java or java.exe command is found first on your path should be the one that is used. A `JAVA_HOME` environment variable is often used by the startup scripts for some apps, so that's worth checking too.

## Helpful links

[Download Azul Zulu Builds of OpenJDK](https://www.azul.com/downloads/?package=jdk#download-openjdk)
[Adoptium - formerly AdoptOpenJDK](https://adoptium.net/)
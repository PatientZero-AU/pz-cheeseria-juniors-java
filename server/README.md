# Server

This subproject contains the backend server developed in Java.

It persists the cheese data to a JSON File, stored in a ```.cheeseria``` directory under your user home. 

## Getting Started

First and foremost, you must use a JDK 17 to build this app. So if you don't have one you need to get one. There's a couple of links where you can get free OpenJDK builds, or most package managers, including winget, chocolatey and homebrew will have them.

If that's the only java on your system, you should be good to go, otherwise open a terminal or other command line and run

### `java -version`

You should see version 17.  If you do not, then you have some troubleshooting to do.  Java is designed to be installer-free, so you can run multiple different versions on a machine, but it can be painful to determine why your environment is choosing one or the other.

Basically, though, whichever java or java.exe command is found first on your path should be the one that is used. A `JAVA_HOME` environment variable is often used by the startup scripts for some apps, so that's worth checking too.

## Build and Run Locally

The project uses Gradle as its build tool, so once we have the right java, building the app is simple. Change to the server directory and run:

### `./gradlew run`

This will work on any Unix/Linux/Macos terminal, and even in Windows Terminal with Powershell.  Should you really insist upon running it in an old-style `cmd` window, then you'll need to use `.\gradlew.bat run`.

Either way, the script will download and install the correct version of gradle, and run the build, and start the server. The command will not terminate, as it is running the server on the terminal window, and you will see the log output onscreen. To stop the server, just use `^C` or the kill technique of your choice.

The server backend listens on [http://localhost:9100](http://localhost:9100), and you can test it using the built-in [Swagger UI](http://localhost:9100/swagger-ui).

## Developing

You can easily use your favourite IDE (or text editor to make changes to the project). The most complex part is ensuring that your IDE sees the JDK17 and uses it for your project.

See the following setup guides:
- [IntelliJ](./docs/IntelliJ_IDEA_Setup_Guide.md)
- [VSCode](./docs/VSCode_Setup_Guide.md)
- [Eclipse](./docs/Eclipse_Setup_Guide.md) 

The application uses features such as records from Java 17, so you can code in a modern java style. To put everyone on an equal footing, it does not use either of the popular super-frameworks (spring-boot or Jakarta-EE). The libraries directly used are:

- [Javalin](http://javalin.io) - lightweight Java and Kotlin web framework - very quick to learn, what you see is what you get;
- [Jackson](https://github.com/FasterXML/jackson) - JSON processing (plus YAML and other formats);
- [SLF4J](https://www.slf4j.org/manual.html) - Simple Logging Facade for Java.

### Configuration and Data files

The application persists its configuration and data in a `.cheeseria` folder under your home directory. The folder and these files are created automatically if they don't exist, and any changes you make to them will not be overwritten by the running application.

This does mean that if you want to use the default values again, or they have been somehow corrupted, then you just need to delete them and restart the app.
## Helpful links

[Download Azul Zulu Builds of OpenJDK](https://www.azul.com/downloads/?package=jdk#download-openjdk)
[Adoptium - formerly AdoptOpenJDK](https://adoptium.net/)
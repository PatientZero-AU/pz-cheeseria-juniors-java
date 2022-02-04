# Server

This subproject contains the backend server developed in Java. It uses JDK17, so you can code in a modern style, using new features like records.

It persists the cheese data to a JSON File, stored in a ```.cheeseria``` directory under your user home. 


## Build and Run in a Terminal

This is easy if you have Java 17, if not see [Getting JDK17](./docs/Getting_JDK17.md).

The project uses Gradle as its build tool, so once we have the right java, building the app is simple.
We use the [Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html), which will download the correct version of gradle if needed, and then use it.  You do not need to have gradle installed on your machine, although it won't cause problems if you do.

Change to the server directory and run:

### `./gradlew run`

This will work on any Unix/Linux/Macos terminal, and even in Windows Terminal with Powershell.  Should you really insist upon running it in an old-style `cmd` window, then you'll need to use `.\gradlew.bat run`.

Either way, the script will download and install the correct version of gradle, and run the build, and start the server. The command will not terminate, as it is running the server on the terminal window, and you will see the log output onscreen. To stop the server, just use `^C` or the kill technique of your choice.

The server backend listens on [http://localhost:9100](http://localhost:9100), and you can test it using the built-in [Swagger UI](http://localhost:9100/swagger-ui).

## Developing

You can easily use your favourite IDE (or text editor to make changes to the project). The most complex part is ensuring that your IDE uses the right JDK for your project. IntelliJ is probably the easiest, all point and click, and it will even download and install a JDK for you if you prefer that.  VSCode requires some JSON hacking in the settings, but if you are using VSCode for Java you are probably used to that. 

Here's some help if you need it:
- [IntelliJ](./docs/IntelliJ_IDEA_Setup_Guide.md)
- [VSCode](./docs/VSCode_Setup_Guide.md)
- [Eclipse](./docs/Eclipse_Setup_Guide.md) 

The application uses features such as records from Java 17, so you can code in a modern java style. To put everyone on an equal footing, it does not use either of the popular super-frameworks (spring-boot or Jakarta-EE). The libraries directly used are:

- [Javalin](http://javalin.io) - lightweight Java and Kotlin web framework - very quick to learn, what you see is what you get;
- [Jackson](https://github.com/FasterXML/jackson) - JSON processing (plus YAML and other formats);
- [SLF4J](https://www.slf4j.org/manual.html) - Simple Logging Facade for Java.

### Configuration and Data files

The application persists its configuration and data in a `.cheeseria` folder under your home directory. The folder and these files are created automatically if they don't exist, and any changes you make to them will not be overwritten by the running application.

This does mean that if you want to use the default values again, or they have been somehow corrupted, or you have changed the format of the `cheeseria.yml` then you just need to delete the file and restart the app. Same thing to reinitialise the "database", in the `cheeses.json` file


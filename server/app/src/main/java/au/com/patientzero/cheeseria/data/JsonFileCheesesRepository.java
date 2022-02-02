package au.com.patientzero.cheeseria.data;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collection;

import com.fasterxml.jackson.core.JsonFactoryBuilder;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

import au.com.patientzero.cheeseria.models.Cheese;

public class JsonFileCheesesRepository implements CheesesRepository {
  private final File cheeseFile;
  private final Collection<Cheese> cheeses;

  public JsonFileCheesesRepository(File cheeseFile, Collection<Cheese> cheeses) {
    this.cheeseFile = cheeseFile;
    this.cheeses = cheeses;
    for (Cheese cheese : cheeses) {
      System.err.println(cheese);
    }
  }

  public static JsonFileCheesesRepository loadRepository(File cheeseFile) throws Exception {
    try(FileInputStream input = new FileInputStream(cheeseFile)) {

      var cheeseList = Arrays.asList(new ObjectMapper().readValue(input, Cheese[].class));
      return new JsonFileCheesesRepository(cheeseFile, cheeseList);
    }
  }

  @Override
  public Collection<Cheese> getAll() {
    // TODO Auto-generated method stub
    return null;
  }
  
}

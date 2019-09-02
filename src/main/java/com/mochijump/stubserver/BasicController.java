package com.mochijump.stubserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class BasicController {
    private final LevelRepository levelRepository;

    public BasicController(final LevelRepository levelRepository) {
        this.levelRepository = levelRepository;
    }

    @GetMapping("/editor")
    public String editorLauncher() {
        return "draw.html";
    }

    @GetMapping("/version")
    public @ResponseBody
    String getVersion() {
        return "0.2.5";
    }

    @GetMapping(path = "/test/return")
    public @ResponseBody
    Iterable<Level> getLevel(@RequestParam String name) {
        return levelRepository.findByLevelName(name);
    }

    @GetMapping(path = "/returnAll")
    public @ResponseBody
    Iterable<Level> getAllUserInputs() {
        return levelRepository.findAll();
    }

    @PostMapping(path = "/test/json")
    public void recieverTest(@RequestBody final Level level) {
        Level exists = null;
        try {
            exists = levelRepository.findByLevelName(level.getLevelName()).get(0);
        } catch (Exception e) {
            //this Exception will be thrown every time a new level is made
        }
        if (exists != null) {
            level.setId(exists.getId());
        }
        levelRepository.save(level);
    }
}

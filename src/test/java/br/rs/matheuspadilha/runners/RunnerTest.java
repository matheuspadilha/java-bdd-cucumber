package br.rs.matheuspadilha.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/Features/",
        glue = {"br.rs.matheuspadilha.steps", "br.rs.matheuspadilha.config"},
        plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
        monochrome = false,
        tags = {},
        snippets = SnippetType.CAMELCASE,
        dryRun = false,
        strict = false
)
public class RunnerTest {
}
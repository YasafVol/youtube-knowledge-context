export interface ProjectContext {
  plugin: {
    name: string;
    version: string;
    description: string;
    lastUpdated: string;
    architecture: {
      pattern: string;
      dataFlow: string[];
      stateManagement: string;
      keyDependencies: string[];
    };
  };
  components: {
    [key: string]: {
      description: string;
      dependencies: string[];
      exports: string[];
    };
  };
  development: {
    testing: string;
    style: string;
    buildProcess: string;
    requiredSetup: string[];
  };
  generated: {
    files: Record<string, string[]>;
    dependencies: {
      [key: string]: string;
    };
    componentRelationships: {
      [key: string]: string[];
    };
    typeDefinitions: {
      [key: string]: string;
    };
  };
}
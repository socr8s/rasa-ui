var app = angular.module('app');

app.factory('Bot', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/bots/:bot_id/:path',
    { bot_id: '@id', path: '@path' },
    {
      update: { method: 'PUT' }
    }
  );
});

app.factory('Actions', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/actions/:action_id',
    { action_id: '@id' },
    {
      update: { method: 'PUT' }
    }
  );
});

app.factory('BotActions', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/bots/:bot_id/actions', {
    bot_id: '@id'
  });
});

app.factory('Auth', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/auth');
});

app.factory('BotStories', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/botStory');
});

app.factory('Intent', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/intents/:intent_id',
    { intent_id: '@id' },
    {
      update: { method: 'PUT' }
    }
  );
});

app.factory('Intents', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/bots/:bot_id/intents', {
    bot_id: '@id'
  });
});

app.factory('Expressions', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/intents/:intent_id/expressions',
    {
      intent_id: '@id'
    }
  );
});

app.factory('IntentExpressions', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/intent_expressions');
});

app.factory('Expression', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/expressions/:expression_id',
    {
      expression_id: '@id'
    },
    {
      update: { method: 'PUT' }
    }
  );
});

app.factory('Parameters', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/intent/:intent_id/parameters');
});

app.factory('ExpressionParameters', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/expression_parameters/:expression_id'
  );
});

app.factory('Parameter', [
  '$resource',
  'appConfig',
  function ($resource, appConfig) {
    return $resource(
      appConfig.api_endpoint_v2 + '/parameters/:parameter_id',
      { parameter_id: '@id' },
      {
        update: { method: 'PUT' }
      }
    );
  }
]);

app.factory('Entity', [
  '$resource',
  'appConfig',
  function ($resource, appConfig) {
    return $resource(
      appConfig.api_endpoint_v2 + '/entities/:entity_id',
      { entity_id: '@id' },
      {
        update: { method: 'PUT' }
      }
    );
  }
]);

app.factory('Entities', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/entities');
});

app.factory('Regex', [
  '$resource',
  'appConfig',
  function ($resource, appConfig) {
    return $resource(
      appConfig.api_endpoint_v2 + '/regex/:regex_id',
      { regex_id: '@id' },
      {
        update: { method: 'PUT' }
      }
    );
  }
]);

app.factory('BotRegex', [
  '$resource',
  'appConfig',
  function ($resource, appConfig) {
    return $resource(appConfig.api_endpoint_v2 + '/bot/:bot_id/regex', {
      bot_id: '@id'
    });
  }
]);

app.factory('BotSynonyms', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/bot/:bot_id/synonyms', {
    bot_id: '@id'
  });
});

app.factory('BotEntities', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/entities/bot/:bot_id', {
    bot_id: '@id'
  });
});

app.factory('Synonym', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/synonyms/:synonym_id',
    {
      synonym_id: '@id'
    },
    {
      query: { method: 'GET', isArray: false }
    }
  );
});

app.factory('EntitySynonymVariants', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/synonyms/:synonym_id/variants',
    {
      synonym_id: '@id'
    }
  );
});

app.factory('SynonymsVariants', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/synonyms_variants/:synonyms_id',
    {
      synonyms_id: '@id'
    }
  );
});

app.factory('SynonymVariant', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/variants/:synonym_variant_id',
    {
      synonym_variant_id: '@id'
    }
  );
});

app.factory('AllSynonymVariants', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/synonymvariants');
});

app.factory('Settings', [
  '$resource',
  'appConfig',
  function ($resource, appConfig) {
    return $resource(
      appConfig.api_endpoint_v2 + '/settings/:setting_name',
      { setting_name: '@setting_name' },
      {
        update: { method: 'PUT' }
      }
    );
  }
]);

app.factory('ActionResponses', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/actionresponse/:action_id', {
    action_id: '@id'
  });
});
//All responses for an intent
app.factory('Responses', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/response/:intent_id', {
    intent_id: '@id'
  });
});
//Reponse actions: create and delete
app.factory('Response', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/response/:response_id', {
    response_id: '@id'
  });
});
app.factory('IntentResponse', function ($resource, appConfig) {
  return $resource(appConfig.api_endpoint_v2 + '/rndmresponse');
});

app.factory('Model', function ($resource, appConfig) {
  return $resource(
    appConfig.api_endpoint_v2 + '/models/:bot_id',
    { bot_id: '@id', path: '@path' }
  );
});

import { toBrandApi, toBrandGroupsApi } from '@/components/feature/brand';
import {
  designPrinciples,
  toDesignPrincipleApi
} from '@/components/feature/design-principles';
import {
  NAVIGATION_LEVELS_ENABLED,
  philosophyTabs,
  philosophyTopics
} from '@/components/feature/philosophy';
import {
  mainTechnologies,
  technologies
} from '@/components/feature/technologies';
import { mainTools, tools } from '@/components/feature/tools';

import { introductionStatements } from './introduction-content';

export function buildIntroductionApi() {
  return {
    statements: introductionStatements,
    philosophy: {
      tabs: philosophyTabs,
      ...(NAVIGATION_LEVELS_ENABLED ? { topics: philosophyTopics } : {})
    },
    principles: designPrinciples.map(toDesignPrincipleApi),
    tools: {
      main: mainTools.map(toBrandApi),
      groups: toBrandGroupsApi(tools)
    },
    technologies: {
      main: mainTechnologies.map(toBrandApi),
      groups: toBrandGroupsApi(technologies)
    }
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { NextbillionSDK, ClientOptions } from '@nbai/sdk';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { NextbillionSDK } from "@nbai/sdk";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: NextbillionSDK)`
    : `const run: (${functionSource.client}: NextbillionSDK) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.fleetify.routes.create',
    'client.fleetify.routes.redispatch',
    'client.fleetify.routes.steps.complete',
    'client.fleetify.routes.steps.create',
    'client.fleetify.routes.steps.delete',
    'client.fleetify.routes.steps.update',
    'client.fleetify.documentTemplates.create',
    'client.fleetify.documentTemplates.delete',
    'client.fleetify.documentTemplates.list',
    'client.fleetify.documentTemplates.retrieve',
    'client.fleetify.documentTemplates.update',
    'client.skynet.subscribe',
    'client.skynet.asset.bind',
    'client.skynet.asset.create',
    'client.skynet.asset.delete',
    'client.skynet.asset.list',
    'client.skynet.asset.retrieve',
    'client.skynet.asset.track',
    'client.skynet.asset.update',
    'client.skynet.asset.updateAttributes',
    'client.skynet.asset.event.list',
    'client.skynet.asset.location.getLast',
    'client.skynet.asset.location.list',
    'client.skynet.monitor.create',
    'client.skynet.monitor.delete',
    'client.skynet.monitor.list',
    'client.skynet.monitor.retrieve',
    'client.skynet.monitor.update',
    'client.skynet.trip.delete',
    'client.skynet.trip.end',
    'client.skynet.trip.getSummary',
    'client.skynet.trip.retrieve',
    'client.skynet.trip.start',
    'client.skynet.trip.update',
    'client.skynet.namespacedApikeys.create',
    'client.skynet.namespacedApikeys.delete',
    'client.skynet.config.retrieve',
    'client.skynet.config.testWebhook',
    'client.skynet.config.update',
    'client.skynet.search.around',
    'client.skynet.search.bound',
    'client.skynet.search.polygon.create',
    'client.skynet.search.polygon.get',
    'client.geocode.batchCreate',
    'client.geocode.retrieve',
    'client.geocode.structuredRetrieve',
    'client.optimization.compute',
    'client.optimization.reOptimize',
    'client.optimization.driverAssignment.assign',
    'client.optimization.v2.retrieveResult',
    'client.optimization.v2.submit',
    'client.geofence.contains',
    'client.geofence.create',
    'client.geofence.delete',
    'client.geofence.list',
    'client.geofence.retrieve',
    'client.geofence.update',
    'client.geofence.console.preview',
    'client.geofence.console.search',
    'client.geofence.batch.create',
    'client.geofence.batch.delete',
    'client.geofence.batch.list',
    'client.discover.retrieve',
    'client.browse.search',
    'client.mdm.createDistanceMatrix',
    'client.mdm.getDistanceMatrixStatus',
    'client.isochrone.compute',
    'client.restrictions.create',
    'client.restrictions.delete',
    'client.restrictions.list',
    'client.restrictions.listByBbox',
    'client.restrictions.retrieve',
    'client.restrictions.setState',
    'client.restrictions.update',
    'client.restrictionsItems.list',
    'client.distanceMatrix.json.create',
    'client.distanceMatrix.json.retrieve',
    'client.autocomplete.suggest',
    'client.navigation.retrieveRoute',
    'client.map.createSegment',
    'client.autosuggest.suggest',
    'client.directions.computeRoute',
    'client.batch.create',
    'client.batch.retrieve',
    'client.multigeocode.search',
    'client.multigeocode.place.create',
    'client.multigeocode.place.delete',
    'client.multigeocode.place.retrieve',
    'client.multigeocode.place.update',
    'client.revgeocode.retrieve',
    'client.routeReport.create',
    'client.snapToRoads.snap',
    'client.postalcode.retrieveCoordinates',
    'client.lookup.byID',
    'client.areas.list',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new NextbillionSDK({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };

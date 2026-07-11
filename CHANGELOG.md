# Changelog

## 0.10.1 (2026-07-11)

Full Changelog: [v0.10.0...v0.10.1](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.10.0...v0.10.1)

### Features

* **mcp:** add code execution tool ([e4a56de](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e4a56dea4fba9ff5122fdeeeb0a5b3c17ed13f0a))
* **mcp:** add docs search tool ([503a867](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/503a86771892cb34daac41dfa0514d7774e10931))
* **mcp:** add option for including docs tools ([d9cdb55](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d9cdb553a7e138e06bee11d69ce27f156d9ab4df))
* **mcp:** add option to infer mcp client ([2f09f50](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2f09f50d2dfb3dc4d33cb744533c31cb9281775a))
* **mcp:** add unix socket option for remote MCP ([b493336](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b49333613719f1ed72fda780df4f455fe657e8fc))
* **mcp:** allow setting logging level ([1060cb2](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1060cb29a5024cbc0f5daefd63944882abd1e90a))
* **mcp:** enable experimental docs search tool ([fb2bd25](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/fb2bd25cf7993c0b161951349ed3aad66a6e5d72))
* **mcp:** expose client options in `streamableHTTPApp` ([5d124ad](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/5d124ad219e046dbe7587db46b60255679b7cf95))
* **mcp:** parse query string as mcp client options in mcp server ([2dcb4c5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2dcb4c5345034607f9a70ff3e84ce7d26593e38f))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([870bf2a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/870bf2a1e9732ad522b6b29b309ebf72a39bc9d0))
* **client:** emit method aliases after the methods they reference ([f1a2bc8](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f1a2bc8e7b209da2865a0f0a2811b3cf79103e0c))
* **client:** preserve URL params already embedded in path ([1d5a058](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1d5a0589aaeea9e25ba9e13c7a34eee0a62f7073))
* **client:** send content-type header for requests with an omitted optional body ([3c70051](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/3c700510f7e4da24fdc4f4a85346f460bb48c36f))
* coerce nullable values to undefined ([d58c1b5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d58c1b5a1bdf4b71b96e551c61bf21533cc481e5))
* **mcp:** fix cli argument parsing logic ([25cd5a1](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/25cd5a15277ef15502f3a23d289221db46da4aed))
* **mcp:** fix query options parsing ([9061ebb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9061ebb2d4d42c2cdb8d478e2bc32df32d6bb695))
* **mcp:** fix uploading dxt release assets ([fe12009](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/fe120096bef59c474ce8e2edd6ffff30dba89ada))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([5157d0b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/5157d0b0bdd141ee627158105e826a75d588793f))
* **mcp:** resolve a linting issue in server code ([b65f72a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b65f72af6bc3600ad66fead991ab4edacb219d42))
* treat text/plan with format: binary as raw upload ([a8d87ff](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a8d87ff53cc1589af572100d6c1c705ebdd6e620))


### Performance Improvements

* faster formatting ([0940706](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/0940706cf87590f2ae550574089a68b038dd0bce))


### Chores

* add package to package.json ([c6d0757](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c6d0757840d102d4375bcb2e7c2455e3a8c46ba2))
* **ci:** skip uploading artifacts on stainless-internal branches ([836870a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/836870a934ec4925f4cb5cd36e92cd29f45002e1))
* **client:** qualify global Blob ([ea0fb66](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ea0fb6627ea044e2b8198301df9ddbf45ab1f504))
* **codegen:** internal codegen update ([30173f4](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/30173f4fa78103deff9acf8d1f234f8137c93080))
* **deps:** update dependency @types/node to v20.17.58 ([ed33899](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ed33899b368f7e08df80e8e4802017a55a57706c))
* do not install brew dependencies in ./scripts/bootstrap by default ([3e44c53](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/3e44c53c8960afa44ed3e7a4d7ecc4999f70ef86))
* **internal:** codegen related update ([79ff8fb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/79ff8fb9cab268cae1f2924bad87fb5d9346d41c))
* **internal:** codegen related update ([2545537](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/254553729373f2cd8702e1e48eb3da9998831d9a))
* **internal:** codegen related update ([4d498bc](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/4d498bc1c2120a806ac643e6b2e06183adba1053))
* **internal:** codegen related update ([525b010](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/525b0107d5238e8e8ab0c04dc15f3ec9979b2b77))
* **internal:** codegen related update ([ef79046](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ef790463e1817035c8a098fd49f2fc895313b2f1))
* **internal:** codegen related update ([d2163a5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d2163a545e2f6472ee3ddd686d792f94d284d2f4))
* **internal:** codegen related update ([1caf3e6](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1caf3e601852d38aa6b6ce2a95b1f65e2772eb18))
* **internal:** codegen related update ([5c96581](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/5c965813fa36c315be825e007f0eaba08e954154))
* **internal:** codegen related update ([9d76c01](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9d76c01a6eae86259678fc53e02b06a56157ea99))
* **internal:** codegen related update ([35994ed](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/35994ed43c5fb73158e32a770198e6352192f2a1))
* **internal:** codegen related update ([8275202](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/827520251f6e0edf843de0c202a13a886ad935d7))
* **internal:** codegen related update ([9024cb5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9024cb5a0a241e3f771514889a9b4210df8847c5))
* **internal:** codegen related update ([fb886d2](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/fb886d2c7c1df4c9a8c147459528c5b428c852af))
* **internal:** codegen related update ([b7bf1cf](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b7bf1cf3016e3e00477dcf5bbeb9c308cacfb3a5))
* **internal:** codegen related update ([d352c51](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d352c516d4a40aeb625bae608c6e077747d557c8))
* **internal:** codegen related update ([7dddccf](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/7dddccf6d57455c2641a7acfc82de2288ec0b626))
* **internal:** codegen related update ([b3c8f8f](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b3c8f8f197befcd43c699891fbd87da01d4f13ee))
* **internal:** codegen related update ([c279d25](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c279d25cb1cda075f6d6fff364aac55074645164))
* **internal:** codegen related update ([81d828f](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/81d828f3c95de494d104205b330586a7a5a41b7e))
* **internal:** codegen related update ([093b0ea](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/093b0ea28b4dc04cf3fa23b7d4957a44610692e0))
* **internal:** codegen related update ([8c9c7e0](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8c9c7e05d1a9b12244f952531ccbe9d06308eef4))
* **internal:** codegen related update ([8fe7ced](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8fe7ced1294ec88163adb912fa14b0b4a51f7b3c))
* **internal:** codegen related update ([3be7214](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/3be72149c8d7348f914651d408ec52a3417c32b5))
* **internal:** codegen related update ([475b962](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/475b962817baa4412ad398b04a083bbaa59cf6e5))
* **internal:** codegen related update ([d866ebb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d866ebbbf0c5ce06510a068532cf1269f6b93c2f))
* **internal:** codegen related update ([9e66ae4](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9e66ae4c37ba70d31fd020433c7aa3faa14a718b))
* **internal:** codegen related update ([70a544e](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/70a544e045bfa1459c7f879a92ba7b0c4ee216ea))
* **internal:** codegen related update ([f04e530](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f04e530337db7bb5e7436d77f053996ef034fa88))
* **internal:** codegen related update ([40630bb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/40630bbf4588e9ff8466518c967ab103fab8073b))
* **internal:** codegen related update ([d6a22de](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d6a22de6baf46f59c14e9c5df004f3c0d6b9f18b))
* **internal:** codegen related update ([e745d02](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e745d02144a87e72b50942713d45f2d8327c888f))
* **internal:** codegen related update ([c4faf96](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c4faf96f9a0254317e13f5ac33a05d1570dd51b0))
* **internal:** codegen related update ([c166cc8](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c166cc8e718f232f567d543b7461a4ca71d7cf81))
* **internal:** codegen related update ([f8878c9](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f8878c905b7b5f406b0eb42e3b1468de9dc41886))
* **internal:** codegen related update ([8ae156a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8ae156a5f2cb44c8c4ea0cf7d7707c63786f8abe))
* **internal:** codegen related update ([8dfaf5e](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8dfaf5e860a7aa3b72b698cabd8035031e7d5f14))
* **internal:** codegen related update ([122d9c0](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/122d9c085e1b72adf236f97a95dd45730a0e1991))
* **internal:** codegen related update ([a33aad6](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a33aad66ff6595281127e9aa74fe24aef89c70c3))
* **internal:** codegen related update ([a5958d1](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a5958d15b1f38cad25e1aa9edec3028f7589cf87))
* **internal:** codegen related update ([e89193d](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e89193d9d53a9048510fa744930f4a249d72d1c4))
* **internal:** codegen related update ([a6b99c0](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a6b99c0d74d92273f92d985386a83fd312e29ae5))
* **internal:** codegen related update ([90d193a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/90d193a9cdd0de5b5a8892995fb620fde3858466))
* **internal:** codegen related update ([a6f0b39](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a6f0b3964b6056c913a869a67d4bfe54434bdcf8))
* **internal:** codegen related update ([471c34b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/471c34be7cb1e04b37a5acf0d2a7c1eacfbde38a))
* **internal:** codegen related update ([a1e1513](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a1e15138051edc33c426721826e642012a03a749))
* **internal:** codegen related update ([7b108db](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/7b108db038bbe98817f017b43eae32b9a238cf41))
* **internal:** codegen related update ([75ff146](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/75ff146dc7fd7e40f5b606e90f735218bbe3d01d))
* **internal:** codegen related update ([ccc4de9](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ccc4de94ba72f2a616b67fd8284c7463e512c220))
* **internal:** codegen related update ([47bb1b3](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/47bb1b367161eb8a8addebbfef37c10cb30c7c1b))
* **internal:** codegen related update ([171d466](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/171d46638a301e2e12e7dc9a5042d0a263267969))
* **internal:** codegen related update ([4720b43](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/4720b43445f9a4ecab8c0a8d5ba43a3ae51104b7))
* **internal:** codegen related update ([11f6a8b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/11f6a8bc71033e62a38f0e27cb51061146b1860e))
* **internal:** codegen related update ([e9e71a4](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e9e71a499a4e5d86c563fd628ac47fbcf3960d44))
* **internal:** codegen related update ([a41f131](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a41f131929c301dad121268d64a674d06dbc76ef))
* **internal:** codegen related update ([f618315](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f618315c8bf6ba2c28804efe8654d523cb0fd492))
* **internal:** codegen related update ([7c95935](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/7c95935f5a6774c4023d2450b401da47db6691c5))
* **internal:** codegen related update ([e9ccec8](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e9ccec8e4c15aa22e020eefebd26c1d61f7de3ae))
* **internal:** codegen related update ([883bc09](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/883bc099fdf4c7c0c09748dd7b65928c7d33e0f4))
* **internal:** codegen related update ([3fbff20](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/3fbff20b8db4e6988f30d0a4b441dc9296e36422))
* **internal:** codegen related update ([b2e7993](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b2e7993040d9d4552c4ce8ac36a5619ff3ea370b))
* **internal:** codegen related update ([8be8dad](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8be8dadcca8f1e706847af818b048305874dceaa))
* **internal:** codegen related update ([17d1aa9](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/17d1aa99491d9ca0b0466e40748ded1d4e0d873b))
* **internal:** codegen related update ([c1801b1](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c1801b17a2baf91543dddfbe41502ab5ac818484))
* **internal:** codegen related update ([b922cb1](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b922cb147b8ee3363a4e4d1654db7da5a4c29bbb))
* **internal:** codegen related update ([a6671b0](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a6671b0071d60a9ea7fc07ad457ad83d02b81018))
* **internal:** codegen related update ([e01475e](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e01475e5f06d3f65e437ab4e80e023a4b9cf04cb))
* **internal:** codegen related update ([ebb8f56](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ebb8f5679859834bf0cb767be32b821cf6a555a0))
* **internal:** codegen related update ([d87e06e](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d87e06edbcad0cd45bac92801878e682d8d33559))
* **internal:** codegen related update ([fa98e83](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/fa98e838ab1525fee67620b7286a81add29ca301))
* **internal:** codegen related update ([2dae0ec](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2dae0ec1ea6d53622604fb22099fab8efc6bc530))
* **internal:** codegen related update ([2e8542d](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2e8542d307c62544c8e45032956e922e23496a33))
* **internal:** codegen related update ([d7079fc](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d7079fc93a8cd1ba078c314080da843484452b4f))
* **internal:** codegen related update ([2edb66b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2edb66b473ccf8ff09f4a54dd9cbce5cfb933b7e))
* **internal:** codegen related update ([18aab1c](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/18aab1c5e333f6403b08af29573ff9b51531d2b4))
* **internal:** codegen related update ([2891572](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2891572c4b8f3d044cdacae283a78eaeb0d15c97))
* **internal:** codegen related update ([72daa3b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/72daa3b6daafc84c8fd1cec29f7d4637145fa7a4))
* **internal:** codegen related update ([e889bae](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e889baed11e68e3c9e1fd1f09d01c045088ebdda))
* **internal:** codegen related update ([1d9f76a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1d9f76a0db172407b2f975a2d90d92c33a5c4cf6))
* **internal:** codegen related update ([b2acf6d](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b2acf6d52bae3df179c1bcc5616a25a7b82ebd9f))
* **internal:** codegen related update ([ec618c8](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ec618c8b1a989ef1fad6071493ef906e8dab30c2))
* **internal:** codegen related update ([d47e729](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/d47e729c9db497e1356c3c3e4f99f0aa6e05bf0a))
* **internal:** fix incremental formatting in some cases ([33c0f66](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/33c0f66731faab87f8b5a0e1d12418d2d2126d63))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([139c6c3](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/139c6c322d8b93e89b93586f8c5cc644fec10141))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b51a592](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b51a59208c14b99f27b76189d3641ab76d4dc397))
* **internal:** formatting change ([354c449](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/354c449be153d3f4940df05be66362b669edc4e8))
* **internal:** gitignore .mcpb files ([3d77d01](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/3d77d0137b27ee34a134c9f04b5ab5c59705a8ce))
* **internal:** ignore .eslintcache ([f91396e](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f91396efbec8a136c0cdef4511a2128024d7d6ad))
* **internal:** make mcp-server publishing public by defaut ([f6a75c1](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f6a75c1d5854dc502de57a6afe31182781e876ed))
* **internal:** move publish config ([cee091a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/cee091a9acc761b7e2cbd1c2f6d11045a899521a))
* **internal:** refactor array check ([b454b5a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b454b5a7b2f8d5c278d2e6345e01dcc7408464ae))
* **internal:** remove .eslintcache ([9ad363b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9ad363baaa1f074c5385d2e8004c57c448fd5645))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([f4f38c1](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f4f38c12150d96b940b8864fbe514065e30668c6))
* **internal:** update comment in script ([ee90f42](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ee90f42a519607b043665daf70588d59005e7acb))
* **internal:** update global Error reference ([eb327c9](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/eb327c9eb4747202ac083321062f5e7785c31e68))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([e829285](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/e8292850354b3b95de2854f60f337953967f476a))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([601fed3](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/601fed36e94aee82668a5760aad33c430d161389))
* **mcp-server:** improve instructions ([da40c88](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/da40c8863493e9b8347be2a30f8a7c6d6da309a2))
* **mcp:** add cors to oauth metadata route ([00832b2](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/00832b2e9f6397f64f7b5b9cdb00a69b882b5b23))
* **mcp:** allow pointing `docs_search` tool at other URLs ([8ee83d5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8ee83d51aa2769396b4557123951ee2c163b2716))
* **mcp:** document remote server in README.md ([3cb514a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/3cb514a788a6e16e55f1ac9ce42442b4cda2e502))
* **mcp:** minor cleanup of types and package.json ([bdc670f](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/bdc670fe5486aa7eedd15f62973c870d5bae58a0))
* **mcp:** refactor streamable http transport ([852d01e](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/852d01e9cbaec5c9af128bb22c1bc4930eb3f1d1))
* **mcp:** rename dxt to mcpb ([298a1e5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/298a1e579e716444933e2bf43257aea63f46bdd6))
* **mcp:** update package.json ([857529c](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/857529c9d60f684513e093a8707a8b8d3cb8bcdf))
* **mcp:** update README ([5a453d0](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/5a453d0239b4657c96f68be6a15672836b281c7e))
* **mcp:** update types ([6c06bcb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/6c06bcba12471565a6a330d8fde807ffbed897da))
* update @stainless-api/prism-cli to v5.15.0 ([a550f29](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/a550f295b52096f74b120a7cc5f660c5087909b9))
* update CI script ([987d1a2](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/987d1a270abe3f04e35ae12af9fcc36d6b09a364))
* update lockfile ([556b5de](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/556b5de17d2a44eed8cbc38a5eb60b2d205f3969))


### Documentation

* update http mcp docs ([0301aba](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/0301aba1ee28466f138b7d8e97631eab2f325a9c))
* update logging docs ([b6ecf07](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/b6ecf079073caf44ab767548d6d342bfb6e2f5e8))

## 0.10.0 (2025-08-06)

Full Changelog: [v0.9.1...v0.10.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.9.1...v0.10.0)

### Features

* **mcp:** add logging when environment variable is set ([037c104](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/037c10400ec10de5796b05c660004c63dfadc11d))
* **mcp:** remote server with passthru auth ([0ff20f7](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/0ff20f752a999ff51c8aeb6343eb418883f02714))


### Chores

* **api:** dedupe location types ([7c7b8d4](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/7c7b8d4fdc68999c4d255f74d2a34af149edaa3a))

## 0.9.1 (2025-08-01)

Full Changelog: [v0.9.0...v0.9.1](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.9.0...v0.9.1)

### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([59ef1dd](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/59ef1dd3a076c03f859ad9bd7365461e5c33ae92))
* **mcp:** reverse validJson capability option and limit scope ([34619bc](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/34619bcb7120e98bde2c1b275fadc5339bb5e8af))

## 0.9.0 (2025-07-31)

Full Changelog: [v0.8.3...v0.9.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.8.3...v0.9.0)

### Features

* **api:** manual updates ([9427629](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/94276296934301b17c2d014bb6c3d297c3a9fa60))

## 0.8.3 (2025-07-31)

Full Changelog: [v0.8.2...v0.8.3](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.8.2...v0.8.3)

### Bug Fixes

* List&lt;List&gt; problem in java by naming dto.Event ([1d8b217](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1d8b21703c747cc0e810534bda726474eef1bf9f))

## 0.8.2 (2025-07-31)

Full Changelog: [v0.8.1...v0.8.2](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.8.1...v0.8.2)

## 0.8.1 (2025-07-31)

Full Changelog: [v0.8.0...v0.8.1](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.8.0...v0.8.1)

### Bug Fixes

* **mcp:** fix tool description of jq_filter ([0e09070](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/0e090707e06aa9097d80e638b63193dfd4af8cf0))

## 0.8.0 (2025-07-30)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.7.0...v0.8.0)

### Features

* publish to ruby gem and align namings ([75041fd](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/75041fd81422ded16937eeaf21b588d636f4d6ba))

## 0.7.0 (2025-07-30)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.6.0...v0.7.0)

### Features

* **api:** manual updates ([89a229b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/89a229be1f4919cfa0880ce797090828bfc86682))
* Fix for ruby ([70a9085](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/70a90856f9a4e8e27275f55783574cee67006f64))
* re-order endpoints ([c5ffcad](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c5ffcadd88d8c01c2b9d4c4d958aaa98f740ab42))


### Chores

* **internal:** remove redundant imports config ([ee4fba9](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ee4fba92528ca05ad240910ab2f04f6ae5838576))

## 0.6.0 (2025-07-28)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.5.0...v0.6.0)

### Features

* **api:** update via SDK Studio ([8e6bf71](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8e6bf71f2a8092af615b440e55d092ce187c9c68))

## 0.5.0 (2025-07-28)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.4.0...v0.5.0)

### Features

* **api:** update via SDK Studio ([4d195be](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/4d195be26cdd13c02786c7c67c9be5076c558873))

## 0.4.0 (2025-07-28)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.3.0...v0.4.0)

### Features

* **api:** update via SDK Studio ([cb38441](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/cb384412a9efb8cda2f0da317ccfb3a48e5b727c))


### Chores

* configure new SDK language ([bfb68f5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/bfb68f502476acce010db8908c7299c994d0d479))

## 0.3.0 (2025-07-28)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.2.0...v0.3.0)

### Features

* **api:** update via SDK Studio ([8016cd3](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/8016cd36fe596ac3b87a020394c63b5b29a1d143))
* **api:** update via SDK Studio ([dafe6e5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/dafe6e513411e7655c47366cd9fb9253e2fc91ab))
* **api:** update via SDK Studio ([1b76793](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1b76793586676fa43e2dc2083d4541b5563d9b31))


### Chores

* update SDK settings ([36dde3c](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/36dde3c18b530118fdd7e15793993ec0777728ba))

## 0.2.0 (2025-07-28)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.1.0...v0.2.0)

### Features

* **api:** update via SDK Studio ([234fd81](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/234fd81ac59acba7dbb5f48581d6451cf43a37e4))
* **api:** update via SDK Studio ([9c424ae](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9c424aec96691c04e06f59b410365581b02c8fe2))
* **api:** update via SDK Studio ([85831dc](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/85831dcef0ef3bd776b13f3de0673a9832f95f66))


### Chores

* update SDK settings ([c5aff57](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/c5aff578335d87d0f895af18b262852ebe863e57))

## 0.1.0 (2025-07-28)

Full Changelog: [v0.0.1-alpha.0...v0.1.0](https://github.com/nextbillion-ai/nextbillion-sdk-node/compare/v0.0.1-alpha.0...v0.1.0)

### Features

* **api:** update via SDK Studio ([4207fa8](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/4207fa8eb4e9392e9db3ab00b534b2c453d02c79))
* **api:** update via SDK Studio ([427189b](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/427189b96f911964ae2a3fea9e3bd9cdaf93f7d2))
* **api:** update via SDK Studio ([7e37f7c](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/7e37f7c65646d07ee2d523e0996fccc8e3de038f))
* **api:** update via SDK Studio ([68a1c65](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/68a1c659d2f75c61fa591ad95c5aaa2b2628730c))
* **api:** update via SDK Studio ([ca6e674](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ca6e6743ed163fe4d5e078fce7c0e0f67751a63a))
* **api:** update via SDK Studio ([9a07296](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/9a07296f1b30e63ed3b78b8df9e34d28b1989cc7))
* **api:** update via SDK Studio ([81f58eb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/81f58eb031d0abea010d92c6f780e7757936171d))
* **api:** update via SDK Studio ([1f49e8a](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1f49e8a4dbe5d48755d26c7618832a8ac35770c5))
* **api:** update via SDK Studio ([f00b0e5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/f00b0e51643051dcc84a5da1ba34e9206e5267b3))
* **api:** update via SDK Studio ([bc12140](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/bc12140c01bd747ebddafecd217e19f7535923dd))
* **api:** update via SDK Studio ([21468c9](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/21468c925803af725f1442b81ccf940128998866))
* **api:** update via SDK Studio ([682d5d3](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/682d5d3fe430b9d32ccb38a718efe28556a89bd3))
* **api:** update via SDK Studio ([2a60db8](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2a60db873a682ed724408ac6f07de36f3e3a14c9))
* **api:** update via SDK Studio ([97610c2](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/97610c2ba9e4fc1a7570dce7f0df6afb3104d8a2))
* **api:** update via SDK Studio ([7949f0f](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/7949f0f21600bb05066076af47c96cb7ce1a381a))
* **api:** update via SDK Studio ([0d03523](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/0d03523d102ae1b6321bc7fd084af457ca657ddc))


### Chores

* configure new SDK language ([2314415](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/2314415b93b275e1effc02af61613e6cb2d92353))
* configure new SDK language ([98c21b5](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/98c21b52d6d4ec210718d4c9b07e6065bc0d8bff))
* update SDK settings ([1b645cb](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1b645cbc06b7e62f7c664ea3012a45721b71ecf8))
* update SDK settings ([ec14d80](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/ec14d80efa17b4686b35b69077196f2906a4167d))
* update SDK settings ([1eea362](https://github.com/nextbillion-ai/nextbillion-sdk-node/commit/1eea362c011e4aa6a62a5204b707d95e0e8b2c09))

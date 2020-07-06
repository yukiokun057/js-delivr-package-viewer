<template>
  <WidgetWrapper>
    <v-data-iterator
      :items="items"
      :page="page"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <!-- items -->
      <template v-slot:default="props">
        <v-list three-line>
          <template v-for="(item, index) in props.items">
            <ItemPackage
              :item="item.package"
              :key="item.package.name"
              @item-clicked="packageClicked"
            />
            <v-divider v-if="index + 1 < props.items.length" :key="index" />
          </template>
        </v-list>
      </template>
      <template v-slot:footer>
        <v-row no-gutters class="footer-container" align="center" justify="center">
          <span>Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text class="ml-2" v-bind="attrs" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4">Page {{ page }} of {{ numberOfPages }}</span>
          <v-btn fab dark class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/common/widget.vue';
import ItemPackage from './item-package.vue';

export default {
  components: {
    WidgetWrapper,
    ItemPackage,
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
      itemsPerPageArray: [5, 10, 25],
      items: [
        {
          package: {
            name: 'yargs',
            license: 'MIT',
            version: '6.6.0',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            owner: {
              name: 'thejameskyle',
              avatar: 'https://github.com/yargs.png?s=20',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
        {
          package: {
            name: 'yargs1',
            version: '6.6.0',
            license: 'MIT',
            description:
              'yargs the modern, pirate-themed, successor to optimist.',
            keywords: [
              'argument',
              'args',
              'option',
              'parser',
              'parsing',
              'cli',
              'command',
            ],
            date: '2016-12-30T16:53:16.023Z',
            links: {
              npm: 'https://www.npmjs.com/package/yargs',
              homepage: 'http://yargs.js.org/',
              repository: 'https://github.com/yargs/yargs',
              bugs: 'https://github.com/yargs/yargs/issues',
            },
            publisher: {
              username: 'bcoe',
              email: 'ben@npmjs.com',
            },
            owner: {
              name: 'thejameskyle',
              link: 'https://www.npmjs.com/~thejameskyle',
            },
            maintainers: [
              {
                username: 'bcoe',
                email: 'ben@npmjs.com',
              },
              {
                username: 'chevex',
                email: 'alex.ford@codetunnel.com',
              },
              {
                username: 'nexdrew',
                email: 'andrew@npmjs.com',
              },
              {
                username: 'nylen',
                email: 'jnylen@gmail.com',
              },
            ],
          },
          score: {
            final: 0.9237841281241451,
            detail: {
              quality: 0.9270640902288084,
              popularity: 0.8484861649808381,
              maintenance: 0.9962706951777409,
            },
          },
          searchScore: 100000.914,
        },
      ],
    };
  },
  methods: {
    packageClicked(item) {
      // TODO: open modal with details
      console.log(`widget-packages: package clicked: ${item.name}`);
      this.$emit('item-clicked', item);
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  margin-top: 8px;
  text-align: center;
}
</style>

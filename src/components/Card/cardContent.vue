<template>
  <q-page>
    <!-- <h5 class="text-blue-5 q-mb-sm">Standard</h5> -->
    <!-- first card for Basic cards -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic cards</div>
         
        </q-card-section>

        <q-card-section>
          <!-- code for Basic cards-->

          <div class="row items-start q-gutter-md">
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="
                background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
              "
            >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-separator dark inset />

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
          <!-- End code for Basic cards -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Basic cards-->

    <!-- <h5 class="text-blue-5 q-mb-sm">Custom colors</h5> -->

    <!-- Second card forCards with actions -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Cards with actions</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code forCards with actions -->
          <div class="row items-start q-gutter-md">
            <q-card class="my-card bg-secondary text-white">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section>
                {{ lorem }}
              </q-card-section>

              <q-separator dark />

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-separator />

              <q-card-actions vertical>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card bg-purple text-white">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>

            <q-card flat bordered class="my-card bg-grey-1">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h6">Our Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="grey-7" round flat icon="more_vert">
                      <q-menu cover auto-close>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>Remove Card</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Send Feedback</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Share</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>

              <q-card-section>
                {{ lorem }}
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!-- End Code forCards with actions-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card forCards with actions -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for Aligning actions -->
    <h5 class="q-pa-md" style="padding-left: 0px !important">
      Aligning actions
    </h5>
    <div class="row items-start q-gutter-md">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card>
        <q-card-section class="bg-purple text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card>
        <q-card-section class="bg-teal text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions vertical align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card>
        <q-card-section class="bg-grey-8 text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <!-- End third card for Aligning actions  -->

    <!-- <h5 class="text-blue-5 q-mb-sm">Cards with media content</h5> -->
    <!-- fourth card for Cards with media content -->
    <div class="row items-start q-gutter-md q-mt-md">
      <q-card class="my-card1">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card1">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Title</div>
        </q-img>
      </q-card>

      <q-card class="my-card1">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
          <div class="absolute-bottom text-h6">Title</div>
        </q-img>

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card1">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="text-subtitle2 absolute-top text-center">Title</div>
        </q-img>
      </q-card>

      <q-card class="my-card1">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="text-h5 absolute-bottom text-right">Title</div>
        </q-img>
      </q-card>

      <q-card class="my-card1">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Title</q-item-label>
            <q-item-label caption>Subhead</q-item-label>
          </q-item-section>
        </q-item>

        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-card>

      <q-card class="my-card1">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <!-- End fourth card for Cards with media content -->

    <h5 class="text-blue-5 q-mb-sm q-mt-sm">Card with video</h5>

    <!-- Five card for Custom content -->
    <div class="q-pt-md">
      <q-card class="my-card2">
        <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>
    <!-- End Five card for Custom content -->

    <!-- six card for Card with parallax -->
    <h5 class="text-blue-5 q-mb-sm q-mt-sm">Card with parallax</h5>

    <div class="q-pt-md">
      <q-card class="my-card3">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </q-card>
    </div>
    <!-- End six card for Card with parallax-->

    <h5 class="q-pa-md">Horizontal</h5>
    <p class="q-pa-md">
      On the examples below, notice the QCardSection with horizontal prop on it
      that wraps other QCardSections. Also note that you can directly use col-*
      classes on children of horizontal QCardSection in order to control the
      size.
    </p>
    <p class="q-pa-md">
      It’s recommended that you use QImg component instead of native
      <img /> when dealing with horizontal QCardSections.
    </p>
    <!-- seven card for Button design -->
    <div class="row items-start q-mt-md">
      <q-card class="text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Button design</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Button design-->
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card4" flat bordered>
              <q-card-section horizontal>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>

                <q-img
                  class="col-5"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card>

            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>

                <q-separator vertical />

                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card-section>
            </q-card>

            <q-card class="my-card4" flat bordered>
              <q-card-section horizontal>
                <q-img
                  class="col"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />

                <q-card-actions vertical class="justify-around q-px-md">
                  <q-btn flat round color="red" icon="favorite" />
                  <q-btn flat round color="accent" icon="bookmark" />
                  <q-btn flat round color="primary" icon="share" />
                </q-card-actions>
              </q-card-section>
            </q-card>
          </div>
          <!-- End Code for Button design -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End seven card forBasic horizontal -->

    <!-- Eight card for More involved examplesg -->
    <div class="row items-start q-mt-md">
      <q-card class="text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">More involved examples</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for More involved examples-->
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card4" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Overline</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                  <div class="text-caption text-grey">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                  />
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat round icon="event" />
                <q-btn flat> 7:30PM </q-btn>
                <q-btn flat color="primary"> Reserve </q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card4" flat bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Title</q-item-label>
                  <q-item-label caption> Subhead </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="col-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </q-card-section>
              </q-card-section>
            </q-card>

            <q-card class="my-card4">
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />

                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat round icon="event" />
                <q-btn flat> 5:30PM </q-btn>
                <q-btn flat> 7:00PM </q-btn>
                <q-btn flat color="primary"> Reserve </q-btn>
              </q-card-actions>
            </q-card>

            <q-card class="my-card4">
              <q-card-section horizontal>
                <q-img
                  class="col"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />

                <q-card-actions vertical class="justify-around">
                  <q-btn flat round color="red" icon="favorite" />
                  <q-btn flat round color="accent" icon="bookmark" />
                  <q-btn flat round color="primary" icon="share" />
                </q-card-actions>
              </q-card-section>
            </q-card>
          </div>
          <!-- End Code for More involved examples -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eight card for More involved examples--------------- -->

 
    <!-- ---------nine card for Various content------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Various content</div>
         
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Various content------------------>
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card2">
            <img src="https://cdn.quasar.dev/img/parallax2.jpg">

            <q-list>
                <q-item clickable>
                <q-item-section avatar>
                    <q-icon color="primary" name="local_bar" />
                </q-item-section>

                <q-item-section>
                    <q-item-label>Bar XYZ</q-item-label>
                    <q-item-label caption>Have a drink.</q-item-label>
                </q-item-section>
                </q-item>

                <q-item clickable>
                <q-item-section avatar>
                    <q-icon color="red" name="local_gas_station" />
                </q-item-section>

                <q-item-section>
                    <q-item-label>Gas Station</q-item-label>
                    <q-item-label caption>Fill your gas tank.</q-item-label>
                </q-item-section>
                </q-item>

                <q-item clickable>
                <q-item-section avatar>
                    <q-icon color="amber" name="local_movies" />
                </q-item-section>

                <q-item-section>
                    <q-item-label>Cinema XYZ</q-item-label>
                    <q-item-label caption>Watch a movie.</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
            </q-card>

            <q-card class="my-card2">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
            </q-card-actions>
            </q-card>

            <q-card class="my-card2">
            <q-card-section>
                <div class="text-h6 q-mb-xs">Our Changing Planet</div>
                <div class="row no-wrap items-center">
                <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
            </q-card-section>

            <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-card>

            <q-card class="my-card2">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
                <q-btn
                fab
                color="primary"
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                    Cafe Basilico
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                </div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                $・Italian, Cafe
                </div>
                <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
                </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat round icon="event" />
                <q-btn flat color="primary">
                Reserve
                </q-btn>
            </q-card-actions>
            </q-card>
        </div>
          <!-- ---------------End Code for Various content-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Nine card for Table -->

    <!-- <h5 class="q-pa-md">Progress related</h5> -->
    
    <!-- Ten card for  Table -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Table</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for  Table-->
          <div class="q-pa-md">
            <q-card class="my-card3">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-markup-table>
                <thead>
                <tr>
                    <th class="text-left">Dessert (100g serving)</th>
                    <th class="text-right">Calories</th>
                    <th class="text-right">Fat (g)</th>
                    <th class="text-right">Carbs (g)</th>
                    <th class="text-right">Protein (g)</th>
                    <th class="text-right">Sodium (mg)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="text-left">Frozen Yogurt</td>
                    <td class="text-right">159</td>
                    <td class="text-right">6</td>
                    <td class="text-right">24</td>
                    <td class="text-right">4</td>
                    <td class="text-right">87</td>
                </tr>
                <tr>
                    <td class="text-left">Ice cream sandwich</td>
                    <td class="text-right">237</td>
                    <td class="text-right">9</td>
                    <td class="text-right">37</td>
                    <td class="text-right">4.3</td>
                    <td class="text-right">129</td>
                </tr>
                <tr>
                    <td class="text-left">Eclair</td>
                    <td class="text-right">262</td>
                    <td class="text-right">16</td>
                    <td class="text-right">23</td>
                    <td class="text-right">6</td>
                    <td class="text-right">337</td>
                </tr>
                <tr>
                    <td class="text-left">Cupcake</td>
                    <td class="text-right">305</td>
                    <td class="text-right">3.7</td>
                    <td class="text-right">67</td>
                    <td class="text-right">4.3</td>
                    <td class="text-right">413</td>
                </tr>
                <tr>
                    <td class="text-left">Gingerbread</td>
                    <td class="text-right">356</td>
                    <td class="text-right">16</td>
                    <td class="text-right">49</td>
                    <td class="text-right">3.9</td>
                    <td class="text-right">327</td>
                </tr>
                </tbody>
            </q-markup-table>
            </q-card>
        </div>
          <!-- End Code for  Table -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Ten card for Table -->

    <!-- <h5 class="q-pa-md">Progress related</h5> -->
  
    <!-- Eleven card for  Tabs -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Tabs</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for  Tabs-->
         <div class="q-pa-md">
            <q-card class="my-card1">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-tabs v-model="tab" class="text-teal">
                <q-tab label="Tab one" name="one" />
                <q-tab label="Tab two" name="two" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="one">
                The QCard component is a great way to display important pieces of grouped content.
                </q-tab-panel>

                <q-tab-panel name="two">
                With so much content to display at once, and often so little screen real-estate,
                Cards have fast become the design pattern of choice for many companies, including
                the likes of Google and Twitter.
                </q-tab-panel>
            </q-tab-panels>
            </q-card>
        </div>
          <!-- End Code for  Tabs -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Eleven card for Tabs -->

    <h5 class="q-pa-md">Expandable</h5>
    <p class="q-pa-md">
     On the example below, click on the round button on the bottom right to see the expansion in action.

    </p>
    <!-- twel card for  Expandable -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Expandable</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for  Expandable-->
           <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card4" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
                </q-card-section>
                </div>
            </q-slide-transition>
            </q-card>
        </div>
          <!-- End Code for  Expandable -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End twel card for Expandable -->

    
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
        stars: 4,
        tab: 'one',
         expanded: false,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

.my-card1 {
  width: 100%;
  max-width: 250px;
}
.my-card2 {
  width: 100%;
  max-width: 300px;
}
.my-card3 {
  width: 100%;
  max-width: 500px;
}
.my-card4 {
  width: 100%;
  max-width: 350px;
}
</style>
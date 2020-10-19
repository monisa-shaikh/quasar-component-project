<template>
  <q-page>
 

   <!-- -----------------------------------first card Row--------------------------------------->

      <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">
        
             <!-- first card for Design Overview -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Design Overview</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Design Overview--------->
                        <div class="" style="max-width: 300px">
                            <div class="q-gutter-md">
                            <q-select v-model="designoverviewmodel" :options="options" label="Standard" />

                            <q-select filled v-model="designoverviewmodel" :options="options" label="Filled" />

                            <q-select outlined v-model="designoverviewmodel" :options="options" label="Outlined" />

                            <q-select standout v-model="designoverviewmodel" :options="options" label="Standout" />

                            <q-select standout="bg-teal text-white" v-model="designoverviewmodel" :options="options" label="Custom standout" />

                            <q-select borderless v-model="designoverviewmodel" :options="options" label="Borderless" />

                            <q-select rounded filled v-model="designoverviewmodel" :options="options" label="Rounded filled" />

                            <q-select rounded outlined v-model="designoverviewmodel" :options="options" label="Rounded outlined" />

                            <q-select rounded standout v-model="designoverviewmodel" :options="options" label="Rounded standout" />

                            <q-select square filled v-model="designoverviewmodel" :options="options" label="Square filled" />

                            <q-select square outlined v-model="designoverviewmodel" :options="options" label="Square outlined" />

                            <q-select square standout v-model="designoverviewmodel" :options="options" label="Square standout" />
                            </div>
                        </div>
                    <!--=====End code for Design Overview------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
                <!-- End first card for Design Overview-->

                 <!-- Second card for Decorators-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Decorators</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Decorators-->
                        <div class="">
                        <div class="q-pb-lg">
                        <q-toggle v-model="dense" label="Dense QSelect" />
                        <q-toggle v-model="denseOpts" label="Dense options" />
                        </div>

                        <div class="q-gutter-md" style="max-width: 300px">
                        <q-select filled v-model="Decoratorsmodel" :options="options" label="Label (stacked)" stack-label :dense="dense" :options-dense="denseOpts" />

                        <q-select outlined v-model="Decoratorsmodel" :options="options" :dense="dense" :options-dense="denseOpts">
                            <template v-slot:prepend>
                            <q-icon name="event" />
                            </template>
                        </q-select>

                        <q-select standout v-model="Decoratorsmodel" :options="options" :dense="dense" :options-dense="denseOpts">
                            <template v-slot:append>
                            <q-avatar>
                                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                            </q-avatar>
                            </template>
                        </q-select>

                        <q-select filled bottom-slots v-model="Decoratorsmodel" :options="options" label="Label" counter :dense="dense" :options-dense="denseOpts">
                            <template v-slot:prepend>
                            <q-icon name="place" @click.stop />
                            </template>
                            <template v-slot:append>
                            <q-icon name="close" @click.stop="Decoratorsmodel = ''" class="cursor-pointer" />
                            </template>

                            <template v-slot:hint>
                            Field hint
                            </template>
                        </q-select>

                        <q-select rounded outlined bottom-slots v-model="Decoratorsmodel" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
                            <template v-slot:before>
                            <q-icon name="flight_takeoff" />
                            </template>

                            <template v-slot:append>
                            <q-icon v-if="model !== ''" name="close" @click.stop="Decoratorsmodel = ''" class="cursor-pointer" />
                            <q-icon name="search" @click.stop />
                            </template>

                            <template v-slot:hint>
                            Field hint
                            </template>
                        </q-select>

                        <q-select filled bottom-slots v-model="Decoratorsmodel" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
                            <template v-slot:before>
                            <q-avatar>
                                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                            </q-avatar>
                            </template>

                            <template v-slot:append>
                            <q-icon v-if="Decoratorsmodel !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
                            <q-icon name="schedule" @click.stop />
                            </template>

                            <template v-slot:hint>
                            Field hint
                            </template>

                            <template v-slot:after>
                            <q-btn round dense flat icon="send" />
                            </template>
                        </q-select>

                        <q-select filled bottom-slots v-model="Decoratorsmodel" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
                            <template v-slot:before>
                            <q-icon name="event" />
                            </template>

                            <template v-slot:hint>
                            Field hint
                            </template>

                            <template v-slot:append>
                            <q-btn round dense flat icon="add" @click.stop />
                            </template>
                        </q-select>
                        </div>
                    </div>
                    <!-- End code for Decorators-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Coloring</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Coloring-->
                        <div class="">
                        <div class="q-gutter-y-md column" style="max-width: 300px">
                        <q-select color="purple-12" v-model="Coloringmodel" :options="options" label="Label">
                            <template v-slot:prepend>
                            <q-icon name="event" />
                            </template>
                        </q-select>

                        <q-select color="teal" filled v-model="Coloringmodel" :options="options" label="Label">
                            <template v-slot:prepend>
                            <q-icon name="event" />
                            </template>
                        </q-select>

                        <q-select color="grey-3" outlined label-color="orange" v-model="Coloringmodel" :options="options" label="Label">
                            <template v-slot:append>
                            <q-icon name="event" color="orange" />
                            </template>
                        </q-select>

                        <q-select color="lime-11" bg-color="green" filled v-model="Coloringmodel" :options="options" label="Label">
                            <template v-slot:prepend>
                            <q-icon name="event" />
                            </template>
                        </q-select>

                        <q-select color="teal" outlined v-model="Coloringmodel" :options="options" label="Label">
                            <template v-slot:append>
                            <q-avatar>
                                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                            </q-avatar>
                            </template>
                        </q-select>

                        <q-select clearable color="orange" standout bottom-slots v-model="Coloringmodel" :options="options" label="Label" counter>
                            <template v-slot:prepend>
                            <q-icon name="place" />
                            </template>
                            <template v-slot:append>
                            <q-icon name="favorite" />
                            </template>

                            <template v-slot:hint>
                            Field hint
                            </template>
                        </q-select>
                        </div>
                    </div>
                    <!-- End code for Coloring-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End third card for Coloring-->


          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End first card Row--------------------------------------->  


   
   <!-- -----------------------------------Second card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Clearable------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Clearable</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Clearable-->
                     <div class="">
                        <div class="q-gutter-y-md column" style="max-width: 300px">
                        <q-select clearable filled color="purple-12" v-model="Clearablemodel" :options="options" label="Label" />

                        <!-- equivalent -->
                        <q-select color="orange" filled v-model="Clearablemodel" :options="options" label="Label">
                            <template v-if="model" v-slot:append>
                            <q-icon name="cancel" @click.stop="Clearablemodel = null" class="cursor-pointer" />
                            </template>
                        </q-select>
                        </div>
                    </div>
                    <!-- End code for Clearable-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Clearable---------------->

                
        
        <!-- -------------------Second card for Disable and readonly------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Disable and readonly</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Disable and readonly--------->
                      <div class="">
                        <div class="q-gutter-md row">
                        <q-select
                            disable
                            filled
                            v-model="model1"
                            :options="options"
                            hint="Disable"
                            style="width: 250px"
                        />

                        <q-select
                            readonly
                            filled
                            v-model="model1"
                            :options="options"
                            hint="Readonly"
                            style="width: 250px"
                        />

                        <q-select
                            disable
                            readonly
                            filled
                            v-model="model1"
                            :options="options"
                            hint="Disable and readonly"
                            style="width: 250px"
                        />
                        </div>
                    </div>
                    <!--=====End code for Disable and readonly------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Disable and readonly------------------>

         <!-- -------------------third card for Menu transitions--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Menu transitions</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Menu transitions-->
                         <div class="">
                            <div class="q-gutter-md row">
                            <q-select
                                label="Flip up/down"
                                transition-show="flip-up"
                                transition-hide="flip-down"
                                filled
                                v-model="menutmodel"
                                :options="options"
                                style="width: 250px"
                            />

                            <q-select
                                label="Scale"
                                transition-show="scale"
                                transition-hide="scale"
                                filled
                                v-model="menutmodel"
                                :options="options"
                                style="width: 250px"
                            />

                            <q-select
                                label="Jump up"
                                transition-show="jump-up"
                                transition-hide="jump-up"
                                filled
                                v-model="menutmodel"
                                :options="options"
                                style="width: 250px"
                            />
                            </div>
                        </div>
                    <!-- End code for Menu transitions-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Menu transitions-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Second card Row--------------------------------------->  





   
   <!-- -----------------------------------THIRD card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design </div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Show options in menu</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                            <div class="">
                            <div class="q-gutter-md row">
                            <q-select
                                filled
                                v-model="showmenumodel"
                                label="Simple select"
                                :options="stringOptions"
                                style="width: 250px"
                                behavior="menu"
                            />

                            <q-select
                                filled
                                v-model="showmenumodel"
                                use-input
                                input-debounce="0"
                                label="Simple filter"
                                :options="options"
                                @filter="filterFn"
                                style="width: 250px"
                                behavior="menu"
                            >
                                <template v-slot:no-option>
                                <q-item>
                                    <q-item-section class="text-grey">
                                    No results
                                    </q-item-section>
                                </q-item>
                                </template>
                            </q-select>
                            </div>
                        </div>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->

        

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End THIRD card Row--------------------------------------->  





   
   <!-- -----------------------------------fOURTH card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">The model</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

                   
        
        <!-- -------------------Second card for Single vs multiple selection------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Single vs multiple selection</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Single vs multiple selection--------->
                    <div class="">
                        <div class="q-gutter-md row items-start">
                        <q-select
                            filled
                            v-model="single"
                            :options="options"
                            label="Single"
                            style="width: 250px"
                        />

                        <q-select
                            filled
                            v-model="multiple"
                            multiple
                            :options="options"
                            label="Multiple"
                            style="width: 250px"
                        />
                        </div>
                    </div>
                    <!--=====End code for Single vs multiple selection------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Single vs multiple selection------------------>

         <!-- -------------------third card for Multiple selection, counter and max-values--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Multiple selection, counter and max-values</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Multiple selection, counter and max-values-->
                        <div class="">
                        <div class="q-gutter-md row items-start">
                        <q-select
                            filled
                            v-model="m1"
                            multiple
                            :options="options"
                            counter
                            hint="With counter"
                            style="width: 250px"
                        />

                        <q-select
                            filled
                            v-model="m2"
                            multiple
                            :options="options"
                            counter
                            max-values="2"
                            hint="Max 2 selections"
                            style="width: 250px"
                        />
                        </div>
                    </div>
                    <!-- End code for Multiple selection, counter and max-values-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Multiple selection, counter and max-values-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End fOURTH card Row--------------------------------------->  




   
   <!-- -----------------------------------fIVE card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Options type</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for String options------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">String options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for String options-->
                           <div class="" style="max-width: 300px">
                            <div class="q-gutter-md">
                            <q-badge color="secondary" multi-line>
                                Model: "{{ stringoptionmodel }}"
                            </q-badge>

                            <q-select filled v-model="stringoptionmodel" :options="options" label="Standard" />
                            </div>
                        </div>
                    <!-- End code for SString options-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for String options---------------->

                
        
        <!-- -------------------Second card for Object options------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Object options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Object options--------->
                      <div class="" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-badge color="secondary" multi-line>
                            Model: "{{ objectmodel }}"
                        </q-badge>

                        <q-select filled v-model="objectmodel" :options="options" label="Standard" />
                        </div>
                    </div>
                    <!--=====End code for Object options------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Object options------------------>

    

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End fIVE card Row--------------------------------------->  




   
   <!-- -----------------------------------SIX card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Affecting model</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Emit-value------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Emit-value</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Emit-value-->
                    <div class="" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-badge color="secondary" multi-line>
                            Model: "{{ model }}"
                        </q-badge>

                        <q-select
                            filled
                            v-model="model"
                            :options="options"
                            label="Standard"
                            emit-value
                        />
                        </div>
                    </div>
                    <!-- End code for Emit-value-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Emit-value---------------->

                
        
        <!-- -------------------Second card for Map options------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Map options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Map options--------->
                        <div class="" style="max-width: 300px">
                            <div class="q-gutter-md">
                            <q-badge color="secondary" multi-line>
                                Model: "{{ model }}"
                            </q-badge>

                            <q-select
                                filled
                                v-model="model"
                                :options="options"
                                label="Standard"
                                emit-value
                                map-options
                            />
                            </div>
                        </div>
                    <!--=====End code for Map options------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Map options------------------>

    

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End SIX card Row--------------------------------------->  




   
   <!-- -----------------------------------Eight card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom prop names</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Custom label, value and disable props------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Custom label, value and disable props</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Custom label, value and disable props-->
                    <div class="">
                        <div class="q-gutter-md row items-start">
                        <div class="col-12">
                            <q-badge color="secondary" multi-line>
                            Model: "{{ cmodel }}"
                            </q-badge>
                        </div>

                        <q-select
                            filled
                            v-model="cmodel"
                            :options="options1"
                            option-value="id"
                            option-label="desc"
                            option-disable="inactive"
                            emit-value
                            map-options
                            style="min-width: 250px; max-width: 300px"
                        />

                        <q-select
                            filled
                            v-model="cmodel"
                            :options="options1"
                            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
                            :option-label="opt => Object(opt) === opt && 'desc' in opt ? opt.desc : '- Null -'"
                            :option-disable="opt => Object(opt) === opt ? opt.inactive === true : true"
                            emit-value
                            map-options
                            style="min-width: 250px; max-width: 300px"
                        />
                        </div>
                    </div>
                    <!-- End code for Custom label, value and disable props-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Custom label, value and disable props---------------->  

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Seven card Row--------------------------------------->  



   
   <!-- -----------------------------------Eight card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Customizing menu options</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Options slot------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Options slot</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Options slot-->
                        <div class="" style="max-width: 300px">
                            <div class="q-gutter-md">
                            <q-badge color="secondary" multi-line>
                                Model: "{{ optionslotmodel }}"
                            </q-badge>

                            <q-select
                                filled
                                v-model="optionslotmodel"
                                :options="options2"
                                label="Standard"
                                color="teal"
                                clearable
                                options-selected-class="text-deep-orange"
                            >
                                <template v-slot:option="scope">
                                <q-item
                                    v-bind="scope.itemProps"
                                    v-on="scope.itemEvents"
                                >
                                    <q-item-section avatar>
                                    <q-icon :name="scope.opt.icon" />
                                    </q-item-section>
                                    <q-item-section>
                                    <q-item-label v-html="scope.opt.label" />
                                    <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                                </template>
                            </q-select>
                            </div>
                        </div>
                    <!-- End code for Options slot-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Options slot---------------->

                
        
        <!-- -------------------Second card for Object options------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Object options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Object options--------->
                   <div class="" style="max-width: 300px">
                    <div class="q-gutter-md">
                    <q-badge color="secondary" multi-line>
                        Model: "{{ model3 }}"
                    </q-badge>

                    <q-select
                        filled
                        v-model="model3"
                        :options="options3"
                        label="Multi with toggle"
                        multiple
                        emit-value
                        map-options
                    >
                        <template v-slot:option="scope">
                        <q-item
                            v-bind="scope.itemProps"
                            v-on="scope.itemEvents"
                        >
                            <q-item-section>
                            <q-item-label v-html="scope.opt.label" ></q-item-label>
                            </q-item-section>
                            <q-item-section side>
                            <q-toggle v-model="model3" :val="scope.opt.value" />
                            </q-item-section>
                        </q-item>
                        </template>
                    </q-select>
                    </div>
                </div>
                    <!--=====End code for Object options------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Object options------------------>

         <!-- -------------------third card for No options slot--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">No options slot</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for No options slot-->
                    <div class="" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-select
                            filled
                            v-model="model4"
                            :options="options4"
                            label="No options"
                        >
                            <template v-slot:no-option>
                            <q-item>
                                <q-item-section class="text-italic text-grey">
                                No options slot
                                </q-item-section>
                            </q-item>
                            </template>
                        </q-select>
                        </div>
                    </div>
                    <!-- End code for No options slot-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for No options slot-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Eight card Row--------------------------------------->  


   
   
   <!-- -----------------------------------Nine card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Lazy loading</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card forLazy load options------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Lazy load options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Lazy load options-->
                        <div class="">
                            <div class="q-gutter-md row items-start">
                            <q-select
                                filled
                                v-model="model"
                                use-chips
                                label="Lazy load opts"
                                :options="options"
                                @filter="filterFn"
                                @filter-abort="abortFilterFn"
                                style="width: 250px"
                            >
                                <template v-slot:no-option>
                                <q-item>
                                    <q-item-section class="text-grey">
                                    No results
                                    </q-item-section>
                                </q-item>
                                </template>
                            </q-select>

                            <q-btn
                                v-if="options"
                                label="Reset"
                                color="primary"
                                @click="options = null"
                            />
                            </div>
                        </div>
                    <!-- End code for Lazy load options-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card forLazy load options---------------->

                
        
        <!-- -------------------Second card for Dynamic loading options------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Dynamic loading options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Dynamic loading options--------->
                    <div class="q-pa-md" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-select
                            filled
                            v-model="dynamicmodel"
                            multiple
                            :options="optionsdynamicloading"
                            :loading="loading"
                            @virtual-scroll="onScroll"
                        />
                        </div>
                    </div>
                    <!--=====End code for Dynamic loading options------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Dynamic loading options------------------>

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Nine card Row--------------------------------------->  


   
   <!-- -----------------------------------Ten card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Cover mode</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Menu covering component------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Menu covering component</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Menu covering component-->
                        <div class="" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-select
                            filled
                            v-model="model"
                            :options="optionscustomdesign"
                            options-cover
                            stack-label
                            label="Standard"
                        />
                        </div>
                    </div>
                    <!-- End code for   Menu covering component-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for  Menu covering component---------------->

                
        
          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Ten card Row--------------------------------------->  


      
   <!-- -----------------------------------Eleven card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">The display value</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Custom display value------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Custom display value</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Custom display value-->
                    <div class="" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-badge color="secondary" multi-line>
                            Model: "{{ model }}"
                        </q-badge>

                        <q-select
                            filled
                            v-model="model"
                            :options="optionscustomdesign"
                            stack-label
                            label="Standard"
                            :display-value="`Company: ${model ? model : '*none*'}`"
                        >
                            <template v-slot:append>
                            <q-icon
                                v-if="model !== null"
                                class="cursor-pointer"
                                name="clear"
                                @click.stop="model = null"
                            />
                            </template>
                        </q-select>
                        </div>
                    </div>
                    <!-- End code for Custom display value-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Custom display value---------------->

                
        
        <!-- -------------------Second card for Chips as display value------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Chips as display value</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Chips as display value--------->
                    <div class="">
                        <div class="q-gutter-md row items-start">
                        <div style="min-width: 250px; max-width: 300px">
                            <q-badge color="secondary" class="q-mb-md">
                            Model: {{ modelSingle || '*none*' }}
                            </q-badge>

                            <q-select
                            filled
                            v-model="modelSingle"
                            :options="optionscustomdesign"
                            use-chips
                            stack-label
                            label="Single selection"
                            />
                        </div>

                        <div style="min-width: 250px; max-width: 300px">
                            <q-badge color="secondary" class="q-mb-md">
                            Model: {{ modelMultiple || '[]' }}
                            </q-badge>

                            <q-select
                            filled
                            v-model="modelMultiple"
                            multiple
                            :options="optionscustomdesign"
                            use-chips
                            stack-label
                            label="Multiple selection"
                            />
                        </div>
                        </div>
                    </div>
                    <!--=====End code for Chips as display value------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Chips as display value------------------>

         <!-- -------------------third card for Selected-item slot--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Selected-item slot</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Selected-item slot-->
                    <div class="" style="max-width: 300px">
                        <div class="q-gutter-md">
                        <q-badge color="secondary" multi-line>
                            Model: "{{ model }}"
                        </q-badge>

                        <q-select
                            filled
                            v-model="model"
                            :options="options2"
                            stack-label
                            label="Standard"
                        >
                            <template v-slot:selected>
                            Company:
                            <q-chip
                                v-if="model"
                                dense
                                square
                                color="white"
                                text-color="primary"
                                class="q-my-none q-ml-xs q-mr-none"
                            >
                                <q-avatar color="primary" text-color="white" :icon="model.icon" />
                                {{ model.label }}
                            </q-chip>
                            <q-badge v-else>*none*</q-badge>
                            </template>
                        </q-select>

                        <q-select
                            filled
                            v-model="model"
                            :options="options2"
                            stack-label
                            label="Standard"
                            color="secondary"
                        >
                            <template v-slot:selected-item="scope">
                            <q-chip
                                removable
                                dense
                                @remove="scope.removeAtIndex(scope.index)"
                                :tabindex="scope.tabindex"
                                color="white"
                                text-color="secondary"
                                class="q-ma-none"
                            >
                                <q-avatar color="secondary" text-color="white" :icon="scope.opt.icon" />
                                {{ scope.opt.label }}
                            </q-chip>
                            </template>
                        </q-select>
                        </div>
                    </div>
                    <!-- End code for Selected-item slot-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Selected-item slot-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Eleven card Row--------------------------------------->  


         
   <!-- -----------------------------------twoel card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Filtering and autocomplete</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Filtering options------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Filtering options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Filtering options-->
                       <filtercomponents/>
                    <!-- End code for Filtering options-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Filtering options---------------->

                
        
        <!-- -------------------Second card for Basic filtering------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Basic filtering</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Basic filtering--------->
                   <basicfiltercomponents/>
                    <!--=====End code for Basic filtering------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Basic filtering------------------>

         <!-- -------------------third card for Filtering on more than 2 chars--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Filtering on more than 2 chars</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Filtering on more than 2 charst-->
                      <morethanfiltercomponents/>
                    <!-- End code for Filtering on more than 2 chars-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Filtering on more than 2 chars-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End twoel card Row--------------------------------------->  


        
   <!-- -----------------------------------thirteen card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Filtering and autocomplete</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Text autocomplete------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Text autocomplete</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Text autocomplete-->
                       <autocompletefiltercomponents/>
                    <!-- End code for Text autocomplete-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Text autocomplete---------------->

                
        
        <!-- -------------------Second card for Lazy filtering------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Lazy filtering</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Lazy filtering--------->
                   <lazyfilteringcomponents/>
                    <!--=====End code for Lazy filtering------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Lazy filtering------------------>

         <!-- -------------------third card for Selecting option after filtering--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Selecting option after filtering</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for FSelecting option after filtering-->
                      <selectfilteringcomponents/>
                    <!-- End code for Selecting option after filtering-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Selecting option after filtering-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End thirteen card Row--------------------------------------->  



        
   <!-- -----------------------------------Fourteen card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Create new values</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Text autocomplete------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">New value mode</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Text autocomplete-->
                       <newvaluemodecomponents/>
                    <!-- End code for Text autocomplete-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Text autocomplete---------------->

                
        
        <!-- -------------------Second card for Lazy filtering------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Listening on @new-value</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Lazy filtering--------->
                   <listeningnewvaluecomponents/>
                    <!--=====End code for Lazy filtering------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Lazy filtering------------------>

         <!-- -------------------third card for Selecting option after filtering--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">adding only unique values</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for FSelecting option after filtering-->
                      <addingonlyuniquevaluescomponents/>
                    <!-- End code for Selecting option after filtering-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Selecting option after filtering-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Fourteen card Row--------------------------------------->  



        
   <!-- -----------------------------------fifteen card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Using menu and filtering</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Filtering and adding to menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Filtering and adding to menu</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Filtering and adding to menu-->
                       <filteringandaddingtomenucomponents/>
                    <!-- End code for Filtering and adding to menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Text autocomplete---------------->

                
        
        <!-- -------------------Second card for Lazy filtering------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">filtering without adding to menu</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Lazy filtering--------->
                   <filteringwithoutaddingtomenucomponents/>
                    <!--=====End code for Lazy filtering------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Lazy filtering------------------>

         <!-- -------------------third card for Selecting option after filtering--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Generating multiple values</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for FSelecting option after filtering-->
                      <generatingmultiplevaluescomponents/>
                    <!-- End code for Selecting option after filtering-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Selecting option after filtering-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Fifteen card Row--------------------------------------->  


   
        
   <!-- -----------------------------------Sixteen card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Sanitization</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Filtering and adding to menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Sanitize options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Filtering and adding to menu-->
                       <sanitizeoptionscomponents/>
                    <!-- End code for Filtering and adding to menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Text autocomplete---------------->

                
        
        <!-- -------------------Second card for Lazy filtering------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Sanitize display value</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Lazy filtering--------->
                  <sanitizedisplayvaluecomponents/>
                    <!--=====End code for Lazy filtering------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Lazy filtering------------------>

        

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Sixteen card Row--------------------------------------->  


      <!-- -----------------------------------Seventeen card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Render performance</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Filtering and adding to menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Sanitize options</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Filtering and adding to menu-->
                       <renderperformancecomponents/>
                    <!-- End code for Filtering and adding to menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Text autocomplete---------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Seventeen card Row--------------------------------------->  


     <!-- -----------------------------------Eight card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Native form submit </div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Filtering and adding to menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Native form</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Filtering and adding to menu-->
                       <formsubmitcomponents/>
                    <!-- End code for Filtering and adding to menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Text autocomplete---------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Eight card Row--------------------------------------->  
  </q-page>
</template>

<script>

   import filtercomponents  from 'components/Form/Select/FiltersComponents/filters.vue';
   import basicfiltercomponents    from 'components/Form/Select/FiltersComponents/basicFilter.vue';
   import morethanfiltercomponents from 'components/Form/Select/FiltersComponents/filteringmorethan2char.vue' ;
   import autocompletefiltercomponents    from 'components/Form/Select/FiltersComponents/autocomplete.vue';
   import lazyfilteringcomponents    from 'components/Form/Select/FiltersComponents/Lazyfiltering.vue';
   import selectfilteringcomponents  from 'components/Form/Select/FiltersComponents/Selectingoptionafterfiltering.vue';
   import newvaluemodecomponents    from 'components/Form/Select/createnewvalue/newvaluemode.vue';
   import listeningnewvaluecomponents    from 'components/Form/Select/createnewvalue/listeningnewvalue.vue';
   import addingonlyuniquevaluescomponents    from 'components/Form/Select/createnewvalue/addingonlyuniquevalues.vue';
   import filteringandaddingtomenucomponents    from 'components/Form/Select/menuFilter/filteringandaddingtomenu.vue';
   import filteringwithoutaddingtomenucomponents  from 'components/Form/Select/menuFilter/filteringwithoutaddingtomenu.vue';
   import generatingmultiplevaluescomponents from 'components/Form/Select/menuFilter/generatingmultiplevalues.vue';
   import  sanitizeoptionscomponents    from 'components/Form/Select/Sanitize/sanitizeoptions.vue';
    import sanitizedisplayvaluecomponents from 'components/Form/Select/Sanitize/sanitizedisplayvalue.vue';
   import renderperformancecomponents from 'components/Form/Select/Renderperformance/Renderperformance.vue';
  import formsubmitcomponents from 'components/Form/Select/Nativeformsubmit/formsubmit.vue';
const optionsdynamicloading = []
for (let i = 0; i <= 100000; i++) {
  optionsdynamicloading.push('Opt ' + i)
}

const pageSize = 50
const nextPage = 2
const lastPage = Math.ceil(optionsdynamicloading.length / pageSize)
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
export default {
  data() {
    return {
         modelSingle: 'Apple',
      modelMultiple: [ 'Facebook' ],
        dynamicmodel:null,
      isshowprop: true,
       model4: null,
      options4: [],
       model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ], 
       optionscustomdesign: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ], 
      optionsfilter: stringOptions,
       designoverviewmodel: null,
       Decoratorsmodel: null,
       Coloringmodel: null,
       Clearablemodel: null,
       menutmodel: null,
       showmenumodel: null,
      dense: false,
      denseOpts: false,
      model1: 'Google',
      stringOptions,
      options: stringOptions,
      single: null,
      multiple: null,
      m1: null,
      m2: null,
    stringoptionmodel: null,
    objectmodel: null,
      options: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          category: '1'
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          category: '1'
        },
        {
          label: 'Twitter',
          value: 'Twitter',
          description: 'Quick updates',
          category: '2'
        },
        {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          category: '2'
        },
        {
          label: 'Oracle',
          value: 'Oracle',
          disable: true,
          description: 'Databases',
          category: '3'
        }
      ],
      options1: [
        {
          id: 'goog',
          desc: 'Google'
        },
        {
          id: 'fb',
          desc: 'Facebook'
        },
        {
          id: 'twt',
          desc: 'Twitter'
        },
        {
          id: 'app',
          desc: 'Apple'
        },
        {
          id: 'ora',
          desc: 'Oracle',
          inactive: true
        }
      ],
      cmodel:null,
    optionslotmodel: null,
      options2: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          icon: 'mail'
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          icon: 'bluetooth'
        },
        {
          label: 'Twitter',
          value: 'Twitter',
          description: 'Quick updates',
          icon: 'map'
        },
        {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          icon: 'golf_course'
        },
        {
          label: 'Oracle',
          value: 'Oracle',
          disable: true,
          description: 'Databases',
          icon: 'casino'
        }
      ],
       model3: [],
      options3: [
        {
          label: 'Google',
          value: 1
        },
        {
          label: 'Facebook',
          value: 2
        },
        {
          label: 'Twitter',
          value: 3
        },
        {
          label: 'Apple',
          value: 4
        },
        {
          label: 'Oracle',
          value: 5
        }
      ],
       loading: false,

      nextPage,
     
    };
  },
  computed: {
    optionsdynamicloading () {
      return Object.freeze(optionsdynamicloading.slice(0, pageSize * (this.nextPage - 1)))
    }
  },
  methods: {
        onScroll ({ to, ref }) {
      const lastIndex = this.optionsdynamicloading.length - 1

      if (this.loading !== true && this.nextPage < lastPage && to === lastIndex) {
        this.loading = true

        setTimeout(() => {
          this.nextPage++
          this.$nextTick(() => {
            ref.refresh()
            this.loading = false
          })
        }, 500)
      }
    },
    closefun() {
      this.isshowprop = false;
  },
  filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
     filterFn (val, update, abort) {
      if (this.options !== null) {
        // already loaded
        update()
        return
      }

      setTimeout(() => {
        update(() => {
          this.options = stringOptions
        })
      }, 2000)
    },

    abortFilterFn () {
      // console.log('delayed filter aborted')
    }
 },
 components:{

    filtercomponents,
    basicfiltercomponents,
    morethanfiltercomponents,
    autocompletefiltercomponents,
    lazyfilteringcomponents,
    selectfilteringcomponents,
    newvaluemodecomponents,
    listeningnewvaluecomponents,
    addingonlyuniquevaluescomponents,
    filteringandaddingtomenucomponents,
    filteringwithoutaddingtomenucomponents,
    generatingmultiplevaluescomponents,
     sanitizeoptionscomponents,
     sanitizedisplayvaluecomponents,
    renderperformancecomponents,
    formsubmitcomponents,
    // 'filtercomponents':require('components/Form/Select/FiltersComponents/filters.vue').default,
    // 'basicfiltercomponents':require('components/Form/Select/FiltersComponents/basicfilter.vue').default,
    // 'morethanfiltercomponents':require('components/Form/Select/FiltersComponents/filteringmorethan2char.vue').default,  
    // 'autocompletefiltercomponents':require('components/Form/Select/FiltersComponents/autocomplete.vue').default,
    // 'lazyfilteringcomponents':require('components/Form/Select/FiltersComponents/Lazyfiltering.vue').default,
    // 'selectfilteringcomponents':require('components/Form/Select/FiltersComponents/Selectingoptionafterfiltering.vue').default,
    // 'newvaluemodecomponents':require('components/Form/Select/createnewvalue/newvaluemode.vue').default,
    // 'listeningnewvaluecomponents':require('components/Form/Select/createnewvalue/listeningnewvalue.vue').default,
    // 'addingonlyuniquevaluescomponents':require('components/Form/Select/createnewvalue/addingonlyuniquevalues.vue').default,
    // 'filteringandaddingtomenucomponents':require('components/Form/Select/menuFilter/filteringandaddingtomenu.vue').default,
    // 'filteringwithoutaddingtomenucomponents':require('components/Form/Select/menuFilter/filteringwithoutaddingtomenu.vue').default,
    // 'generatingmultiplevaluescomponents':require('components/Form/Select/menuFilter/generatingmultiplevalues.vue').default,
    //  'sanitizeoptionscomponents':require('components/Form/Select/Sanitize/sanitizeoptions.vue').default,
    //  'sanitizedisplayvaluecomponents':require('components/Form/Select/Sanitize/sanitizedisplayvalue.vue').default,
    // 'renderperformancecomponents':require('components/Form/Select/Renderperformance/Renderperformance.vue').default,
    // 'formsubmitcomponents':require('components/Form/Select/Nativeformsubmit/formsubmit.vue').default,
    

 }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
.my-card1{
  width: 100%;
  max-width: 300px;
}
</style>
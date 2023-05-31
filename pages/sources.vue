<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
                <h2 class="text-2xl leading-7 font-semibold">
                  Sources
                </h2>
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                    <template v-for="value in data.sources">
                        <div>
                           <p> {{ value.sourceName}}</p>
                            <p>{{ value.sourceDefinition.sourceName}}</p>
                            <p>{{ value.sourceDefinition.category}}</p>
                            <p>{{ value.writeKey}}</p>
                            <input type="checkbox" id="checkbox" v-model="value.enabled" /> Enabled

                        </div>
                        <div>
                            <template v-for="destination in value.destinations">
                            <div>
                                <p>{{ destination.Name}}</p>
                                <p>{{ destination.DestinationDefinition.DisplayName}}</p>
                                <p>{{ destination.enabled}}</p>
<!--                                <div>-->
<!--                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>-->
<!--                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder=" {{ destination.DestinationDefinition.Config.endpoint }}" required>-->
<!--                                </div>-->
<p>
                                <textarea v-model="destination.DestinationDefinition.Config.endpoint" class="block p-1.5 w-full text-sm  rounded-lg border focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</p>


                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Field
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Rename
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Enabled
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <template v-for="(key, val) in destination.Transformations.Config">
                                            <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {{ val }}
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ key}}
                                            </td>
                                          <td></td>
                                            </tr>
                                        </template>


                                        </tbody>
                                    </table>
                                </div>


                            </div>
                            </template>
                        </div>


                    </template>

                </div>


                <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
                    Content here!
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch('http://127.0.0.1:8088/config',)

console.log("data", data)
</script>

<style scoped>

</style>
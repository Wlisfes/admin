/*
 * @Author: 情雨随风 
 * @Date: 2019-03-15 22:31:02 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-19 17:13:30
 * @Types 草稿箱
 */


<template>
    <div>
        <highlight-code lang="javascript" class="atom-one-dark">
            {{html}}
		</highlight-code>
        <highlight-code auto>
			let map;
			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: -34.397, lng: 150.644},
					zoom: 8
				});
			}
            
		</highlight-code>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            html: `
                router.get('/tubok/get', async(ctx) => {
                    let res = await Tubok.find({ draft: false })

                    ctx.body = {
                        code: 200,
                        data: res,

                        message: 'ok'
                    }
                })
            `
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>


<template>
<div class="button-box">
	<div>
		<vt-button>默认按钮</vt-button>
		<vt-button type="primary">主要按钮</vt-button>
		<vt-button type="success">成功按钮</vt-button>
		<vt-button type="warning">警告按钮</vt-button>
		<vt-button type="danger">危险按钮</vt-button>
		<vt-button type="dashed">虚线按钮</vt-button>
		<vt-button type="text">文字按钮</vt-button>
	</div>
	<div>
		<vt-button disabled>默认按钮</vt-button>
		<vt-button disabled type="primary">主要按钮</vt-button>
		<vt-button disabled type="success">成功按钮</vt-button>
		<vt-button disabled type="warning">警告按钮</vt-button>
		<vt-button disabled type="danger">危险按钮</vt-button>
		<vt-button disabled type="dashed">虚线按钮</vt-button>
		<vt-button disabled type="text">文字按钮</vt-button>
	</div>
	<div>
		<vt-button round>默认按钮</vt-button>
		<vt-button round type="primary">主要按钮</vt-button>
		<vt-button round type="success">成功按钮</vt-button>
		<vt-button round type="warning">警告按钮</vt-button>
		<vt-button round type="danger">危险按钮</vt-button>
		<vt-button round type="dashed">虚线按钮</vt-button>
	</div>
	<div>
		<vt-button circle><i class="iconfont icon-shangchuan"></i></vt-button>
		<vt-button circle type="primary"><i class="iconfont icon-shangchuan"></i></vt-button>
		<vt-button circle type="success"><i class="iconfont icon-shangchuan"></i></vt-button>
		<vt-button circle type="warning"><i class="iconfont icon-shangchuan"></i></vt-button>
		<vt-button circle type="danger"><i class="iconfont icon-shangchuan"></i></vt-button>
		<vt-button circle type="dashed"><i class="iconfont icon-shangchuan"></i></vt-button>
	</div>
	<div style="background:#999;">
		<vt-button ghost>默认按钮</vt-button>
		<vt-button ghost type="primary">主要按钮</vt-button>
		<vt-button ghost type="success">成功按钮</vt-button>
		<vt-button ghost type="warning">警告按钮</vt-button>
		<vt-button ghost type="danger">危险按钮</vt-button>
		<vt-button ghost type="dashed">虚线按钮</vt-button>
		<vt-button ghost type="text">文字按钮</vt-button>
	</div>
	<div style="background:#999;">
		<vt-button ghost disabled>默认按钮</vt-button>
		<vt-button ghost disabled type="primary">主要按钮</vt-button>
		<vt-button ghost disabled type="success">成功按钮</vt-button>
		<vt-button ghost disabled type="warning">警告按钮</vt-button>
		<vt-button ghost disabled type="danger">危险按钮</vt-button>
		<vt-button ghost disabled type="dashed">虚线按钮</vt-button>
		<vt-button ghost disabled type="text">文字按钮</vt-button>
	</div>
</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.button-box {
    > div {
        padding: 20px;
        > button {
            margin: 0 20px;
        }
    }
}
</style>

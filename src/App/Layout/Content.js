import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
// import DataDownload from 'src/pages/Datas/Download';
// import DataTasks from 'src/pages/Datas/Tasks';
// import DataWave from 'src/pages/Datas/Wave';
// import SapmleTags from 'src/pages/Datas/SampleTags';
// import RegionTags from 'src/pages/Datas/RegionTags';

// import Upload from 'src/pages/Tools/Upload';

// import StandardPublish from 'src/pages/Standard/Publish';
// import StandardCategories from 'src/pages/Standard/Categories';
// import StandardCors from 'src/pages/Standard/Cors';
// import StandardDers from 'src/pages/Standard/Ders';
// import StandardEnas from 'src/pages/Standard/Enas';

// import WorkSpace from 'src/pages/Algorithm/WorkSpace';

const { Content } = Layout;

const AntContent = ({ services }) => {
  return (
    <Content id="content">
      <Switch>
        {/* <Route exact path="/app/data/satellite-download" component={DataDownload}></Route>
        <Route exact path="/app/data/satellite-tasks" component={DataTasks}></Route>
        <Route exact path="/app/data/tag-regions" component={RegionTags}></Route>
        <Route exact path="/app/data/tag-samples" component={SapmleTags}></Route>
        <Route exact path="/app/data-wave" component={DataWave}></Route>

        <Route exact path="/app/tools-upload" component={Upload}></Route>

        <Route exact path="/app/standard-publish" component={StandardPublish}></Route>
        <Route exact path="/app/standard-publish" component={StandardPublish} />
        <Route exact path="/app/standard-categories" component={StandardCategories} />
        <Route exact path="/app/standard-cors" component={StandardCors} />
        <Route exact path="/app/standard-ders" component={StandardDers} />
        <Route exact path="/app/standard-enas" component={StandardEnas} />

        <Route exact path="/app/algorithm-space" component={WorkSpace} />
        <Redirect to="/app/data/satellite-download" /> */}
      </Switch>
    </Content>
  );
};

export default AntContent;

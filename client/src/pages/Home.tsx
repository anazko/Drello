import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IWorkspace } from "../models/workspace"
import { RootState } from "../store"
import { workspaceActionCreators } from "../store/reducers/workspace/actionCreators"

const Home: React.FC = () => {

  const dispatch = useDispatch()
  const workspaces: IWorkspace[] = useSelector((store: RootState) => store.workspaceReducer.workspaces)

  useEffect(() => {
    dispatch(workspaceActionCreators.fetchWorkspaces())
  }, [dispatch])
  
  if (!workspaces) return <div>No workspaces</div>

  return (
    <Layout className="site-layout-background" style={{ padding: '24px 0' }} hasSider={true}>
      <Sider className="site-layout-background" width={200}>
        SIDER
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        CONTENT
      </Content>
    </Layout>
  )
}

export default Home
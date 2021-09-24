import { Layout, Row } from "antd"
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
    <Layout>
      <Row justify="center" align="middle" className="h100">
        WORKSPACES
      {
        workspaces.map( ({id, title}) => (
          <div key={id}>
            {title}
          </div>
        ))
      }
      </Row>
    </Layout>
  )
}

export default Home
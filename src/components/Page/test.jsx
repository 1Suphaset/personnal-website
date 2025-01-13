import React from 'react'
import ProjectDetail from "../component/Project-detail"
import ProjectHead from '../component/ProjectHead'
import ProjectSub from '../component/ProjectSub'
import ProjectGall from '../component/projectGall'


function Test() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0', padding: '0' }}>
      <div
        style={{
          width: '100%',
          height: '25rem',
          position: 'relative', // ตำแหน่งปกติ
          top: '0', // ชิดขอบด้านบน
          margin: '0', // เอา Margin ออกถ้ามี
          padding: '0', // เอา Padding ออกถ้ามี
        }}
      >
        <ProjectHead />
      </div>
      <ProjectSub />
      <ProjectDetail />
      <ProjectGall />
    </div>
  )
}

export default Test